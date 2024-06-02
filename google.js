const scriptProp = PropertiesService.getScriptProperties()

function doPost(e) {
    Logger.log(e);
    var formdata = e.parameters;

    var vorname = formdata.Vorname;
    var nachname = formdata.Nachname;
    var email = formdata.EMail;
    var tel = formdata.Telefon;
    var beschreibung = formdata.Beschreibung;

    const now = Utilities.formatDate(new Date(), "CET", "dd-MM-yyyy''HH:mm:ss");


    var subject = "JOKERS KONTAKTFORMULAR";
    var body = "<html><link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'><h1 class='w3-container w3-padding-32 w3-center w3-gray'>JOKERS KONTAKTFORMULAR</h1><p class='w3-container w3-padding-32 w3-center w3-gray'>Ein Treffpunkt für Jung und Alt</p><br><p><span style='font-weight:bold;'>Vorname:</span> " + vorname + "</p><hr><p><span style='font-weight:bold;'>Nachname:</span> " + nachname + "</p><hr><p><span style='font-weight:bold;'>E-Mail:</span> " + email + "</p><hr><p><span style='font-weight:bold;'>Telefon:</span> " + tel + "</p><hr><p><span style='font-weight:bold;'>Beschreibung:</span> " + beschreibung + "</p><br><br><p class='w3-container w3-padding-64 w3-center w3-gray'>© JOKERS HERZOGENBUCHSEE, ALL RIGHTS RESERVED</p><p>" + now + "</p></html>"

    GmailApp.sendEmail({
        to: "Fabio.Stuber@outlook.com",// Empfänger-E-Mail-Adresse ersetzen
        from: "jugendgruppe@ref-buchsi.ch",
        name: vorname + " " + nachname,
        subject: subject,
        htmlBody: body,
    });

}
