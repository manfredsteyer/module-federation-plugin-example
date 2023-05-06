rd .angular /s /Q
rd node_modules\@angular-architects\module-federation /s /q   
rd node_modules\@angular-architects\module-federation-runtime /s /q   
xcopy ..\angular-architects\dist\libs\mf node_modules\@angular-architects\module-federation /s /e /i                
xcopy ..\angular-architects\dist\libs\mf-runtime node_modules\@angular-architects\module-federation-runtime /s /e /i
