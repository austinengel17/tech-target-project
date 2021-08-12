//Test modules
const chai = require('chai');
const assert = chai.assert;

//Local module to be tested
const arrayMerger = require('../tools/arrayMerger');

describe('test arrays merge', function () {
    // it('should return empty', function(){
    //     let objArr = [];
    //     const dataArr = [];
    //     arrayMerger(dataArr, objArr)
    //     assert.equal(objArr.length, 0);
    // });
    // it('should return empty due to wrong data schema', function(){
    //     let objArr = [];
    //     const dataArr = [{
    //             link: 'https://searchsecurity.techtarget.com/ehandbook/Get-smart-about-threat-intel-tools-and-services',
    //             pubDate: 'Tue, 28 Mar 2017 18:41:59 GMT',
    //             title: "Title 1"
    //         },
    //         {
    //             link: 'https://searchsecurity.techtarget.com/answer/Samsung-KNOX-platform-Is-the-Android-security-issue-solved',
    //             pubDate: 'Fri, 28 Jul 2017 08:26:00 GMT',
    //             title: 'title2'
    //         }]
    //     arrayMerger(dataArr, objArr);
    //     assert.equal(objArr, 0);
    // });

    it('should return merged array', function(){
        let objArr = [];
        let articleArr = {
            "rss": {
                "channel": {
                    "item": [
                        {
                            "dc:creator": "Melisa Osores",
                            "link": "https://searchdatacenter.techtarget.com/es/noticias/252505185/Neutral-Networks-construye-anillo-de-mas-de-65-Km-de-fibra-optica-en-Queretaro",
                            "pubDate": "Wed, 11 Aug 2021 13:46:00 GMT",
                            "title": "title1"
                        },
                        {
                            "dc:creator": "Melisa Osores",
                            "link": "https://searchdatacenter.techtarget.com/es/noticias/252505131/89-de-empresas-en-Mexico-incrementaron-su-inversion-en-TI-por-la-pandemia",
                            "pubDate": "Tue, 10 Aug 2021 14:32:00 GMT",
                            "title": "title2"
                        }
                    ]
                }
            }
        }
        let articleArr2 =
            {
            "rss": {
                "channel": {
                    "item": [
                        {
                            "dc:creator": "Melisa Osores",
                            "link": "https://searchdatacenter.techtarget.com/es/noticias/252505185/Neutral-Networks-construye-anillo-de-mas-de-65-Km-de-fibra-optica-en-Queretaro",
                            "pubDate": "Wed, 11 Aug 2021 13:46:00 GMT",
                            "title": "title3"
                        },
                        {
                            "dc:creator": "Melisa Osores",
                            "link": "https://searchdatacenter.techtarget.com/es/noticias/252505131/89-de-empresas-en-Mexico-incrementaron-su-inversion-en-TI-por-la-pandemia",
                            "pubDate": "Tue, 10 Aug 2021 14:32:00 GMT",
                            "title": "title4"
                        }
                    ]
                }
            }
        }
        arrayMerger(articleArr, objArr);
        arrayMerger(articleArr2, objArr)
        for(let i = 0; i < objArr.length; i++){
            assert.equal('title' + (i + 1), objArr[i].title);
        }
    });

});