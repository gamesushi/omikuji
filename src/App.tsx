import { useEffect, useMemo, useRef, useState } from 'react'
import { Share } from '@capacitor/share'
import { Clipboard } from '@capacitor/clipboard'

function App() {
  const w = window as any
  const [state, setState] = useState<'home' | 'card' | 'text'>('home')
  const [lang, setLang] = useState<string>('chs')
  const [cardId, setCardId] = useState<number>(0)
  const [cardFront, setCardFront] = useState<boolean>(true)
  const [flipDir, setFlipDir] = useState<string | null>(null)

  const [homeEnter, setHomeEnter] = useState<boolean>(true)
  const [textReveal, setTextReveal] = useState<boolean>(false)
  const [homeFill, setHomeFill] = useState<boolean>(false)
  const [sprites, setSprites] = useState<Array<{ left: number; top: number; rot: number; delay: number }>>([])
  const [shareOpen, setShareOpen] = useState<boolean>(false)
  const langMenuRef = useRef<HTMLDivElement | null>(null)

  const t = useMemo(() => {
    const tr = w.translations || {}
    return tr[lang] || { title: '浅草寺观音签', buttons: {}, sections: {}, pleaseSelect: '请选择...', fortune: '第 {0} 签' }
  }, [lang, w.translations])

  const buildPicker = (tr: any) => {
    const picker = document.getElementById('manualPicker') as HTMLSelectElement | null
    if (!picker) return
    picker.innerHTML = ''
    const opt = document.createElement('option')
    opt.value = ''
    opt.disabled = true
    opt.text = tr?.pleaseSelect || '请选择...'
    picker.appendChild(opt)
    for (let g = 0; g < 10; g++) {
      const start = g * 10 + 1
      const end = g * 10 + 10
      const og = document.createElement('optgroup')
      og.label = `${start}–${end}`
      for (let i = start; i <= end; i++) {
        const o = document.createElement('option')
        o.value = String(i - 1)
        o.text = (tr?.fortune || '第 {0} 签').replace('{0}', String(i))
        og.appendChild(o)
      }
      picker.appendChild(og)
    }
  }

  const cardUrl = useMemo(() => {
    if (!cardId) return ''
    const folder = cardFront ? 'front' : 'back'
    return `/images/cards/${folder}/${cardId}.jpg`
  }, [cardId, cardFront])

  useEffect(() => {
    document.body.setAttribute('data-state', state)
    document.body.setAttribute('data-lang', lang)
    if (state === 'home') {
      setHomeEnter(true)
      requestAnimationFrame(() => setHomeEnter(false))
      setHomeFill(true)
      buildPicker(t)
      const arr: Array<{ left: number; top: number; rot: number; delay: number }> = []
      const total = 200
      for (let i = 0; i < total; i++) {
        let l = 0, t = 0, r = 0
        if (i < total * 0.5) {
          l = Math.floor(Math.random() * 110) - 20
          t = Math.floor(Math.random() * 110) - 20
          r = Math.random() * 720 - 360
        } else if (i < total * 0.9) {
          l = Math.floor(Math.random() * 90)
          t = Math.floor(Math.random() * 90)
          r = Math.random() * 720 - 360
        } else {
          l = Math.floor(Math.random() * (60 - 20)) + 20
          t = Math.floor(Math.random() * (60 - 20)) + 20
          r = Math.random() * 180 - 90
        }
        arr.push({ left: l, top: t, rot: r, delay: 80 * i })
      }
      setSprites(arr)
    } else {
      setSprites([])
    }
  }, [state, lang])

  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    const d = navigator.language.toLowerCase()
    let def = 'chs'
    if (d.startsWith('en')) def = 'eng'
    else if (d.startsWith('ja')) def = 'jpn'
    else if (d.startsWith('ko')) def = 'kor'
    else if (d.startsWith('fr')) def = 'fra'
    else if (d.startsWith('es')) def = 'spa'
    else if (d.startsWith('pt')) def = 'por'
    else if (d.startsWith('ru')) def = 'rus'
    setLang(savedLang || def)
    const savedId = Number(localStorage.getItem('id') || '0')
    if (savedId) {
      setCardId(savedId)
    }

    buildPicker(t)
    const onDocClick = (e: MouseEvent) => {
      const btn = document.getElementById('langBtn')
      const menu = langMenuRef.current
      if (!btn || !menu) return
      if (menu.style.display === 'block' && !btn.contains(e.target as Node) && !menu.contains(e.target as Node)) {
        menu.style.display = 'none'
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const drawDaily = () => {
    const id = Math.floor(Math.random() * 100) + 1
    setCardId(id)
    setCardFront(true)
    setState('card')
    try {
      localStorage.setItem('id', String(id))
      localStorage.setItem('date', new Date().toISOString().substring(0, 10))
    } catch {}
  }

  const decode = () => {
    if (!cardId) return
    setState('text')
    setTextReveal(true)
  }

  const back = () => {
    setState('card')
  }

  const redraw = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    try { localStorage.removeItem('redraw') } catch {}
    setState('home')
  }

  const share = async () => {
    try {
      // 使用Capacitor Share插件
      await Share.share({
        title: t.title,
        url: location.href,
        dialogTitle: t.buttons?.share || '分享结果'
      })
    } catch (error) {
      // 如果Capacitor分享失败，回退到Web Share API或模态框
      try {
        if ((navigator as any).share) {
          await (navigator as any).share({ title: t.title, url: location.href })
          return
        }
        setShareOpen(true)
      } catch {}
    }
  }

  const toggleCard = () => {
    if (!cardId) return
    setCardFront((prev) => {
      const next = !prev
      setFlipDir(next ? 'flip-front' : 'flip-back')
      return next
    })
  }

  const selectManual = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = Number(e.target.value)
    setCardId(v + 1)
    setCardFront(true)
    setState('card')
  }

  const openLangMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const menu = langMenuRef.current
    if (!menu) return
    const visible = menu.style.display === 'block'
    menu.style.display = visible ? 'none' : 'block'
  }

  const chooseLang = (l: string) => {
    setLang(l)
    localStorage.setItem('language', l)
    const tr = (w.translations || {})[l] || t
    buildPicker(tr)
    const menu = langMenuRef.current
    if (menu) menu.style.display = 'none'
  }

  const signHtml = useMemo(() => {
    if (!cardId || !w.info) return ''
    const v = w.info[cardId - 1]
    const po = String(v.签诗 || '').trim().split('\n').map((line: string) => `<div class="poem-line">${line}</div>`).join('')
    const trans = lang === 'eng' && w.engTranslations && w.engTranslations[v.编号]?.meaning
      ? w.engTranslations[v.编号].meaning.trim().replace(/\n/g, '<br>')
      : lang === 'jpn' && w.jpnTranslations && (w.jpnTranslations[v.编号]?.meaning || v.翻译)
        ? (w.jpnTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
        : lang === 'kor' && w.korTranslations && (w.korTranslations[v.编号]?.meaning || v.翻译)
          ? (w.korTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
      : lang === 'fra' && w.fraTranslations && (w.fraTranslations[v.编号]?.meaning || v.翻译)
        ? (w.fraTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
      : lang === 'spa' && w.spaTranslations && (w.spaTranslations[v.编号]?.meaning || v.翻译)
        ? (w.spaTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
      : lang === 'por' && w.porTranslations && (w.porTranslations[v.编号]?.meaning || v.翻译)
        ? (w.porTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
      : lang === 'rus' && w.rusTranslations && (w.rusTranslations[v.编号]?.meaning || v.翻译)
        ? (w.rusTranslations[v.编号]?.meaning || v.翻译).trim().replace(/\n/g, '<br>')
        : String(v.翻译 || '').trim().replace(/\n/g, '<br>')
    const pred = lang === 'eng' && w.engTranslations && w.engTranslations[v.编号]?.prediction
      ? w.engTranslations[v.编号].prediction.trim().replace(/\n/g, '<br>')
      : lang === 'jpn' && w.jpnTranslations && (w.jpnTranslations[v.编号]?.prediction || v.签文解读)
        ? (w.jpnTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
        : lang === 'kor' && w.korTranslations && (w.korTranslations[v.编号]?.prediction || v.签文解读)
          ? (w.korTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
      : lang === 'fra' && w.fraTranslations && (w.fraTranslations[v.编号]?.prediction || v.签文解读)
        ? (w.fraTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
      : lang === 'spa' && w.spaTranslations && (w.spaTranslations[v.编号]?.prediction || v.签文解读)
        ? (w.spaTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
      : lang === 'por' && w.porTranslations && (w.porTranslations[v.编号]?.prediction || v.签文解读)
        ? (w.porTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
      : lang === 'rus' && w.rusTranslations && (w.rusTranslations[v.编号]?.prediction || v.签文解读)
        ? (w.rusTranslations[v.编号]?.prediction || v.签文解读).trim().replace(/\n/g, '<br>')
        : String(v.签文解读 || '').trim().replace(/\n/g, '<br>')
    const luckMap: Record<string, Record<string, string>> = {
      chs: { '吉': '吉', '凶': '凶' },
      eng: { '吉': 'Good', '凶': 'Bad' },
      jpn: { '吉': '吉', '凶': '凶' },
      kor: { '吉': '길', '凶': '흉' },
      fra: { '吉': 'Bon augure', '凶': 'Mauvais augure' },
      spa: { '吉': 'Buen augurio', '凶': 'Mal augurio' },
      por: { '吉': 'Bom augúrio', '凶': 'Mau augúrio' },
      rus: { '吉': 'Удача', '凶': 'Неудача' }
    }
    const luck = (luckMap[lang] && luckMap[lang][v.吉凶]) || v.吉凶
    const header = `${t.sections?.fortune_number?.replace('{0}', v.编号) || `第${v.编号}`} ${luck}`
    const sections = [
      `<div class="sign-header">${header}</div>`,
      `<div class="sign-section"><h3>${t.sections?.poem || '签诗'}</h3><p class="poem-text">${po}</p></div>`,
      `<div class="sign-section"><h3>${t.sections?.translation || '翻译'}</h3><p>${trans}</p></div>`,
      `<div class="sign-section"><h3>${t.sections?.interpretation || '建议'}</h3><p>${pred}</p></div>`
    ]
    return sections.join('')
  }, [cardId, lang, t, w.info, w.engTranslations, w.jpnTranslations])

  return (
    <div className="bg">
      <div className="language-switch">
        <button id="langBtn" className="btn_m decorated-button lang-btn" onClick={openLangMenu}>
          <span className="btn_inner">
            <img src="/images/common/Lang.png" alt="Language" className="lang-icon" />
            <span className="arrow">▼</span>
          </span>
          <span className="corner-tr"></span>
          <span className="corner-bl"></span>
          <span className="corner-br"></span>
        </button>
        <div id="langMenu" className="lang-menu" style={{ display: 'none' }} ref={langMenuRef}>
          <a href="#" className="lang-option" onClick={() => chooseLang('chs')}>中文</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('eng')}>English</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('jpn')}>日本語</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('kor')}>한국어</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('fra')}>Français</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('spa')}>Español</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('por')}>Português</a>
          <a href="#" className="lang-option" onClick={() => chooseLang('rus')}>Русский</a>
        </div>
      </div>

      <div className="title">
        <span className="image-fill-text">浅草寺観音箋</span>
      </div>
      <div className="hr"><span></span></div>

      <div className="content">
        <div id="signTextContainer" className={`sign-text ${textReveal ? 'text-reveal' : ''}`} style={{ display: state === 'text' ? 'flex' : 'none' }} onAnimationEnd={() => setTextReveal(false)}>
          <div id="signText" dangerouslySetInnerHTML={{ __html: signHtml }}></div>
        </div>
        <div
          id="cardContainer"
          className={`card ${flipDir || ''}`}
          style={{ display: state === 'card' ? 'flex' : 'none', backgroundImage: cardUrl ? `url(${cardUrl})` : undefined }}
          onClick={toggleCard}
          onAnimationEnd={() => setFlipDir(null)}
        ></div>

        <div id="homeContainer" style={{ display: state === 'home' ? 'flex' : 'none' }}>
          <div id="box_omikuji_draw" className={`non-hover_img ${homeEnter ? 'enter' : ''}`}>
            <div className="box_omikuji_shadow"></div>
            <div className={`box_omikuji_inner ${homeFill ? 'fill' : ''}`} onAnimationEnd={() => setHomeFill(false)}>
              {sprites.map((s, i) => (
                <img
                  key={i}
                  src="/images/common/pic_omikuji.png"
                  className="pic_omikuji sprite"
                  style={{ left: `${s.left}%`, top: `${s.top}%`, transform: `rotate(${s.rot}deg)`, position: 'absolute', animationDelay: `${s.delay}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="buttons">
        {state === 'card' && (
          <>
            <div className="btn-box">
              <button id="decodeBtn" className="btn_m decorated-button decode" onClick={decode}>
                <span className="btn_inner">{t.buttons?.decode || '解读签文'}</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
            </div>
            <div className="btn-box">
              <button id="redrawBtn" className="btn_m decorated-button redraw" onClick={redraw}>
                <span className="btn_inner">{t.buttons?.redraw || '重新抽签'}</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
            </div>
          </>
        )}
        {state === 'text' && (
          <>
            <div className="btn-box">
              <button id="backBtn" className="btn_m decorated-button back" onClick={back}>
                <span className="btn_inner">{t.buttons?.back || '返回签文'}</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
            </div>
            <div className="btn-box">
              <button id="shareBtn" className="btn_m decorated-button share" onClick={share}>
                <span className="btn_inner">{t.buttons?.share || '分享结果'}</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
            </div>
          </>
        )}
        {state === 'home' && (
          <div className="buttons home-buttons" style={{ overflow: 'visible', paddingTop: '45px' }}>
            <style>{`@media (max-width: 600px) { .home-buttons { overflow: visible !important; justify-content: center !important; } .home-buttons .btn-box { width: 150px !important; min-width: 150px !important; flex: 0 0 150px !important; } }`}</style>
            <div className="pay-btn-container" style={{ position: 'relative', marginTop: '10px', marginBottom: '25px', display: 'flex', justifyContent: 'center', overflow: 'visible', zIndex: 2000 }}>
              <div 
                style={{ 
                  position: 'absolute', background: '#d32f2f', color: '#fff', padding: '3px 8px', 
                  borderRadius: '6px', fontSize: '11px', zIndex: 2000, top: '-38px', left: '50%', 
                  transform: 'translateX(-50%)', whiteSpace: 'nowrap', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  pointerEvents: 'none', fontWeight: 'bold'
                }}
              >
                {t.hints?.hint_pay}
                <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #d32f2f' }}></div>
              </div>
              <div className="btn-box" style={{ position: 'relative' }}>
                <button id="payDrawBtn" className="btn_m decorated-button pay-btn" onClick={() => window.open('https://ko-fi.com/gamesushi?amount=100', '_blank')}>
                  <span className="btn_inner">
                    <svg className="coin-icon" width="22" height="22" viewBox="0 0 100 100" style={{ verticalAlign: 'middle' }}>
                      <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="4" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                      <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">100</text>
                    </svg>
                    <span className="kaiti-text">100円</span>
                  </span>
                  <span className="corner-tr"></span>
                  <span className="corner-bl"></span>
                  <span className="corner-br"></span>
                </button>
              </div>
            </div>
            <div className="home-main-buttons">
              <div className="btn-box" style={{ position: 'relative', marginBottom: '8px', zIndex: 2000 }}>
                <div 
                  style={{ 
                    position: 'absolute', background: '#d32f2f', color: '#fff', padding: '3px 8px', 
                    borderRadius: '6px', fontSize: '11px', zIndex: 2000, top: '-32px', left: '50%', 
                    transform: 'translateX(-50%)', whiteSpace: 'nowrap', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    pointerEvents: 'none', fontWeight: 'bold'
                  }}
                >
                  {t.hints?.hint_draw}
                  <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #d32f2f' }}></div>
                </div>
                <button id="drawDailyBtn" className="btn_m decorated-button" onClick={drawDaily}>
                  <span className="btn_inner">{t.buttons?.daily || '每日抽签'}</span>
                  <span className="corner-tr"></span>
                  <span className="corner-bl"></span>
                  <span className="corner-br"></span>
                </button>
              </div>
              <div className="btn-box picker-container">
                <button id="manualPickBtn" className="btn_m decorated-button" onClick={() => (document.getElementById('manualPicker') as HTMLSelectElement | null)?.focus()}>
                  <span className="btn_inner">{t.buttons?.manual || '手动选签'}</span>
                  <span className="corner-tr"></span>
                  <span className="corner-bl"></span>
                  <span className="corner-br"></span>
                  <select id="manualPicker" className="draw-manually" defaultValue="" onChange={selectManual}>
                    <option value="" disabled>请选择...</option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footer"></div>

      {shareOpen && (
        <div className="share-modal" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#fff', borderRadius: 10, padding: 20, width: 'min(480px, 90vw)', boxShadow: '0 6px 20px rgba(0,0,0,0.2)' }}>
            <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>{t.buttons?.share || '分享结果'}</h3>
            <div style={{ marginBottom: 12, wordBreak: 'break-all' }}>
              {(() => {
                const params = new URLSearchParams()
                if (cardId) params.set('id', String(cardId))
                if (lang) params.set('lang', lang)
                const url = `${location.origin}${location.pathname}?${params.toString()}`
                return url
              })()}
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button className="btn_m decorated-button" onClick={async () => {
                const el = document.querySelector('.share-modal div:nth-child(2)') as HTMLDivElement | null
                const text = el?.textContent || ''
                try {
                  // 使用Capacitor Clipboard插件
                  await Clipboard.write({ string: text })
                } catch {
                  // 如果Capacitor失败，回退到Web Clipboard API
                  try { await navigator.clipboard.writeText(text) } catch {}
                }
              }}>
                <span className="btn_inner">复制链接</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
              <button className="btn_m decorated-button" onClick={() => setShareOpen(false)}>
                <span className="btn_inner">关闭</span>
                <span className="corner-tr"></span>
                <span className="corner-bl"></span>
                <span className="corner-br"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
