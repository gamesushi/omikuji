const porTranslations = {
  1: {
    meaning: "Como se surgisse uma estupa de joias, coisas muito boas estão para acontecer. Com visão ampla e ações retas você ganhará a confiança e o reconhecimento ao seu redor.",
    prediction: "Desejo: Muito provável que se cumpra.\nDoença: Espera-se recuperação.\nA pessoa aguardada: Vai aparecer.\nObjeto perdido: Recuperado após algum tempo.\nNova casa / mudança: Favoráveis.\nViagem: Agradável.\nCasamento / relações: Evoluem positivamente."
  },
  2: {
    meaning: "Seu desejo é forte, mas a situação atual dificulta a realização. Decisão e altruísmo trazem felicidade; coisas boas se aproximam, mantenha o otimismo.",
    prediction: "Desejo: Cumpre com perseverança.\nDoença: Recuperação tardia mas certa.\nA pessoa aguardada: Surge inesperadamente.\nObjeto perdido: Difícil de recuperar.\nNova casa / mudança: Resultados satisfatórios.\nViagem: Fluida.\nCasamento / relações: Progridem positivamente."
  },
  3: {
    meaning: "Suspiros e preocupações trazem pouco benefício. Mesmo orações podem não ser ouvidas; porém, pequenas boas ações evitam infortúnios. Tenha paciência e espere a oportunidade.",
    prediction: "Desejo: Difícil de atingir.\nDoença: Recuperação após período longo.\nObjeto perdido: Pouca chance.\nA pessoa aguardada: Aparição tardia.\nNova casa / mudança: Aceitável apesar de obstáculos.\nViagem: Adiar.\nCasamento / relações: Avançar com prudência."
  },
  4: {
    meaning: "Grande ambição, mas o reconhecimento dos superiores ainda não veio. Expresse claramente suas ideias: as coisas boas seguirão.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Recuperação lenta.\nObjeto perdido: Recuperado após algum tempo.\nA pessoa aguardada: Acaba aparecendo.\nViagem: Desafios a superar com paciência.\nNova casa / mudança / casamento / relações: Globalmente favoráveis."
  },
  5: {
    meaning: "Apesar do esforço, resultados modestos e perigos maiores que a estabilidade. Muitos obstáculos: mantenha calma e prudência.",
    prediction: "Desejo: Realização difícil.\nDoença: Recuperação árdua.\nObjeto perdido: Pouca chance.\nA pessoa aguardada: Pode não vir.\nNova casa / mudança: Adiar.\nCasamento / viagem / relações: Máxima prudência."
  },
  6: {
    meaning: "Podem ocorrer infortúnios domésticos. Com prudência e fé, você terá bons resultados; perdas materiais podem trazer ganhos espirituais.",
    prediction: "Desejo: Difícil.\nDoença: Convalescença longa.\nObjeto perdido: Pouco provável.\nA pessoa aguardada: Aparição tardia.\nNova casa / mudança: Globalmente positivo.\nViagem: De bom augúrio.\nCasamento / relações: Possíveis desafios."
  },
  7: {
    meaning: "Sem vento, o barco não avança: mesmo agindo, o progresso é árduo. A confusão leva ao impulso; viva calmo e espere.",
    prediction: "Desejo: Grandes dificuldades.\nDoença: Tratamento e recuperação complicados.\nObjeto perdido: Muito pouca chance.\nA pessoa aguardada: Pode não vir.\nNova casa / mudança: Escolha outro momento.\nCasamento / celebrações / viagem / relações: Desfavorável."
  },
  8: {
    meaning: "Não tema fracasso ou resultado; avance com dignidade. Com integridade, a verdade e a prosperidade o acompanham.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Recuperação provável; cuide dos hábitos.\nObjeto perdido: Grandes chances.\nA pessoa aguardada: Aparição esperada.\nNova casa / mudança / relações: Favoráveis.\nViagem: Evite imprudência.\nCasamento: Bom presságio."
  },
  9: {
    meaning: "Seus sonhos se cumprem e a fama se espalha. Desejos podem se realizar de uma vez; pessoas de alto cargo trarão alegria.",
    prediction: "Desejo: Muito provável.\nDoença: Recuperação esperada.\nObjeto perdido: Alta chance.\nA pessoa aguardada: Deve aparecer.\nNova casa / mudança: Positivo.\nCasamento / relações: Afortunado.\nViagem: Sem problemas."
  },
  10: {
    meaning: "Desgraças passadas desaparecem; chega a felicidade. Mire mais alto; como árvore seca que floresce na primavera, vem prosperidade.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Curável.\nObjeto perdido: Recuperado em breve.\nA pessoa aguardada: Vai aparecer.\nNova casa / mudança: Bom resultado.\nCasamento / viagem / relações: Favoráveis."
  },
  11: {
    meaning: "Felicidade e renda suficiente fazem prosperar a casa. Seu talento aparece e recebe elogios; ajuda dos superiores acompanha.",
    prediction: "Desejo: Realiza-se plenamente.\nDoença: Alta chance de cura completa.\nObjeto perdido: Recuperado logo.\nA pessoa aguardada: Aparição esperada.\nNova casa / mudança: Boa escolha.\nViagem: Sem problema.\nCasamento / relações: Resultados positivos."
  },
  12: {
    meaning: "Como salgueiros que reverdecem, a esperança retorna. Apesar das provas, não perca os esforços passados: viva honestamente.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Melhora progressiva.\nObjeto perdido: Provável recuperação.\nA pessoa aguardada: Pode tardar um pouco.\nNova casa / mudança: Bom resultado.\nViagem: Sem obstáculos.\nCasamento / relações: Oportunas e no tempo certo."
  },
  13: {
    meaning: "Quando chegar a hora, avance com coragem: o avanço e a prosperidade seguem; a constância leva ao sucesso.",
    prediction: "Desejo: Vai se realizar.\nDoença: Recuperação provável.\nObjeto perdido: Recuperado se buscar de imediato.\nA pessoa aguardada: Virá.\nNova casa / mudança: Boa escolha.\nViagem: Primavera/verão favoráveis.\nCasamento / relações: Resultados positivos."
  },
  14: {
    meaning: "Difícil distinguir verdadeiro do falso; sofrimento e tristeza lhe provam. Resista: seu desejo florescerá.",
    prediction: "Desejo: Cumpre com o tempo.\nDoença: Convalescença longa mas não fatal.\nObjeto perdido: Pouca chance.\nA pessoa aguardada: Atraso provável.\nNova casa / mudança: Momento desfavorável.\nCasamento: Prudência agora, melhor mais tarde.\nViagem / relações: Evitar por ora."
  },
  15: {
    meaning: "Isolamento e falta de liberdade; doença longa persiste. Obstáculos travam ação; a esperança pode se perder.",
    prediction: "Desejo: Muito difícil.\nDoença: Atenção ao risco.\nObjeto perdido: Muito pouca chance.\nA pessoa aguardada: Pode não vir.\nNova casa / mudança: Desaconselhado.\nViagem / casamento: Momento desfavorável."
  },
  16: {
    meaning: "Deixe desejos antigos e abrace novos: alegria e serenidade vêm com ajuda de pessoas influentes.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Recuperação fluida.\nObjeto perdido: Boas chances.\nA pessoa aguardada: Pontual.\nNova casa / mudança: Resultados positivos.\nViagem: Boa opção.\nCasamento / relações: Favoráveis."
  },
  17: {
    meaning: "Temer o estranho soma preocupações. Situações desfavoráveis podem causar separações: evite excessos e desregramento.",
    prediction: "Desejo: Difícil.\nDoença: Longa e difícil.\nObjeto perdido: Pouco provável.\nA pessoa aguardada: Pouca chance.\nNova casa / mudança: Aguardar.\nViagem: Desfavorável.\nCasamento / relações: Obstáculos."
  },
  18: {
    meaning: "Sai das trevas para a luz. Renove a mente e faça o bem: as penas se afastam, a fortuna brilha.",
    prediction: "Desejo: Realizável.\nDoença: Cura.\nObjeto perdido: Encontrado.\nA pessoa aguardada: Aparece.\nNova casa / mudança: Começar traz bom resultado.\nViagem: Agradável.\nCasamento / relações: Fase positiva."
  },
  19: {
    meaning: "Surgem espinhos nos assuntos familiares; ouça os mais velhos, mantenha a fé e o esforço sincero traz paz.",
    prediction: "Desejo: 50/50.\nDoença: Longa mas não fatal.\nObjeto perdido: Difícil.\nA pessoa aguardada: Precisa de mais tempo.\nNova casa / mudança: Misto.\nViagem: Moderação.\nCasamento: Pode decepcionar.\nRelações: Moderação."
  },
  20: {
    meaning: "A lua rompe a noite: o desejo se cumpre. Bens crescem; o que estava bloqueado melhora; prestígio e proveito aumentam.",
    prediction: "Desejo: Que se cumpra.\nDoença: Pronta recuperação.\nObjeto perdido: Recuperado.\nA pessoa aguardada: Chega.\nNova casa / mudança: Boa ideia.\nCasamento / relações: Feliz.\nViagem: Agradável."
  }
  ,
  21: {
    meaning: "Os infortúnios se lavam e a clareza volta; o que foi pedido acaba trazendo benefício e o futuro se ilumina.",
    prediction: "Desejo: Cumpre com prudência.\nDoença: Recuperação tardia mas certa.\nObjeto perdido: Reaparece.\nPessoa aguardada: Chega a tempo.\nNova casa / mudança: Favorável.\nCasamento: Boa conclusão.\nViagem / relações: Sem contratempos."
  },
  22: {
    meaning: "As nuvens se dissipam e a lua volta a brilhar. Após a chuva, tudo reverdece: as coisas melhoram.",
    prediction: "Desejo: Cumpre com atraso.\nDoença: Paciência, recuperação.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Aparece.\nNova casa / mudança: Agir.\nCasamento / viagem / relações: Favoráveis."
  },
  23: {
    meaning: "Bons presságios aparecem e suas flechas alcançam o céu. Evite vaidade; julgue com sinceridade.",
    prediction: "Desejo: Realizável com medida.\nDoença: Recuperação difícil.\nObjeto perdido: Difícil.\nPessoa aguardada: Atraso provável.\nNova casa / mudança: A considerar.\nCasamento / relações: Bem.\nViagem: Sem preocupação."
  },
  24: {
    meaning: "Evite desejos imorais e promessas vazias. Mantenha a fé e distinga o justo do injusto.",
    prediction: "Desejo: Difícil.\nDoença: Provas seguidas de recuperação.\nObjeto perdido: Recuperado no fim.\nPessoa aguardada: Pode não vir.\nNova casa / mudança: Pouco adequado.\nViagem: Obstáculos.\nCasamento / relações: Desafios."
  },
  25: {
    meaning: "Como o tronco seco na primavera, a prosperidade retorna; você encontrará pessoas de valor e obterá posição e fortuna.",
    prediction: "Desejo: Cumpre.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Chega tarde.\nNova casa / mudança: Bem.\nCasamento / viagem / relações: Boa conclusão."
  },
  26: {
    meaning: "Sua liderança ganha confiança; a ajuda coletiva permite avançar. Evite pressa inútil.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação provável.\nObjeto perdido: Reaparece.\nPessoa aguardada: Chega.\nNova casa / mudança: Possível.\nViagem: Agradável.\nCasamento / relações: Favorável."
  },
  27: {
    meaning: "Após as montanhas vêm posição e fortuna; flores vermelhas trazem alegria e nuvens escuras se dissipam.",
    prediction: "Desejo: Vai se cumprir.\nDoença: Recuperação com prudência.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Excelente resultado."
  },
  28: {
    meaning: "Impaciência não ajuda a cruzar os mares; volte ao caminho seguro para evitar desastres e ganhar paz.",
    prediction: "Desejo: Difícil.\nDoença: Higiene e constância.\nObjeto perdido: Difícil.\nPessoa aguardada: Atraso.\nNova casa / mudança: Pouco adequado.\nViagem: Riscos.\nCasamento / relações: Não recomendado."
  },
  29: {
    meaning: "Medos se dissolvem e a fama retorna; riqueza e status se aproximam; você encontra o bom superior.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Pontual.\nNova casa / mudança: Fluido.\nCasamento / relações: Favorável."
  },
  30: {
    meaning: "A garça quer pousar alto mas há muitos obstáculos; atente a perigos externos e internos.",
    prediction: "Desejo: Difícil.\nDoença: Risco presente.\nObjeto perdido: Pouca chance.\nPessoa aguardada: Pode não vir.\nNova casa / mudança: Com proteção espiritual.\nViagem: Pouco favorável.\nCasamento / relações: Autodisciplina requerida."
  },
  31: {
    meaning: "Antes que o grande peixe vire ave, mantenha calma e espere o momento; quando chegar, você voará alto.",
    prediction: "Desejo: Possível segundo o momento.\nDoença: Convalescença longa.\nObjeto perdido: Recuperado tarde.\nPessoa aguardada: Atraso.\nNova casa / mudança: Sem grande obstáculo.\nViagem: Agradável.\nCasamento / relações: Fluido."
  },
  32: {
    meaning: "Uma joia oculta na pedra: lapide seus talentos; um bom artesão os revelará e você brilhará.",
    prediction: "Desejo: Realizável.\nDoença: Longo mas não fatal.\nObjeto perdido: Reaparece.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa escolha.\nCasamento / relações: Favorável."
  },
  33: {
    meaning: "Madeira seca refloresce na primavera; após o inverno de provas, volta a boa estação; um benfeitor guia você.",
    prediction: "Desejo: Realizável.\nDoença: Melhora.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Bem.\nViagem: Agradável.\nCasamento / relações: Fluido."
  },
  34: {
    meaning: "Como o inverno cede à primavera, chega boa fortuna; ergue-se grande onda e a pescaria é farta.",
    prediction: "Desejo: Oportunidade de cumprir.\nDoença: Recuperação provável, requer tempo.\nObjeto perdido: Reaparece tarde.\nPessoa aguardada: Atraso.\nNova casa / mudança: A considerar.\nViagem: Agradável.\nCasamento / relações: Bom resultado."
  },
  35: {
    meaning: "Como a flecha atinge o cervo, ação justa leva ao sucesso; guiado por um sábio, seu brilho cresce.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação possível.\nObjeto perdido: Encontrado.\nPessoa aguardada: Pequeno atraso.\nNova casa / mudança: Sem obstáculo.\nViagem: Promissor.\nCasamento / relações: Favorável."
  },
  36: {
    meaning: "Perda precede ganho; como a lua volta cheia, esperança retorna e ilumina o lar.",
    prediction: "Desejo: Cumpre mais tarde.\nDoença: Recuperação tardia.\nObjeto perdido: Pouca chance.\nPessoa aguardada: Tarde.\nNova casa / mudança: Reconsiderar.\nViagem: Possíveis dificuldades.\nCasamento / relações: Pouco recomendado."
  },
  37: {
    meaning: "Sob nuvens, o caminho fecha e a fama tarda; quando vem a mudança, duas boas coisas acontecem de uma vez.",
    prediction: "Desejo: Requer tempo.\nDoença: Recuperação atrasada.\nObjeto perdido: Reaparece tarde.\nPessoa aguardada: Atraso.\nNova casa / mudança: Possível.\nViagem: Bem.\nCasamento / relações: Final feliz."
  },
  38: {
    meaning: "A lua brilha serena, mas nuvens e brumas turvam; separações entristecem: mude o estado da mente.",
    prediction: "Desejo: Baixa probabilidade.\nDoença: Convalescença longa.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Pode não vir.\nNova casa / mudança: Mediano.\nViagem: Evitar temporariamente.\nCasamento / relações: Reflexão necessária."
  },
  39: {
    meaning: "Desejos ficam em ideias; surgem perigos e risco de perdas maiores: prudência extrema.",
    prediction: "Desejo: Difícil.\nDoença: Pode ser grave.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Evitar.\nViagem: Desaconselhado.\nCasamento / relações: Desfavoráveis."
  },
  40: {
    meaning: "Retidão abre caminho; rejeite a duplicidade. Com coração verdadeiro, tormentos se dissipam.",
    prediction: "Desejo: Difícil de imediato.\nDoença: Melhora com o tempo.\nObjeto perdido: Reaparece.\nPessoa aguardada: Tarde.\nNova casa / mudança: Considerar positivamente.\nViagem: Bom.\nCasamento / relações: Resultado neutro."
  },
  41: {
    meaning: "Muitas aspirações, poucas realizações; reconheça meios sucessos e mantenha a fé para paz.",
    prediction: "Desejo: Requer tempo.\nDoença: Recuperação longa.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Paciência.\nNova casa / mudança: Reconsiderar.\nViagem: Possíveis dificuldades.\nCasamento / relações: Pouco satisfatório."
  },
  42: {
    meaning: "Perfume da primavera anuncia retorno da sorte; guiado por benfeitor, a lua volta a brilhar.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação próxima.\nObjeto perdido: Reaparece.\nPessoa aguardada: Pequeno atraso.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Favorável."
  },
  43: {
    meaning: "Chega a lua cheia; fortuna e posição vêm com ajuda de benfeitor; evite orgulho.",
    prediction: "Desejo: Certo.\nDoença: Recuperação tardia.\nObjeto perdido: Difícil.\nPessoa aguardada: Tarde.\nNova casa / mudança: Bem.\nViagem: Agradável.\nCasamento / relações: Final feliz."
  },
  44: {
    meaning: "Vitória depende de se adiantar; siga a via justa e ajuda celeste purifica suas bases.",
    prediction: "Desejo: Cumpre.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Tarde.\nNova casa / mudança: A considerar.\nViagem: Boa ideia.\nCasamento / relações: Favorável."
  },
  45: {
    meaning: "Confiança traz fama e riqueza; um caminho perfumado de boas relações guia à alegria.",
    prediction: "Desejo: Acaba cumprindo.\nDoença: Recuperação.\nObjeto perdido: Requer tempo.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Feliz."
  },
  46: {
    meaning: "Trovões e nuvens escuras: inquietude. Atente contratos e evite isolamento; seja humilde e prudente.",
    prediction: "Desejo: Difícil.\nDoença: Recuperação ao fim.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Suspender.\nViagem: Obstáculos.\nCasamento / relações: Desfavorável."
  },
  47: {
    meaning: "Não se apresse; o grande amadurece tarde. Ao cruzar montanhas, fortuna e posição o recebem.",
    prediction: "Desejo: Cumpre no fim.\nDoença: Recuperação longa.\nObjeto perdido: Encontrado.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa.\nViagem: Bom presságio.\nCasamento / relações: Bom desfecho."
  },
  48: {
    meaning: "Tesouro visível mas difícil de alcançar; abandone avareza e espere o bom passo com ajuda de benfeitor.",
    prediction: "Desejo: Honestidade leva à realização.\nDoença: Recuperação após atraso.\nObjeto perdido: Reaparece.\nPessoa aguardada: Tarde.\nNova casa / mudança: No início difícil, depois melhora.\nCasamento / relações / viagem: Aceitável."
  },
  49: {
    meaning: "Como a lua de meio outono, sua fortuna está no auge; mente clara e sem obstáculo.",
    prediction: "Desejo: Cumpre.\nDoença: Pode ser grave.\nObjeto perdido: Difícil.\nPessoa aguardada: Tarde.\nNova casa / mudança: Mediano.\nViagem: Bom.\nCasamento / relações: Mediano."
  },
  50: {
    meaning: "Corrija métodos e prossiga: montanhas viram caminhos; riqueza flui plenamente.",
    prediction: "Desejo: Certo.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa ideia.\nViagem: Bela viagem.\nCasamento / relações: Belo final."
  },
  51: {
    meaning: "Você trabalhou muito; ainda é tempo de esforço. Com resolução, alcançará posição e fortuna.",
    prediction: "Desejo: Cumpre a termo.\nDoença: Requer tempo.\nObjeto perdido: Difícil.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa escolha.\nViagem: Traz sorte.\nCasamento / relações: Bem."
  },
  52: {
    meaning: "Pode surgir litígio e outro problema se somar. Vigie perigos domésticos; não se lamente.",
    prediction: "Desejo: Difícil.\nDoença: Prolongada.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Pequena melhora.\nViagem: Não recomendado.\nCasamento / relações: Mediano."
  },
  53: {
    meaning: "Cessa longa aflição; autoridade concede selo. Tempo favorável traz frutos, sorte e ascensão.",
    prediction: "Desejo: Cumpre.\nDoença: Recuperação.\nObjeto perdido: Requer tempo.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Bela viagem.\nCasamento / relações: Melhora."
  },
  54: {
    meaning: "Impulsividade e confusão escurecem; roda na mão sem meta não serve. Busque harmonia e paz.",
    prediction: "Desejo: Difícil.\nDoença: Crítica.\nObjeto perdido: Difícil.\nPessoa aguardada: Não vem.\nNova casa / mudança: Reconsiderar.\nCasamento / relações: Desfavorável."
  },
  55: {
    meaning: "Nuvens se dissipam e a lua volta brilhante; apesar de obstáculos, prosperidade retorna.",
    prediction: "Desejo: Certo.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Favorável."
  },
  56: {
    meaning: "Alegria e dor alternam; preocupação precoce embranquece. Após esforço, ajuda de benfeitor traz felicidade.",
    prediction: "Desejo: Difícil.\nDoença: Recuperação atrasada.\nObjeto perdido: Reaparece.\nPessoa aguardada: Tarde.\nNova casa / mudança: Mediano.\nViagem: Melhor acompanhado.\nCasamento / relações: Mediano."
  },
  57: {
    meaning: "Rio largo e ondas fortes: espere maré calma; virá a grande captura.",
    prediction: "Desejo: Cumpre no fim.\nDoença: Recuperação tardia.\nObjeto perdido: Encontrado.\nPessoa aguardada: Tarde.\nNova casa / mudança: Boa escolha.\nViagem: Pouco fluido.\nCasamento / relações: Mediano."
  },
  58: {
    meaning: "Rota cortada por mares e rios; avançar e recuar é difícil. Atenção aos mal-intencionados.",
    prediction: "Desejo: Difícil.\nDoença: Não negligencie.\nObjeto perdido: Difícil.\nPessoa aguardada: Não vem.\nNova casa / mudança: Suspender.\nCasamento / relações / viagem: Desfavorável."
  },
  59: {
    meaning: "Coração vacila; clareza velada por nuvens. Dissipe dúvidas e recupere-se.",
    prediction: "Desejo: Difícil.\nDoença: Pode ser grave.\nObjeto perdido: Difícil.\nPessoa aguardada: Não vem.\nNova casa / mudança: Ruim.\nViagem: Dificuldades.\nCasamento / relações: Desfavoráveis."
  },
  60: {
    meaning: "Alturas são arriscadas; planície prolonga vida. Guarde a via reta para favor celeste.",
    prediction: "Desejo: Cumpre com retidão.\nDoença: Longa.\nObjeto perdido: Difícil.\nPessoa aguardada: Não vem.\nNova casa / mudança: Pouco adequado.\nViagem: Mediano.\nCasamento / relações: Mediano."
  },
  61: {
    meaning: "Tema faltas passadas e modere o lar; esforço constante traz sorte.",
    prediction: "Desejo: Baixo.\nDoença: Longa.\nObjeto perdido: Difícil.\nPessoa aguardada: Atraso.\nNova casa / mudança: Pouco adequado.\nViagem: Desfavorável.\nCasamento / relações: Desfavorável."
  },
  62: {
    meaning: "Calamidades recuam; seu nome brilha. Corrija e a fortuna floresce.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Recuperação esperada.\nObjeto perdido: Alta chance.\nPessoa aguardada: Aparece.\nNova casa / mudança: Sem problema.\nViagem: Agradável.\nCasamento / relações: Positivo."
  },
  63: {
    meaning: "Espinhos familiares e distância afetiva; sem corrigir, duram os trabalhos e riqueza se perde.",
    prediction: "Desejo: Difícil.\nDoença: Recuperação difícil.\nObjeto perdido: Baixa chance.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Momento ruim.\nViagem: Riscos.\nCasamento / relações: Mau resultado."
  },
  64: {
    meaning: "Mesmo em calma, persiste inquietude; separações podem surgir. Tenha paciência.",
    prediction: "Desejo: Difícil.\nDoença: Pode ser grave.\nObjeto perdido: Pouco provável.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Mediano.\nViagem: Mediano.\nCasamento / relações: Desfavoráveis."
  },
  65: {
    meaning: "Dor e humilhação: espere a volta da luz; então estabeleça bons planos e aja.",
    prediction: "Desejo: Provável a termo.\nDoença: Recuperação tardia.\nObjeto perdido: Pouco provável.\nPessoa aguardada: Atraso.\nNova casa / mudança: Bom.\nViagem: Seguro.\nCasamento / relações: Aceitável."
  },
  66: {
    meaning: "Águas estagnadas: penúria e restrições; grandes perdas e confusão.",
    prediction: "Desejo: Difícil.\nDoença: Grande prudência.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Má escolha.\nViagem: Não recomendado.\nCasamento / relações: Ruim."
  },
  67: {
    meaning: "Madeira seca sem brotos: não é o momento; ignorar sua condição leva a arrependimento.",
    prediction: "Desejo: Difícil.\nDoença: Recuperação tardia.\nObjeto perdido: Baixa chance.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Comparar e refletir.\nViagem: Não recomendado.\nCasamento / relações: Desfavorável."
  },
  68: {
    meaning: "Sonho estranho anuncia herói: favor divino. Primavera aquece; até galhos secos reflorescem.",
    prediction: "Desejo: Muito provável.\nDoença: Recuperação esperada.\nObjeto perdido: Alta chance.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Positivo."
  },
  69: {
    meaning: "Lua clara coberta; flores meio murchas: aguarde em vez de perseguir sonho distante.",
    prediction: "Desejo: Difícil.\nDoença: Prudência.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Momento ruim.\nViagem: Cancelar aconselhado.\nCasamento / relações: Desfavorável."
  },
  70: {
    meaning: "Trovão no pátio e chamas ao céu: disputas; não busque só lucro, cuide dos seus.",
    prediction: "Desejo: Difícil.\nDoença: Atenção.\nObjeto perdido: Baixa chance.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Evitar.\nCasamento / viagem / relações: Pouco favoráveis."
  },
  71: {
    meaning: "Via ainda imatura; tempo de aprender e refletir. Deixe a pressa e o vagar.",
    prediction: "Desejo: Difícil.\nDoença: Recuperação tardia.\nObjeto perdido: Baixa chance.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Má escolha.\nCasamento / viagem / relações: Desfavorável."
  },
  72: {
    meaning: "Previna adversidade doméstica e resolva divisões; após as geadas, harmonia retorna.",
    prediction: "Desejo: Cumpre a termo.\nDoença: Recuperação atrasada.\nObjeto perdido: Requer tempo.\nPessoa aguardada: Atraso.\nNova casa / mudança: Aceitável.\nViagem: Sem obstáculo.\nCasamento / relações: Melhora com o tempo."
  },
  73: {
    meaning: "Longa escuridão se dissipa; águas claras. Benfeitor de longe traz boa fortuna.",
    prediction: "Desejo: Após um prazo.\nDoença: Recuperação.\nObjeto perdido: Reaparece.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Positivo."
  },
  74: {
    meaning: "Serpentes e tigres entrelaçados: má sorte e perdas; mesmo com trocas, persistem discórdias.",
    prediction: "Desejo: Difícil.\nDoença: Vigilância.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Má escolha.\nCasamento / viagem / relações: Desfavorável."
  },
  75: {
    meaning: "Barco solitário diante corrente perigosa: ao invés de invejar, reflita e ore para evitar desastres.",
    prediction: "Desejo: Difícil.\nDoença: Risco se piorar.\nObjeto perdido: Pouco provável.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Má escolha.\nViagem: Não recomendado.\nCasamento / relações: Desfavorável."
  },
  76: {
    meaning: "Riqueza e posição são dons celestiais; seguindo a via reta, chegam por si só.",
    prediction: "Desejo: Alta probabilidade.\nDoença: Recuperação esperada.\nObjeto perdido: Alta chance.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Positivo."
  },
  77: {
    meaning: "Atrasos e ondas sem cessar: renuncie por ora à fama; paciência e domínio trazem bom momento.",
    prediction: "Desejo: Difícil.\nDoença: Atenção.\nObjeto perdido: Difícil.\nPessoa aguardada: Não vem.\nNova casa / mudança: Ruim.\nViagem: Pouco favorável.\nCasamento / relações: Desfavorável."
  },
  78: {
    meaning: "Guarde justiça e retidão; fidelidade triunfa. Como os pinheiros, sua integridade perdura; fortuna se acumula.",
    prediction: "Desejo: Muito provável.\nDoença: Recuperação esperada.\nObjeto perdido: Alta chance.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Agradável.\nCasamento / relações: Positivo."
  },
  79: {
    meaning: "Como a lua que retorna, energia se esclarece; fé afasta calamidades e traz paz primaveril.",
    prediction: "Desejo: Pequeno desejo realizável; grande difícil.\nDoença: Recuperação tardia.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Atraso.\nNova casa / mudança: Bom.\nViagem: Bom.\nCasamento / relações: Possível."
  },
  80: {
    meaning: "Cultive a via na montanha; lealdade reconhecida; como a fênix, cruza os nove céus.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Possível.\nViagem: Recomendado.\nCasamento / relações: Humildade traz sorte."
  },
  81: {
    meaning: "Acordo com a via traz sucesso; apesar de inquietudes iniciais, riquezas abundam depois.",
    prediction: "Desejo: Com sinceridade, cumpre.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  82: {
    meaning: "Fogo toca o céu: agitação. Novas preocupações despertam velhas faltas; sem barco, melhor ficar.",
    prediction: "Desejo: Baixo.\nDoença: Incerto, vigilância.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Não aconselhado.\nViagem: A refletir.\nCasamento / relações: Pouco recomendável."
  },
  83: {
    meaning: "Deseja subir às nuvens, mas o alto ramal é distante; a lua permanece entre nuvens: endireite o coração.",
    prediction: "Desejo: Baixo.\nDoença: Atraso.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Não aconselhado.\nViagem: Risco.\nCasamento / relações: Desfavorável."
  },
  84: {
    meaning: "No auge da adversidade não há tranquilidade; flores de outono murcham; relações discordantes e perdas.",
    prediction: "Desejo: Difícil.\nDoença: Perigoso.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Não aconselhado.\nViagem: Ruim.\nCasamento / relações: Negativo."
  },
  85: {
    meaning: "Não tema a lentidão: espere; fama se serena e grandes desejos se cumprem.",
    prediction: "Desejo: Futuro.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Bom.\nCasamento / relações: Recomendado."
  },
  86: {
    meaning: "Flores no mirante, carros de tesouros; saber reconhecido e troveja seu renome.",
    prediction: "Desejo: Cumpre.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Possível.\nViagem: Recomendado.\nCasamento / relações: Bem."
  },
  87: {
    meaning: "Acha-se jade talhando pedra e ouro peneirando areia; há grande rota, mas precisa firmeza.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  88: {
    meaning: "Desarmonia impede concluir; ao perigo somam-se infortúnios: reforce a fé.",
    prediction: "Desejo: Difícil.\nDoença: Risco.\nObjeto perdido: Baixa chance.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Não aconselhado.\nViagem: Não recomendado.\nCasamento / relações: Desfavorável."
  },
  89: {
    meaning: "Polido e perfeito como jade sem defeito, ganha reconhecimento do sábio: alegria abunda.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Difícil.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  90: {
    meaning: "Carta sincera voa ao céu; graça desce: futuro cheio de coisas boas e apoio.",
    prediction: "Desejo: Cumpre.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Possível.\nViagem: Recomendado.\nCasamento / relações: Bem."
  },
  91: {
    meaning: "Mude de senda; lua fica redonda; sorte cai das nuvens: aja primeiro.",
    prediction: "Desejo: Cumpre com retidão.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  92: {
    meaning: "Viajante desde criança, na primavera vem o brio do cavalo; flecha de sorte desce do céu.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  93: {
    meaning: "Peixe em tanque seco precisa de ondas; evite obstáculos e tenha paciência para a dita dos descendentes.",
    prediction: "Desejo: Cumpre mais tarde.\nDoença: Atraso.\nObjeto perdido: Difícil.\nPessoa aguardada: Atraso.\nNova casa / mudança: Aceitável.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  94: {
    meaning: "Evite palavras de embriaguez e trato com mesquinhos; siga mãe e divindade para resolver inimizades.",
    prediction: "Desejo: Pode não sair como deseja.\nDoença: Longa mas não fatal.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Desfavorável.\nViagem: Aceitável.\nCasamento / relações: Apenas possível."
  },
  95: {
    meaning: "Fixe resolução e trabalhe; fortuna ainda não chegou, mas virá como vento favorável.",
    prediction: "Desejo: Cumpre.\nDoença: Atraso.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Tarde.\nNova casa / mudança: Sem obstáculo.\nViagem: Recomendado.\nCasamento / relações: Possível."
  },
  96: {
    meaning: "Galo segue fênix e se eleva; com benfeitor cruza e retorna com tesouros.",
    prediction: "Desejo: Realizável, com prudência.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Possível.\nViagem: Recomendado.\nCasamento / relações: Bem."
  },
  97: {
    meaning: "Névoa cobre torres: preocupações acumuladas; alguém frágil sozinho na água: estabilize primeiro o espírito.",
    prediction: "Desejo: Difícil.\nDoença: Risco.\nObjeto perdido: Difícil.\nPessoa aguardada: Pouco provável.\nNova casa / mudança: Ruim.\nViagem: Desfavorável.\nCasamento / relações: Desfavorável."
  },
  98: {
    meaning: "Após ventos e chuvas, arco-íris: bom presságio após prova. Não dura; aproveite o momento.",
    prediction: "Desejo: Cumpre mais tarde.\nDoença: Recuperação esperada.\nObjeto perdido: Encontrado tarde.\nPessoa aguardada: Aparece.\nNova casa / mudança: Possível.\nViagem: Agradável.\nCasamento / relações: Melhora."
  },
  99: {
    meaning: "Após longo inverno vem primavera: grande fortuna e longevidade seguem as provas.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Boa escolha.\nViagem: Recomendado.\nCasamento / relações: Favorável."
  },
  100: {
    meaning: "Finalmente desejos se cumprem e você desfruta grande bênção; clareza reina por todos lados.",
    prediction: "Desejo: Realizável.\nDoença: Recuperação.\nObjeto perdido: Encontrado.\nPessoa aguardada: Aparece.\nNova casa / mudança: Afortunado.\nViagem: Afortunado.\nCasamento / relações: Afortunado."
  }
}
