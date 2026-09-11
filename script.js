// ══════════════════════════════════════════════
// ══ DATA — এখানেই সব কনটেন্ট/ডেটা যোগ করবেন ══
// ══════════════════════════════════════════════

// ★★★ ARTICLES — সার্চ পেজে দেখানো তথ্য কার্ড ★★★
// নতুন আর্টিকেল যোগ করতে চাইলে এই ফরম্যাটে নিচে (id:15 এর পরে) একটা লাইন যোগ করুন:
// {id:16, cat:'visa', title:'শিরোনাম', desc:'বর্ণনা', tags:['ট্যাগ১','ট্যাগ২'], color:'#F59E0B'},
//
// cat অবশ্যই এই ৫টার একটা: visa | jlpt | life | job | school
// color মিলিয়ে দিন:  visa=#F59E0B  jlpt=#2563EB  life=#10B981  job=#7C3AED  school=#0D9488
const articles = [
  {id:1,cat:'visa',title:'在留カードの更新手続き（完全ガイド）',desc:'更新できる期間・必要書類・申請場所・よくあるミスをわかりやすく解説。留学ビザ（留学）・就労ビザ対応。',tags:['在留カード','更新','入管'],color:'#F59E0B'},
  {id:2,cat:'visa',title:'留学ビザから就労ビザへの変更方法',desc:'卒業後の在留資格変更申請の流れ。技術・人文知識・国際業務ビザへの変更に必要な書類と注意点。',tags:['ビザ変更','就労ビザ','卒業後'],color:'#F59E0B'},
  {id:3,cat:'visa',title:'資格外活動許可（アルバイト）の申請方法',desc:'留学生がアルバイトをするために必要な許可。週28時間ルール、申請場所、更新タイミングを解説。',tags:['アルバイト','許可','週28時間'],color:'#F59E0B'},
  {id:4,cat:'jlpt',title:'JLPT N2 合格への最短ルート（3ヶ月プラン）',desc:'語彙・文法・読解・聴解の効率的な学習順序。おすすめ参考書・アプリ・YouTube教材も紹介。',tags:['N2','勉強法','3ヶ月'],color:'#2563EB',
    // ▼▼▼ সপ্তাহের শিডিউল এখানে ▼▼▼ প্রতি সপ্তাহে এই একই রুটিন ৩ মাস ধরে রিপিট করবেন
    // ফরম্যাট: {day:'曜日', skill:'কী করবেন', time:'কত সময়', icon:'emoji'},
    schedule:[
      {day:'月',dayFull:'月曜日',skill:'<ruby>語彙<rt>ごい</rt></ruby>：新しい<ruby>単語<rt>たんご</rt></ruby>20<ruby>語<rt>ご</rt></ruby>を<ruby>暗記<rt>あんき</rt></ruby>する',time:'30分',icon:'📖'},
      {day:'火',dayFull:'火曜日',skill:'<ruby>文法<rt>ぶんぽう</rt></ruby>：新しい<ruby>文法<rt>ぶんぽう</rt></ruby>パターンを2つ<ruby>学<rt>まな</rt></ruby>ぶ',time:'30分',icon:'✏️'},
      {day:'水',dayFull:'水曜日',skill:'<ruby>読解<rt>どっかい</rt></ruby>：<ruby>長文<rt>ちょうぶん</rt></ruby><ruby>読解<rt>どっかい</rt></ruby>を1つ<ruby>解<rt>と</rt></ruby>く（<ruby>時間<rt>じかん</rt></ruby>を<ruby>計<rt>はか</rt></ruby>る）',time:'40分',icon:'📄'},
      {day:'木',dayFull:'木曜日',skill:'<ruby>聴解<rt>ちょうかい</rt></ruby>：NHKやYouTubeで<ruby>耳<rt>みみ</rt></ruby>を<ruby>慣<rt>な</rt></ruby>らす',time:'30分',icon:'🎧'},
      {day:'金',dayFull:'金曜日',skill:'<ruby>語彙<rt>ごい</rt></ruby>・<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>復習<rt>ふくしゅう</rt></ruby>（<ruby>週<rt>しゅう</rt></ruby>の<ruby>前半分<rt>ぜんはんぶん</rt></ruby>）',time:'30分',icon:'🔁'},
      {day:'土',dayFull:'土曜日',skill:'<ruby>模擬試験<rt>もぎしけん</rt></ruby><ruby>形式<rt>けいしき</rt></ruby>で<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>く',time:'60分',icon:'📝'},
      {day:'日',dayFull:'日曜日',skill:'<ruby>弱点<rt>じゃくてん</rt></ruby>の<ruby>見直<rt>みなお</rt></ruby>し・<ruby>自由<rt>じゆう</rt></ruby><ruby>休憩<rt>きゅうけい</rt></ruby>',time:'30分',icon:'☕'},
    ]
    // ▲▲▲ この一週間のルーティンを3ヶ月間繰り返してください ▲▲▲
  },
  {id:5,cat:'jlpt',title:'N2文法 重要ポイント150選',desc:'試験によく出る文法パターンを例文つきで解説。〜にもかかわらず、〜をめぐって、〜かねない など。',tags:['N2','文法','試験'],color:'#2563EB',
    // ▼▼▼ এখানে N2 গ্রামার পয়েন্ট যোগ করুন ▼▼▼
    // ফরম্যাট: {pattern:'文法', meaning:'ইংরেজি অর্থ', example:'উদাহরণ বাক্য (ruby ট্যাগসহ)', translation:'বাক্যের অনুবাদ'},
    grammar:[
      {pattern:'〜にもかかわらず',meaning:'despite, in spite of',example:'<ruby>雨<rt>あめ</rt></ruby>にもかかわらず、<ruby>試合<rt>しあい</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>われた。',translation:'Despite the rain, the match was held.'},
      {pattern:'〜をめぐって',meaning:'concerning, over (a dispute)',example:'その<ruby>土地<rt>とち</rt></ruby>をめぐって、<ruby>争<rt>あらそ</rt></ruby>いが<ruby>続<rt>つづ</rt></ruby>いている。',translation:'A dispute continues over that land.'},
      {pattern:'〜かねない',meaning:'might (do something bad), could result in',example:'そんな<ruby>運転<rt>うんてん</rt></ruby>をすると、<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしかねない。',translation:'Driving like that could cause an accident.'},
      {pattern:'〜を問わず',meaning:'regardless of',example:'<ruby>経験<rt>けいけん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>問<rt>と</rt></ruby>わず、<ruby>応募<rt>おうぼ</rt></ruby>できます。',translation:'You can apply regardless of experience.'},
      {pattern:'〜てはじめて',meaning:'only after doing ~, not until ~',example:'<ruby>親<rt>おや</rt></ruby>になってはじめて、<ruby>親<rt>おや</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちが<ruby>分<rt>わ</rt></ruby>かった。',translation:'Only after becoming a parent did I understand my parents\' feelings.'},
      {pattern:'〜ないことには',meaning:'unless ~, without doing ~',example:'<ruby>実際<rt>じっさい</rt></ruby>にやってみないことには、<ruby>結果<rt>けっか</rt></ruby>は<ruby>分<rt>わ</rt></ruby>からない。',translation:'You won\'t know the result unless you actually try it.'},
      {pattern:'〜あげく',meaning:'after all that (negative result)',example:'さんざん<ruby>悩<rt>なや</rt></ruby>んだあげく、<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めることにした。',translation:'After much worrying, I decided to quit the company.'},
      {pattern:'〜末に',meaning:'after (much effort/time), finally',example:'<ruby>長<rt>なが</rt></ruby>い<ruby>議論<rt>ぎろん</rt></ruby>の<ruby>末<rt>すえ</rt></ruby>に、<ruby>結論<rt>けつろん</rt></ruby>が<ruby>出<rt>で</rt></ruby>た。',translation:'After a long discussion, a conclusion was reached.'},
      {pattern:'〜に従って',meaning:'in accordance with, as ~',example:'<ruby>規則<rt>きそく</rt></ruby>に<ruby>従<rt>したが</rt></ruby>って、<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>進<rt>すす</rt></ruby>めてください。',translation:'Please proceed with the procedure according to the rules.'},
      {pattern:'〜ものの',meaning:'although, even though',example:'<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだものの、<ruby>熱<rt>ねつ</rt></ruby>は<ruby>下<rt>さ</rt></ruby>がらなかった。',translation:'Although I took medicine, my fever didn\'t go down.'},
      {pattern:'〜どころか',meaning:'far from ~, let alone',example:'<ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>休<rt>やす</rt></ruby>むどころか<ruby>寝<rt>ね</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>もない。',translation:'I\'m so busy that, far from resting, I don\'t even have time to sleep.'},
      {pattern:'〜ばかりか',meaning:'not only ~ but also',example:'<ruby>彼<rt>かれ</rt></ruby>は<ruby>頭<rt>あたま</rt></ruby>がいいばかりか、<ruby>性格<rt>せいかく</rt></ruby>もいい。',translation:'He\'s not only smart, but also has a good personality.'},
      {pattern:'〜わけにはいかない',meaning:'cannot afford to, can\'t just ~',example:'<ruby>約束<rt>やくそく</rt></ruby>したので、<ruby>休<rt>やす</rt></ruby>むわけにはいかない。',translation:'Since I made a promise, I can\'t just take a day off.'},
      {pattern:'〜ざるを得ない',meaning:'cannot help but ~, have no choice but to',example:'<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えると、そうせざるを<ruby>得<rt>え</rt></ruby>ない。',translation:'Considering the situation, I have no choice but to do so.'},
      {pattern:'〜恐れがある',meaning:'there is a risk/fear that ~',example:'<ruby>台風<rt>たいふう</rt></ruby>で<ruby>洪水<rt>こうずい</rt></ruby>が<ruby>起<rt>お</rt></ruby>きる<ruby>恐<rt>おそ</rt></ruby>れがある。',translation:'There is a risk of flooding due to the typhoon.'},
      {pattern:'〜に限らず',meaning:'not limited to ~, not only ~',example:'この<ruby>問題<rt>もんだい</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず、<ruby>世界中<rt>せかいじゅう</rt></ruby>で<ruby>起<rt>お</rt></ruby>きている。',translation:'This problem is happening not only in Japan but around the world.'},
      {pattern:'〜からいうと',meaning:'judging from, from the point of view of',example:'<ruby>経験<rt>けいけん</rt></ruby>からいうと、この<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>速<rt>はや</rt></ruby>い。',translation:'Judging from experience, this method is the fastest.'},
      {pattern:'〜に相違ない',meaning:'there is no doubt that ~',example:'この<ruby>絵<rt>え</rt></ruby>は<ruby>本物<rt>ほんもの</rt></ruby>に<ruby>相違<rt>そうい</rt></ruby>ない。',translation:'There is no doubt this painting is genuine.'},
      {pattern:'〜に基づいて',meaning:'based on ~',example:'この<ruby>映画<rt>えいが</rt></ruby>は<ruby>実話<rt>じつわ</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づいて<ruby>作<rt>つく</rt></ruby>られた。',translation:'This movie was made based on a true story.'},
      {pattern:'〜に反して',meaning:'contrary to ~',example:'<ruby>予想<rt>よそう</rt></ruby>に<ruby>反<rt>はん</rt></ruby>して、テストは<ruby>簡単<rt>かんたん</rt></ruby>だった。',translation:'Contrary to expectations, the test was easy.'},
      {pattern:'〜を通じて',meaning:'through, throughout',example:'インターネットを<ruby>通<rt>つう</rt></ruby>じて、<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>繋<rt>つな</rt></ruby>がれる。',translation:'Through the internet, you can connect with people all over the world.'},
      {pattern:'〜あまり',meaning:'because of excessive ~',example:'<ruby>心配<rt>しんぱい</rt></ruby>のあまり、<ruby>夜<rt>よる</rt></ruby>も<ruby>眠<rt>ねむ</rt></ruby>れなかった。',translation:'I couldn\'t even sleep at night because I was so worried.'},
      {pattern:'〜以上（は）',meaning:'now that ~, since ~',example:'<ruby>約束<rt>やくそく</rt></ruby>した<ruby>以上<rt>いじょう</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ず<ruby>守<rt>まも</rt></ruby>らなければならない。',translation:'Now that I\'ve made a promise, I must keep it.'},
      {pattern:'〜おかげで',meaning:'thanks to ~',example:'<ruby>先生<rt>せんせい</rt></ruby>のおかげで合格できた。',translation:'Thanks to my teacher, I was able to pass.'},
      {pattern:'〜せいで',meaning:'because of ~ (negative result)',example:'<ruby>渋滞<rt>じゅうたい</rt></ruby>のせいで、<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れた。',translation:'Because of the traffic jam, I was late to the meeting.'},
      {pattern:'〜つつある',meaning:'in the process of ~ing',example:'<ruby>状況<rt>じょうきょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>改善<rt>かいぜん</rt></ruby>しつつある。',translation:'The situation is gradually improving.'},
      {pattern:'〜つつ（も）',meaning:'while ~, although ~',example:'よくないと<ruby>知<rt>し</rt></ruby>りつつ、タバコをやめられない。',translation:'Even though I know it\'s not good, I can\'t quit smoking.'},
      {pattern:'〜がたい',meaning:'hard to ~, difficult to ~',example:'その<ruby>話<rt>はなし</rt></ruby>は<ruby>信<rt>しん</rt></ruby>じがたい。',translation:'That story is hard to believe.'},
      {pattern:'〜ぬく',meaning:'to do ~ thoroughly, to the end',example:'<ruby>最後<rt>さいご</rt></ruby>まで<ruby>走<rt>はし</rt></ruby>り<ruby>抜<rt>ぬ</rt></ruby>いた。',translation:'I ran through to the very end.'},
      {pattern:'〜きり',meaning:'only, ever since',example:'<ruby>彼<rt>かれ</rt></ruby>とは<ruby>一度<rt>いちど</rt></ruby>会ったきりだ。',translation:'I\'ve only met him once.'},
      {pattern:'〜っこない',meaning:'there\'s no way ~',example:'こんな<ruby>難<rt>むずか</rt></ruby>しい<ruby>問題<rt>もんだい</rt></ruby>、できっこない。',translation:'There\'s no way I can solve such a difficult problem.'},
      {pattern:'〜ものだから',meaning:'because ~ (explaining a reason/excuse)',example:'<ruby>急<rt>きゅう</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったものだから、びしょ<ruby>濡<rt>ぬ</rt></ruby>れになった。',translation:'Because it suddenly started raining, I got soaked.'},
      {pattern:'〜ことから',meaning:'from the fact that ~, because ~',example:'その<ruby>色<rt>いろ</rt></ruby>から、この<ruby>花<rt>はな</rt></ruby>は「タンポポ」と<ruby>呼<rt>よ</rt></ruby>ばれる。',translation:'From its color, this flower is called a "dandelion".'},
      {pattern:'〜上で',meaning:'after doing ~, on the basis of ~',example:'よく<ruby>考<rt>かんが</rt></ruby>えた<ruby>上<rt>うえ</rt></ruby>で、<ruby>決<rt>き</rt></ruby>めてください。',translation:'Please decide after thinking it over carefully.'},
      {pattern:'〜上に',meaning:'in addition to ~, on top of ~',example:'この<ruby>部屋<rt>へや</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>い<ruby>上<rt>うえ</rt></ruby>に、<ruby>家賃<rt>やちん</rt></ruby>も<ruby>安<rt>やす</rt></ruby>い。',translation:'This room is spacious, and on top of that, the rent is cheap.'},
      {pattern:'〜ぬきで',meaning:'without ~, excluding ~',example:'<ruby>冗談<rt>じょうだん</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>きで、<ruby>本気<rt>ほんき</rt></ruby>で<ruby>話<rt>はな</rt></ruby>そう。',translation:'Let\'s talk seriously, joking aside.'},
      {pattern:'〜も〜ば〜も',meaning:'both ~ and ~',example:'この<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>くもあれば、<ruby>味<rt>あじ</rt></ruby>もいい。',translation:'This restaurant is both cheap and tasty.'},
      {pattern:'〜ようがない',meaning:'there is no way to ~',example:'<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>のしようがない。',translation:'Since I don\'t know the contact info, there\'s no way to contact them.'},
      {pattern:'〜てならない',meaning:'cannot help feeling ~',example:'<ruby>国<rt>くに</rt></ruby>の<ruby>家族<rt>かぞく</rt></ruby>が<ruby>心配<rt>しんぱい</rt></ruby>でならない。',translation:'I can\'t help worrying about my family back home.'},
      {pattern:'〜に決まっている',meaning:'must be ~, surely ~',example:'そんな<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>話<rt>はなし</rt></ruby>、<ruby>嘘<rt>うそ</rt></ruby>に<ruby>決<rt>き</rt></ruby>まっている。',translation:'Such an easy story must be a lie.'},
      {pattern:'〜に越したことはない',meaning:'it\'s best to ~, nothing beats ~',example:'<ruby>健康<rt>けんこう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>いうちに<ruby>気<rt>き</rt></ruby>をつけるに<ruby>越<rt>こ</rt></ruby>したことはない。',translation:'It\'s best to take care of your health early on.'},
      {pattern:'〜まい',meaning:'will surely not ~ (negative volition)',example:'もう二度と<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>はするまいと<ruby>思<rt>おも</rt></ruby>った。',translation:'I decided I would never make the same mistake again.'},
      {pattern:'〜ぬ／〜ん（打消し）',meaning:'formal negative form of ~ない',example:'その<ruby>問題<rt>もんだい</rt></ruby>は<ruby>解<rt>と</rt></ruby>けぬまま<ruby>時間切<rt>じかんぎ</rt></ruby>れになった。',translation:'Time ran out with that problem still unsolved.'},
      {pattern:'〜たところで',meaning:'even if ~ (won\'t help)',example:'<ruby>今<rt>いま</rt></ruby>から<ruby>急<rt>いそ</rt></ruby>いだところで、もう<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。',translation:'Even if I hurry now, it won\'t make it in time.'},
      {pattern:'〜ものなら',meaning:'if only ~ (were possible)',example:'できるものなら、もう<ruby>一度<rt>いちど</rt></ruby>やり<ruby>直<rt>なお</rt></ruby>したい。',translation:'If only I could, I\'d like to redo it once more.'},
      {pattern:'〜とはいえ',meaning:'although, that being said',example:'<ruby>安<rt>やす</rt></ruby>いとはいえ、<ruby>品質<rt>ひんしつ</rt></ruby>はしっかりしている。',translation:'Although it\'s cheap, the quality is solid.'},
      {pattern:'〜にしろ〜にしろ',meaning:'whether ~ or ~',example:'<ruby>行<rt>い</rt></ruby>くにしろ<ruby>行<rt>い</rt></ruby>かないにしろ、<ruby>連絡<rt>れんらく</rt></ruby>してください。',translation:'Whether you go or not, please contact me.'},
      {pattern:'〜くせに',meaning:'even though ~ (critical tone)',example:'<ruby>知<rt>し</rt></ruby>っているくせに、<ruby>教<rt>おし</rt></ruby>えてくれなかった。',translation:'Even though he knew, he didn\'t tell me.'},
      {pattern:'〜ながらも',meaning:'although ~, while ~',example:'<ruby>小<rt>ちい</rt></ruby>さいながらも、しっかりした<ruby>会社<rt>かいしゃ</rt></ruby>だ。',translation:'Though it\'s small, it\'s a solid company.'},
      {pattern:'〜てからでないと',meaning:'not until ~, unless ~ first',example:'<ruby>予約<rt>よやく</rt></ruby>してからでないと、<ruby>入店<rt>にゅうてん</rt></ruby>できません。',translation:'You can\'t enter unless you make a reservation first.'},
      {pattern:'〜べきではない',meaning:'should not ~',example:'そんなことは<ruby>言<rt>い</rt></ruby>うべきではなかった。',translation:'I shouldn\'t have said such a thing.'},
      {pattern:'〜てもかまわない',meaning:'it\'s fine even if ~, don\'t mind if ~',example:'<ruby>少<rt>すこ</rt></ruby>し<ruby>遅<rt>おく</rt></ruby>れてもかまいません。',translation:'It\'s fine even if you\'re a little late.'},
      {pattern:'〜さえ〜ば',meaning:'if only ~, as long as ~',example:'<ruby>時間<rt>じかん</rt></ruby>さえあれば、<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたい。',translation:'As long as I have time, I want to go on a trip.'},
    ]
    // ▲▲▲ এভাবেই আরো গ্রামার পয়েন্ট যোগ করতে পারবেন ▲▲▲
  },
  {id:6,cat:'jlpt',title:'N2単語 頻出リスト500語',desc:'過去問から分析した頻出単語をカテゴリ別に整理。漢字・読み方・意味・例文をセットで確認できる。',tags:['N2','単語','漢字'],color:'#2563EB',
    // ▼▼▼ এখানে N2 শব্দগুলো যোগ করুন ▼▼▼
    // ফরম্যাট: {word:'漢字/単語', reading:'ふりがな', meaning:'বাংলা/জাপানি অর্থ'},
    words:[
      {word:'愛称',reading:'あいしょう',meaning:'nickname'},
      {word:'愛情',reading:'あいじょう',meaning:'affection'},
      {word:'相次ぐ',reading:'あいつぐ',meaning:'to follow in succession'},
      {word:'合間',reading:'あいま',meaning:'interval, break'},
      {word:'敢えて',reading:'あえて',meaning:'daringly, not necessarily'},
      {word:'赤字',reading:'あかじ',meaning:'deficit, red letter'},
      {word:'明らか',reading:'あきらか',meaning:'clear, obvious'},
      {word:'飽きる',reading:'あきる',meaning:'to get tired of'},
      {word:'あくまで',reading:'あくまで',meaning:'to the end, persistently'},
      {word:'明くる日',reading:'あくるひ',meaning:'the next day'},
      {word:'明け方',reading:'あけがた',meaning:'dawn'},
      {word:'挙げる',reading:'あげる',meaning:'to raise'},
      {word:'鮮やか',reading:'あざやか',meaning:'vivid'},
      {word:'足跡',reading:'あしあと',meaning:'footprint'},
      {word:'足首',reading:'あしくび',meaning:'ankle'},
      {word:'扱う',reading:'あつかう',meaning:'to deal with, to handle'},
      {word:'厚かましい',reading:'あつかましい',meaning:'impudent'},
      {word:'暴れる',reading:'あばれる',meaning:'to act violently'},
      {word:'溢れる',reading:'あふれる',meaning:'to overflow'},
      {word:'甘える',reading:'あまえる',meaning:'to behave like a spoiled child'},
      {word:'甘やかす',reading:'あまやかす',meaning:'to spoil (someone)'},
      {word:'編み物',reading:'あみもの',meaning:'knitting'},
      {word:'誤る',reading:'あやまる',meaning:'to make a mistake'},
      {word:'怪しい',reading:'あやしい',meaning:'suspicious, doubtful'},
      {word:'危うい',reading:'あやうい',meaning:'dangerous, at risk'},
      {word:'あり得る',reading:'ありえる',meaning:'possible, could happen'},
      {word:'予め',reading:'あらかじめ',meaning:'beforehand, in advance'},
      {word:'改めて',reading:'あらためて',meaning:'once again, anew'},
      {word:'改める',reading:'あらためる',meaning:'to revise, to correct'},
      {word:'荒っぽい',reading:'あらっぽい',meaning:'rough, violent'},
      {word:'安易',reading:'あんい',meaning:'easy, simple'},
      {word:'安価',reading:'あんか',meaning:'low-priced, cheap'},
      {word:'安定',reading:'あんてい',meaning:'stability'},
      {word:'言い換える',reading:'いいかえる',meaning:'to say in other words'},
      {word:'言い出す',reading:'いいだす',meaning:'to begin to say'},
      {word:'言い訳',reading:'いいわけ',meaning:'excuse'},
      {word:'委員会',reading:'いいんかい',meaning:'committee'},
      {word:'勢い',reading:'いきおい',meaning:'energy, momentum'},
      {word:'生きがい',reading:'いきがい',meaning:'purpose in life'},
      {word:'幾らか',reading:'いくらか',meaning:'somewhat, some'},
      {word:'居心地',reading:'いごこち',meaning:'comfort (of a place)'},
      {word:'勇ましい',reading:'いさましい',meaning:'brave'},
      {word:'意志',reading:'いし',meaning:'will, intention'},
      {word:'維持',reading:'いじ',meaning:'maintenance'},
      {word:'意識',reading:'いしき',meaning:'consciousness, awareness'},
      {word:'異常',reading:'いじょう',meaning:'abnormal, disorder'},
      {word:'著しい',reading:'いちじるしい',meaning:'remarkable, striking'},
      {word:'一生懸命',reading:'いっしょうけんめい',meaning:'with all one\'s might'},
      {word:'意図',reading:'いと',meaning:'aim, intention'},
      {word:'移動',reading:'いどう',meaning:'movement'},
      {word:'居場所',reading:'いばしょ',meaning:'whereabouts'},
      {word:'異文化',reading:'いぶんか',meaning:'different culture'},
      {word:'移民',reading:'いみん',meaning:'immigration, immigrant'},
      {word:'嫌み',reading:'いやみ',meaning:'sarcasm'},
      {word:'いよいよ',reading:'いよいよ',meaning:'at last, finally'},
      {word:'意欲',reading:'いよく',meaning:'will, motivation'},
      {word:'依頼',reading:'いらい',meaning:'request'},
      {word:'医療',reading:'いりょう',meaning:'medical care'},
      {word:'飢える',reading:'うえる',meaning:'to starve'},
      {word:'薄める',reading:'うすめる',meaning:'to dilute'},
      {word:'疑わしい',reading:'うたがわしい',meaning:'doubtful'},
      {word:'映す',reading:'うつす',meaning:'to reflect, to project'},
      {word:'映る',reading:'うつる',meaning:'to be reflected, to be displayed'},
      {word:'上手い',reading:'うまい',meaning:'skillful, delicious'},
      {word:'生み出す',reading:'うみだす',meaning:'to create, to invent'},
      {word:'有無',reading:'うむ',meaning:'presence or absence'},
      {word:'敬う',reading:'うやまう',meaning:'to honor, to respect'},
      {word:'裏切る',reading:'うらぎる',meaning:'to betray'},
      {word:'恨む',reading:'うらむ',meaning:'to resent, to blame'},
      {word:'売り上げ',reading:'うりあげ',meaning:'sales'},
      {word:'上回る',reading:'うわまわる',meaning:'to surpass, to exceed'},
      {word:'運賃',reading:'うんちん',meaning:'fare'},
      {word:'運命',reading:'うんめい',meaning:'destiny, fate'},
      {word:'液体',reading:'えきたい',meaning:'liquid'},
      {word:'宴会',reading:'えんかい',meaning:'banquet'},
      {word:'描く',reading:'えがく',meaning:'to paint, to draw'},
      {word:'園芸',reading:'えんげい',meaning:'gardening'},
      {word:'演劇',reading:'えんげき',meaning:'theater, drama'},
      {word:'延長',reading:'えんちょう',meaning:'extension, prolongation'},
      {word:'援助',reading:'えんじょ',meaning:'assistance, aid'},
      {word:'演説',reading:'えんぜつ',meaning:'public speech'},
      {word:'往復',reading:'おうふく',meaning:'round trip'},
      {word:'応用',reading:'おうよう',meaning:'application, practical use'},
      {word:'大幅',reading:'おおはば',meaning:'large-scale, substantial'},
      {word:'大手',reading:'おおて',meaning:'major company'},
      {word:'凡そ',reading:'およそ',meaning:'roughly, approximately'},
      {word:'お陰様で',reading:'おかげさまで',meaning:'thankfully, fortunately'},
      {word:'補う',reading:'おぎなう',meaning:'to supplement, to compensate'},
      {word:'屋外',reading:'おくがい',meaning:'outdoors'},
      {word:'怠る',reading:'おこたる',meaning:'to neglect'},
      {word:'治まる',reading:'おさまる',meaning:'to be settled, to calm down'},
      {word:'納める',reading:'おさめる',meaning:'to pay, to supply'},
      {word:'治める',reading:'おさめる',meaning:'to govern, to rule'},
      {word:'押さえる',reading:'おさえる',meaning:'to hold down, to press'},
      {word:'惜しい',reading:'おしい',meaning:'regrettable, precious'},
      {word:'押し付ける',reading:'おしつける',meaning:'to force upon, to press against'},
      {word:'お世辞',reading:'おせじ',meaning:'flattery'},
      {word:'汚染',reading:'おせん',meaning:'pollution, contamination'},
      {word:'恐れる',reading:'おそれる',meaning:'to fear'},
      {word:'教わる',reading:'おそわる',meaning:'to be taught, to learn from'},
      {word:'穏やか',reading:'おだやか',meaning:'calm, gentle'},
      {word:'落ち込む',reading:'おちこむ',meaning:'to feel down, to fall into'},
      {word:'落ち着く',reading:'おちつく',meaning:'to calm down, to settle'},
      {word:'脅かす',reading:'おどかす',meaning:'to threaten'},
      {word:'訪れる',reading:'おとずれる',meaning:'to visit'},
      {word:'衰える',reading:'おとろえる',meaning:'to weaken, to decline'},
      {word:'驚かす',reading:'おどろかす',meaning:'to surprise'},
      {word:'大人しい',reading:'おとなしい',meaning:'gentle, obedient'},
      {word:'開会',reading:'かいかい',meaning:'opening (of a meeting)'},
      {word:'改行',reading:'かいぎょう',meaning:'new line, line break'},
      {word:'会計',reading:'かいけい',meaning:'accounting, bill'},
      {word:'介護',reading:'かいご',meaning:'nursing care'},
      {word:'会合',reading:'かいごう',meaning:'meeting, gathering'},
      {word:'解釈',reading:'かいしゃく',meaning:'interpretation'},
      {word:'回収',reading:'かいしゅう',meaning:'collection, recovery'},
      {word:'改正',reading:'かいせい',meaning:'revision, amendment'},
      {word:'快晴',reading:'かいせい',meaning:'clear weather'},
      {word:'解説',reading:'かいせつ',meaning:'explanation, commentary'},
      {word:'改造',reading:'かいぞう',meaning:'remodeling, reconstruction'},
      {word:'開通',reading:'かいつう',meaning:'opening (of a road/line)'},
      {word:'海底',reading:'かいてい',meaning:'seabed, bottom of the sea'},
      {word:'開発',reading:'かいはつ',meaning:'development'},
      {word:'回転',reading:'かいてん',meaning:'rotation, revolving'},
      {word:'回答',reading:'かいとう',meaning:'reply, answer'},
      {word:'開放',reading:'かいほう',meaning:'opening, liberation'},
      {word:'海洋',reading:'かいよう',meaning:'ocean'},
      {word:'改善',reading:'かいぜん',meaning:'improvement'},
      {word:'快適',reading:'かいてき',meaning:'comfortable, pleasant'},
      {word:'改良',reading:'かいりょう',meaning:'improvement'},
      {word:'却って',reading:'かえって',meaning:'on the contrary, instead'},
      {word:'抱える',reading:'かかえる',meaning:'to hold, to carry (a burden)'},
      {word:'関わる',reading:'かかわる',meaning:'to be concerned with'},
      {word:'家屋',reading:'かおく',meaning:'house, building'},
      {word:'価格',reading:'かかく',meaning:'price'},
      {word:'掲げる',reading:'かかげる',meaning:'to put up, to hoist'},
      {word:'欠かす',reading:'かかす',meaning:'to miss, to do without'},
      {word:'架空',reading:'かくう',meaning:'imaginary, fictitious'},
      {word:'各自',reading:'かくじ',meaning:'each person, individually'},
      {word:'拡充',reading:'かくじゅう',meaning:'expansion'},
      {word:'各地',reading:'かくち',meaning:'every place, various places'},
      {word:'拡張',reading:'かくちょう',meaning:'expansion, extension'},
      {word:'角度',reading:'かくど',meaning:'angle'},
      {word:'確率',reading:'かくりつ',meaning:'probability'},
      {word:'覚悟',reading:'かくご',meaning:'readiness, resolve'},
      {word:'確実',reading:'かくじつ',meaning:'certain, reliable'},
      {word:'隠す',reading:'かくす',meaning:'to hide'},
      {word:'拡大',reading:'かくだい',meaning:'enlargement, magnification'},
      {word:'隠れる',reading:'かくれる',meaning:'to be hidden'},
      {word:'過去',reading:'かこ',meaning:'the past'},
      {word:'火災',reading:'かさい',meaning:'fire, conflagration'},
      {word:'可決',reading:'かけつ',meaning:'approval, passage (of a bill)'},
      {word:'下降',reading:'かこう',meaning:'descent, decline'},
      {word:'過失',reading:'かしつ',meaning:'error, negligence'},
      {word:'箇所',reading:'かしょ',meaning:'point, spot, part'},
      {word:'下線',reading:'かせん',meaning:'underline'},
      {word:'加速',reading:'かそく',meaning:'acceleration'},
      {word:'課題',reading:'かだい',meaning:'homework, issue, task'},
      {word:'果実',reading:'かじつ',meaning:'fruit'},
      {word:'過剰',reading:'かじょう',meaning:'excess, surplus'},
      {word:'課税',reading:'かぜい',meaning:'taxation'},
      {word:'肩書き',reading:'かたがき',meaning:'title, position'},
      {word:'固まる',reading:'かたまる',meaning:'to harden, to solidify'},
      {word:'固める',reading:'かためる',meaning:'to harden, to strengthen'},
      {word:'活気',reading:'かっき',meaning:'liveliness, energy'},
      {word:'過程',reading:'かてい',meaning:'process'},
      {word:'記憶',reading:'きおく',meaning:'memory'},
      {word:'危機',reading:'きき',meaning:'crisis'},
      {word:'気候',reading:'きこう',meaning:'climate'},
      {word:'記号',reading:'きごう',meaning:'symbol, sign'},
      {word:'生地',reading:'きじ',meaning:'fabric, texture'},
      {word:'築く',reading:'きずく',meaning:'to build, to construct'},
      {word:'基礎',reading:'きそ',meaning:'foundation, basis'},
      {word:'機械',reading:'きかい',meaning:'machine'},
      {word:'期限',reading:'きげん',meaning:'time limit, deadline'},
      {word:'基地',reading:'きち',meaning:'base'},
      {word:'気体',reading:'きたい',meaning:'gas'},
      {word:'基盤',reading:'きばん',meaning:'foundation, base'},
      {word:'決まり',reading:'きまり',meaning:'rule, settlement'},
      {word:'休業',reading:'きゅうぎょう',meaning:'temporary closure'},
      {word:'休息',reading:'きゅうそく',meaning:'rest'},
      {word:'給与',reading:'きゅうよ',meaning:'pay, salary'},
      {word:'急激',reading:'きゅうげき',meaning:'sudden, rapid'},
      {word:'休養',reading:'きゅうよう',meaning:'rest, recuperation'},
      {word:'強化',reading:'きょうか',meaning:'strengthening, reinforcement'},
      {word:'規律',reading:'きりつ',meaning:'discipline, order'},
      {word:'奇妙',reading:'きみょう',meaning:'strange, odd'},
      {word:'気力',reading:'きりょく',meaning:'willpower, vigor'},
      {word:'空席',reading:'くうせき',meaning:'vacant seat'},
      {word:'区域',reading:'くいき',meaning:'zone, area'},
      {word:'苦痛',reading:'くつう',meaning:'pain, suffering'},
      {word:'苦情',reading:'くじょう',meaning:'complaint'},
      {word:'諄い',reading:'くどい',meaning:'tedious, repetitious'},
      {word:'区分',reading:'くぶん',meaning:'division, classification'},
      {word:'悔しい',reading:'くやしい',meaning:'frustrating, regrettable'},
      {word:'悔やむ',reading:'くやむ',meaning:'to regret, to mourn'},
      {word:'狂う',reading:'くるう',meaning:'to go mad, to go out of order'},
      {word:'玄人',reading:'くろうと',meaning:'expert, professional'},
      {word:'訓練',reading:'くんれん',meaning:'training'},
      {word:'配る',reading:'くばる',meaning:'to distribute'},
      {word:'稽古',reading:'けいこ',meaning:'practice, training'},
      {word:'敬語',reading:'けいご',meaning:'honorific language'},
      {word:'形式',reading:'けいしき',meaning:'form, formality'},
      {word:'継続',reading:'けいぞく',meaning:'continuation'},
      {word:'系統',reading:'けいとう',meaning:'system, lineage'},
      {word:'敬意',reading:'けいい',meaning:'respect'},
      {word:'計画',reading:'けいかく',meaning:'plan'},
      {word:'景気',reading:'けいき',meaning:'business conditions, economy'},
      {word:'傾向',reading:'けいこう',meaning:'tendency, trend'},
      {word:'軽傷',reading:'けいしょう',meaning:'minor injury'},
      {word:'経費',reading:'けいひ',meaning:'expenses'},
      {word:'経度',reading:'けいど',meaning:'longitude'},
      {word:'傑作',reading:'けっさく',meaning:'masterpiece'},
      {word:'血圧',reading:'けつあつ',meaning:'blood pressure'},
      {word:'気配',reading:'けはい',meaning:'sign, indication'},
      {word:'見学',reading:'けんがく',meaning:'field trip, observation'},
      {word:'契約',reading:'けいやく',meaning:'contract'},
      {word:'決心',reading:'けっしん',meaning:'determination, resolution'},
      {word:'検索',reading:'けんさく',meaning:'search (e.g. database)'},
      {word:'検討',reading:'けんとう',meaning:'examination, consideration'},
      {word:'建築',reading:'けんちく',meaning:'construction, architecture'},
      {word:'公害',reading:'こうがい',meaning:'pollution'},
      {word:'高級',reading:'こうきゅう',meaning:'high-class'},
      {word:'公共',reading:'こうきょう',meaning:'public'},
      {word:'工芸',reading:'こうげい',meaning:'craft, technical art'},
      {word:'孝行',reading:'こうこう',meaning:'filial piety'},
      {word:'交差',reading:'こうさ',meaning:'crossing, intersection'},
      {word:'講師',reading:'こうし',meaning:'lecturer, instructor'},
      {word:'公式',reading:'こうしき',meaning:'formal, official'},
      {word:'工業',reading:'こうぎょう',meaning:'industry (manufacturing)'},
      {word:'公衆',reading:'こうしゅう',meaning:'the public'},
      {word:'工事',reading:'こうじ',meaning:'construction work'},
      {word:'口実',reading:'こうじつ',meaning:'excuse, pretext'},
      {word:'公正',reading:'こうせい',meaning:'fairness, justice'},
      {word:'功績',reading:'こうせき',meaning:'achievement, merit'},
      {word:'光線',reading:'こうせん',meaning:'ray, beam of light'},
      {word:'高層',reading:'こうそう',meaning:'high-rise'},
      {word:'構造',reading:'こうぞう',meaning:'structure'},
      {word:'交代',reading:'こうたい',meaning:'alternation, shift'},
      {word:'耕地',reading:'こうち',meaning:'farmland'},
      {word:'肯定',reading:'こうてい',meaning:'affirmation'},
      {word:'高度',reading:'こうど',meaning:'altitude, high degree'},
      {word:'後輩',reading:'こうはい',meaning:'junior (in school/company)'},
      {word:'公表',reading:'こうひょう',meaning:'official announcement'},
      {word:'鉱物',reading:'こうぶつ',meaning:'mineral'},
      {word:'項目',reading:'こうもく',meaning:'item, heading'},
      {word:'国籍',reading:'こくせき',meaning:'nationality'},
      {word:'最終',reading:'さいしゅう',meaning:'last, final'},
      {word:'最善',reading:'さいぜん',meaning:'the best'},
      {word:'財産',reading:'ざいさん',meaning:'property, fortune'},
      {word:'材料',reading:'ざいりょう',meaning:'material, ingredient'},
      {word:'削減',reading:'さくげん',meaning:'cut, reduction'},
      {word:'作物',reading:'さくもつ',meaning:'crop'},
      {word:'支える',reading:'ささえる',meaning:'to support'},
      {word:'誘う',reading:'さそう',meaning:'to invite, to tempt'},
      {word:'殺到',reading:'さっとう',meaning:'rush, flood (of people)'},
      {word:'様々',reading:'さまざま',meaning:'various'},
      {word:'妨げる',reading:'さまたげる',meaning:'to hinder, to obstruct'},
      {word:'左右',reading:'さゆう',meaning:'left and right, control'},
      {word:'参照',reading:'さんしょう',meaning:'reference'},
      {word:'次第に',reading:'しだいに',meaning:'gradually'},
      {word:'自体',reading:'じたい',meaning:'itself'},
      {word:'湿気',reading:'しっけ',meaning:'humidity, moisture'},
      {word:'実施',reading:'じっし',meaning:'implementation'},
      {word:'実習',reading:'じっしゅう',meaning:'practical training'},
      {word:'実践',reading:'じっせん',meaning:'practice, put into practice'},
      {word:'実態',reading:'じったい',meaning:'actual situation'},
      {word:'指摘',reading:'してき',meaning:'pointing out, indication'},
      {word:'辞退',reading:'じたい',meaning:'declining, withdrawal'},
      {word:'視点',reading:'してん',meaning:'viewpoint'},
      {word:'自主',reading:'じしゅ',meaning:'independence, autonomy'},
      {word:'姿勢',reading:'しせい',meaning:'posture, stance'},
      {word:'持続',reading:'じぞく',meaning:'continuation, sustainability'},
      {word:'実質',reading:'じっしつ',meaning:'substance, essence'},
      {word:'失望',reading:'しつぼう',meaning:'disappointment'},
      {word:'指導',reading:'しどう',meaning:'guidance'},
      {word:'視野',reading:'しや',meaning:'field of view, perspective'},
      {word:'収益',reading:'しゅうえき',meaning:'earnings, profit'},
      {word:'収穫',reading:'しゅうかく',meaning:'harvest'},
      {word:'従事',reading:'じゅうじ',meaning:'engagement (in work)'},
      {word:'充実',reading:'じゅうじつ',meaning:'fulfillment, enrichment'},
      {word:'習得',reading:'しゅうとく',meaning:'mastery, acquisition'},
      {word:'修復',reading:'しゅうふく',meaning:'restoration, repair'},
      {word:'重視',reading:'じゅうし',meaning:'importance, emphasis'},
      {word:'柔軟',reading:'じゅうなん',meaning:'flexible, soft'},
      {word:'縮小',reading:'しゅくしょう',meaning:'reduction, shrinkage'},
      {word:'受験',reading:'じゅけん',meaning:'taking an examination'},
      {word:'取材',reading:'しゅざい',meaning:'news gathering, coverage'},
      {word:'主張',reading:'しゅちょう',meaning:'assertion, claim'},
      {word:'出勤',reading:'しゅっきん',meaning:'going to work'},
      {word:'主導',reading:'しゅどう',meaning:'leadership, initiative'},
      {word:'寿命',reading:'じゅみょう',meaning:'lifespan'},
      {word:'需要',reading:'じゅよう',meaning:'demand'},
      {word:'純粋',reading:'じゅんすい',meaning:'pure, genuine'},
      {word:'障害',reading:'しょうがい',meaning:'obstacle, disability'},
      {word:'消化',reading:'しょうか',meaning:'digestion'},
      {word:'生涯',reading:'しょうがい',meaning:'lifetime'},
      {word:'上下',reading:'じょうげ',meaning:'up and down'},
      {word:'状況',reading:'じょうきょう',meaning:'situation, circumstances'},
      {word:'蒸発',reading:'じょうはつ',meaning:'evaporation'},
      {word:'勝負',reading:'しょうぶ',meaning:'match, contest'},
      {word:'消費',reading:'しょうひ',meaning:'consumption'},
      {word:'正味',reading:'しょうみ',meaning:'net (weight/amount)'},
      {word:'将来',reading:'しょうらい',meaning:'future'},
      {word:'除外',reading:'じょがい',meaning:'exclusion'},
      {word:'職業',reading:'しょくぎょう',meaning:'occupation'},
      {word:'職場',reading:'しょくば',meaning:'workplace'},
      {word:'処理',reading:'しょり',meaning:'processing, disposal'},
      {word:'進化',reading:'しんか',meaning:'evolution'},
      {word:'侵害',reading:'しんがい',meaning:'infringement, violation'},
      {word:'信仰',reading:'しんこう',meaning:'(religious) faith'},
      {word:'人材',reading:'じんざい',meaning:'human resources, talent'},
      {word:'診察',reading:'しんさつ',meaning:'medical examination'},
      {word:'進出',reading:'しんしゅつ',meaning:'advance, expansion (into a market)'},
      {word:'親善',reading:'しんぜん',meaning:'goodwill, friendship'},
      {word:'迅速',reading:'じんそく',meaning:'swift, prompt'},
      {word:'信頼',reading:'しんらい',meaning:'trust, reliance'},
      {word:'推進',reading:'すいしん',meaning:'promotion, propulsion'},
      {word:'推測',reading:'すいそく',meaning:'guess, conjecture'},
      {word:'優れる',reading:'すぐれる',meaning:'to excel, to be superior'},
      {word:'勧める',reading:'すすめる',meaning:'to recommend'},
      {word:'既に',reading:'すでに',meaning:'already'},
      {word:'素晴らしい',reading:'すばらしい',meaning:'wonderful, splendid'},
      {word:'性格',reading:'せいかく',meaning:'personality'},
      {word:'正確',reading:'せいかく',meaning:'accuracy, precision'},
      {word:'政策',reading:'せいさく',meaning:'policy'},
      {word:'成長',reading:'せいちょう',meaning:'growth'},
      {word:'制定',reading:'せいてい',meaning:'enactment'},
      {word:'整備',reading:'せいび',meaning:'maintenance, arrangement'},
      {word:'成分',reading:'せいぶん',meaning:'ingredient, component'},
      {word:'勢力',reading:'せいりょく',meaning:'influence, power'},
      {word:'是非',reading:'ぜひ',meaning:'by all means'},
      {word:'節約',reading:'せつやく',meaning:'saving, thrift'},
      {word:'設立',reading:'せつりつ',meaning:'establishment, founding'},
      {word:'専攻',reading:'せんこう',meaning:'(academic) major'},
      {word:'宣言',reading:'せんげん',meaning:'declaration'},
      {word:'先行',reading:'せんこう',meaning:'precede, going ahead'},
      {word:'潜在',reading:'せんざい',meaning:'latent, potential'},
      {word:'戦略',reading:'せんりゃく',meaning:'strategy'},
      {word:'象徴',reading:'しょうちょう',meaning:'symbol'},
      {word:'素材',reading:'そざい',meaning:'material, raw material'},
      {word:'組織',reading:'そしき',meaning:'organization'},
      {word:'措置',reading:'そち',meaning:'measure, step'},
      {word:'率直',reading:'そっちょく',meaning:'frank, candid'},
      {word:'損害',reading:'そんがい',meaning:'damage, loss'},
      {word:'対応',reading:'たいおう',meaning:'correspondence, response'},
      {word:'耐久',reading:'たいきゅう',meaning:'durability, endurance'},
      {word:'対策',reading:'たいさく',meaning:'measure, countermeasure'},
      {word:'退治',reading:'たいじ',meaning:'extermination, subjugation'},
      {word:'対処',reading:'たいしょ',meaning:'dealing with, coping'},
      {word:'態度',reading:'たいど',meaning:'attitude'},
      {word:'耐熱',reading:'たいねつ',meaning:'heat-resistant'},
      {word:'代表',reading:'だいひょう',meaning:'representative'},
      {word:'耐える',reading:'たえる',meaning:'to endure, to bear'},
      {word:'蓄える',reading:'たくわえる',meaning:'to store, to save'},
      {word:'多少',reading:'たしょう',meaning:'more or less, somewhat'},
      {word:'多大',reading:'ただい',meaning:'great, huge'},
      {word:'直ちに',reading:'ただちに',meaning:'immediately'},
      {word:'妥当',reading:'だとう',meaning:'valid, appropriate'},
      {word:'多様',reading:'たよう',meaning:'diverse, various'},
      {word:'単一',reading:'たんいつ',meaning:'single, simple'},
      {word:'短期',reading:'たんき',meaning:'short-term'},
      {word:'探検',reading:'たんけん',meaning:'exploration'},
      {word:'端的',reading:'たんてき',meaning:'direct, plain'},
      {word:'鍛える',reading:'きたえる',meaning:'to train, to forge'},
      {word:'値する',reading:'あたいする',meaning:'to be worth, to deserve'},
      {word:'秩序',reading:'ちつじょ',meaning:'order, discipline'},
      {word:'知能',reading:'ちのう',meaning:'intelligence'},
      {word:'着実',reading:'ちゃくじつ',meaning:'steady, sound'},
      {word:'中継',reading:'ちゅうけい',meaning:'relay, broadcast'},
      {word:'中断',reading:'ちゅうだん',meaning:'interruption'},
      {word:'中毒',reading:'ちゅうどく',meaning:'poisoning, addiction'},
      {word:'超過',reading:'ちょうか',meaning:'excess, overrun'},
      {word:'徴収',reading:'ちょうしゅう',meaning:'collection (of fees/tax)'},
      {word:'調整',reading:'ちょうせい',meaning:'adjustment'},
      {word:'挑戦',reading:'ちょうせん',meaning:'challenge'},
      {word:'直面',reading:'ちょくめん',meaning:'facing, confrontation'},
      {word:'陳列',reading:'ちんれつ',meaning:'display, exhibition'},
      {word:'追跡',reading:'ついせき',meaning:'chase, pursuit'},
      {word:'通用',reading:'つうよう',meaning:'common use, validity'},
      {word:'疲れ果てる',reading:'つかれはてる',meaning:'to be exhausted'},
      {word:'尽きる',reading:'つきる',meaning:'to run out, to be exhausted'},
      {word:'継ぐ',reading:'つぐ',meaning:'to succeed, to inherit'},
      {word:'償う',reading:'つぐなう',meaning:'to compensate, to atone'},
      {word:'繕う',reading:'つくろう',meaning:'to mend, to patch'},
      {word:'伝わる',reading:'つたわる',meaning:'to be transmitted, to be handed down'},
      {word:'勤め',reading:'つとめ',meaning:'duty, job'},
      {word:'努める',reading:'つとめる',meaning:'to endeavor, to try'},
      {word:'常に',reading:'つねに',meaning:'always'},
      {word:'紡ぐ',reading:'つむぐ',meaning:'to spin (thread)'},
      {word:'提案',reading:'ていあん',meaning:'proposal'},
      {word:'提供',reading:'ていきょう',meaning:'offer, provision'},
      {word:'訂正',reading:'ていせい',meaning:'correction'},
      {word:'提出',reading:'ていしゅつ',meaning:'submission'},
      {word:'停滞',reading:'ていたい',meaning:'stagnation'},
      {word:'定着',reading:'ていちゃく',meaning:'fixation, settling'},
      {word:'撤回',reading:'てっかい',meaning:'withdrawal, retraction'},
      {word:'徹底',reading:'てってい',meaning:'thoroughness'},
      {word:'展示',reading:'てんじ',meaning:'exhibition, display'},
      {word:'伝統',reading:'でんとう',meaning:'tradition'},
      {word:'同意',reading:'どうい',meaning:'agreement, consent'},
      {word:'統一',reading:'とういつ',meaning:'unification'},
      {word:'動員',reading:'どういん',meaning:'mobilization'},
      {word:'倒産',reading:'とうさん',meaning:'bankruptcy'},
      {word:'投資',reading:'とうし',meaning:'investment'},
      {word:'闘争',reading:'とうそう',meaning:'struggle, strife'},
      {word:'到達',reading:'とうたつ',meaning:'arrival, attainment'},
      {word:'統治',reading:'とうち',meaning:'rule, governance'},
      {word:'到底',reading:'とうてい',meaning:'(not) at all, absolutely'},
      {word:'導入',reading:'どうにゅう',meaning:'introduction'},
      {word:'特徴',reading:'とくちょう',meaning:'characteristic, feature'},
      {word:'独立',reading:'どくりつ',meaning:'independence'},
      {word:'突破',reading:'とっぱ',meaning:'breakthrough'},
      {word:'怒鳴る',reading:'どなる',meaning:'to shout, to yell'},
      {word:'乏しい',reading:'とぼしい',meaning:'scarce, poor'},
      {word:'鈍る',reading:'にぶる',meaning:'to become dull'},
      {word:'認可',reading:'にんか',meaning:'approval, authorization'},
      {word:'念頭',reading:'ねんとう',meaning:'mind, thought'},
      {word:'念願',reading:'ねんがん',meaning:'one\'s heart\'s desire'},
      {word:'納入',reading:'のうにゅう',meaning:'payment, delivery'},
      {word:'能率',reading:'のうりつ',meaning:'efficiency'},
      {word:'把握',reading:'はあく',meaning:'grasp, understanding'},
      {word:'配置',reading:'はいち',meaning:'arrangement, placement'},
      {word:'配布',reading:'はいふ',meaning:'distribution'},
      {word:'破壊',reading:'はかい',meaning:'destruction'},
      {word:'破棄',reading:'はき',meaning:'cancellation, annulment'},
      {word:'激しい',reading:'はげしい',meaning:'intense, fierce'},
      {word:'発揮',reading:'はっき',meaning:'display, exhibition (of ability)'},
      {word:'発足',reading:'ほっそく',meaning:'inauguration, start'},
      {word:'阻む',reading:'はばむ',meaning:'to hinder, to obstruct'},
      {word:'繁栄',reading:'はんえい',meaning:'prosperity'},
      {word:'反抗',reading:'はんこう',meaning:'resistance, defiance'},
      {word:'犯罪',reading:'はんざい',meaning:'crime'},
      {word:'繁殖',reading:'はんしょく',meaning:'breeding, propagation'},
      {word:'反応',reading:'はんのう',meaning:'reaction'},
      {word:'被害',reading:'ひがい',meaning:'damage, harm'},
      {word:'控える',reading:'ひかえる',meaning:'to refrain from, to hold back'},
      {word:'比較',reading:'ひかく',meaning:'comparison'},
      {word:'悲観',reading:'ひかん',meaning:'pessimism'},
      {word:'否定',reading:'ひてい',meaning:'denial, negation'},
      {word:'非難',reading:'ひなん',meaning:'criticism, blame'},
      {word:'批判',reading:'ひはん',meaning:'criticism'},
      {word:'批評',reading:'ひひょう',meaning:'criticism, review'},
      {word:'秘密',reading:'ひみつ',meaning:'secret'},
      {word:'表現',reading:'ひょうげん',meaning:'expression'},
      {word:'評判',reading:'ひょうばん',meaning:'reputation'},
      {word:'披露',reading:'ひろう',meaning:'announcement, unveiling'},
      {word:'疲労',reading:'ひろう',meaning:'fatigue'},
      {word:'敏感',reading:'びんかん',meaning:'sensitive'},
      {word:'不安',reading:'ふあん',meaning:'anxiety, unease'},
      {word:'不可欠',reading:'ふかけつ',meaning:'essential, indispensable'},
      {word:'不況',reading:'ふきょう',meaning:'recession'},
      {word:'複雑',reading:'ふくざつ',meaning:'complicated'},
      {word:'福祉',reading:'ふくし',meaning:'welfare'},
      {word:'負担',reading:'ふたん',meaning:'burden'},
      {word:'普及',reading:'ふきゅう',meaning:'spread, dissemination'},
      {word:'腐敗',reading:'ふはい',meaning:'corruption, decay'},
      {word:'普遍',reading:'ふへん',meaning:'universality'},
      {word:'紛争',reading:'ふんそう',meaning:'conflict, dispute'},
      {word:'平均',reading:'へいきん',meaning:'average'},
      {word:'並行',reading:'へいこう',meaning:'parallel'},
      {word:'平等',reading:'びょうどう',meaning:'equality'},
      {word:'辺境',reading:'へんきょう',meaning:'frontier, borderland'},
      {word:'弁護',reading:'べんご',meaning:'defense, advocacy'},
      {word:'編集',reading:'へんしゅう',meaning:'editing'},
      {word:'変動',reading:'へんどう',meaning:'fluctuation'},
      {word:'防衛',reading:'ぼうえい',meaning:'defense'},
      {word:'貿易',reading:'ぼうえき',meaning:'trade'},
      {word:'崩壊',reading:'ほうかい',meaning:'collapse'},
      {word:'方策',reading:'ほうさく',meaning:'policy, measure'},
      {word:'放置',reading:'ほうち',meaning:'neglect, leaving as is'},
      {word:'報道',reading:'ほうどう',meaning:'news report'},
      {word:'包囲',reading:'ほうい',meaning:'siege, encirclement'},
      {word:'豊富',reading:'ほうふ',meaning:'abundant'},
      {word:'募集',reading:'ぼしゅう',meaning:'recruitment'},
      {word:'保守',reading:'ほしゅ',meaning:'conservative, maintenance'},
      {word:'補償',reading:'ほしょう',meaning:'compensation'},
      {word:'保障',reading:'ほしょう',meaning:'guarantee, security'},
      {word:'保存',reading:'ほぞん',meaning:'preservation'},
      {word:'没頭',reading:'ぼっとう',meaning:'immersion (in something)'},
      {word:'本格的',reading:'ほんかくてき',meaning:'genuine, full-scale'},
      {word:'本質',reading:'ほんしつ',meaning:'essence, nature'},
      {word:'摩擦',reading:'まさつ',meaning:'friction'},
      {word:'賄う',reading:'まかなう',meaning:'to provide for, to cover (costs)'},
      {word:'免れる',reading:'まぬかれる',meaning:'to escape, to avoid'},
      {word:'見せかけ',reading:'みせかけ',meaning:'pretense, appearance'},
      {word:'密接',reading:'みっせつ',meaning:'close, intimate'},
      {word:'見積もり',reading:'みつもり',meaning:'estimate'},
      {word:'魅力',reading:'みりょく',meaning:'charm, attraction'},
      {word:'無関心',reading:'むかんしん',meaning:'indifference'},
      {word:'矛盾',reading:'むじゅん',meaning:'contradiction'},
      {word:'無視',reading:'むし',meaning:'ignoring, disregard'},
      {word:'無数',reading:'むすう',meaning:'countless'},
      {word:'名誉',reading:'めいよ',meaning:'honor'},
      {word:'免除',reading:'めんじょ',meaning:'exemption'},
      {word:'目安',reading:'めやす',meaning:'standard, guideline'},
      {word:'模索',reading:'もさく',meaning:'groping, search'},
      {word:'模倣',reading:'もほう',meaning:'imitation'},
      {word:'躍進',reading:'やくしん',meaning:'rapid progress, leap forward'},
      {word:'優位',reading:'ゆうい',meaning:'superiority'},
      {word:'有効',reading:'ゆうこう',meaning:'valid, effective'},
    ]
    // ▲▲▲ এই লিস্টে যত ইচ্ছা শব্দ যোগ করতে পারবেন, একই ফরম্যাটে ▲▲▲
  },
  {id:7,cat:'life',title:'外国人の部屋探し完全ガイド',desc:'日本の賃貸の仕組み・礼金・敷金・保証人問題の解決策。外国人OKの物件の探し方と注意すべき契約内容。',tags:['部屋','賃貸','一人暮らし'],color:'#10B981',
    // ▼▼▼ ধাপে ধাপে স্টেপ এখানে ▼▼▼
    // ফরম্যাট: {step:1, title:'শিরোনাম', detail:'বিস্তারিত ব্যাখ্যা (ruby ট্যাগসহ)', tip:'অতিরিক্ত টিপ'},
    steps:[
      {step:1,title:'<ruby>予算<rt>よさん</rt></ruby>と<ruby>エリア<rt></rt></ruby>を<ruby>決<rt>き</rt></ruby>める',
        detail:'<ruby>家賃<rt>やちん</rt></ruby>は<ruby>収入<rt>しゅうにゅう</rt></ruby>の3<ruby>分<rt>ぶん</rt></ruby>の1<ruby>以下<rt>いか</rt></ruby>が<ruby>目安<rt>めやす</rt></ruby>。<ruby>通学<rt>つうがく</rt></ruby>・<ruby>通勤<rt>つうきん</rt></ruby>にかかる<ruby>時間<rt>じかん</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えてエリアを<ruby>選<rt>えら</rt></ruby>びましょう。',
        tip:'💡 家賃・礼金・敷金・仲介手数料など初期費用は家賃の4〜6ヶ月分かかることが多い'},
      {step:2,title:'<ruby>外国人<rt>がいこくじん</rt></ruby>OK<ruby>物件<rt>ぶっけん</rt></ruby>を<ruby>検索<rt>けんさく</rt></ruby>する',
        detail:'SUUMO・at<ruby>home<rt></rt></ruby>・GaijinPot<ruby>など<rt></rt></ruby>で「<ruby>外国人可<rt>がいこくじんか</rt></ruby>」<ruby>条件<rt>じょうけん</rt></ruby>で<ruby>検索<rt>けんさく</rt></ruby>する。<ruby>大学<rt>だいがく</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>の<ruby>紹介<rt>しょうかい</rt></ruby>する<ruby>不動産屋<rt>ふどうさんや</rt></ruby>も<ruby>安心<rt>あんしん</rt></ruby>。',
        tip:'💻 GaijinPot Housing・Sakura House は外国人向け専門サイト'},
      {step:3,title:'<ruby>不動産屋<rt>ふどうさんや</rt></ruby>に<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせ・<ruby>内見<rt>ないけん</rt></ruby>する',
        detail:'メールか<ruby>電話<rt>でんわ</rt></ruby>で<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせ、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>部屋<rt>へや</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>く「<ruby>内見<rt>ないけん</rt></ruby>」を<ruby>予約<rt>よやく</rt></ruby>する。<ruby>日当<rt>ひあ</rt></ruby>たり・<ruby>騒音<rt>そうおん</rt></ruby>・<ruby>周辺環境<rt>しゅうへんかんきょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>。',
        tip:'👀 写真だけで決めず、必ず内見してから契約すること'},
      {step:4,title:'<ruby>必要書類<rt>ひつようしょるい</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>する',
        detail:'<ruby>在留<rt>ざいりゅう</rt></ruby>カード・パスポート・<ruby>在学証明書<rt>ざいがくしょうめいしょ</rt></ruby>（または<ruby>収入証明<rt>しゅうにゅうしょうめい</rt></ruby>）・<ruby>緊急連絡先<rt>きんきゅうれんらくさき</rt></ruby>を<ruby>用意<rt>ようい</rt></ruby>する。',
        tip:'📄 保証人がいない場合は「保証会社」を使えることが多い（別途費用）'},
      {step:5,title:'<ruby>契約内容<rt>けいやくないよう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する',
        detail:'<ruby>敷金<rt>しききん</rt></ruby>（<ruby>退去時<rt>たいきょじ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>る）・<ruby>礼金<rt>れいきん</rt></ruby>（<ruby>戻<rt>もど</rt></ruby>らない）・<ruby>更新料<rt>こうしんりょう</rt></ruby>・<ruby>違約金<rt>いやくきん</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>をよく<ruby>読<rt>よ</rt></ruby>む。',
        tip:'⚠️ わからない日本語の契約書は署名前に必ず学校や知人に確認してもらう'},
      {step:6,title:'<ruby>契約<rt>けいやく</rt></ruby>・<ruby>入居<rt>にゅうきょ</rt></ruby>する',
        detail:'<ruby>契約書<rt>けいやくしょ</rt></ruby>に<ruby>署名<rt>しょめい</rt></ruby>し、<ruby>初期費用<rt>しょきひよう</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>う。<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ったら<ruby>電気<rt>でんき</rt></ruby>・ガス・<ruby>水道<rt>すいどう</rt></ruby>の<ruby>開通<rt>かいつう</rt></ruby>手続きをする。',
        tip:'🔌 電気・水道はネットで簡単に開通可能。ガスは立会いが必要な場合が多い'},
    ]
    // ▲▲▲ এভাবেই আরো ধাপ যোগ করতে পারবেন ▲▲▲
  },
  {id:8,cat:'life',title:'日本の銀行口座の開き方（外国人向け）',desc:'留学生・外国人が開きやすいゆうちょ銀行の口座開設方法。必要書類と手続きの流れを解説。',tags:['銀行','口座','お金'],color:'#10B981',
    steps:[
      {step:1,title:'<ruby>ゆうちょ銀行<rt>ゆうちょぎんこう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶ',
        detail:'ゆうちょ<ruby>銀行<rt>ぎんこう</rt></ruby>（<ruby>日本郵政<rt>にっぽんゆうせい</rt></ruby>グループ）は<ruby>全国<rt>ぜんこく</rt></ruby>の<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>で<ruby>口座<rt>こうざ</rt></ruby>が<ruby>開<rt>ひら</rt></ruby>け、<ruby>外国人<rt>がいこくじん</rt></ruby>や<ruby>留学生<rt>りゅうがくせい</rt></ruby>でも<ruby>審査<rt>しんさ</rt></ruby>が<ruby>通<rt>とお</rt></ruby>りやすいことで<ruby>知<rt>し</rt></ruby>られている。<ruby>来日<rt>らいにち</rt></ruby>したばかりでも<ruby>開設<rt>かいせつ</rt></ruby>しやすい。',
        tip:'🏦 来日直後ならゆうちょ銀行が一番開きやすい'},
      {step:2,title:'<ruby>必要書類<rt>ひつようしょるい</rt></ruby>を<ruby>用意<rt>ようい</rt></ruby>する',
        detail:'<ruby>在留<rt>ざいりゅう</rt></ruby>カード・パスポート・<ruby>印鑑<rt>いんかん</rt></ruby>（または<ruby>署名<rt>しょめい</rt></ruby>）・<ruby>学生証<rt>がくせいしょう</rt></ruby>または<ruby>在学証明書<rt>ざいがくしょうめいしょ</rt></ruby>・<ruby>住所<rt>じゅうしょ</rt></ruby>が<ruby>証明<rt>しょうめい</rt></ruby>できるもの（<ruby>住民票<rt>じゅうみんひょう</rt></ruby>など）。',
        tip:'📄 電話番号（日本の携帯番号）が必要な銀行もある'},
      {step:3,title:'<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>窓口<rt>まどぐち</rt></ruby>で<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む',
        detail:'<ruby>最寄<rt>もよ</rt></ruby>りの<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>窓口<rt>まどぐち</rt></ruby>へ<ruby>必要書類<rt>ひつようしょるい</rt></ruby>を<ruby>持参<rt>じさん</rt></ruby>して<ruby>行<rt>い</rt></ruby>く。<ruby>職員<rt>しょくいん</rt></ruby>が<ruby>申込書<rt>もうしこみしょ</rt></ruby>の<ruby>記入<rt>きにゅう</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくれる。',
        tip:'📱 平日の午前中は空いていることが多い'},
      {step:4,title:'キャッシュカード・<ruby>通帳<rt>つうちょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る',
        detail:'<ruby>窓口<rt>まどぐち</rt></ruby>申込みならその<ruby>場<rt>ば</rt></ruby>で、オンライン<ruby>申込<rt>もうしこみ</rt></ruby>みなら<ruby>郵送<rt>ゆうそう</rt></ruby>でカードが<ruby>届<rt>とど</rt></ruby>く。<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>は<ruby>誕生日<rt>たんじょうび</rt></ruby>など<ruby>推測<rt>すいそく</rt></ruby>されやすい<ruby>数字<rt>すうじ</rt></ruby>は<ruby>避<rt>さ</rt></ruby>ける。',
        tip:'🔐 暗証番号は誰にも教えない、メモも財布に入れない'},
    ]
  },
  {id:9,cat:'life',title:'ゴミの分別ルール・生活マナーまとめ',desc:'燃えるゴミ・資源ゴミ・粗大ゴミの分け方。近所付き合いのマナー・騒音問題・日本の生活ルール。',tags:['ゴミ','マナー','生活'],color:'#10B981',
    steps:[
      {step:1,title:'<ruby>自治体<rt>じちたい</rt></ruby>の<ruby>分別<rt>ぶんべつ</rt></ruby>ルールを<ruby>確認<rt>かくにん</rt></ruby>する',
        detail:'ゴミの<ruby>分別<rt>ぶんべつ</rt></ruby>ルールは<ruby>市区町村<rt>しくちょうそん</rt></ruby>ごとに<ruby>違<rt>ちが</rt></ruby>う。<ruby>区役所<rt>くやくしょ</rt></ruby>や<ruby>市役所<rt>しやくしょ</rt></ruby>でもらえる「ゴミ<ruby>収集<rt>しゅうしゅう</rt></ruby>カレンダー」を<ruby>確認<rt>かくにん</rt></ruby>する。',
        tip:'📅 多言語対応のカレンダーがある自治体も多い（英語・中国語など）'},
      {step:2,title:'<ruby>燃<rt>も</rt></ruby>えるゴミ・<ruby>燃<rt>も</rt></ruby>えないゴミを<ruby>分<rt>わ</rt></ruby>ける',
        detail:'<ruby>生<rt>なま</rt></ruby>ゴミ・<ruby>紙<rt>かみ</rt></ruby>くずは「<ruby>燃<rt>も</rt></ruby>えるゴミ」。ガラス・<ruby>金属<rt>きんぞく</rt></ruby>・<ruby>陶器<rt>とうき</rt></ruby>は「<ruby>燃<rt>も</rt></ruby>えないゴミ」。それぞれ<ruby>収集<rt>しゅうしゅう</rt></ruby>日が<ruby>違<rt>ちが</rt></ruby>う。',
        tip:'♻️ 缶・瓶・ペットボトルは「資源ゴミ」として別に出す'},
      {step:3,title:'<ruby>指定<rt>してい</rt></ruby>のゴミ<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う',
        detail:'<ruby>地域<rt>ちいき</rt></ruby>によって<ruby>指定<rt>してい</rt></ruby>の<ruby>有料<rt>ゆうりょう</rt></ruby>ゴミ<ruby>袋<rt>ぶくろ</rt></ruby>がある。コンビニやスーパーで<ruby>購入<rt>こうにゅう</rt></ruby>できる。<ruby>指定外<rt>していがい</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>は<ruby>回収<rt>かいしゅう</rt></ruby>されないことがある。',
        tip:'🛍 「〇〇市指定」と書かれた袋を必ず使うこと'},
      {step:4,title:'<ruby>正<rt>ただ</rt></ruby>しい<ruby>日<rt>ひ</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す',
        detail:'<ruby>収集日<rt>しゅうしゅうび</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>8<ruby>時<rt>じ</rt></ruby>までに<ruby>指定<rt>してい</rt></ruby>の<ruby>集積所<rt>しゅうせきじょ</rt></ruby>（ゴミ<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>）に<ruby>出<rt>だ</rt></ruby>すのが<ruby>一般的<rt>いっぱんてき</rt></ruby>。<ruby>前<rt>まえ</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すのはマナー<ruby>違反<rt>いはん</rt></ruby>。',
        tip:'⏰ 収集日を間違えるとゴミが回収されず近所トラブルの原因に'},
      {step:5,title:'<ruby>粗大<rt>そだい</rt></ruby>ゴミは<ruby>別途<rt>べっと</rt></ruby><ruby>申込<rt>もうしこ</rt></ruby>みする',
        detail:'<ruby>家具<rt>かぐ</rt></ruby>・<ruby>家電<rt>かでん</rt></ruby>などの<ruby>大<rt>おお</rt></ruby>きいゴミは<ruby>粗大<rt>そだい</rt></ruby>ゴミ。<ruby>事前<rt>じぜん</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>やネットで<ruby>申込<rt>もうしこ</rt></ruby>み、シールを<ruby>購入<rt>こうにゅう</rt></ruby>して<ruby>貼<rt>は</rt></ruby>ってから<ruby>出<rt>だ</rt></ruby>す。',
        tip:'💰 粗大ゴミは有料（数百〜数千円）で回収日は指定される'},
    ]
  },
  {id:10,cat:'job',title:'外国人の就職活動マニュアル（日本版）',desc:'日本式就活の流れ・履歴書の書き方・面接マナー。外国人が日本企業に採用されるためのポイントを解説。',tags:['就活','履歴書','面接'],color:'#7C3AED'},
  {id:11,cat:'job',title:'技術・人文知識・国際業務ビザとは？',desc:'IT・営業・翻訳・経営など対象職種の条件。専門学校・大学卒業後に取得できる就労ビザの要件。',tags:['就労ビザ','技人国','条件'],color:'#7C3AED'},
  {id:12,cat:'job',title:'日本での給与・税金・社会保険の基礎知識',desc:'給与明細の読み方・所得税・住民税・健康保険・厚生年金。外国人が知っておくべきお金の基本。',tags:['給与','税金','保険'],color:'#7C3AED'},
  {id:13,cat:'school',title:'専門学校から大学への編入（3年次編入）ガイド',desc:'編入試験の仕組み・対象大学・必要な成績・試験科目。留学生を積極的に受け入れている大学の例と一般的な出願条件を紹介。',tags:['編入','大学','専門学校'],color:'#0D9488',
    // ▼▼▼ এখানে বিশ্ববিদ্যালয়ের লিস্ট ও শর্ত যোগ করুন ▼▼▼
    // ফরম্যাট: {name:'大学名', feature:'বৈশিষ্ট্য', conditions:['শর্ত১','শর্ত২'], note:'অতিরিক্ত নোট'},
    unilist:[
      {name:'<ruby>東京通信大学<rt>とうきょうつうしんだいがく</rt></ruby>',
        feature:'<ruby>完全<rt>かんぜん</rt></ruby>オンラインで<ruby>学<rt>まな</rt></ruby>べる<ruby>通信制大学<rt>つうしんせいだいがく</rt></ruby>。<ruby>働<rt>はたら</rt></ruby>きながらでも<ruby>卒業<rt>そつぎょう</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>せる。',
        conditions:['<ruby>専門士<rt>せんもんし</rt></ruby>（<ruby>専門学校<rt>せんもんがっこう</rt></ruby>2<ruby>年以上<rt>ねんいじょう</rt></ruby>・1700<ruby>時間以上<rt>じかんいじょう</rt></ruby>）を<ruby>持<rt>も</rt></ruby>っていること','<ruby>書類選考<rt>しょるいせんこう</rt></ruby>（<ruby>面接<rt>めんせつ</rt></ruby>なしの<ruby>場合<rt>ばあい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い）','<ruby>日本語能力<rt>にほんごのうりょく</rt></ruby>：N2<ruby>相当<rt>そうとう</rt></ruby><ruby>推奨<rt>すいしょう</rt></ruby>'],
        note:'💻 通学不要なので、働きながら・地方在住でも編入しやすい'},
      {name:'<ruby>桜美林大学<rt>おうびりんだいがく</rt></ruby>',
        feature:'<ruby>国際<rt>こくさい</rt></ruby>プログラムが<ruby>充実<rt>じゅうじつ</rt></ruby>しており、<ruby>留学生<rt>りゅうがくせい</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ<ruby>実績<rt>じっせき</rt></ruby>が<ruby>豊富<rt>ほうふ</rt></ruby>。',
        conditions:['<ruby>専門士<rt>せんもんし</rt></ruby><ruby>取得<rt>しゅとく</rt></ruby>（<ruby>見込<rt>みこ</rt></ruby>み<ruby>含<rt>ふく</rt></ruby>む）','<ruby>英語<rt>えいご</rt></ruby>・<ruby>小論文<rt>しょうろんぶん</rt></ruby>・<ruby>面接試験<rt>めんせつしけん</rt></ruby>','<ruby>学部<rt>がくぶ</rt></ruby>により<ruby>募集<rt>ぼしゅう</rt></ruby><ruby>時期<rt>じき</rt></ruby>・<ruby>定員<rt>ていいん</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる'],
        note:'🌏 国際学部・ビジネスマネジメント学群などが人気'},
      {name:'<ruby>産業能率大学<rt>さんぎょうのうりつだいがく</rt></ruby>',
        feature:'<ruby>実践的<rt>じっせんてき</rt></ruby>な<ruby>経営学<rt>けいえいがく</rt></ruby>・<ruby>マネジメント<rt></rt></ruby><ruby>教育<rt>きょういく</rt></ruby>に<ruby>強<rt>つよ</rt></ruby>い。<ruby>編入学生<rt>へんにゅうがくせい</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れに<ruby>積極的<rt>せっきょくてき</rt></ruby>。',
        conditions:['<ruby>専門士<rt>せんもんし</rt></ruby>または<ruby>短大卒<rt>たんだいそつ</rt></ruby>','<ruby>小論文<rt>しょうろんぶん</rt></ruby>・<ruby>面接<rt>めんせつ</rt></ruby>','<ruby>日本語能力<rt>にほんごのうりょく</rt></ruby>：N2<ruby>以上<rt>いじょう</rt></ruby><ruby>目安<rt>めやす</rt></ruby>'],
        note:'📊 経営学部・情報マネジメント学部に編入枠がある'},
      {name:'<ruby>日本大学<rt>にほんだいがく</rt></ruby>（<ruby>一部学部<rt>いちぶがくぶ</rt></ruby>）',
        feature:'<ruby>学部<rt>がくぶ</rt></ruby>数が<ruby>非常<rt>ひじょう</rt></ruby>に<ruby>多<rt>おお</rt></ruby>く、<ruby>学部<rt>がくぶ</rt></ruby>ごとに<ruby>編入<rt>へんにゅう</rt></ruby><ruby>制度<rt>せいど</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>・<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる。',
        conditions:['<ruby>学部<rt>がくぶ</rt></ruby>により<ruby>専門士<rt>せんもんし</rt></ruby>の<ruby>分野<rt>ぶんや</rt></ruby><ruby>指定<rt>してい</rt></ruby>あり','<ruby>筆記試験<rt>ひっきしけん</rt></ruby>（<ruby>専門科目<rt>せんもんかもく</rt></ruby>）＋<ruby>面接<rt>めんせつ</rt></ruby>','<ruby>募集人数<rt>ぼしゅうにんずう</rt></ruby>が<ruby>若干名<rt>じゃっかんめい</rt></ruby>と<ruby>少<rt>すく</rt></ruby>ない<ruby>学部<rt>がくぶ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い'],
        note:'⚠️ 学部・学科ごとに個別確認が必須（全学部共通ではない）'},
    ]
    // ▲▲▲ এভাবেই আরো বিশ্ববিদ্যালয় যোগ করতে পারবেন ▲▲▲
  },
  {id:14,cat:'school',title:'日本の奨学金制度まとめ（外国人向け）',desc:'JASSO・民間奨学金・大学独自の制度。返済不要の給付型奨学金の探し方と応募のコツ。',tags:['奨学金','費用','支援'],color:'#0D9488'},
  {id:15,cat:'school',title:'日本語学校・専門学校・大学の違いと選び方',desc:'それぞれの学費・期間・ビザの種類・卒業後の進路。自分の目的に合った学校の選び方を解説。',tags:['学校','選び方','進学'],color:'#0D9488'},

  // ▼▼▼ নতুন আর্টিকেল এখানে যোগ করুন (এই লাইনের নিচে) ▼▼▼

];

// ★★★ CHECKLISTS —手続きリスト পেজে দেখানো ধাপে ধাপে চেকলিস্ট ★★★
// প্রতিটা ক্যাটাগরির (visa, arrival, job, school, jlpt) ভেতরে items array আছে।
// নতুন ধাপ যোগ করতে ওই ক্যাটাগরির items এর শেষে এই ফরম্যাটে যোগ করুন:
// {id:'v8', title:'শিরোনাম', detail:'বিস্তারিত ব্যাখ্যা', meta:'💡 অতিরিক্ত নোট'},
//
// নতুন ক্যাটাগরি (পুরো নতুন চেকলিস্ট ট্যাব) বানাতে চাইলে:
// ১) নিচে checklists object এর শেষে (jlpt এর পরে) নতুন ব্লক যোগ করুন
// ২) index.html এর #clTabs এর ভেতরে showChecklist('নতুনkey') বাটন যোগ করুন
const checklists = {
  visa: {
    title:'📋 在留カード更新チェックリスト',
    desc:'更新期限の3ヶ月前から始めよう',
    items:[
      {id:'v1',title:'在留期限を確認する',detail:'在留カードの「在留期間（満了日）」を確認。期限の3ヶ月前から更新可能。',meta:'⏰ まず最初にやること'},
      {id:'v2',title:'申請書を入手・記入する',detail:'出入国在留管理局のウェブサイトから「在留期間更新許可申請書」をダウンロード。',meta:'📄 出入国在留管理局HP'},
      {id:'v3',title:'在学証明書を学校に依頼する',detail:'学校の事務局に「在学証明書」を申請。発行まで数日かかることがある。',meta:'🏫 学校の事務局へ'},
      {id:'v4',title:'証明写真を用意する（4×3cm）',detail:'スーパーやコンビニの証明写真機で撮影可能。背景は白・薄い水色が望ましい。',meta:'📸 コンビニで撮影OK'},
      {id:'v5',title:'パスポートと在留カードのコピーを取る',detail:'パスポートの顔写真ページと有効期限ページ、在留カードの表裏をコピー。',meta:'🗂 コンビニコピー機でOK'},
      {id:'v6',title:'出入国在留管理局に申請する',detail:'東京は品川の「東京出入国在留管理局」へ。予約システムを事前に確認すること。',meta:'🏢 品川（東京の場合）'},
      {id:'v7',title:'ハガキが届いたら受け取りに行く',detail:'審査後にハガキが郵送される。受け取り時に収入印紙4,000円が必要。',meta:'💴 収入印紙4,000円'},
      // ▼ visaに新しいステップを追加する場合はここに ▼
    ]
  },
  arrival: {
    title:'✈️ 来日後すぐやること',
    desc:'日本に着いてから2週間以内にやること',
    items:[
      {id:'a1',title:'市区町村に転入届を提出する',detail:'来日から14日以内に、住んでいる市区町村の役所で「転入届」を提出する義務がある。',meta:'⏰ 14日以内必須'},
      {id:'a2',title:'在留カードの住所を記載してもらう',detail:'転入届の際に、在留カード裏面に住所を記載してもらう。記載がないと問題になる場合も。',meta:'📋 役所で同時にできる'},
      {id:'a3',title:'国民健康保険に加入する',detail:'留学生も国民健康保険に加入義務あり。月額約2,000〜3,000円で医療費が3割負担になる。',meta:'🏥 役所で申請'},
      {id:'a4',title:'銀行口座を開設する',detail:'ゆうちょ銀行・ネット銀行（住信SBIなど）は外国人でも開きやすい。在留カードとパスポートが必要。',meta:'🏦 在留カード必要'},
      {id:'a5',title:'スマホのSIMを契約する',detail:'IIJmio・楽天モバイルなどは外国人でも契約しやすい。在留カードとクレジットカードかデビットカードが必要。',meta:'📱 格安SIMがおすすめ'},
      {id:'a6',title:'学校に在籍確認・オリエンテーションに参加',detail:'入学後の各種手続き・アルバイト許可の申請などを学校と確認する。',meta:'🏫 学校の指示に従う'},
      // ▼ arrivalに新しいステップを追加する場合はここに ▼
    ]
  },
  job: {
    title:'💼 就職活動チェックリスト',
    desc:'卒業の1年前から動こう',
    items:[
      {id:'j1',title:'就職したい業界・職種を決める',detail:'IT・商社・製造・サービス業など。自分の専攻・日本語レベル・興味に合わせて絞り込む。',meta:'🎯 自己分析から始める'},
      {id:'j2',title:'履歴書・職務経歴書を作成する',detail:'日本式の履歴書（市販のJIS規格）を手書きまたはPC作成。写真・資格・志望動機を丁寧に。',meta:'📄 手書きが一般的'},
      {id:'j3',title:'JLPT N2以上を取得する（推奨）',detail:'多くの企業がN2以上を求める。N1があれば就職の幅が大きく広がる。',meta:'📚 N2が最低ライン'},
      {id:'j4',title:'就活サイトに登録する',detail:'マイナビ・リクナビ・外国人向けはDaijob・WeXpats Jobsなどに登録。学校のキャリアセンターも活用。',meta:'💻 複数登録を推奨'},
      {id:'j5',title:'企業説明会・インターンシップに参加する',detail:'合同説明会（就活フェア）への参加。インターンシップは内定への近道になることも。',meta:'🏢 3〜4月が多い'},
      {id:'j6',title:'内定後：在留資格変更の準備をする',detail:'内定後、卒業前に「在留資格変更許可申請」の準備を開始。会社の担当者と連携。',meta:'⚠️ 卒業前に申請が必要'},
      // ▼ jobに新しいステップを追加する場合はここに ▼
    ]
  },
  school: {
    title:'🎓 大学編入チェックリスト',
    desc:'専門学校から大学3年次編入',
    items:[
      {id:'s1',title:'編入を受け入れている大学をリサーチする',detail:'東京通信大学・産業能率大学・日本大学など。自分の専攻・学費・通学/オンラインを比較。',meta:'💻 各大学HPで確認'},
      {id:'s2',title:'GPA（成績）を確認・維持する',detail:'多くの大学が一定のGPAを要求。専門学校の成績を大切に。平均3.0以上が目安。',meta:'📊 成績を維持しよう'},
      {id:'s3',title:'志望理由書を書く',detail:'「なぜこの大学で学びたいか」「将来何をしたいか」を具体的に。日本語で丁寧に。',meta:'✍️ 早めに準備'},
      {id:'s4',title:'英語・日本語の資格を取っておく',detail:'TOEICやJLPTのスコアが有利に働くことが多い。N2以上・TOEIC600点以上が目安。',meta:'📜 資格はプラス評価'},
      {id:'s5',title:'学校の担当者に相談する',detail:'専門学校の進路担当・国際担当に編入の意志を伝え、推薦状などを依頼。',meta:'🏫 早めに相談'},
      {id:'s6',title:'出願・試験・面接を受ける',detail:'書類選考→筆記試験（小論文など）→面接が一般的。日程を把握して準備する。',meta:'📅 スケジュール管理'},
      // ▼ schoolに新しいステップを追加する場合はここに ▼
    ]
  },
  jlpt: {
    title:'📚 JLPT N2 試験準備',
    desc:'試験3ヶ月前からのチェックリスト',
    items:[
      {id:'jp1',title:'試験日程・申込を確認する',detail:'JLPTは年2回（7月・12月）。申込は試験の約3ヶ月前。jlpt.jpで確認・オンライン申込。',meta:'📅 申込を忘れずに'},
      {id:'jp2',title:'参考書を揃える',detail:'日本語総まとめN2（語彙・文法・読解・聴解）、Try! N2。全部揃えなくても弱点分野だけでもOK。',meta:'📖 Amazonで購入可'},
      {id:'jp3',title:'語彙：1日20語ペースで学習',detail:'Ankiアプリで単語カード作成。N2レベル単語は約6,000語。毎日コツコツが大事。',meta:'📱 Ankiアプリ推奨'},
      {id:'jp4',title:'文法：N2文法170項目をマスター',detail:'日本語総まとめ文法編で体系的に学習。似た文法（〜にして vs 〜として）は比較して覚える。',meta:'✏️ 毎日15分'},
      {id:'jp5',title:'読解：週3回は長文読解練習',detail:'速読力が重要。問題を解く前に設問を先に読む戦略が有効。時間配分に気をつけること。',meta:'⏱ 時間を計って練習'},
      {id:'jp6',title:'聴解：NHKやYouTubeで耳を慣らす',detail:'日本語の森（YouTube）・NHK Webラジオを毎日聴く。聴解は慣れが一番大事。',meta:'🎧 毎日聴く習慣を'},
      {id:'jp7',title:'模擬試験を解く',detail:'本番2〜3週間前に模擬試験（過去問）を時間通りに解く。弱点を見つけて補強。',meta:'📝 試験直前に必須'},
      // ▼ jlptに新しいステップを追加する場合はここに ▼
    ]
  }

  // ▼▼▼ 完全に新しいチェックリストのカテゴリを追加する場合はここに ▼▼▼
  // 例:
  // newcat: {
  //   title:'🆕 新しいチェックリスト',
  //   desc:'説明文',
  //   items:[
  //     {id:'n1', title:'ステップ1', detail:'詳細説明', meta:'📌 ノート'},
  //   ]
  // }
};

// ══════════════════════════════════════════════
// ══ STATE ══
// ══════════════════════════════════════════════
let currentPage = 'home';
let currentCat = 'all';
let currentChecklist = 'visa';
let checkDone = {};
let chatHistory = [];

// ══ NAVIGATION ══
function showPage(page) {
  ['home','search','ai','checklist'].forEach(p => {
    document.getElementById('page-'+p).classList.toggle('hidden', p!==page);
    const sb = document.getElementById('sb-'+p);
    if(sb) sb.classList.toggle('active', p===page);
  });
  currentPage = page;
  if(page==='search') renderResults();
  if(page==='checklist') showChecklist(currentChecklist);
}

// ══ SEARCH ══
function filterCat(cat) {
  currentCat = cat;
  document.querySelectorAll('#filterTags .tag').forEach(t => {
    // ভাষা যাই হোক, onclick এর ভেতরের cat ভ্যালু দিয়ে সঠিক বাটন খুঁজে বের করা (টেক্সট-নির্ভর নয়)
    const onclickAttr = t.getAttribute('onclick') || '';
    t.classList.toggle('active', onclickAttr.includes(`filterCat('${cat}')`));
  });
  renderResults();
}

function doSearch() {
  renderResults();
}

function renderResults() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const filtered = articles.filter(a => {
    const matchCat = currentCat==='all' || a.cat===currentCat;
    const matchQ = !q || a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.tags.some(t=>t.includes(q));
    return matchCat && matchQ;
  });
  const catNames = {
    visa: currentLang==='en' ? 'Visa / Residency' : 'ビザ・在留資格',
    jlpt: currentLang==='en' ? 'JLPT / Japanese' : 'JLPT・日本語',
    life: currentLang==='en' ? 'Housing / Life' : '住まい・生活',
    job: currentLang==='en' ? 'Jobs / Career' : '就職・キャリア',
    school: currentLang==='en' ? 'University' : '進学・大学'
  };
  const noResultsText = currentLang==='en'
    ? `No results found for "${q}"`
    : `「${q}」の検索結果が見つかりませんでした`;
  const catColors = {visa:'badge-amber',jlpt:'badge-blue',life:'badge-green',job:'',school:''};
  const catStyles = {job:'background:#F5F3FF;color:#5B21B6',school:'background:#F0FDFA;color:#0F766E'};
  const container = document.getElementById('searchResults');
  if(!filtered.length){
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3)"><div style="font-size:32px;margin-bottom:10px">🔍</div><div style="font-size:14px">'+noResultsText+'</div></div>';
    return;
  }
  container.innerHTML = filtered.map(a=>`
    <div class="result-item" onclick="showArticleDetail(${a.id})">
      <div class="result-cat">
        <span class="badge ${catColors[a.cat]||''}" style="${catStyles[a.cat]||''}">${catNames[a.cat]}</span>
      </div>
      <div class="result-title">${a.title}</div>
      <div class="result-desc">${a.desc}</div>
      <div class="result-tags">${a.tags.map(t=>`<span class="rtag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ══ ARTICLE DETAIL (単語リスト・週間スケジュール・文法リスト・ステップガイド・大学リストなどの詳細を表示) ══
// article に "words" 配列があれば単語テーブルを表示。
// article に "schedule" 配列があれば週間スケジュールを表示。
// article に "grammar" 配列があれば文法ポイントを表示。
// article に "steps" 配列があればステップガイドを表示。
// article に "unilist" 配列があれば大学リスト（条件付き）を表示。
// "content" (HTML文字列) があれば、それをそのまま表示。
// どれもなければ desc だけを大きく表示する。
function showArticleDetail(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return;

  let bodyHtml = `<p style="font-size:14px;color:var(--text2);line-height:1.8;margin-bottom:16px">${a.desc}</p>`;

  if (a.unilist && a.unilist.length) {
    bodyHtml += `
      <div style="font-size:11px;color:var(--amber);background:var(--amber-l);padding:8px 12px;border-radius:var(--r8);margin-bottom:14px;line-height:1.6">⚠️ 条件は年度によって変わります。出願前に必ず各大学の公式サイトで最新情報を確認してください。</div>
      <div class="uni-list">
        ${a.unilist.map(u => `
          <div class="uni-card">
            <div class="uni-name">${u.name}</div>
            <div class="uni-feature">${u.feature}</div>
            <div class="uni-conditions">
              ${u.conditions.map(c => `<div class="uni-cond-item">✓ ${c}</div>`).join('')}
            </div>
            ${u.note ? `<div class="uni-note">${u.note}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else if (a.steps && a.steps.length) {
    bodyHtml += `
      <div class="steps-list">
        ${a.steps.map((s, i) => `
          <div class="step-card">
            <div class="step-num">${s.step || (i+1)}</div>
            <div class="step-body">
              <div class="step-title">${s.title}</div>
              <div class="step-detail">${s.detail}</div>
              ${s.tip ? `<div class="step-tip">${s.tip}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (a.schedule && a.schedule.length) {
    bodyHtml += `
      <div style="font-size:12px;color:var(--text3);margin-bottom:12px">📅 毎週このルーティンを繰り返してください</div>
      <div class="schedule-list">
        ${a.schedule.map(s => `
          <div class="schedule-row">
            <div class="schedule-day">
              <div class="schedule-day-badge">${s.day}</div>
            </div>
            <div class="schedule-body">
              <div class="schedule-icon-skill">
                <span class="schedule-icon">${s.icon||'📌'}</span>
                <span class="schedule-skill">${s.skill}</span>
              </div>
              <div class="schedule-time">⏱ ${s.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (a.grammar && a.grammar.length) {
    bodyHtml += `
      <div style="font-size:12px;color:var(--text3);margin-bottom:12px">${a.grammar.length}個の文法ポイント</div>
      <div class="grammar-list">
        ${a.grammar.map(g => `
          <div class="grammar-card">
            <div class="grammar-pattern">${g.pattern}</div>
            <div class="grammar-meaning">${g.meaning}</div>
            <div class="grammar-example">${g.example}</div>
            <div class="grammar-translation">${g.translation}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (a.words && a.words.length) {
    bodyHtml += `
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px">${a.words.length}語</div>
      <div class="word-table">
        ${a.words.map(w => `
          <div class="word-row">
            <div class="word-jp">${w.word}<span class="word-reading">${w.reading||''}</span></div>
            <div class="word-mean">${w.meaning}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (a.content) {
    bodyHtml += `<div style="font-size:13px;color:var(--text);line-height:1.9">${a.content}</div>`;
  }

  document.getElementById('modalContent').innerHTML = `
    <div class="result-cat" style="margin-bottom:8px">
      <span class="badge">${a.cat}</span>
    </div>
    <div style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:14px">${a.title}</div>
    ${bodyHtml}
  `;
  document.getElementById('articleModal').classList.remove('hidden');
}

function closeArticleDetail() {
  document.getElementById('articleModal').classList.add('hidden');
}

// ══ AI CHAT ══
// ⚠️ NOTE: এই ফাংশনটা সরাসরি ব্রাউজার থেকে api.anthropic.com কল করার চেষ্টা করে।
// এটা কাজ করবে না কারণ (১) API key ছাড়া কল হবে না, (২) ব্রাউজার থেকে সরাসরি
// Anthropic API কল করলে CORS এরর দেবে। এই ফিচারটা কাজ করাতে হলে একটা ব্যাকএন্ড
// সার্ভার (Node.js/Python) দরকার হবে যেটা API key নিরাপদে রাখবে এবং রিকোয়েস্ট
// ফরওয়ার্ড করবে। এই বিষয়ে সাহায্য দরকার হলে জানাবেন।
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if(!msg) return;
  input.value = '';
  document.getElementById('chatSuggestions').style.display='none';

  appendMsg(msg, 'user');
  chatHistory.push({role:'user', content:msg});

  const typingId = 'typing-'+Date.now();
  const messagesDiv = document.getElementById('chatMessages');
  messagesDiv.insertAdjacentHTML('beforeend',`
    <div class="msg" id="${typingId}">
      <div class="msg-avatar av-ai">AI</div>
      <div class="msg-bubble ai"><div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>
    </div>
  `);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        system:`あなたは「ForeignerHelp Japan」のAIアシスタントです。
日本に住む・学ぶ外国人（特に留学生）をサポートします。
対応言語：日本語・English・বাংলা（ユーザーが使った言語で答える）
専門分野：JLPT・日本語学習・ビザ・在留資格・住まい・就職・大学進学・日本の生活
・わかりやすく、親切に、短く答える
・箇条書きを使って整理する
・難しい日本語は避け、外国人でも理解できる表現を使う
・不確かな情報は「確認が必要です」と伝える`,
        messages: chatHistory.slice(-10)
      })
    });
    const data = await res.json();
    document.getElementById(typingId)?.remove();
    const reply = data.content?.[0]?.text || 'すみません、もう一度試してください。';
    appendMsg(reply, 'ai');
    chatHistory.push({role:'assistant', content:reply});
  } catch(e) {
    document.getElementById(typingId)?.remove();
    appendMsg('接続エラーが発生しました。もう一度お試しください。', 'ai');
  }
}

function appendMsg(text, role) {
  const messagesDiv = document.getElementById('chatMessages');
  const formatted = text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<b>$1</b>').replace(/^- (.*)/gm,'• $1');
  messagesDiv.insertAdjacentHTML('beforeend',`
    <div class="msg ${role}">
      <div class="msg-avatar av-${role}">${role==='ai'?'AI':'You'}</div>
      <div class="msg-bubble ${role}">${formatted}</div>
    </div>
  `);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function askSuggestion(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

// ══ CHECKLIST ══
function showChecklist(key) {
  currentChecklist = key;
  document.querySelectorAll('#clTabs .tag').forEach(t => {
    // ভাষা যাই হোক, onclick এর ভেতরের key ভ্যালু দিয়ে সঠিক ট্যাব খুঁজে বের করা (টেক্সট-নির্ভর নয়)
    const onclickAttr = t.getAttribute('onclick') || '';
    t.classList.toggle('active', onclickAttr.includes(`showChecklist('${key}')`));
  });
  const cl = checklists[key];
  const done = cl.items.filter(i=>checkDone[i.id]).length;
  const pct = Math.round(done/cl.items.length*100);
  let html = `
    <div class="card" style="margin-bottom:18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-size:15px;font-weight:800;color:var(--text)">${cl.title}</div>
        <div style="font-size:13px;font-weight:700;color:var(--green)">${done} / ${cl.items.length} 完了</div>
      </div>
      <div style="font-size:12px;color:var(--text2);margin-bottom:10px">${cl.desc}</div>
      <div class="progress-wrap"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div style="font-size:11px;color:var(--text3);margin-top:4px;text-align:right">${pct}% 完了</div>
    </div>
  `;
  html += cl.items.map(item=>`
    <div class="cl-item ${checkDone[item.id]?'done':''}" onclick="toggleCheck('${item.id}','${key}')">
      <div class="cl-check">${checkDone[item.id]?'✓':''}</div>
      <div class="cl-text">
        <div class="cl-title">${item.title}</div>
        <div class="cl-detail">${item.detail}</div>
        <div class="cl-meta">${item.meta}</div>
      </div>
    </div>
  `).join('');
  document.getElementById('checklistContent').innerHTML = html;
}

function toggleCheck(id, key) {
  checkDone[id] = !checkDone[id];
  showChecklist(key);
}

// ══ LANGUAGE / i18n ══
// নতুন ভাষা যোগ করতে চাইলে নিচে translations object এ একটা নতুন ভাষার কোড
// (যেমন 'bn') আর তার নিচে সব key এর অনুবাদ যোগ করুন, তারপর langCodes ও
// langLabels এ সেই কোডটা যোগ করে দিন — ব্যাস, সাইটে নতুন ভাষা চালু হয়ে যাবে।

const langCodes = ['ja', 'en'];
const langLabels = { ja: '日本語', en: 'English' };
let currentLang = 'ja';

const translations = {
  ja: {
    'nav.searchPlaceholder': 'ビザ・JLPT・住まいを検索...',
    'sidebar.mainMenu': 'メインメニュー',
    'sidebar.home': 'ホーム',
    'sidebar.search': '情報を検索',
    'sidebar.ai': 'AI相談',
    'sidebar.checklist': '手続きリスト',
    'sidebar.category': 'カテゴリ',
    'sidebar.jlpt': 'JLPT・語学',
    'sidebar.visa': 'ビザ・在留',
    'sidebar.life': '住まい・生活',
    'sidebar.job': '就職・キャリア',
    'sidebar.school': '進学・大学',
    'home.heroTag': '👋 ようこそ！Welcome！স্বাগতম！',
    'home.heroTitle': '日本での生活、一緒に乗り越えよう',
    'home.heroDesc': 'ビザから就職まで — 外国人が直面するすべての課題をサポートします。検索・AI相談・チェックリストがすべて無料。',
    'home.statArticles': '情報記事',
    'home.statAi': 'AI相談',
    'home.statAiVal': '24時間',
    'home.statChecklist': 'チェックリスト',
    'home.statChecklistVal': '5種類',
    'home.chooseService': 'サービスを選ぶ',
    'home.svcJlptName': 'JLPT・日本語',
    'home.svcJlptDesc': 'N5〜N1の学習ガイド、単語・文法まとめ',
    'home.svcVisaName': 'ビザ・在留資格',
    'home.svcVisaDesc': '更新手続き・必要書類・申請の流れ',
    'home.svcLifeName': '住まい・生活',
    'home.svcLifeDesc': '部屋探し・銀行・ゴミ出し・マナー',
    'home.svcJobName': '就職・キャリア',
    'home.svcJobDesc': '履歴書・面接・就労ビザのポイント',
    'home.svcSchoolName': '進学・大学入学',
    'home.svcSchoolDesc': '専門学校→大学編入・奨学金情報',
    'home.svcAiName': 'AI相談（無料）',
    'home.svcAiDesc': '何でも日本語・英語・バングラ語で質問',
    'home.aiPromoTitle': '🤖 AIに何でも聞いてみよう',
    'home.aiPromoDesc': 'ビザ・JLPT・住まい・就職 — 日本語でも英語でもバングラ語でもOK',
    'home.aiPromoBtn': '相談する →',
    'search.title': '🔍 情報を検索する',
    'search.desc': 'ビザ・JLPT・住まい・就職など、必要な情報をすぐ見つける',
    'search.inputPlaceholder': '例：在留カード更新、N2文法、部屋の探し方...',
    'search.btn': '検索',
    'search.tagAll': 'すべて',
    'search.tagJlpt': '📚 JLPT・語学',
    'search.tagVisa': '📋 ビザ・在留',
    'search.tagLife': '🏠 住まい・生活',
    'search.tagJob': '💼 就職・キャリア',
    'search.tagSchool': '🎓 進学・大学',
    'ai.title': '🤖 AI相談',
    'ai.desc': '日本語・English・বাংলা — 何でも聞いてください',
    'ai.sug1': '📋 在留カード更新',
    'ai.sug2': '📚 N2勉強法',
    'ai.sug3': '🏠 部屋の借り方',
    'ai.sug4': '💼 就職の方法',
    'ai.sug5': '🎓 大学編入',
    'ai.introP1': 'こんにちは！ForeignerHelp JapanのAIアシスタントです。🌏',
    'ai.introP2': 'ビザ、JLPT、住まい、就職、進学など、日本生活に関することなら何でも聞いてください。',
    'ai.introP3': '<b>日本語・English・বাংলা</b> で質問できます！',
    'ai.inputPlaceholder': '質問を入力... (例: ビザの更新はいつすればいい？)',
    'checklist.title': '✅ 手続きチェックリスト',
    'checklist.desc': 'やるべきことを一つずつ確認しながら進めよう',
    'checklist.tabVisa': '📋 ビザ更新',
    'checklist.tabArrival': '✈️ 来日後すぐ',
    'checklist.tabJob': '💼 就職活動',
    'checklist.tabSchool': '🎓 大学編入',
    'checklist.tabJlpt': '📚 JLPT準備',
  },
  en: {
    'nav.searchPlaceholder': 'Search visa, JLPT, housing...',
    'sidebar.mainMenu': 'Main Menu',
    'sidebar.home': 'Home',
    'sidebar.search': 'Search Info',
    'sidebar.ai': 'AI Chat',
    'sidebar.checklist': 'Checklists',
    'sidebar.category': 'Categories',
    'sidebar.jlpt': 'JLPT / Language',
    'sidebar.visa': 'Visa / Residency',
    'sidebar.life': 'Housing / Life',
    'sidebar.job': 'Jobs / Career',
    'sidebar.school': 'University',
    'home.heroTag': '👋 Welcome! ようこそ！স্বাগতম！',
    'home.heroTitle': "Let's navigate life in Japan together",
    'home.heroDesc': 'From visas to jobs — support for every challenge foreign residents face. Search, AI chat, and checklists are all free.',
    'home.statArticles': 'Articles',
    'home.statAi': 'AI Chat',
    'home.statAiVal': '24/7',
    'home.statChecklist': 'Checklists',
    'home.statChecklistVal': '5 types',
    'home.chooseService': 'Choose a service',
    'home.svcJlptName': 'JLPT / Japanese',
    'home.svcJlptDesc': 'N5–N1 study guides, vocabulary & grammar',
    'home.svcVisaName': 'Visa / Residence Status',
    'home.svcVisaDesc': 'Renewal procedures, documents, application flow',
    'home.svcLifeName': 'Housing / Life',
    'home.svcLifeDesc': 'Room hunting, banking, trash rules, manners',
    'home.svcJobName': 'Jobs / Career',
    'home.svcJobDesc': 'Resumes, interviews, work visa tips',
    'home.svcSchoolName': 'University Admission',
    'home.svcSchoolDesc': 'Vocational school → university transfer, scholarships',
    'home.svcAiName': 'AI Chat (Free)',
    'home.svcAiDesc': 'Ask anything in Japanese, English, or Bengali',
    'home.aiPromoTitle': '🤖 Ask the AI anything',
    'home.aiPromoDesc': 'Visa, JLPT, housing, jobs — in Japanese, English, or Bengali',
    'home.aiPromoBtn': 'Chat now →',
    'search.title': '🔍 Search Information',
    'search.desc': 'Quickly find what you need on visas, JLPT, housing, jobs, and more',
    'search.inputPlaceholder': 'e.g. residence card renewal, N2 grammar, room hunting...',
    'search.btn': 'Search',
    'search.tagAll': 'All',
    'search.tagJlpt': '📚 JLPT / Language',
    'search.tagVisa': '📋 Visa / Residency',
    'search.tagLife': '🏠 Housing / Life',
    'search.tagJob': '💼 Jobs / Career',
    'search.tagSchool': '🎓 University',
    'ai.title': '🤖 AI Chat',
    'ai.desc': 'Japanese, English, Bengali — ask anything',
    'ai.sug1': '📋 Residence card renewal',
    'ai.sug2': '📚 N2 study tips',
    'ai.sug3': '🏠 How to rent a room',
    'ai.sug4': '💼 How to find a job',
    'ai.sug5': '🎓 University transfer',
    'ai.introP1': "Hi! I'm the ForeignerHelp Japan AI assistant. 🌏",
    'ai.introP2': 'Ask me anything about visas, JLPT, housing, jobs, university — anything about life in Japan.',
    'ai.introP3': 'You can ask in <b>Japanese, English, or Bengali</b>!',
    'ai.inputPlaceholder': 'Type your question... (e.g. when should I renew my visa?)',
    'checklist.title': '✅ Procedure Checklists',
    'checklist.desc': 'Work through each step one at a time',
    'checklist.tabVisa': '📋 Visa Renewal',
    'checklist.tabArrival': '✈️ Right After Arrival',
    'checklist.tabJob': '💼 Job Hunting',
    'checklist.tabSchool': '🎓 University Transfer',
    'checklist.tabJlpt': '📚 JLPT Prep',
  }
  // ▼▼▼ নতুন ভাষা (যেমন bn) যোগ করতে এখানে bn: { 'key': 'অনুবাদ', ... } লিখুন ▼▼▼
};

function applyTranslations() {
  const dict = translations[currentLang] || translations.ja;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.documentElement.lang = currentLang;
  // ডাইনামিক্যালি তৈরি হওয়া কনটেন্ট (সার্চ রেজাল্ট, চেকলিস্ট) নতুন ভাষায় আবার রেন্ডার করা
  if (typeof renderResults === 'function') renderResults();
  if (typeof showChecklist === 'function' && currentChecklist) showChecklist(currentChecklist);
}

function cycleLang() {
  const idx = (langCodes.indexOf(currentLang) + 1) % langCodes.length;
  currentLang = langCodes[idx];
  document.getElementById('langLabel').textContent = langLabels[currentLang];
  applyTranslations();
}

// ══ INIT ══
renderResults();
showChecklist('visa');
