let Q = ["rinngo", "banana", "meronn", "mango-", "itigo", "suika", "tomato", "ti-zu"];//問題文
        let Q_No = Math.floor(Math.random() * Q.length);//問題をランダムで出題する
        var Q_nihongoMondai = [["りんご"], ["ばなな"], ["めろん"], ["まんごー"], ["いちご"], ["すいか"],
        ["とまと"], ["ちーず"]];
        var Q_nihon = [["り", "ん", "ご"], ["ば", "な", "な"], ["め", "ろ", "ん"], ["ま", "ん", "ご","ー"], ["い", "ち", "ご"], ["す", "い", "か"],
        ["と", "ま", "と"], ["ち", "ー", "ず"]];
        let taip = [""];
        var Q_nihon_new = [];
        let Q_gazou = ["Q_img/apple.png", "Q_img/banana.png", "Q_img/meron.png", "Q_img/mango-.png",
            "Q_img/itigo.png", "Q_img/suika.png", "Q_img/tomato.png", "Q_img/ti-zu.png"]
        let idx1 = 0;
        let idx2 = 0;
        let idx3 = 0;
        let idx3_2 = 1;
        let idx4 = 0;
        let roc1 = 0;
        let roc2 = 0;
        let tyousei = 0;
        let score = 0;

        for (let i = 0; i < Q_nihon[Q_No].length; i++) {
            if (Q_nihon[Q_No][i] === "っ" && i + 1 < Q_nihon[Q_No].length) {
                Q_nihon_new.push(Q_nihon[Q_No][i] + Q_nihon[Q_No][i + 1]);
                i++; // "っ" の次の文字は既に処理したので、1つスキップ
            }
            else {
                Q_nihon_new.push(Q_nihon[Q_No][i]);
            }
        }

        let seikaitango = [];
        let f = 0;
        for (let i = 0; i < Q_nihon_new.length; i++) {
            seikaitango[i] = (kanaToRoman(Q_nihon_new[i]));
        }


        window.onload = function onLoad() {
            document.getElementById("result").innerHTML = '';
        }

        let start = 0;
        let syuryou = 0;
        window.onload = function onLoad() {
            document.getElementById("nihongo").innerHTML = '<font color rgb(154, 248, 255)>' + "問題" + '</font>';//作成途中
            window.addEventListener("keydown", push_Keydown);
        }
        function doReload() {
            // reloadメソッドによりページをリロード
            window.location.reload();
        }
        function push_Keydown(event) {
            const keyCode = event.key;

            if (keyCode == 'Escape') {
                syuryou = 1;
                doReload();
            }

            if (start == 1 && syuryou == 0) {
                if (syuryou == 0 && roc2 == 0 && seikaitango[idx1][idx2][idx3][idx4] === keyCode) {
                    score++;
                    roc1 = 1;
                    if (seikaitango[idx1][idx2][idx3][idx4] === "s") {
                        roc1 = 0;
                    }
                    taip = taip + keyCode;
                    document.getElementById("start").innerHTML = '<font color="blue">' + taip + '</font>';
                    idx4++;
                    if (seikaitango[idx1][idx2][idx3][idx4] === undefined) {
                        idx4 = 0;
                        idx1++;
                        roc1 = 0;
                        tyousei++;
                    }
                    if (syuryou == 0 && seikaitango.length === tyousei) {
                        seikaitango = [];
                        Q_nihon_new = [];
                        taip = [];
                        tyousei = 0;
                        idx1 = 0;
                        document.getElementById("start").innerHTML = '<font color="white">' + '解答' + '</font>';
                        Q_No = Math.floor(Math.random() * Q.length);
                        startimg.setAttribute('src', Q_gazou[Q_No]);
                        for (let i = 0; i < Q_nihon[Q_No].length; i++) {
                            if (Q_nihon[Q_No][i] === "っ" && i + 1 < Q_nihon[Q_No].length) {
                                Q_nihon_new.push(Q_nihon[Q_No][i] + Q_nihon[Q_No][i + 1]);
                                i++; // "っ" の次の文字は既に処理したので、1つスキップ
                            }
                            else {
                                Q_nihon_new.push(Q_nihon[Q_No][i]);
                            }

                        }
                        for (let i = 0; i < Q_nihon_new.length; i++) {
                            seikaitango[i] = (kanaToRoman(Q_nihon_new[i]));
                        }
                        document.getElementById("nihongo").innerHTML = Q_nihongoMondai[Q_No];
                    }
                }

                else if (seikaitango[tyousei][0].length == 2) {
                    if (syuryou == 0 && seikaitango[idx1][idx2][idx3_2][idx4] === keyCode && roc1 == 0) {
                        score++;
                        roc2 = 1;
                        taip = taip + keyCode;
                        document.getElementById("start").innerHTML = '<font color="blue">' + taip + '</font>';
                        idx4++;
                        if (seikaitango[idx1][idx2][idx3_2][idx4] === undefined) {
                            idx4 = 0;
                            idx1++;
                            roc2 = 0;
                            tyousei++;
                        }

                        if (syuryou == 0 && seikaitango.length === tyousei) {
                            seikaitango = [];
                            Q_nihon_new = [];
                            taip = [];
                            tyousei = 0;
                            idx1 = 0;
                            document.getElementById("start").innerHTML = '<font color="white">' + '解答' + '</font>';
                            Q_No = Math.floor(Math.random() * Q.length);
                            startimg.setAttribute('src', Q_gazou[Q_No]);
                            for (let i = 0; i < Q_nihon[Q_No].length; i++) {
                                if (Q_nihon[Q_No][i] === "っ" && i + 1 < Q_nihon[Q_No].length) {
                                    Q_nihon_new.push(Q_nihon[Q_No][i] + Q_nihon[Q_No][i + 1]);
                                    i++; // "っ" の次の文字は既に処理したので、1つスキップ
                                }
                                else {
                                    Q_nihon_new.push(Q_nihon[Q_No][i]);
                                }

                            }
                            for (let i = 0; i < Q_nihon_new.length; i++) {
                                seikaitango[i] = (kanaToRoman(Q_nihon_new[i]));
                            }
                            document.getElementById("nihongo").innerHTML = Q_nihongoMondai[Q_No];
                        }
                    }
                    else {
                        document.getElementById("start").innerHTML = '<font color="blue">' + taip + '</font>' + '<font color="red">' + keyCode + '</font>';
                    }
                }
                else {
                    document.getElementById("start").innerHTML = '<font color="blue">' + taip + '</font>' + '<font color="red">' + keyCode + '</font>';
                }
            }
            if (start == 0 && keyCode === 'Enter') {
                document.getElementById("nihongo").innerHTML = Q_nihongoMondai[Q_No];
                document.getElementById("start").innerHTML = '<font color="white">' + '解答' + '</font>';
                startimg.setAttribute('src', Q_gazou[Q_No]);
                start = 1;
                const mondai = document.querySelectorAll('.mondai');
                for (const element of mondai) {
                    element.style.color = 'black';
                }
                startShowing();
            }
            if (keyCode === 'r' && syuryou == 1) {
                doReload();
            }
        }


        var PassSec;  // 秒数カウント用変数
        // 繰り返し処理の開始
        function startShowing() {
            PassSec = 60;   // カウンタのリセット
            PassageID = setInterval('showPassage()', 1000);   // タイマーをセット(1000ms間隔)
        }

        // 繰り返し処理の中身
        function showPassage() {
            PassSec--;   // カウントアップ
            var msg = PassSec;   // 表示文作成
            document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
            if (PassSec <= 0) {
                stopShowing();
            }
        }

        // 繰り返し処理の中止
        function stopShowing() {
            clearInterval(PassageID);   // タイマーのクリア
            syuryou = 1;
            end();
        }

        function end() {
            const box = document.querySelectorAll('.box');
            for (const element of box) {
                element.style.display = 'none';
            }
            document.getElementById("restart").innerHTML = '<h1><button onclick="doReload()">再チャレンジ</button></h1>';
            owari = 1;
            document.getElementById("start").innerHTML = '';
            document.getElementById("nihongo").innerHTML = '';
            document.getElementById("result").innerHTML = '結果は' + score + '打鍵です。';
            if (score >= 50) {
                startimg.setAttribute('src', 'result_img/hayai.png');
                document.getElementById("scoresyurui").innerHTML = 'fast';
                //ゴールド表示
                const result_gold = document.querySelectorAll('.result_gold');
                for (const element of result_gold) {
                    element.classList.remove('result_blonz');
                    element.classList.remove('result_silver');
                    element.classList.add('result_gold');
                    element.style.display = 'block';
                }
            }
            else if (score >= 25) {
                startimg.setAttribute('src', 'result_img/hutuu.png');
                document.getElementById("scoresyurui").innerHTML = 'normal';
                //シルバー表示
                const result_silver = document.querySelectorAll('.result_silver');
                for (const element of result_silver) {
                    element.classList.remove('result_blonz');
                    element.classList.remove('result_gold');
                    element.classList.add('result_silver');
                    element.style.display = 'block';
                }
            }
            else {
                startimg.setAttribute('src', 'result_img/osoi.png');
                document.getElementById("scoresyurui").innerHTML = 'slow';
                //ブロンズ表示
                const result_blonz = document.querySelectorAll('.result_blonz');
                for (const element of result_blonz) {
                    element.classList.remove('result_gold');
                    element.classList.remove('result_silver');
                    element.classList.add('result_blonz');
                    element.style.display = 'block';
                }
            }
        }
        //ひらがな変換
        /**
        * ひらがなまたはカタカナからローマ字へ変換
        * @param {string} targetStr ローマ字へ変換する文字列（変換元の文字列）
        * @param {"hepburn"|"kunrei"} [type="hepburn"] ローマ字の種類
        * @param {Object} [options] その他各種オプション
        *                           {boolean} [options.bmp=true] ... "ん"（n）の次がb.m.pの場合にnからmへ変換するかどうか
        *                           {"latin"|"hyphen"} [options.longSound="latin"] ... 長音の表し方
        * @return {string} ローマ字へ変換された文字列を返す
        */
        function kanaToRoman(kana) {
            const romanMap = {
                'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu'], 'え': ['e'], 'お': ['o'],
                'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
                'さ': ['sa'], 'し': ['si', 'shi'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
                'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
                'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
                'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
                'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
                'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
                'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
                'わ': ['wa'], 'ゐ': ['wyi'], 'ゑ': ['wye'], 'を': ['wo'], 'ん': ['nn', 'xn', 'n'],
                'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
                'ざ': ['za'], 'じ': ['ji', 'zi'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
                'だ': ['da'], 'ぢ': ['di'], 'づ': ['du'], 'で': ['de'], 'ど': ['do'],
                'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
                'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
                'うぁ': ['wha'], 'うぃ': ['whi'], 'うぇ': ['whe'], 'うぉ': ['who'],
                'きゃ': ['kya'], 'きぃ': ['kyi'], 'きゅ': ['kyu'], 'きぇ': ['kye'], 'きょ': ['kyo'],
                'くぁ': ['qa', 'qwa'], 'くぃ': ['qi', 'qwi'], 'くぇ': ['qe', 'qwe'], 'くぉ': ['qo', 'qwo'], 'くゃ': ['qya'], 'くゅ': ['qyu'], 'くょ': ['qyo'],
                'しゃ': ['sya', 'sha'], 'しぃ': ['syi'], 'しゅ': ['syu', 'shu'], 'しぇ': ['sye', 'she'], 'しょ': ['syo', 'sho'],
                'つぁ': ['tsa'], 'つぃ': ['tsi'], 'つぇ': ['tse'], 'つぉ': ['tso'],
                'ちゃ': ['tya', 'cha'], 'ちぃ': ['tyi'], 'ちゅ': ['tyu', 'chu'], 'ちぇ': ['tye', 'che'], 'ちょ': ['tyo', 'cho'],
                'てゃ': ['tha'], 'てぃ': ['thi'], 'てゅ': ['thu'], 'てぇ': ['the'], 'てょ': ['tho'],
                'とぁ': ['twa'], 'とぃ': ['twi'], 'とぅ': ['twu'], 'とぇ': ['twe'], 'とぉ': ['two'],
                'ひゃ': ['hya'], 'ひぃ': ['hyi'], 'ひゅ': ['hyu'], 'ひぇ': ['hye'], 'ひょ': ['hyo'],
                'ふぁ': ['fa'], 'ふぃ': ['fi'], 'ふぇ': ['fe'], 'ふぉ': ['fo'],
                'にゃ': ['nya'], 'にぃ': ['nyi'], 'にゅ': ['nyu'], 'にぇ': ['nye'], 'にょ': ['nyo'],
                'みゃ': ['mya'], 'みぃ': ['myi'], 'みゅ': ['myu'], 'みぇ': ['mye'], 'みょ': ['myo'],
                'りゃ': ['rya'], 'りぃ': ['ryi'], 'りゅ': ['ryu'], 'りぇ': ['rye'], 'りょ': ['ryo'],
                'ヴぁ': ['va'], 'ヴぃ': ['vi'], 'ヴ': ['vu'], 'ヴぇ': ['ve'], 'ヴぉ': ['vo'],
                'ぎゃ': ['gya'], 'ぎぃ': ['gyi'], 'ぎゅ': ['gyu'], 'ぎぇ': ['gye'], 'ぎょ': ['gyo'],
                'ぐぁ': ['gwa'], 'ぐぃ': ['gwi'], 'ぐぅ': ['gwu'], 'ぐぇ': ['gwe'], 'ぐぉ': ['gwo'],
                'じゃ': ['ja', 'zya'], 'じぃ': ['jyi', 'zyi'], 'じゅ': ['ju', 'zyu'], 'じぇ': ['je', 'zye'], 'じょ': ['jo', 'zyo'],
                'でゃ': ['dha'], 'でぃ': ['dhi'], 'でゅ': ['dhu'], 'でぇ': ['dhe'], 'でょ': ['dho'],
                'ぢゃ': ['dya'], 'ぢぃ': ['dyi'], 'ぢゅ': ['dyu'], 'ぢぇ': ['dye'], 'ぢょ': ['dyo'],
                'びゃ': ['bya'], 'びぃ': ['byi'], 'びゅ': ['byu'], 'びぇ': ['bye'], 'びょ': ['byo'],
                'ぴゃ': ['pya'], 'ぴぃ': ['pyi'], 'ぴゅ': ['pyu'], 'ぴぇ': ['pye'], 'ぴょ': ['pyo'],
                'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
                'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'], 'っ': ['ltu', 'xtu'],
                'ー': ['-'], ',': [','], '.': ['.'], '、': [','], '。': ['.'],
                '・': ['/'], '、': [','], '。': ['.'], '・': ['/']
            };

            let remStr = String(kana), slStr, roman, next;
            let result = [];

            function splice() {
                let oneChar = remStr.slice(0, 1);
                remStr = remStr.slice(1);
                return oneChar;
            }

            function isSmallChar() {
                return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょ]$/);
            }

            while (remStr) {
                slStr = splice();
                next = romanMap[remStr.slice(0, 1)];
                if (slStr == 'っ') {
                    if (!remStr || remStr.match(/^[,.]/) || !next || next[0].match(/^[aiueon]/)) {
                        roman = [...romanMap[slStr]];
                        result.push(roman);
                    } else {
                        slStr = splice();
                        if (isSmallChar()) slStr += splice();
                        roman = [...romanMap[slStr].map(str => str.slice(0, 1) + str)];
                        result.push(roman);
                    }
                } else {
                    if (isSmallChar()) slStr += splice();
                    if (slStr == '&') {
                        slStr += remStr.slice(0, 7);
                        remStr = remStr.slice(7);
                    }
                    roman = romanMap[slStr] ? [...romanMap[slStr]] : [...slStr];
                    if (slStr == 'ん') {
                        if (!remStr) {
                            roman.pop();
                        } else {
                            if (next[0].match(/^[aiueony]/)) roman.pop();
                        }
                    }
                    result.push(roman);
                }
            }
            return result;
        }