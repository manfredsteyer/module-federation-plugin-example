rd .angular /s /Q
rd node_modules\@angular-architects\module-federation /s /q   
rd node_modules\@angular-architects\module-federation-runtime /s /q   
xcopy D:\Dokumente\projekte\mf-plugin\angular-architects\dist\libs\mf node_modules\@angular-architects\module-federation /s /e /i                
xcopy D:\Dokumente\projekte\mf-plugin\angular-architects\dist\libs\mf-runtime node_modules\@angular-architects\module-federation-runtime /s /e /i
