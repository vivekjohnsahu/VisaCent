import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class FlagValueService {

  constructor(private http:Http) { }

    flagMethod() {
      return [
        {
        "country":" Algeria",
        "value":"(+213)",
        "name":"+213",
        },
        {
        "country":"Andorra",
        "value":"(+376)",
        "name":"+376 "
        },
        {
        "country":"Angola",
        "value":"(+244)",
        "name":"+244"
        },
        {
        "country":"Anguilla",
        "value":"(+1264)",
        "name":"+1264"
        },
        {
        "country":"Antigua & Barbuda",
        "value":"(+1268)",
        "name":"+1268"
        },
        {
        "country":"Argentina",
        "value":"(+54)",
        "name":"+54"
        },
        {
        "country":"Armenia",
        "value":"(+374)",
        "name":"+374"
        },
        {
        "country":"Aruba",
        "value":"(+297)",
        "name":"+297"
        },
        {
        "country":"Australia",
        "value":"(+61)",
        "name":"+61"
        },
        {
        "country":"Austria",
        "value":"(+43)",
        "name":"+43"
        },
        {
        "country":"Azerbaijan",
        "value":"(+994)",
        "name":"+994"
        },
        {
        "country":"Bahamas",
        "value":"(+1242)",
        "name":"+1242"
        },
        {
        "country":"Bahrain",
        "value":"(+973)",
        "name":"+973"
        },
        {
        "country":"Bangladesh",
        "value":"(+880)",
        "name":"+880"
        },
        {
        "country":"Barbados",
        "value":"(+1246)",
        "name":"+1246"
        },
        {
        "country":"Belarus",
        "value":"(+375)",
        "name":"+375"
        },
        {
        "country":"belgium",
        "value":"(+32)",
        "name":"+32"
        },
        {
        "country":"Belize",
        "value":"(+501)",
        "name":"+501"
        },
        {
        "country":"Benin",
        "value":"(+229)",
        "name":"+229"
        },
        {
        "country":"Bermuda",
        "value":"(+1441)",
        "name":"+1441"
        },
        {
        "country":"Bhutan",
        "value":"(+975)",
        "name":"+975"
        },
        {
        "country":"Bolivia",
        "value":"(+591)",
        "name":"+591"
        },
        {
        "country":"Bosnia",
        "value":"(+387)",
        "name":"+387"
        },
        {
        "country":"Botswana",
        "value":"(+267)",
        "name":"+267"
        },
        {
        "country":"Brazil",
        "value":"(+55)",
        "name":"+55"
        },
        {
        "country":"Brunei",
        "value":"(+673)",
        "name":"+673"
        },
        {
        "country":"Bulgaria",
        "value":"(+359)",
        "name":"+359"
        },
        {
        "country":"Burkina",
        "value":"(+226)",
        "name":"+226"
        },
        {
        "country":"Burundi",
        "value":"(+257)",
        "name":"+257"
        },
        {
        "country":"Cambodia",
        "value":"(+855)",
        "name":"+855"
        },
        {
        "country":"Cameroon",
        "value":"(+237)",
        "name":"+237"
        },
        {
        "country":"Canada",
        "value":"(+1)",
        "name":"+1"
        },
        {
        "country":"Cape Verde Islands",
        "value":"(+238)",
        "name":"+238"
        },
        {
        "country":"Cayman Islands",
        "value":"(+1345)",
        "name":"+1345"
        },
        {
        "country":"Central African Republic",
        "value":"(+236)",
        "name":"+236"
        },
        {
        "country":"chile",
        "value":"(+56)",
        "name":"+56"
        },
        {
        "country":"china",
        "value":"(+86)",
        "name":"+86"
        },
        {
        "country":"colombia",
        "value":"(+57)",
        "name":"+57"
        },
        {
        "country":"Comoros",
        "value":"(+269)",
        "name":"+269"
        },
        {
        "country":"Congo",
        "value":"(+242)",
        //"name":"Congo (+242)"
        "name":"+242"
        },
        {
          "country":"Cook Islands",
        "value":"(+682)",
        //"name":"Cook Islands (+682)"
        "name":"+682"
        },
        {
          "country":"Costa Rica",
        "value":"(+506)",
        //"name":"Costa Rica (+506)"
        "name":"+506"
        },
        {
          "country":"Croatia",
        "value":"(+385)",
        //"name":"Croatia (+385)"
        "name":"+385"
        },
        {
          "country":"Cyprus - North",
        "value":"(+90)",
        //"name":"yprus - North (+90)"
        "name":"+90"
        },
        {
          "country":"Cyprus - South",
        "value":"(+357)",
        //"name":"Cyprus - South (+357)"
        "name":"+357"
        },
        {
          "country":"Czech Republic",
        "value":"(+420)",
        //"name":"Czech Republic (+420)"
        "name":"+420"
        },
        {
          "country":"Denmark",
        "value":"(+45)",
        //"name":"enmark (+45)"
        "name":"+45"
        },
        {
          "country":"Djibouti",
        "value":"(+253)",
        //"name":"Djibouti (+253)"
        "name":"+253"
        },
        {
          "country":"Dominica",
        "value":"(+1809)",
        //"name":"Dominica (+1809)"
        "name":"+1809"
        },
        {
          "country":"Dominican Republic",
        "value":"(+1809)",
        //"name":"Dominican Republic (+1809)"
        "name":"+1809"
        },
        {
          "country":"Ecuador",
        "value":"(+593)",
        //"name":"Ecuador (+593)"
        "name":"+593"
        },
        {
          "country":"Egypt",
        "value":"(+20)",
        //"name":"gypt (+20)"
        "name":"+20"
        },
        {
          "country":"El3 Salvador",
        "value":"(+503)",
        //"name":"El Salvador (+503)"
        "name":"+50"
        },
        {
          "country":"Equatorial Guinea",
        "value":"(+240)",
        //"name":"Equatorial Guinea (+240)"
        "name":"+240"
        },
        {
          "country":"Eritrea",
        "value":"(+291)",
        //"name":"Eritrea (+291)"
        "name":"+291"
        },
        {
          "country":"Estonia",
        "value":"(+372)",
        //"name":"Estonia (+372)"
        "name":"+372"
        },
        {
          "country":"Ethiopia",
        "value":"(+251)",
        //"name":"Ethiopia (+251)"
        "name":"+251"
        },
        {
          "country":"Falkland Islands",
        "value":"(+500)",
        //"name":"Falkland Islands (+500)"
        "name":"+500"
        },
        {
          "country":"Faroe Islands",
        "value":"(+298)",
        //"name":"Faroe Islands (+298)"
        "name":"+298"
        },
        {
          "country":"Fiji",
        "value":"(+679)",
        //"name":"Fiji (+679)"
        "name":"+679"
        },
        {
          "country":"Finland",
        "value":"(+358)",
        //"name":"Finland (+358)"
        "name":"+358"
        },
        {
          "country":"France",
        "value":"(+33)",
        //"name":"rance (+33)"
        "name":"+33"
        },
        {
          "country":"French Guiana",
        "value":"(+594)",
        //"name":"French Guiana (+594)"
        "name":"+594"
        },
        {
          "country":"French Polynesia",
        "value":"(+689)",
        //"name":"French Polynesia (+689)"
        "name":"+689"
        },
        {
          "country":"Gabon",
        "value":"(+241)",
        //"name":"Gabon (+241)"
        "name":"+241"
        },
        {
          "country":"Gambia",
        "value":"(+220)",
        //"name":"Gambia (+220)"
        "name":"+220"
        },
        {
          "country":"Georgia",
        "value":"(+7880)",
        //"name":"Georgia (+7880)"
        "name":"+7880"
        },
        {
          "country":"Germany",
        "value":"(+49)",
        //"name":"ermany (+49)"
        "name":"+49"
        },
        {
          "country":"Ghana",
        "value":"(+233)",
        //"name":"Ghana (+233)"
        "name":"+233"
        },
        {
          "country":"Gibraltar",
        "value":"(+350)",
        //"name":"Gibraltar (+350)"
        "name":"+350"
        },
        {
          "country":"Greece",
        "value":"(+30)",
        //"name":"reece (+30)"
        "name":"+30"
        },
        {
          "country":"Greenland",
        "value":"(+299)",
        //"name":"Greenland (+299)"
        "name":"+299"
        },
        {
          "country":"Grenada",
        "value":"(+1473)",
        //"name":"Grenada (+1473)"
        "name":"+1473"
        },
        {
          "country":"Guadeloupe",
        "value":"(+590)",
        //"name":"Guadeloupe (+590)"
        "name":"+590"
        },
        {
          "country":"Guam",
        "value":"(+671)",
        //"name":"Guam (+671)"
        "name":"+671"
        },
        {
          "country":"Guatemala",
        "value":"(+502)",
        //"name":"Guatemala (+502)"
        "name":"+502"
        },
        {
          "country":"Guinea",
        "value":"(+224)",
        //"name":"Guinea (+224)"
        "name":"+224"
        },
        {
          "country":"Guinea",
        "value":"(+245)",
        //"name":"Guinea - Bissau (+245)"
        "name":"+245"
        },
        {
          "country":"Guyana",
        "value":"(+592)",
        //"name":"Guyana (+592)"
        "name":"+592"
        },
        {
          "country":"Haiti",
        "value":"(+509)",
        //"name":"Haiti (+509)"
        "name":"+509"
        },
        {
          "country":"Honduras",
        "value":"(+504)",
        //"name":"Honduras (+504)"
        "name":"+504"
        },
        {
          "country":"Hong Kong",
        "value":"(+852)",
        //"name":"Hong Kong (+852)"
        "name":"+852"
        },
        {
          "country":"Hungary",
        "value":"(+36)",
        //"name":"ungary (+36)"
        "name":"+36"
        },
        {
          "country":"Iceland",
        "value":"(+354)",
        //"name":"Iceland (+354)"
        "name":"+354"
        },
        {
          "country":"India",
        "value":"(+91)",
        //"name":"ndia (+91)"
        "name":"+91"
        },
        {
          "country":"Indonesia",
        "value":"(+62)",
        //"name":"ndonesia (+62)"
        "name":"+62"
        },
        {
          "country":"Iraq",
        "value":"(+964)",
        //"name":"Iraq (+964)"
        "name":"+964"
        },
        {
          "country":"Ireland",
        "value":"(+353)",
        //"name":"Ireland (+353)"
        "name":"+353"
        },
        {
          "country":"Israel",
        "value":"(+972)",
        //"name":"Israel (+972)"
        "name":"+972"
        },
        {
          "country":"Italy",
        "value":"(+39)",
        //"name":"taly (+39)"
        "name":"+39"
        },
        {
          "country":"Jamaica",
        "value":"(+1876)",
        //"name":"Jamaica (+1876)"
        "name":"+1876"
        },
        {
          "country":"Japan",
        "value":"(+81)",
        //"name":"apan (+81)"
        "name":"+81"
        },
        {
          "country":"Jordan",
        "value":"(+962)",
        //"name":"Jordan (+962)"
        "name":"+962"
        },
        {
          "country":"Kzakhstan",
        "value":"(+7)",
        //"name":"zakhstan (+7)"
        "name":"+7"
        },
        {
          "country":"Kenya",
        "value":"(+254)",
        //"name":"Kenya (+254)"
        "name":"+254"
        },
        {
          "country":"Kiribati",
        "value":"(+686)",
        //"name":"Kiribati (+686)"
        "name":"+686"
        },
        {
          "country":"Korea - South",
        "value":"(+82)",
        //"name":"orea - South (+82)"
        "name":"+82"
        },
        {
          "country":"Kuwait",
        "value":"(+965)",
        //"name":"Kuwait (+965)"
        "name":"+965"
        },
        {
          "country":"Kyrgyzstan",
        "value":"(+996)",
        //"name":"Kyrgyzstan (+996)"
        "name":"+996"
        },
        {
          "country":"Laos",
        "value":"(+856)",
        //"name":"Laos (+856)"
        "name":"+856"
        },
        {
          "country":"Latvia",
        "value":"(+371)",
        //"name":"Latvia (+371)"
        "name":"+371"
        },
        {
          "country":"Lebanon",
        "value":"(+961)",
        //"name":"Lebanon (+961)"
        "name":"+961"
        },
        {
          "country":"Lesotho",
        "value":"(+266)",
        //"name":"Lesotho (+266)"
        "name":"+266"
        },
        {
          "country":"Liberia",
        "value":"(+231)",
        //"name":"Liberia (+231)"
        "name":"+231"
        },
        {
          "country":"Libya",
        "value":"(+218)",
        //"name":"Libya (+218)"
        "name":"+218"
        },
        {
          "country":"Liechtenstein",
        "value":"(+417)",
        //"name":"Liechtenstein (+417)"
        "name":"+417"
        },
        {
          "country":"Lithuania",
        "value":"(+370)",
        //"name":"Lithuania (+370)"
        "name":"+370"
        },
        {
          "country":"Luxembourg",
        "value":"(+352)",
        //"name":"Luxembourg (+352)"
        "name":"+352"
        },
        {
          "country":"Macao",
        "value":"(+853)",
        //"name":"Macao (+853)"
        "name":"+853"
        },
        {
          "country":"Macedonia",
        "value":"(+389)",
        //"name":"Macedonia (+389)"
        "name":"+389"
        },
        {
          "country":"Madagascar",
        "value":"(+261)",
        //"name":"Madagascar (+261)"
        "name":"+261"
        },
        {
          "country":"Malawi",
        "value":"(+265)",
        //"name":"Malawi (+265)"
        "name":"+265"
        },
        {
          "country":"Malaysia",
        "value":"(+60)",
        //"name":"alaysia (+60)"
        "name":"+60"
        },
        {
          "country":"Maldives",
        "value":"(+960)",
        //"name":"Maldives (+960)"
        "name":"+960"
        },
        {
          "country":"Mali",
        "value":"(+223)",
        //"name":"Mali (+223)"
        "name":"+223"
        },
        {
          "country":"Malta",
        "value":"(+356)",
        //"name":"Malta (+356)"
        "name":"+356"
        },
        {
          "country":"Marshall Islands",
        "value":"(+692)",
        //"name":"Marshall Islands (+692)"
        "name":"+692"
        },
        {
          "country":"Martinique",
        "value":"(+596)",
        //"name":"Martinique (+596)"
        "name":"+596"
        },
        {
          "country":"Mauritania",
        "value":"(+222)",
        //"name":"Mauritania (+222)"
        "name":"+222"
        },
        {
          "country":"Mayotte",
        "value":"(+269)",
        //"name":"Mayotte (+269)"
        "name":"+269"
        },
        {
          "country":"Mexico",
        "value":"(+52)",
        //"name":"exico (+52)"
        "name":"+52"
        },
        {
          "country":"Micronesia",
        "value":"(+691)",
        //"name":"Micronesia (+691)"
        "name":"+691"
        },
        {
          "country":"Moldova",
        "value":"(+373)",
        //"name":"Moldova (+373)"
        "name":"+373"
        },
        {
          "country":"Monaco",
        "value":"(+377)",
        //"name":"Monaco (+377)"
        "name":"+377"
        },
        {
          "country":"Mongolia",
        "value":"(+976)",
        //"name":"Mongolia (+976)"
        "name":"+976"
        },
        {
          "country":"Montserrat",
        "value":"(+1664)",
        //"name":"Montserrat (+1664)"
        "name":"+1664"
        },
        {
          "country":"Morocco",
        "value":"(+212)",
        //"name":"Morocco (+212)"
        "name":"+212"
        },
        {
          "country":"Mozambique",
        "value":"(+258)",
        //"name":"Mozambique (+258)"
        "name":"+258"
        },
        {
          "country":"Myanmar",
        "value":"(+95)",
        //"name":"yanmar (+95)"
        "name":"+95"
        },
        {
          "country":"Namibia",
        "value":"(+264)",
        //"name":"Namibia (+264)"
        "name":"+264"
        },
        {
          "country":"Nauru",
        "value":"(+674)",
        //"name":"Nauru (+674)"
        "name":"+674"
        },
        {
          "country":"Nepal",
        "value":"(+977)",
        //"name":"Nepal (+977)"
        "name":"+977"
        },
        {
          "country":"Netherlands",
        "value":"(+31)",
        //"name":"etherlands (+31)"
        "name":"+31"
        },
        {
          "country":"New Caledonia",
        "value":"(+687)",
        //"name":"New Caledonia (+687)"
        "name":"+687"
        },
        {
          "country":"New Zealand",
        "value":"(+64)",
        //"name":"ew Zealand (+64)"
        "name":"+64"
        },
        {
          "country":"Nicaragua",
        "value":"(+505)",
        //"name":"Nicaragua (+505)"
        "name":"+505"
        },
        {
          "country":"Niger",
        "value":"(+227)",
        //"name":"Niger (+227)"
        "name":"+227"
        },
        {
          "country":"Nigeria",
        "value":"(+234)",
        //"name":"Nigeria (+234)"
        "name":"+234"
        },
        {
          "country":"Niue",
        "value":"(+683)",
        //"name":"Niue (+683)"
        "name":"+683"
        },
        {
          "country":"Norfolk Islands",
        "value":"(+672)",
        //"name":"Norfolk Islands (+672)"
        "name":"+672"
        },
        {
          "country":"Northern Marianas",
        "value":"(+670)",
        //"name":"Northern Marianas (+670)"
        "name":"+670"
        },
        {
          "country":"Norway",
        "value":"(+47)",
        //"name":"orway (+47)"
        "name":"+47"
        },
        {
          "country":"Oman",
        "value":"(+968)",
        //"name":"Oman (+968)"
        "name":"+968"
        },
        {
          "country":"Pakistan",
        "value":"(+92)",
        //"name":"akistan (+92)"
        "name":"+92"
        },
        {
          "country":"Palau",
        "value":"(+680)",
        //"name":"Palau (+680)"
        "name":"+680"
        },
        {
          "country":"Panama",
        "value":"(+507)",
        //"name":"Panama (+507)"
        "name":"+507"
        },
        {
          "country":"Papua New Guinea",
        "value":"(+675)",
        //"name":"Papua New Guinea (+675)"
        "name":"+675"
        },
        {
          "country":"Paraguay",
        "value":"(+595)",
        //"name":"Paraguay (+595)"
        "name":"+595"
        },
        {
          "country":"Peru",
        "value":"(+51)",
        //"name":"eru (+51)"
        "name":"+51"
        },
        {
          "country":"Philippines",
        "value":"(+63)",
        //"name":"hilippines (+63)"
        "name":"+63"
        },
        {
          "country":"Poland",
        "value":"(+48)",
        //"name":"oland (+48)"
        "name":"+48"
        },
        {
          "country":"Portugal",
        "value":"(+351)",
        //"name":"Portugal (+351)"
        "name":"+351"
        },
        {
          "country":"Puerto Rico",
        "value":"(+1787)",
        //"name":"Puerto Rico (+1787)"
        "name":"+1787"
        },
        {
          "country":"Qatar",
        "value":"(+974)",
        //"name":"Qatar (+974)"
        "name":"+974"
        },
        {
          "country":"Reunion",
        "value":"(+262)",
        //"name":"Reunion (+262)"
        "name":"+262"
        },
        {
          "country":"Romania",
        "value":"(+40)",
        //"name":"omania (+40)"
        "name":"+40"
        },
        {
          "country":"Russia",
        "value":"(+7)",
        //"name":"ssia (+7)"
        "name":"+7"
        },
        {
          "country":"Rwanda",
        "value":"(+250)",
        //"name":"Rwanda (+250)"
        "name":"+250"
        },
        {
          "country":"San Marino",
        "value":"(+378)",
        //"name":"San Marino (+378)"
        "name":"+378"
        },
        {
          "country":"Sao Tome &amp; Principe",
        "value":"(+239)",
        //"name":"Sao Tome &amp; Principe (+239)"
        "name":"+239"
        },
        {
          "country":"Saudi Arabia",
        "value":"(+966)",
        //"name":"Saudi Arabia (+966)"
        "name":"+966"
        },
        {
          "country":"Senegal",
        "value":"(+221)",
        //"name":"Senegal (+221)"
        "name":"+221"
        },
        {
          "country":"Serbia",
        "value":"(+381)",
        //"name":"Serbia (+381)"
        "name":"+381"
        },
        {
          "country":"Seychelles",
        "value":"(+248)",
        //"name":"Seychelles (+248)"
        "name":"+248"
        },
        {
          "country":"Sierra Leone",
        "value":"(+232)",
        //"name":"Sierra Leone (+232)"
        "name":"+232"
        },
        {
          "country":"Singapore",
        "value":"(+65)",
        //"name":"ingapore (+65)"
        "name":"+65"
        },
        {
          "country":"Slovak Republic",
        "value":"(+421)",
        //"name":"Slovak Republic (+421)"
        "name":"+421"
        },
        {
          "country":"Slovenia",
        "value":"(+386)",
        //"name":"Slovenia (+386)"
        "name":"+386"
        },
        {
          "country":"Solomon Islands",
        "value":"(+677)",
        //"name":"Solomon Islands (+677)"
        "name":"+677"
        },
        {
          "country":"Somalia",
        "value":"(+252)",
        //"name":"Somalia (+252)"
        "name":"+252"
        },
        {
          "country":"South Africa",
        "value":"(+27)",
        //"name":"outh Africa (+27)"
        "name":"+27"
        },
        {
          "country":"Spain",
        "value":"(+34)",
        //"name":"pain (+34)"
        "name":"+34"
        },
        {
          "country":"Sri Lanka",
        "value":"(+94)",
        //"name":"sri Lanka (+94)"
        "name":"+94"
        },
        {
          "country":"St. Helena",
        "value":"(+290)",
        //"name":"St. Helena (+290)"
        "name":"+29"
        },
        {
          "country":"St. Kitts",
        "value":"(+1869)",
        //"name":"St. Kitts (+1869)"
        "name":"+18"
        },
        {
          "country":"St. Lucia",
        "value":"(+1758)",
        //"name":"St. Lucia (+1758)"
        "name":"+17"
        },
        {
          "country":"Suriname",
        "value":"(+597)",
        //"name":"Suriname (+597)"
        "name":"+597"
        },
        {
          "country":"Sudan",
        "value":"(+249)",
        //"name":"Sudan (+249)"
        "name":"+249"
        },
        {
          "country":"Swaziland",
        "value":"(+268)",
        //"name":"Swaziland (+268)"
        "name":"+268"
        },
        {
          "country":"Sweden",
        "value":"(+46)",
        //"name":"weden (+46)"
        "name":"+46"
        },
        {
          "country":"Switzerland",
        "value":"(+41)",
        //"name":"witzerland (+41)"
        "name":"+41"
        },
        {
          "country":"Taiwan",
        "value":"(+886)",
        //"name":"Taiwan (+886)"
        "name":"+886"
        },
        {
          "country":"Tajikistan",
        "value":"(+992)",
        //"name":"Tajikistan (+992)"
        "name":"+992"
        },
        {
          "country":"Thailand",
        "value":"(+66)",
        //"name":"hailand (+66)"
        "name":"+66"
        },
        {
          "country":"Togo",
        "value":"(+228)",
        //"name":"Togo (+228)"
        "name":"+228"
        },
        {
          "country":"Tonga",
        "value":"(+676)",
        //"name":"Tonga (+676)"
        "name":"+676"
        },
        {
          "country":"Trinidad &amp; Tobago",
        "value":"(+1868)",
        //"name":"Trinidad &amp; Tobago (+1868)"
        "name":"+1868"
        },
        {
          "country":"Tunisia",
        "value":"(+216)",
        //"name":"Tunisia (+216)"
        "name":"+216"
        },
        {
          "country":"Turkey",
        "value":"(+90)",
        //"name":"urkey (+90)"
        "name":"+90"
        },
        {
          "country":"Turkmenistan",
        "value":"(+993)",
        //"name":"Turkmenistan (+993)"
        "name":"+993"
        },
        {
          "country":"Turks",
        "value":"(+1649)",
        //"name":"Turks &amp; Caicos Islands (+1649)"
        "name":"+1649"
        },
        {
          "country":"Tuvalu",
        "value":"(+688)",
        //"name":"Tuvalu (+688)"
        "name":"+688"
        },
        {
          "country":"Uganda",
        "value":"(+256)",
        //"name":"Uganda (+256)"
        "name":"+256"
        },
        {
          "country":"K4",
        "value":"(+44)",
        //"name":"K (+44)"
        "name":"+4"
        },
        {
          "country":"Ukraine",
        "value":"(+380)",
        //"name":"Ukraine (+380)"
        "name":"+380"
        },
        
        {
          "country":"United Arab Emirates",
        "value":"(+971)",
        //"name":"United Arab Emirates (+971)"
        "name":"+971"
        },
        {
          "country":"Uruguay",
        "value":"(+598)",
        //"name":"Uruguay (+598)"
        "name":"+598"
        },
        {
          "country":"Uzbekistan",
        "value":"(+998)",
        //"name":"Uzbekistan (+998)"
        "name":"+998"
        },
        {
          "country":"Vanuatu",
        "value":"(+678)",
        //"name":"Vanuatu (+678)"
        "name":"+678"
        },
        {
          "country":"Vatican",
        "value":"(+379)",
        //"name":"Vatican City (+379)"
        "name":"+379"
        },
        {
          "country":"Venezuela",
        "value":"(+58)",
        //"name":"enezuela (+58)"
        "name":"+58"
        },
        {
          "country":"Vietnam",
        "value":"(+84)",
        //"name":"ietnam (+84)"
        "name":"+84"
        },
        {
          "country":"Virgin Islands - British",
        "value":"(+1)",
        //"name":"rgin Islands - British (+1)"
        "name":"+1"
        },
        {
          "country":"Virgin Islands - US",
        "value":"(+1)",
        //"name":"rgin Islands - US (+1)"
        "name":"+1"
        },
        {
          "country":"Wallis &amp; Futuna",
        "value":"(+681)",
        //"name":"Wallis &amp; Futuna (+681)"
        "name":"+681"
        },
        {
        "country":"West Africa",
        "value":"(+23)",
        "name":"+23"
        },
        {
          "country":"Yemen (North)",
        "value":"(+969)",
        //"name":"Yemen (North)(+969)"
        "name":"+969"
        },
        {
          "country":"Yemen (South)",
        "value":"(+967)",
        //"name":"Yemen (South)(+967)"
        "name":"+967"
        },
        {
          "country":"Zambia",
        "value":"(+260)",
        //"name":"Zambia (+260)"
        "name":"+260"
        },
        {
          "country":"Zimbabwe",
        "value":"(+263)",
        //"name":"Zimbabwe (+263)"
        "name":"+26"
        },
        
        ];
  }
}





