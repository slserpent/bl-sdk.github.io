Set-Location "./scripts/"
if(Test-Path "./Scripts/Activate.ps1") {
    Write-Host "Entering virtual env"
    
    & "./Scripts/Activate.ps1"
    Write-Host "Generating mod docs..."
    python GenerateModDocs.py
}
else {
    python GenerateModDocs.py
}

Set-Location "../"
bundle exec jekyll serve