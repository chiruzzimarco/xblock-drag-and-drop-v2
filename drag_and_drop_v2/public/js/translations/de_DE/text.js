
            (function(global){
                var DragAndDropI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\n Bitte geben Sie eine Beschreibung des Bildes f\u00fcr nicht-visuelle Benutzer an.\n Die Beschreibung sollte gen\u00fcgend Informationen enthalten, damit jeder\n die Fragestellung l\u00f6sen kann, auch ohne das Bild zu sehen. ", 
    "\"Maximum items per zone\" should be positive integer, got {max_items_per_zone}": "\"Maximale Auswahlm\u00f6glichkeit/en pro Feld\" sollte eine ganze positive Zahl sein {max_items_per_zone}", 
    ", draggable": ", ziehbar", 
    ", draggable, grabbed": ", ziehbar, ausgew\u00e4hlt", 
    ", dropzone": ", Dropfeld", 
    "Actions": "Aktionen", 
    "Add a zone": "Ein Feld hinzuf\u00fcgen", 
    "Add an item": "Auswahlm\u00f6glichkeit/en hinzuf\u00fcgen", 
    "Align dropped items to the left, center, or right.": "ausrichten der Auswahlm\u00f6glichkeit nach links, in die Mitte oder nach rechts", 
    "Alignment": "Ausrichtung", 
    "An error occurred. Unable to load drag and drop problem.": "Es ist ein Fehler aufgetreten. Drag&Drop-Fragestellung kann nicht geladen werden.", 
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Ein gleichschenkliges Dreieck mit drei gleich gro\u00dfen Schichten. Es wird von unten nach oben betrachtet, die gr\u00f6\u00dfte Schicht befindet sich unten, die kleinste Schicht oben", 
    "Assessment": "assessment", 
    "Background URL": "Hintergrund URL", 
    "Background description": "Hintergrundinformationen", 
    "Cancel": "Abbrechen", 
    "Change background": "Hintergrund \u00e4ndern", 
    "Close": "Schlie\u00dfen", 
    "Continue": "Fortsetzen", 
    "Correct! This one belongs to {zone}.": "Richtig! Dieser Punkt geh\u00f6rt zu {zone}", 
    "Correctly placed in: {zone_title}": "Richtig platziert in: {zone_title}", 
    "Correctly placed {correct_count} item.": [
      "Richtig platzierte {correct_count} Komponente.", 
      "Richtig platzierte {correct_count} Auswahlm\u00f6glichkeit/en."
    ], 
    "Defines the number of points the problem is worth.": "Definiert die Anzahl der Punkte, wie die Fragestellung gewertet wird.", 
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Legt fest, wie oft ein Teilnehmer versuchen kann, diese Fragestellung zu l\u00f6sen. Ist der Wert nicht gesetzt, sind unendlich viele Versuche erlaubt.", 
    "Describe this zone to non-visual users.": "Beschreiben Sie dieses Feld f\u00fcr nicht-sichtbare Nutzer ", 
    "Description": "Beschreibung", 
    "Did not place {missing_count} required item.": [
      "Die ben\u00f6tigte Auwahlm\u00f6glichkeit wurde nicht platziert {missing_count}.", 
      "Die ben\u00f6tigte Auswahlm\u00f6glichkeiten wurden nicht platziert {fehlender_Wert}"
    ], 
    "Display label names on the image": "Beschriftung auf dem Bild anzeigen", 
    "Display the heading \"Problem\" above the problem text?": "Anzeigen des Titels/ Fragestellung/ \u00fcber den Fragestellungstext?", 
    "Display the title to the learner?": "Soll der Titel f\u00fcr die Teilnehmer angezeigt werden?", 
    "Display zone borders on the image": "Feldgrenzen auf dem Bild anzeigen ", 
    "Drag and Drop": "Drag and Drop", 
    "Drag and Drop Problem": "Drag&Drop Fragestellung", 
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Drag & Drop-Fragestellungen bestehen aus ziehbaren Auswahlm\u00f6glichkeit/en und Dropfeldern. Nutzer sollten eine ziehbare Auswahlm\u00f6glichkeit mit ihrer Tastatur ausw\u00e4hlen und dann zu einem geeignetem Dropfeld navigieren, um es dort zu platzieren.", 
    "Drag the items onto the image above.": "Ziehen Sie die Auswahlm\u00f6glichkeit/en auf das obere Bild.", 
    "Drop Targets": "Platzierungsm\u00f6glichkeiten ", 
    "Error feedback": "schlechtes Feedback", 
    "Failed to parse \"Maximum items per zone\"": "analysieren fehlgeschlagen/ Maximale Auswahlm\u00f6glichkeit/en pro Feld", 
    "Feedback": "R\u00fcckmeldung", 
    "Final attempt was used, highest score is {score}": "Der letzter Versuch wurde gewertet, die h\u00f6chste Punktzahl ist {score}.", 
    "Final feedback": "Abschlie\u00dfendes Feedback", 
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Zum Beispiel 'http://beispiel.com/image.png' or '/static/image.png'", 
    "For example, 'http://example.com/image.png' or '/static/image.png'.": "Zum Beispiel, 'http://example.com/image.png' oder '/static/image.png'.", 
    "Go to Beginning": "Zur\u00fcck zum Anfang", 
    "Goes anywhere": "Passt \u00fcberall", 
    "Goes to the bottom": "Geh\u00f6rt nach unten.", 
    "Goes to the middle": "Geh\u00f6rt zu Mitte.", 
    "Goes to the top": "Geh\u00f6rt nach oben.", 
    "Good work! You have completed this drag and drop problem.": "Gut gemacht! Sie haben die Drag & Drop Fragestellung gel\u00f6st.", 
    "Hide Answer": "Antwort ausblenden", 
    "Hints:": "Hinweise:", 
    "I don't belong anywhere": "Die Auswahlm\u00f6glichkeit geh\u00f6rt nirgendwo hin. ", 
    "Image URL (alternative to the text)": "Bild URL (alternativ zum text)", 
    "Image description (should provide sufficient information to place the item even if the image did not load)": "Bildbeschreibung (sollte gen\u00fcgend Informationen liefern um die Auswahlm\u00f6glichkeit zu platzieren auch wenn das Bild nicht geladen wurde)", 
    "Indicates whether a learner has completed the problem at least once": "Gibt an, ob ein Lernender die Fragestellung mindestens einmal gel\u00f6st hat. ", 
    "Information about current positions of items that a learner has dropped on the target image.": "Informationen \u00fcber aktuelle Positionen der Auswahlm\u00f6glichkeit/en, die ein Teilnehmer ins Zielbild gezogen hat.", 
    "Information about zones, items, feedback, and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Informationen \u00fcber Felder, Auswahlm\u00f6glichkeit/en, Feedback und Hintergundbilder f\u00fcr diese Fragestellung. Diese Informationen ergeben sich aus den Eingaben, die ein Modulentwickler \u00fcber den interaktiven Editor bei der Konfiguration der Fragestellung macht.", 
    "Introductory feedback": "Einleitendes Feedback", 
    "Item Bank": "Auswahlm\u00f6glichkeit/en-Feld", 
    "Item background color": "Hintergrundfarbe der Auswahlm\u00f6glichkeit/en", 
    "Item text color": "Textfarbe der Auswahlm\u00f6glichkeit", 
    "Items": "Auswahlm\u00f6glichkeit/en", 
    "Keeps maximum score achieved by student": "Maximale Punktzahl, die von dem Teilnehmer erreicht wurde", 
    "Keyboard Help": "Test translation", 
    "Loading drag and drop problem.": "Laden der Drag&Drop Aufgabe", 
    "Max number of attempts reached": "Maximale Anzahl der erreichten Versuche", 
    "Maximum attempts": "Maximale Versuche", 
    "Misplaced {misplaced_count} item.": [
      "falsch platzierte {misplaced_count} Auswahm\u00f6glichkeit. ", 
      "Falsch platzierte {misplaced_count} Auswahlm\u00f6glichkeiten. "
    ], 
    "Misplaced {misplaced_count} item. Misplaced item was returned to item bank.": [
      "Falsch platzierte {misplaced_count} Auswahlm\u00f6glichkeit. Falsch platzierte Auswahlm\u00f6glichkeit wurde zur\u00fcck auf die Ausgangsposition gezogen.", 
      "Falsch platzierte {misplaced_count} Auswahlm\u00f6glichkeiten. Falsch platzierte Auswahlm\u00f6glichkeiten wurde zur\u00fcck auf die Ausgangsposition gezogen."
    ], 
    "Mode": "Modus", 
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Navigieren Sie mit TAB und SHIFT+TAB zum entsprechenden Dropfeld und dr\u00fccken Sie noch einmal STRG+M, um es hier zu platzieren.", 
    "No, this item does not belong here. Try again.": "Nein, diese Auswahlm\u00f6glichkeit stimmt hier nicht. Versuchen Sie es erneut.", 
    "None": "Keine", 
    "Note: do not edit the problem if students have already completed it. Delete the problem and create a new one.": "Hinweis: Bearbeiten Sie die Fragestellung nicht, wenn die Lernenden es bereits abgeschlossen haben.  L\u00f6schen Sie die Aufgabe lieber und schreiben Sie diese neu.", 
    "Number of attempts learner used": "Anzahl der Versuche des Teilnehmers", 
    "Of course it goes here! It goes anywhere!": "Nat\u00fcrlich passt es hier! Es passt \u00fcberall! ", 
    "Placed in: {zone_title}": "Platziert in: {zone_title}", 
    "Please check over your submission.": "Bitte \u00fcberpr\u00fcfen Sie Ihre Eingaben.", 
    "Preferred width": "Bevorzugte Breite", 
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Dr\u00fccken Sie CTRL+M um eine ziehbare Auswahlm\u00f6glichkeit auszuw\u00e4hlen (um es effektiv aufzuheben)", 
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Dr\u00fccken Sie ESC, wenn Sie die aktuelle Platzierung abbrechen m\u00f6chten (z.B. um eine andere Auswahlm\u00f6glichkeit auszuw\u00e4hlen)", 
    "Problem": "Fragestellung", 
    "Problem Weight": "Gewichtung der Fragestellung", 
    "Problem data": "Daten der Fragestellung", 
    "Problem text": "Fragestellungstext", 
    "Remove item": "Auswahlm\u00f6glichkeit/en entfernen", 
    "Remove zone": "Feld entfernen", 
    "Reset": "Zur\u00fccksetzen", 
    "Save": "Speichern", 
    "Show \"Problem\" heading": "Anzeigen der Fragestellung/ Titel", 
    "Show Answer": "Antwort anzeigen", 
    "Show advanced settings": "Erweiterte Einstellungen zeigen", 
    "Show title": "Titel anzeigen", 
    "Some of your answers were not correct.": "Einige Ihrer Antworten waren nicht korrekt.", 
    "Specify preferred width as percentage of the background image width. Leave blank for automatic width.": "Geben Sie die bevorzugte Breite als Prozentsatz der Hintergrundbildbreite an.", 
    "Standard": "Standard", 
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Standardmodus: die Fragestellung liefert sofortiges Feedback jedes Mal wenn der Lernende eine Auswahlm\u00f6glichkeit in das Zielfeld zieht. Assessmentmodus: die Fragestellung liefert Feedback nur nachdem ein Lernender alle verf\u00fcgbaren Auswahlm\u00f6glichkeit/en ins Zielfeld zieht.", 
    "Submit": "Absenden", 
    "Submitting": "\u00dcbermitteln, einreichen", 
    "Success feedback": "gutes/ erfolgreiches Feedback", 
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB kehren Sie zur Liste der ziehbaren Auswahlm\u00f6glichkeit/en zur\u00fcck und wiederholen Sie diesen Vorgang bis alle ziehbaren Auswahlm\u00f6glichkeit/en auf ihren jeweiligen Dropfeldern platziert sind.", 
    "Text": "Text", 
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Textfarbe der verschiebbaren Auswahlm\u00f6glichkeit (Beispiel: \"wei\u00df\" oder \"#fffff\")", 
    "The Bottom Zone": "Untere Schicht", 
    "The Middle Zone": "Mittlere Schicht", 
    "The Top Zone": "Obere Schicht", 
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "Die Hintergrundfarbe der beweglichen Auswahlm\u00f6glichkeit bei der Fragestellung (Beispiel \"blau\" oder \"#0000ff\" )", 
    "The description of the problem or instructions shown to the learner.": "Die Beschreibung des Problems oder die Anweisungen werden dem Lernenden angezeigt.", 
    "The title of the drag and drop problem. The title is displayed to learners.": "Dies ist der Titel der Drag&Drop Aufgabe. Dieser Titel wird den Teilnehmern angezeigt.", 
    "There are attempts remaining": "Sie haben noch weitere Versuche ", 
    "There was an error with your form.": "Es gab einen formalen Fehler.", 
    "This is a screen reader-friendly problem": "Dies ist ein Screenreader-freundliches Problem.", 
    "Title": "Titel", 
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Unknown DnDv2 mode {mode} - Kurs ist falsch konfiguriert", 
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Nutzen Sie ausschlie\u00dflich TAB und SHIFT+TAB zum navigieren zwischen den ziehbaren Auswahlm\u00f6glichkeiten und den Dropfeldern.", 
    "Use text that is clear and descriptive of the item to be placed.": "Verwenden Sie einen Text, der klar und beschreibend f\u00fcr die zu platzierende Auswahlm\u00f6glichkeit ist.", 
    "Use this zone to associate an item with the bottom layer of the triangle.": "Benutze dieses Feld um eine Auswahlm\u00f6glichkeit/en der unteren Schicht des Dreiecks zuzuordnen", 
    "Use this zone to associate an item with the middle layer of the triangle.": "Benutze dieses Feld um eine Auswahlm\u00f6glichkeit/en der mittleren Schicht des Dreiecks zuzuordnen", 
    "Use this zone to associate an item with the top layer of the triangle.": "Benutze dieses Feld um eine Auswahlm\u00f6glichkeit/en der oberen Schicht des Dreiecks zuzuordnen", 
    "You can complete this problem using only your keyboard by following the guidance below:": "Sie k\u00f6nnen dieses Problem/ Fragestellung nur mit Ihrer Tastatur l\u00f6sen, indem Sie der folgenden Anleitung folgen: ", 
    "You have used {used} of {total} attempts.": "Sie haben {used} von {total} Versuchen verwendet.", 
    "You silly, there are no zones for this one.": "Nein, diese Auswahlm\u00f6glichkeit passt in kein Feld.", 
    "Your highest score is {score}": "Ihre h\u00f6chste Punktzahl ist {score}.", 
    "Zone": "Feld", 
    "Zone borders": "Feldgrenzen", 
    "Zone definitions": "Felddefinitionen", 
    "Zone labels": "Feldbeschriftungen", 
    "Zones": "Bereiche", 
    "center": "Mittig", 
    "do_attempt handler should only be called for assessment mode": "do_attempt handler sollte nur f\u00fcr den Assessmentmodus aufgerufen werden", 
    "height": "H\u00f6he", 
    "left": "Links", 
    "none": "keine", 
    "ok": "ok", 
    "right": "Rechts", 
    "show_answer handler should only be called for assessment mode": "show_answer handler sollten nur f\u00fcr den Assessmentmodus augerufen werden", 
    "width": "Breite", 
    "{earned}/{possible} point (graded)": [
      "{earned}/{possible} Punkt (graded)", 
      "{earned}/{possible} Punkte (graded)"
    ], 
    "{earned}/{possible} point (ungraded)": [
      "{earned}/{possible} Punkt (ungraded)", 
      "{earned}/{possible} Punkte (ungraded)"
    ], 
    "{possible} point possible (graded)": [
      "{possible} Punkt m\u00f6glich (graded)", 
      "{possible} Punkte m\u00f6glich (graded)"
    ], 
    "{possible} point possible (ungraded)": [
      "{possible} Punkt m\u00f6glich (ungraded)", 
      "{possible} Punkte m\u00f6glich (ungraded)"
    ]
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        