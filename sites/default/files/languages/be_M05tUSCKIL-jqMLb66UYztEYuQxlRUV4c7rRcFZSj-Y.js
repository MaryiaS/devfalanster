Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"AJAX HTTP \u043f\u0430\u043c\u044b\u043b\u043a\u0430 \u0432\u044b\u043a\u0430\u043d\u0430\u043d\u043d\u044f.","HTTP Result Code: !status":"HTTP \u0432\u044b\u043d\u0456\u043a\u043e\u0432\u044b \u043a\u043e\u0434: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP \u0437\u0430\u043f\u044b\u0442 \u043f\u0440\u044b\u043f\u044b\u043d\u0456\u045e\u0441\u044f \u043d\u0435\u0431\u044f\u0441\u043f\u0435\u0447\u043d\u0430.","Debugging information follows.":"\u0410\u0434\u043b\u0430\u0434\u0430\u0447\u043d\u0430\u044f \u0456\u043d\u0444\u0430\u0440\u043c\u0430\u0446\u044b\u044f \u043d\u0456\u0436\u044d\u0439.","Path: !uri":"\u0428\u043b\u044f\u0445: !uri","StatusText: !statusText":"\u0422\u044d\u043a\u0441\u0442 \u0441\u0442\u0430\u043d\u0443: !statusText","ResponseText: !responseText":"\u0422\u044d\u043a\u0441\u0442 \u0430\u0434\u043a\u0430\u0437\u0443: !responseText","ReadyState: !readyState":"\u0421\u0442\u0430\u043d \u0433\u0430\u0442\u043e\u045e\u043d\u0430\u0441\u0446\u0456: !readyState","Configure":"\u041a\u0430\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0432\u0430\u0446\u044c","Hide":"\u0421\u0445\u0430\u0432\u0430\u0446\u044c","Show":"\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c","(active tab)":"(\u0430\u043a\u0442\u044b\u045e\u043d\u044b \u0442\u0430\u0431)","Not restricted":"\u041d\u0435 \u0430\u0431\u043c\u0435\u0436\u0430\u0432\u0430\u043d\u0430","Restricted to certain pages":"\u0422\u043e\u043b\u044c\u043a\u0456 \u0434\u043b\u044f \u043f\u044d\u045e\u043d\u044b\u0445 \u0441\u0442\u0430\u0440\u043e\u043d\u0430\u043a","Not customizable":"\u041d\u0435 \u043c\u0430\u0433\u0447\u044b\u043c\u0430 \u043a\u0430\u0441\u0442\u0430\u043c\u0456\u0437\u0430\u0432\u0430\u0446\u044c","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0417\u043c\u0435\u043d\u044b \u0434\u043b\u044f \u0433\u044d\u0442\u044b\u0445 \u0431\u043b\u043e\u043a\u0430\u045e \u0431\u0443\u0434\u0443\u0446\u044c \u0437\u0430\u0445\u0430\u0432\u0430\u043d\u044b\u044f \u0442\u043e\u043b\u044c\u043a\u0456 \u043f\u0430\u0441\u043b\u044f \u0442\u0430\u0433\u043e \u044f\u043a \u0432\u044b \u043d\u0430\u0446\u0456\u0441\u043d\u0456\u0446\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0417\u0430\u0445\u0430\u0432\u0430\u0446\u044c \u0431\u043b\u043e\u043a\u0456\u003C\/em\u003E","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0430 \u0431\u044b\u0446\u044c \u0440\u0430\u0437\u043c\u0435\u0448\u0447\u0430\u043d\u044b \u045e \u0433\u044d\u0442\u044b\u043c \u0440\u044d\u0433\u0456\u0451\u043d\u0435.","Re-order rows by numerical weight instead of dragging.":"\u041f\u0435\u0440\u0430\u0432\u044b\u0437\u043d\u0430\u0447\u044b \u0440\u0430\u0434\u043a\u0456 \u0432\u0430\u0433\u0456 \u043b\u0456\u0447\u0431\u0430\u043c\u0456 \u0437\u0430\u043c\u0435\u0441\u0442 \u043f\u0435\u0440\u0430\u043c\u044f\u0448\u0447\u044d\u043d\u043d\u044f.","Show row weights":"\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c \u0432\u0430\u0433\u0443 \u0440\u0430\u0434\u043a\u0430","Hide row weights":"\u0421\u0445\u0430\u0432\u0430\u0446\u044c \u0432\u0430\u0433\u0443 \u0440\u0430\u0434\u043a\u0430","Drag to re-order":"\u041f\u0435\u0440\u0430\u0446\u044f\u0433\u043d\u0443\u0446\u044c \u0434\u043b\u044f \u043f\u0430\u045e\u0442\u043e\u0440\u043d\u0430\u0433\u0430 \u0437\u0430\u043a\u0430\u0437\u0443","Changes made in this table will not be saved until the form is submitted.":"\u0417\u043c\u0435\u043d\u044b, \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u044b\u044f \u045e \u0433\u044d\u0442\u0430\u0439 \u0442\u0430\u0431\u043b\u0456\u0446\u044b, \u043d\u0435 \u0431\u0443\u0434\u0443\u0446\u044c \u0437\u0430\u0445\u0430\u0432\u0430\u043d\u044b\u044f \u0434\u0430 \u0430\u0434\u043f\u0440\u0430\u045e\u043a\u0456 \u0444\u043e\u0440\u043c\u044b.","Next":"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u044b","Disabled":"\u0412\u044b\u043a\u043b\u044e\u0447\u0430\u043d\u0430","Enabled":"\u0410\u043a\u0442\u044b\u0432\u0430\u0432\u0430\u043d\u0430","Edit":"\u0420\u044d\u0434\u0430\u0433\u0430\u0432\u0430\u0446\u044c","Size":"\u041f\u0430\u043c\u0435\u0440","Sunday":"\u043d\u044f\u0434\u0437\u0435\u043b\u044f","Monday":"\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a","Tuesday":"\u0430\u045e\u0442\u043e\u0440\u0430\u043a","Wednesday":"\u0441\u0435\u0440\u0430\u0434\u0430","Thursday":"\u0447\u0430\u0446\u044c\u0432\u0435\u0440","Friday":"\u043f\u044f\u0442\u043d\u0456\u0446\u0430","Saturday":"\u0441\u0443\u0431\u043e\u0442\u0430","Add":"\u0414\u0430\u0434\u0430\u0446\u044c","Filename":"\u041d\u0430\u0437\u0432\u0430 \u0444\u0430\u0439\u043b\u0430","Done":"\u0417\u0440\u043e\u0431\u043b\u0435\u043d\u0430","N\/A":"\u041d\u0435 \u0434\u0430\u0441\u0442\u0443\u043f\u043d\u0430","Prev":"\u041f\u0430\u043f\u044f\u0440\u044d\u0434\u043d\u0456","Mon":"\u043f\u0430\u043d","Tue":"\u0430\u045e\u0442","Wed":"\u0441\u0435\u0440","Thu":"\u0447\u0446\u0432","Fri":"\u043f\u044f\u0442","Sat":"\u0441\u0443\u0431","Sun":"\u043d\u044f\u0434\u0437","January":"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c","February":"\u043b\u044e\u0442\u044b","March":"\u0441\u0430\u043a\u0430\u0432\u0456\u043a","April":"\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a","May":"\u041c\u0430\u044f","June":"\u0447\u044d\u0440\u0432\u0435\u043d\u044c","July":"\u043b\u0456\u043f\u0435\u043d\u044c","August":"\u0436\u043d\u0456\u0432\u0435\u043d\u044c","September":"\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c","October":"\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a","November":"\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434","December":"\u0441\u043d\u0435\u0436\u0430\u043d\u044c","Hide summary":"\u0421\u0445\u0430\u0432\u0430\u0446\u044c \u0440\u044d\u0437\u044e\u043c\u044d","Edit summary":"\u0420\u044d\u0434\u0430\u0433\u0430\u0432\u0430\u0446\u044c \u0440\u044d\u0437\u044e\u043c\u044d","Autocomplete popup":"\u0410\u045e\u0442\u0430\u043c\u0430\u0442\u044b\u0447\u043d\u0430\u044f popup \u043f\u0430\u0434\u043a\u0430\u0437\u043a\u0430","Searching for matches...":"\u041f\u043e\u0448\u0443\u043a \u0441\u0443\u043f\u0430\u0434\u0437\u0435\u043d\u043d\u044f\u045e...","Please wait...":"\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u043f\u0430\u0447\u0430\u043a\u0430\u0439\u0446\u0435...","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0410\u0431\u0440\u0430\u043d\u044b \u0444\u0430\u0439\u043b %filename \u043d\u044f \u043c\u043e\u0436\u0430 \u0431\u044b\u0446\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043d\u044b. \u0414\u0430\u0437\u0432\u043e\u043b\u0435\u043d\u044b \u0444\u0430\u0439\u043b\u044b \u0442\u043e\u043b\u044c\u043a\u0456 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0456 \u043f\u0430\u0448\u044b\u0440\u044d\u043d\u043d\u044f\u043c\u0456: %extensions.","Not in menu":"\u041d\u044f\u043c\u0430 \u045e \u043c\u0435\u043d\u044e","Automatic alias":"\u0410\u045e\u0442\u0430\u043c\u0430\u0442\u044b\u0447\u043d\u044b \u0430\u0434\u0440\u0430\u0441","Alias: @alias":"\u0410\u043b\u0456\u0430\u0441: @alias","No alias":"\u041d\u044f\u043c\u0430 \u043f\u0441\u0435\u045e\u0434\u0430\u043d\u0456\u043c\u0430","New revision":"\u041d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0456\u044f","No revision":"\u041d\u044f\u043c\u0430 \u0432\u0435\u0440\u0441\u0456\u0456","By @name on @date":"\u0417\u0440\u043e\u0431\u043b\u0435\u043d\u0430 @name \u045e @date","By @name":"\u041f\u0430 @name","Not published":"\u041d\u0435 \u0430\u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0432\u0430\u043d\u044b","Select all rows in this table":"\u0412\u044b\u0431\u0440\u0430\u0446\u044c \u0443\u0441\u0435 \u0440\u0430\u0434\u043a\u0456 \u0437 \u0433\u044d\u0442\u0430\u0439 \u0442\u0430\u0431\u043b\u0456\u0446\u044b","Deselect all rows in this table":"\u0410\u0434\u043c\u044f\u043d\u0456\u0446\u0435 \u045e\u0441\u0435 \u0440\u0430\u0434\u043a\u0456 \u045e \u0433\u044d\u0442\u0430\u0439 \u0442\u0430\u0431\u043b\u0456\u0446\u044b","Requires a title":"\u041f\u0430\u0442\u0440\u0430\u0431\u0443\u0435 \u0437\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a","Don\u0027t display post information":"\u041d\u0435 \u043f\u0430\u043a\u0430\u0437\u0432\u0430\u0446\u044c \u0456\u043d\u0444\u0430\u0440\u043c\u0430\u0446\u044b\u044e \u043f\u0430\u0441\u0442\u0430","Allowed HTML tags":"\u0414\u0430\u0437\u0432\u043e\u043b\u0435\u043d\u044b\u044f HTML \u0442\u044d\u0433\u0456","Today":"\u0421\u0451\u043d\u043d\u044f","Jan":"\u0421\u0442\u0443\u0434","Feb":"\u041b\u044e\u0442","Mar":"\u0421\u0430\u043a","Apr":"\u041a\u0440\u0430\u0441","Jun":"\u0427\u044d\u0440","Jul":"\u041b\u0456\u043f","Aug":"\u0416\u043d","Sep":"\u0412\u0435\u0440","Oct":"\u041a\u0430\u0441","Nov":"\u041b\u0456\u0441","Dec":"\u0421\u043d\u0435\u0436","Su":"\u043d\u044f\u0434\u0437","Mo":"\u043f\u043d\u0434","Tu":"\u0430\u045e\u0442","We":"\u0441\u0440\u0434","Th":"\u0447\u0446\u0432","Fr":"\u043f\u0442\u043d","Sa":"\u0441\u0443\u0431","mm\/dd\/yy":"\u043c\u043c\/\u0434\u0434\/\u0433\u0433"}} };