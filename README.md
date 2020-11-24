## Tests everywhere - was kann man noch so alles testen?

slides und demo code (TBD) für meinen Talk über grossartige, aber noch nicht stark genug verbreitete Test-Frameworks und -Prozesse

Talk findet so oder ähnlich statt:
* Continuous Lifecycle 2020
* JUG Hessen  


gatling-demo enthält einen Test, der mit `gradle gatlingRun` gestartet wird und gegen localhost:8080 testet

wiremock enthält den passenden simulator, der die API bereitstellt. 
starten mit `java -jar wiremock-standalone-2.27.2.jar` im folder







---- 

(ja, es ist nicht die beste Idee, jars und externe folder einfach hier komplett einzuchecken, evtl erleichtert es aber dem ein oder anderen das ausprobieren :D)
