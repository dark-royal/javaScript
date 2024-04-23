class Nokia3310{

    mainMenu(){

    console.log("1.PhoneBook\n"+ "2.Messages\n"+ "3.Chat\n" + "4.CallRegister\n" + "5.Tones\n" + "6.Setting\n" + "7.Call divert\n" + "8.Games\n" + "9.Calculator\n" + "10.Reminder\n" + "11.Clock\n" + "13.Profiles\n" + "14.SIM Services");

    const  option = parseInt(prompt("Enter option"));


        switch (option) {
            case 1:
                phoneBook();
                break;
            case 2:
                messages();
                break;
            case 3:
                chat();
                break;
            case 4:
                callRegister();
                break;
            case 5:
                tones();
                break;
            case 6:
                settings();
                break;
            case 7:
                callDivert();
                break;
            case 8: games();
                break;
            case 9: calculator();
                break;
            case 10: reminder();
                break;
            case 11: clock();
                break;
            case 12: profile();
                break;
            case 13: simServices();
            default: this.mainMenu();
        }

        function phoneBook() {

            console.log("Search\n 2.Service Nos\n 3.Add name\n 4.Erase\n 5. Edit\n 6.Assign tone \n 7. Send b'card\n 8.Options\n 9. Speed dials\n 10. Voice tags");

            const option = prompt("Choose Option");
            switch(option){
                case "1": search();
                    break;
                case "2": serviceNos();
                    break;
                case "3": addName();
                    break;
                case "4": erase();
                    break;
                case "5": edit();
                    break;
                case "6": assignTone();
                    break;
                case "7": sendBCard();
                    break;
                case "8": options();
                    break;
                case "9": speedDials();
                    break;
                case "10": voiceTags();
                default: phoneBook();
            }
            function search() {

                console.log("0. Exit");
                const  option = prompt("Enter option: ");


                switch (option){
                    case 0: phoneBook();
                }

            }
            function serviceNos() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function addName() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function erase() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function edit() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function assignTone() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function sendBCard() {
                console.log("0. Exit");

                const  option = prompt("Enter option: ");
                switch (option){
                    case 0: phoneBook();
                }

            }
            function options() {
                console.log("1. Type of view\n 2. memory status");

                const  option = prompt("Enter option: ");

                switch (option){
                    case 1: typeOfView();
                        break;
                    case 2: memoryStatus();
                        break;
                }
                function typeOfView() {
                    console.log("0. Exit");

                    const  choose = prompt("Enter option: ");

                    switch (choose){
                        case 0: options();
                    }

                }
                function memoryStatus() {
                    console.log("0. Exit");

                    const  choose = prompt("Enter option: ");

                    switch (choose){
                        case 0: options();
                    }
                }

            }
            function speedDials() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: phoneBook();
                }

            }
            function voiceTags() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: phoneBook();
                }
            }

        }
        function messages() {

            console.log("1. Write messages\n 2. Inbox\n 3. outbox\n 4. Picture message\n 5. Templates\n 6. Smileys\n 7. Message settings\n 8. Info service\n 9. Voice mailbox number\n 10. Service command editor");

            const option = prompt("Choose option");

            switch (option){
                case 1: writeMessage();
                    break;
                case 2: inbox();
                    break;
                case 3: outbox();
                    break;
                case 4: pictureMessages();
                    break;
                case 5: templates();
                    break;
                case 6: smileys();
                    break;
                case 7: messageSettings();
                    break;
                case 8:infoServices();
                    break;
                case 9: voiceMailboxNumber();
                    break;
                case 10:serviceCommandEditor();
                    break;
                default: messages()
            }
            function writeMessage() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function inbox() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function outbox() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function pictureMessages() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function templates() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function smileys() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }
            function messageSettings() {

                console.log("1. Set1\n 2. Common");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 1: set1();
                        break;
                    case 2: common();
                        break;
                    default:messageSettings();
                }
                function set1() {
                    console.log("1. Message centre number\n 2. Message sent as\n  3. Message validity");

                    const  choose = prompt("Enter option: ");

                    switch (choose){
                        case 1: messageCentreNumber();
                            break;
                        case 2: messageSentAs();
                            break;
                        case 3: messageValidity();
                            break;
                        default:set1();
                    }
                    function messageCentreNumber() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");


                        switch (choose){
                            case 0: set1();
                        }

                    }
                    function messageSentAs() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");

                        switch (choose){
                            case 0: set1();
                        }


                    }
                    function messageValidity() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");

                        switch (choose){
                            case 0: set1();
                        }

                    }

                }
                function common() {
                    console.log("1.Delivery reports\n 2. Reply via same centre\n Character support");

                    const  choose = prompt("Enter option: ");

                    switch (choose){
                        case 1: deliveryReports();
                            break;
                        case 2: replyViaSameCentre();
                            break;
                        case 3: characterSupport();
                            break;
                        default: common();
                    }
                    function deliveryReports() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");


                        switch (choose){
                            case 0: common();
                        }

                    }
                    function replyViaSameCentre() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");


                        switch (choose){
                            case 0: common();
                        }

                    }
                    function characterSupport() {
                        console.log("0. Exit");

                        const  choose = prompt("Enter option: ");

                        switch (choose){
                            case 0: common();
                        }


                    }

                }

            }
            function infoServices() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");


                switch (choose){
                    case 0: messages();
                }

            }
            function voiceMailboxNumber() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");


                switch (choose){
                    case 0: messages();
                }

            }
            function serviceCommandEditor() {
                console.log("0. Exit");

                const  choose = prompt("Enter option: ");

                switch (choose){
                    case 0: messages();
                }

            }


        }
        function chat() {
            console.log("0. Exit");

            const  choose = prompt("Enter option: ");


            switch (choose){
                case 0: messages();
            }
        }
        function callRegister() {

            console.log(`1.Missed calls
                        2.Received calls
                        3.Dialed numbers
                        4.Erase recent call lists
                        5.Show call duration
                        6.Show call costs
                        7.call cost settings
                        8.Prepaid credit
                        0. Exit`);
            console.log("Enter option: ");

            let number = parseInt(prompt());

            switch(number){
                case 1:
                    missedCalls();
                    break;
                case 2:
                    receivedCalls();
                    break;
                case 3:
                    dialedNumbers();
                    break;
                case 4:
                    eraseRecentCallLists();
                    break;
                case 5:
                    showCallDuration();
                    break;
                case 6:
                    showCallCosts();
                    break;
                case 7:
                    callCostSettings();
                    break;
                case 8:
                    prepaidCredit();
                    break;
                case 0:
                    this.mainMenu();
                    break;
                default:
                    callRegister();
            }

            function missedCalls() {

            }

            function receivedCalls() {

            }

            function dialedNumbers() {

            }

            function eraseRecentCallLists() {

            }

            function showCallCosts() {

            }

            function callCostSettings() {

            }

            function prepaidCredit() {
            }

        }
        function showCallDuration() {

            console.log(`1.Last call duration
                    2.All calls duration
                    3.Received calls duration
                    4.Dialed calls duration
                    5.Clear timers
                    0. Exit`);
            console.log("Enter number: ");

            let number = parseInt(prompt());
            switch(number){
                case 1:
                    lastCallDuration();
                    break;
                case 2:
                    allCallsDuration();
                    break;
                case 3:
                    receivedCallsDuration();
                    break;
                case 4:
                    dialedCallsDuration();
                    break;
                case 5:
                    clearTimers();
                    break;
                case 0:
                    callRegister();
                    break;
                default:
                    showCallDuration();
            }
            function lastCallDuration() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallDuration();
                        break;
                    default:
                        lastCallDuration();
                }

            }
            function allCallsDuration() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallDuration();
                        break;
                    default:
                        allCallsDuration();
                }

            }
            function receivedCallsDuration() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallDuration();
                        break;
                    default:
                        receivedCallsDuration();
                }

            }
            function dialedCallsDuration() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallDuration();
                        break;
                    default:
                        dialedCallsDuration();
                }

            }
            function clearTimers() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallDuration();
                        break;
                    default:
                       clearTimers();
                }

            }
            function showCallCosts() {

                console.log(`1.Last call cost
                            2.All calls cost
                            3.Clear counters
                            0. Exit`);
                console.log("Enter option: ");

                let number = parseInt(prompt());

                function clearCounters() {

                }

                switch (number) {
                    case 1:
                        lastCallCost();
                        break;
                    case 2:
                        allCallsCost();
                        break;
                    case 3:
                        clearCounters();
                        break;
                    case 0:
                        callRegister();
                        break;
                    default:
                        showCallCosts()
                }

            }
            function lastCallCost() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallCosts();
                        break;
                    default:
                        lastCallCost();
                }

            }
            function allCallsCost() {

                console.log("0. Exit");
                console.log("Enter option: ");

                let number = parseInt(prompt());
                switch (number) {
                    case 0:
                        showCallCosts();
                        break;
                    default:
                        allCallsCost();
                }

            }



        }

        function tones() {

        }

        function settings() {

        }

        function callDivert() {

        }


        function games() {

        }

        function calculator() {

        }

        function reminder() {

        }

        function clock() {

        }

        function profile() {

        }

        function simServices() {
        }

    }



}