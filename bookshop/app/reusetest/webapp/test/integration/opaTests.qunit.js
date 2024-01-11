sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'reusetest/test/integration/FirstJourney',
		'reusetest/test/integration/pages/bookList',
		'reusetest/test/integration/pages/bookObjectPage'
    ],
    function(JourneyRunner, opaJourney, bookList, bookObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('reusetest') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThebookList: bookList,
					onThebookObjectPage: bookObjectPage
                }
            },
            opaJourney.run
        );
    }
);