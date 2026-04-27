
$passwords = @("hbh19890104", "Hbh@19890104", "hxtx13837573512", "hx1989tx0104", "123456", "password")
$keystore = "app/omikuji-release copy.keystore"
$alias = "omikuji"

foreach ($pass in $passwords) {
    Write-Host "Testing password: $pass"
    $result = keytool -list -keystore $keystore -storepass $pass -alias $alias 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "SUCCESS! Password is: $pass"
        break
    }
}
