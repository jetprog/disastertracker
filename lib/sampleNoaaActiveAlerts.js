module.exports.response = {
  '@context': [
    'https://raw.githubusercontent.com/geojson/geojson-ld/master/contexts/geojson-base.jsonld',
    {
      wx: 'https://api.weather.gov/ontology#',
      '@vocab': 'https://api.weather.gov/ontology#'
    }
  ],
  type: 'FeatureCollection',
  features: [
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-KEEPALIVE-53805',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-KEEPALIVE-53805',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-KEEPALIVE-53805',
        areaDesc: 'Montgomery',
        geocode: {
          UGC: ['MDC031'],
          SAME: ['024031']
        },
        affectedZones: ['https://api.weather.gov/zones/county/MDC031'],
        references: [],
        sent: '2018-08-10T13:23:56+00:00',
        effective: '2018-08-10T13:23:56+00:00',
        onset: null,
        expires: '2018-08-10T13:33:56+00:00',
        ends: null,
        status: 'Test',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Unknown',
        certainty: 'Unknown',
        urgency: 'Unknown',
        event: 'Test Message',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS',
        headline: null,
        description: 'Monitoring message only. Please disregard.',
        instruction: 'Monitoring message only. Please disregard.',
        response: 'None',
        parameters: {
          PIL: ['NWSKEPWBC'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041453-2715390',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-86.310000000000002, 30.420000000000002],
            [-86.390000000000001, 30.400000000000002],
            [-86.400000000000006, 30.120000000000001],
            [-87.370000000000005, 30.060000000000002],
            [-87.4599999, 30.320000000000004],
            [-86.930000000000007, 30.500000000000004],
            [-86.840000000000003, 30.430000000000003],
            [-86.680000000000007, 30.430000000000003],
            [-86.5, 30.550000000000004],
            [-86.400000000000006, 30.530000000000005],
            [-86.390000000000001, 30.460000000000004],
            [-86.140000000000001, 30.470000000000006],
            [-86.140000000000001, 30.430000000000007],
            [-86.069999899999999, 30.450000000000006],
            [-86.140000000000001, 30.420000000000005],
            [-86.040000000000006, 30.410000000000004],
            [-86.010000000000005, 30.320000000000004],
            [-86.310000000000002, 30.420000000000002]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041453-2715390',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041453-2715390',
        areaDesc:
          'Western Choctawhatchee Bay; Coastal waters from Pensacola FL to Pascagoula MS out 20 NM; Pensacola Bay Area including Santa Roas Sound; Eastern Choctawhatchee Bay; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM',
        geocode: {
          UGC: ['GMZ635', 'GMZ650', 'GMZ634', 'GMZ636', 'GMZ655'],
          SAME: ['077635', '077650', '077634', '077636', '077655']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/GMZ635',
          'https://api.weather.gov/zones/forecast/GMZ650',
          'https://api.weather.gov/zones/forecast/GMZ634',
          'https://api.weather.gov/zones/forecast/GMZ636',
          'https://api.weather.gov/zones/forecast/GMZ655'
        ],
        references: [],
        sent: '2018-08-10T08:22:00-05:00',
        effective: '2018-08-10T08:22:00-05:00',
        onset: '2018-08-10T08:22:00-05:00',
        expires: '2018-08-10T09:45:00-05:00',
        ends: '2018-08-10T09:45:00-05:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Special Marine Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Mobile AL',
        headline:
          'Special Marine Warning issued August 10 at 8:22AM CDT expiring August 10 at 9:45AM CDT by NWS Mobile AL',
        description:
          'The National Weather Service in Mobile has issued a\n\n* Special Marine Warning for...\nCoastal waters from Okaloosa-Walton County Line to Pensacola FL out\n20 NM...\nCoastal waters from Pensacola FL to Pascagoula MS out 20 NM...\nEastern Choctawhatchee Bay...\nPensacola Bay Area including Santa Rosa Sound...\nWestern Choctawhatchee Bay...\n\n* Until 945 AM CDT.\n\n* At 821 AM CDT, a strong thunderstorm was located near Pensacola\nBeach, or 9 nm east of Pensacola Pass, moving east at 30 knots.\n\nHAZARD...Wind gusts 34 knots or greater.\n\nSOURCE...Radar.\n\nIMPACT...Small craft could be damaged in briefly higher winds and\nsuddenly higher waves.\n\n* Locations impacted include...\nMary Esther, Fort Walton Beach, Big Lagoon, Pensacola Beach,\nHighway 331 Bridge, Pensacola Pass, Shalimar, Destin, Fort Pickens\nand East Bay.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          eventMotionDescription: [
            '2018-08-10T08:21:00.000-05:00...storm...254DEG...29KT...30.28,-87.13'
          ],
          hailSize: [0],
          VTEC: ['/O.NEW.KMOB.MA.W.0188.180810T1322Z-180810T1445Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['MOBSMWMOB'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T09:45:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041452-2715389',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-98.640000000000001, 30.920000000000002],
            [-98.9599999, 30.920000000000002],
            [-98.969999999999999, 30.610000000000003],
            [-99, 30.580000000000002],
            [-99.359999999999999, 30.760000000000002],
            [-99.079999999999998, 31.07],
            [-98.700000000000003, 31.41],
            [-98.7099999, 31.34],
            [-98.659999999999997, 31.359999999999999],
            [-98.609999999999999, 31.289999999999999],
            [-98.629999999999995, 31.27],
            [-98.589999999999989, 31.259999999999998],
            [-98.519999999999996, 31.159999999999997],
            [-98.549999999999997, 31.119999999999997],
            [-98.530000000000001, 31.089999999999996],
            [-98.489999999999995, 31.109999999999996],
            [-98.469999999999999, 31.079999999999995],
            [-98.640000000000001, 30.920000000000002]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041452-2715389',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041452-2715389',
        areaDesc: 'McCulloch, TX; Mason, TX; San Saba, TX',
        geocode: {
          UGC: ['TXC307', 'TXC319', 'TXC411'],
          SAME: ['048307', '048319', '048411']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/TXC307',
          'https://api.weather.gov/zones/county/TXC319',
          'https://api.weather.gov/zones/county/TXC411'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041439-2715380',
            identifier: 'NWS-IDP-PROD-3041439-2715380',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T07:13:00-05:00'
          }
        ],
        sent: '2018-08-10T08:21:00-05:00',
        effective: '2018-08-10T08:21:00-05:00',
        onset: '2018-08-10T08:21:00-05:00',
        expires: '2018-08-10T09:15:00-05:00',
        ends: '2018-08-10T09:15:00-05:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Flash Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Angelo TX',
        headline:
          'Flash Flood Warning issued August 10 at 8:21AM CDT expiring August 10 at 9:15AM CDT by NWS San Angelo TX',
        description:
          'At 816 AM CDT, Doppler radar indicated thunderstorms producing heavy\nrain across the warned area, mainly northeast Mason County. Up to\ntwo to three inches of rain has already from around Mason and to the\neast. Flash flooding is expected to begin shortly.\n\nSome locations that will experience flooding include...\nSan Saba, Mason, Algerita, Cherokee, Art, Pontotoc, Fredonia, Bend,\nChappel, Sloan, Hedwigs Hill, Grit, Us-190 Near The San Saba-\nLampasas County Line, Harkeyville and Koockville.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nExcessive runoff from heavy rainfall will cause flooding of small\ncreeks and streams, urban areas, highways, streets and underpasses as\nwell as other drainage areas and low lying spots.\n\nExcessive runoff from heavy rainfall will cause flooding of small\ncreeks and streams, country roads, farmland, and other low lying\nspots.",
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'THE FLASH FLOOD WARNING REMAINS IN EFFECT UNTIL 915 AM CDT FOR SOUTHEASTERN MCCULLOCH...NORTHEASTERN MASON AND SAN SABA COUNTIES'
          ],
          VTEC: ['/O.CON.KSJT.FF.W.0013.000000T0000Z-180810T1415Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['SJTFFSSJT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T09:15:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041451-2715388',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-77.980000000000004, 34.719999999999999],
            [-77.859999999999999, 34.719999999999999],
            [-77.760000000000005, 34.600000000000001],
            [-77.790000000000006, 34.450000000000003],
            [-77.88000000000001, 34.440000000000005],
            [-77.88000000000001, 34.570000000000007],
            [-77.980000000000004, 34.719999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041451-2715388',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041451-2715388',
        areaDesc: 'Pender, NC',
        geocode: {
          UGC: ['NCC141'],
          SAME: ['037141']
        },
        affectedZones: ['https://api.weather.gov/zones/county/NCC141'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040633-2715099',
            identifier: 'NWS-IDP-PROD-3040633-2715099',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:50:00-04:00'
          }
        ],
        sent: '2018-08-10T09:19:00-04:00',
        effective: '2018-08-10T09:19:00-04:00',
        onset: '2018-08-10T09:19:00-04:00',
        expires: '2018-08-11T01:19:00-04:00',
        ends: '2018-08-11T20:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Flood Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Wilmington NC',
        headline:
          'Flood Advisory issued August 10 at 9:19AM EDT expiring August 11 at 8:00PM EDT by NWS Wilmington NC',
        description:
          'Northeast Cape Fear Near Burgaw affecting Pender County\nThe Flood Advisory continues for\nThe Northeast Cape Fear Near Burgaw\n* until Saturday evening.\n* At 08 AM Friday the stage was 8.6 feet.\n* Advisory stage is 8.0 feet.\n* Forecast...The river will continue to fall.\n* Impact...At 8.0 feet...Water affects the lowest portions of River Bend Road and\nRiver Birch Road.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nPeople with interests along the river should take the necessary precautions to\nprotect life and property from the flood waters.\n\nAdditional information is available on our website at weather.gov/ilm under the\n"Rivers and Lakes" link.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KILM.FL.Y.0004.000000T0000Z-180812T0000Z/'],
          PIL: ['ILMFLSILM'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T20:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041448-2715386',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-96.299999999999997, 31.890000000000001],
            [-96.480000000000004, 31.800000000000001],
            [-96.700000000000003, 31.810000000000002],
            [-96.88000000000001, 32.060000000000002],
            [-96.410000000000011, 32.710000000000001],
            [-96.080000000000013, 32.719999999999999],
            [-96.299999999999997, 31.890000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041448-2715386',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041448-2715386',
        areaDesc: 'Ellis, TX; Kaufman, TX; Navarro, TX; Henderson, TX',
        geocode: {
          UGC: ['TXC139', 'TXC257', 'TXC349', 'TXC213'],
          SAME: ['048139', '048257', '048349', '048213']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/TXC139',
          'https://api.weather.gov/zones/county/TXC257',
          'https://api.weather.gov/zones/county/TXC349',
          'https://api.weather.gov/zones/county/TXC213'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041428-2715377',
            identifier: 'NWS-IDP-PROD-3041428-2715377',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T07:02:00-05:00'
          }
        ],
        sent: '2018-08-10T08:18:00-05:00',
        effective: '2018-08-10T08:18:00-05:00',
        onset: '2018-08-10T08:18:00-05:00',
        expires: '2018-08-10T10:00:00-05:00',
        ends: '2018-08-10T10:00:00-05:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Flood Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Fort Worth TX',
        headline:
          'Flood Advisory issued August 10 at 8:18AM CDT expiring August 10 at 10:00AM CDT by NWS Fort Worth TX',
        description:
          'At 814 AM CDT, emergency management reported heavy rain across the\nEmhouse and Blooming Grove area due to thunderstorms. Some locations\nnear Emhouse have seen around 4" of rain since 5:30 AM. This will\ncause flooding of poor drainage and low-lying areas. Some rural\ncounty roads may become impassable.\n\nSome locations that will experience flooding include...\nCorsicana, Ennis, Terrell, Kaufman, Mabank, Crandall, Tool, Combine,\nKerens, Talty, Seven Points, Kemp, Blooming Grove, Dawson, Bardwell,\nAngus, Grays Prairie, Alma, Barry and Navarro.\n\nAdditional rainfall totals may near 2 inches. This additional\nrain will aggravate any ongoing flooding.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nPlease report flooding to your local law enforcement agency when you\ncan do so safely.",
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'THE FLOOD ADVISORY REMAINS IN EFFECT UNTIL 1000 AM CDT FOR KAUFMAN...NORTHWESTERN HENDERSON...EASTERN ELLIS AND NAVARRO COUNTIES'
          ],
          VTEC: ['/O.CON.KFWD.FA.Y.0063.000000T0000Z-180810T1500Z/'],
          PIL: ['FWDFLSFWD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T10:00:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041450-2715387',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-82.340000000000003, 28.190000000000001],
            [-82.340000000000003, 28.140000000000001],
            [-82.400000000000006, 28.140000000000001],
            [-82.400000000000006, 28.190000000000001],
            [-82.340000000000003, 28.190000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041450-2715387',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041450-2715387',
        areaDesc: 'Pasco, FL',
        geocode: {
          UGC: ['FLC101'],
          SAME: ['012101']
        },
        affectedZones: ['https://api.weather.gov/zones/county/FLC101'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040604-2715078',
            identifier: 'NWS-IDP-PROD-3040604-2715078',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:29:00-04:00'
          }
        ],
        sent: '2018-08-10T09:18:00-04:00',
        effective: '2018-08-10T09:18:00-04:00',
        onset: '2018-08-10T09:18:00-04:00',
        expires: '2018-08-11T09:17:00-04:00',
        ends: '2018-08-15T02:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Tampa Bay Ruskin FL',
        headline:
          'Flood Warning issued August 10 at 9:18AM EDT expiring August 15 at 2:00AM EDT by NWS Tampa Bay Ruskin FL',
        description:
          'Cypress Creek At Worthington Gardens\n\n.Flooding will continue through Tuesday evening due to deep moisture\nconditions in Worthington Gardens.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nDo not drive cars through flooded areas.\n\nStay tuned to developments by listening to NOAA Weather Radio. The\nlatest forecasts can also be found on weather.gov/tampabay. You can\nfollow NWSTampaBay on Twitter and like us on Facebook.',
        response: 'Avoid',
        parameters: {
          NWSheadline: ['Flood Warning extended until late Tuesday night'],
          VTEC: ['/O.EXT.KTBW.FL.W.0019.000000T0000Z-180815T0600Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['TBWFLSTBW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-15T02:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041446-2715384',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041446-2715384',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041446-2715384',
        areaDesc:
          'Eastern Portion of Shasta/Trinity NF; Lake County Portion of Lake-Nappa-Sonoma RU; Northern Sierra Including Lassen NP and Plumas and Lassen NF/S West of the Sierra Crest - West of Evans Peak/Grizzly Peak/Beckworth Peak; E Mendocino NF; Southern and Eastern Mendocino NF/Southeast Edge Shasta/Trinity NF and Western Portions of Tahima/Glenn RU; Central Sacramento Valley including Glenn/Colusa/Yuba/Northern Sutter/Butte County Below 1000 Ft; Northern Sacramento Valley to Southern Tehama County Line Below 1000 Ft; Burney Basin and Northeast Plateau in Shasta County Including Northwest Lassen NF north of Lassen NP; Northern Sierra Foothills from 1000 to 3000 Ft. Includes Nevada-Yuba-Placer RU and Anador-Eldorado RU',
        geocode: {
          UGC: [
            'CAZ213',
            'CAZ264',
            'CAZ268',
            'CAZ279',
            'CAZ263',
            'CAZ216',
            'CAZ215',
            'CAZ214',
            'CAZ266'
          ],
          SAME: [
            '006089',
            '006105',
            '006113',
            '006011',
            '006033',
            '006055',
            '006097',
            '006045',
            '006115',
            '006063',
            '006091',
            '006103',
            '006035',
            '006007',
            '006021',
            '006061',
            '006101',
            '006057'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/CAZ213',
          'https://api.weather.gov/zones/fire/CAZ264',
          'https://api.weather.gov/zones/fire/CAZ268',
          'https://api.weather.gov/zones/fire/CAZ279',
          'https://api.weather.gov/zones/fire/CAZ263',
          'https://api.weather.gov/zones/fire/CAZ216',
          'https://api.weather.gov/zones/fire/CAZ215',
          'https://api.weather.gov/zones/fire/CAZ214',
          'https://api.weather.gov/zones/fire/CAZ266'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039977-2714765',
            identifier: 'NWS-IDP-PROD-3039977-2714765',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:09:00-07:00'
          }
        ],
        sent: '2018-08-10T06:00:00-07:00',
        effective: '2018-08-10T06:00:00-07:00',
        onset: '2018-08-10T06:00:00-07:00',
        expires: '2018-08-10T18:00:00-07:00',
        ends: '2018-08-11T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sacramento CA',
        headline:
          'Red Flag Warning issued August 10 at 6:00AM PDT expiring August 11 at 11:00PM PDT by NWS Sacramento CA',
        description:
          'Increasing wind is expected over higher terrain into Saturday\nevening as a low pressure system passes through Northern\nCalifornia. Local gusts up to 35 mph will be possible,\nparticularly during the afternoons and early evenings over higher\nelevations. These winds when coupled with low humidity levels will\nbring critical fire weather conditions. Highest threat areas\ninclude exposed ridges, the Mendocino Complex, and the Carr,\nDonnell, Hat, and Murphy fires.\n* WIND...Local south to southwest wind gusts 20 to 30 mph this\nafternoon into Saturday evening. Valley winds gusting to 20\nmph.\n\n* HUMIDITY...Afternoon minimum humidities of 10 to 20 percent\nare expected with overnight humidity recoveries as low as 30\nto 40 percent.\n\n* HIGHEST THREAT...Mendocino Complex, the Carr Fire, the Murphy\nFire, the Hat Fire, and exposed ridges.\n\n* IMPACTS...Any fires that develop will spread rapidly. Outdoor\nburning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT UNTIL 11 PM PDT SATURDAY FOR VERY DRY AND LOCALLY GUSTY WINDS FOR FIRE WEATHER ZONES 213, 214, 215, 216, 263, 264, 266, 268, AND 279'
          ],
          VTEC: ['/O.CON.KSTO.FW.W.0005.000000T0000Z-180812T0600Z/'],
          PIL: ['STORFWSTO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041447-2715385',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041447-2715385',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041447-2715385',
        areaDesc:
          'Stanislaus National Forest; Tahoe - Eldorado National Forest',
        geocode: {
          UGC: ['CAZ221', 'CAZ269'],
          SAME: [
            '006005',
            '006009',
            '006051',
            '006109',
            '006043',
            '006003',
            '006061',
            '006115',
            '006063',
            '006091',
            '006017',
            '006057',
            '006007'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/CAZ221',
          'https://api.weather.gov/zones/fire/CAZ269'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039978-2714766',
            identifier: 'NWS-IDP-PROD-3039978-2714766',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:09:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039979-2714767',
            identifier: 'NWS-IDP-PROD-3039979-2714767',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:09:00-07:00'
          }
        ],
        sent: '2018-08-10T06:00:00-07:00',
        effective: '2018-08-10T06:00:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-10T18:00:00-07:00',
        ends: '2018-08-11T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sacramento CA',
        headline:
          'Red Flag Warning issued August 10 at 6:00AM PDT expiring August 11 at 11:00PM PDT by NWS Sacramento CA',
        description:
          'Increasing wind is expected over higher terrain into Saturday\nevening as a low pressure system passes through Northern\nCalifornia. Local gusts up to 35 mph will be possible,\nparticularly during the afternoons and early evenings over higher\nelevations. These winds when coupled with low humidity levels will\nbring critical fire weather conditions. Highest threat areas\ninclude exposed ridges, the Mendocino Complex, and the Carr,\nDonnell, Hat, and Murphy fires.\n* WIND...Local west to southwest ridgetop wind gusts 25 to 35 mph\nthis afternoon into Saturday evening.\n\n* HUMIDITY...Afternoon minimum humidities of 10 to 20 percent\nare expected with overnight humidity recoveries as low as 35\nto 40 percent.\n\n* HIGHEST THREAT...Donnell Fire and exposed ridges.\n\n* IMPACTS...Any fires that develop will spread rapidly. Outdoor\nburning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 11 AM THIS MORNING TO 11 PM PDT SATURDAY'
          ],
          VTEC: ['/O.CON.KSTO.FW.W.0005.180810T1800Z-180812T0600Z/'],
          PIL: ['STORFWSTO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041445-2715383',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-86.579999999999998, 30.100000000000001],
            [-87.530000000000001, 30.170000000000002],
            [-87.530000000000001, 30.350000000000001],
            [-86.569999899999999, 30.370000000000001],
            [-86.579999999999998, 30.100000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041445-2715383',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041445-2715383',
        areaDesc:
          'Perdido Bay Area; Coastal waters from Pensacola FL to Pascagoula MS out 20 NM; Pensacola Bay Area including Santa Roas Sound; Coastal waters from Okaloosa-Walton County Line to Pensacola FL out 20 NM',
        geocode: {
          UGC: ['GMZ633', 'GMZ650', 'GMZ634', 'GMZ655'],
          SAME: ['077633', '077650', '077634', '077655']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/GMZ633',
          'https://api.weather.gov/zones/forecast/GMZ650',
          'https://api.weather.gov/zones/forecast/GMZ634',
          'https://api.weather.gov/zones/forecast/GMZ655'
        ],
        references: [],
        sent: '2018-08-10T07:54:00-05:00',
        effective: '2018-08-10T07:54:00-05:00',
        onset: '2018-08-10T07:54:00-05:00',
        expires: '2018-08-10T09:30:00-05:00',
        ends: '2018-08-10T09:30:00-05:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Special Marine Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Mobile AL',
        headline:
          'Special Marine Warning issued August 10 at 7:54AM CDT expiring August 10 at 9:30AM CDT by NWS Mobile AL',
        description:
          'The National Weather Service in Mobile has issued a\n\n* Special Marine Warning for...\nCoastal waters from Okaloosa-Walton County Line to Pensacola FL out\n20 NM...\nCoastal waters from Pensacola FL to Pascagoula MS out 20 NM...\nPensacola Bay Area including Santa Rosa Sound...\nPerdido Bay Area...\n\n* Until 930 AM CDT.\n\n* At 754 AM CDT, a strong thunderstorm capable of producing\nwaterspouts was located near Perdido Bay, or near Perdido Pass,\nmoving east at 25 knots.\n\nHAZARD...Waterspouts and wind gusts 34 knots or greater.\n\nSOURCE...Radar.\n\nIMPACT...Waterspouts can easily overturn boats and create locally\nhazardous seas. Small craft could be damaged in briefly\nhigher winds and suddenly higher waves.\n\n* Locations impacted include...\nArnica Bay, Big Lagoon, West Santa Rosa Sound, Pensacola Beach,\nPensacola Pass, Fort Walton Liberty Ship Reef, Perdido Bay and Fort\nPickens.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          eventMotionDescription: [
            '2018-08-10T07:54:00.000-05:00...storm...272DEG...26KT...30.27,-87.45'
          ],
          hailSize: [0],
          waterspoutDetection: ['POSSIBLE'],
          VTEC: ['/O.NEW.KMOB.MA.W.0187.180810T1254Z-180810T1430Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['MOBSMWMOB'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T09:30:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041444',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041444',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041444',
        areaDesc: 'Jones; Cedar; Muscatine',
        geocode: {
          UGC: ['IAZ053', 'IAZ065', 'IAZ067'],
          SAME: ['019105', '019031', '019139']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IAZ053',
          'https://api.weather.gov/zones/forecast/IAZ065',
          'https://api.weather.gov/zones/forecast/IAZ067'
        ],
        references: [],
        sent: '2018-08-10T07:51:00-05:00',
        effective: '2018-08-10T07:51:00-05:00',
        onset: '2018-08-10T07:51:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Quad Cities IA IL',
        headline:
          'Special Weather Statement issued August 10 at 7:51AM CDT by NWS Quad Cities IA IL',
        description:
          'An area of fog was slowly drifting to the southwest this morning\nand will impact parts of Jones, Cedar, and Muscatine counties.\nVisibilities will vary considerably from several miles to less\nthan a quarter mile over a short distance. The most likely area\nfor localized dense fog is over the eastern portions of the\ncounties.\n\nMotorists should drive with extra caution and allow additional\ntravel time. Use low beams, reduce speed, and allow for plenty of\nroom between you and other cars. Be alert to rapid fluctuations in\nvisibility.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['.Localized Dense Fog This Morning'],
          'EAS-ORG': ['WXR'],
          PIL: ['DVNSPSDVN'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041443-2715382',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041443-2715382',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041443-2715382',
        areaDesc: 'Orange County Coastal; San Diego County Coastal Areas',
        geocode: {
          UGC: ['CAZ552', 'CAZ043'],
          SAME: ['006059', '006073']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/CAZ552',
          'https://api.weather.gov/zones/forecast/CAZ043'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040889-2715185',
            identifier: 'NWS-IDP-PROD-3040889-2715185',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:48:00-07:00'
          }
        ],
        sent: '2018-08-10T05:49:00-07:00',
        effective: '2018-08-10T05:49:00-07:00',
        onset: '2018-08-10T05:49:00-07:00',
        expires: '2018-08-10T14:00:00-07:00',
        ends: '2018-08-12T00:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Diego CA',
        headline:
          'Beach Hazards Statement issued August 10 at 5:49AM PDT expiring August 12 at 12:00AM PDT by NWS San Diego CA',
        description:
          "* High Tides... Newport Beach: 7.06 FT at 9:06 PM Friday.\n6.96 FT at 9:53 PM Saturday.\n\nLa Jolla: 7.06 FT at 9:01 PM Friday.\n6.95 FT at 9:48 PM Saturday.\n\n* Surf...3 to 5 ft, with sets to 6 ft. Highest surf on south-\nfacing beaches in Orange County.\n\n* Timing...During the evening high tides through Saturday.\n\n* Locations...Areas susceptible to flooding during high tides,\nparticularly Seal Beach, Sunset Beach, Newport Beach, Balboa,\nOceanside Beach and Imperial Beach.\n\n* Impacts...Low lying roads or parking lots near the water's\nedge may experience minor tidal overflow during the highest\ntide cycles. Strong rip and longshore currents will create\ndangerous swimming conditions and enhance the flooding effects\nof the high tides Friday and Saturday.",
        instruction:
          'A beach hazards statement is issued when threats such as strong\nrip currents...elevated surf heights...minor tidal overflow...or\nlightning are possible at local beaches.  Obey posted warning\nsigns and flags and talk to a lifeguard before swimming.  Use\ncaution when in or near the water and always swim near a\nlifeguard.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT THROUGH SATURDAY EVENING'
          ],
          VTEC: ['/O.CON.KSGX.BH.S.0004.000000T0000Z-180812T0700Z/'],
          PIL: ['SGXCFWSGX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041442-2715381',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-83.760000000000005, 37.109999999999999],
            [-83.940000000000012, 37.149999999999999],
            [-83.940000000000012, 37.259999999999998],
            [-83.900000000000006, 37.259999999999998],
            [-83.88000000000001, 37.289999999999999],
            [-83.750000000000014, 37.329999999999998],
            [-83.65000000000002, 37.329999999999998],
            [-83.569999900000013, 37.280000000000001],
            [-83.550000000000011, 37.259999999999998],
            [-83.610000000000014, 37.100000000000001],
            [-83.760000000000005, 37.109999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041442-2715381',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041442-2715381',
        areaDesc: 'Clay, KY',
        geocode: {
          UGC: ['KYC051'],
          SAME: ['021051']
        },
        affectedZones: ['https://api.weather.gov/zones/county/KYC051'],
        references: [],
        sent: '2018-08-10T08:30:00-04:00',
        effective: '2018-08-10T08:30:00-04:00',
        onset: '2018-08-10T08:30:00-04:00',
        expires: '2018-08-10T10:30:00-04:00',
        ends: '2018-08-10T10:30:00-04:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Flood Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Jackson KY',
        headline:
          'Flood Advisory issued August 10 at 8:30AM EDT expiring August 10 at 10:30AM EDT by NWS Jackson KY',
        description:
          'The National Weather Service in JACKSON KY has issued a\n\n* Flood Advisory for Minor Flooding in Poor Drainage Areas for...\nNorthern Clay County in southeastern Kentucky...\n\n* Until 1030 AM EDT.\n\n* At 828 AM EDT, Doppler radar indicated heavy rain that may cause\nminor flooding. Overflowing poor drainage areas will result in\nminor flooding in the advisory area. Up to 1.5 to 2 inches of rain\nhave already fallen, with an additional half an inch or more still\npossible.\n\n* Some locations that will experience minor flooding include...\nManchester, Seth, Enline, Grace, Fogertown, Treadway, Wild Cat,\nUrban, Newfound, Barcreek, Hima and Chestnutburg.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.",
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.NEW.KJKL.FA.Y.0142.180810T1230Z-180810T1430Z/'],
          PIL: ['JKLFLSJKL'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T10:30:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041441',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041441',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041441',
        areaDesc:
          'Tyler; Evangeline; Northern Jasper; Beauregard; Avoyelles; Calcasieu; Orange; East Cameron; Vernon; Jefferson; Southern Newton; Jefferson Davis; Allen; Rapides; West Cameron; Hardin; Northern Newton; Southern Jasper',
        geocode: {
          UGC: [
            'TXZ180',
            'LAZ032',
            'TXZ259',
            'LAZ030',
            'LAZ029',
            'LAZ041',
            'TXZ216',
            'LAZ074',
            'LAZ027',
            'TXZ215',
            'TXZ262',
            'LAZ042',
            'LAZ031',
            'LAZ028',
            'LAZ073',
            'TXZ201',
            'TXZ260',
            'TXZ261'
          ],
          SAME: [
            '048457',
            '022039',
            '048241',
            '022011',
            '022009',
            '022019',
            '048361',
            '022023',
            '022115',
            '048245',
            '048351',
            '022053',
            '022003',
            '022079',
            '048199'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/TXZ180',
          'https://api.weather.gov/zones/forecast/LAZ032',
          'https://api.weather.gov/zones/forecast/TXZ259',
          'https://api.weather.gov/zones/forecast/LAZ030',
          'https://api.weather.gov/zones/forecast/LAZ029',
          'https://api.weather.gov/zones/forecast/LAZ041',
          'https://api.weather.gov/zones/forecast/TXZ216',
          'https://api.weather.gov/zones/forecast/LAZ074',
          'https://api.weather.gov/zones/forecast/LAZ027',
          'https://api.weather.gov/zones/forecast/TXZ215',
          'https://api.weather.gov/zones/forecast/TXZ262',
          'https://api.weather.gov/zones/forecast/LAZ042',
          'https://api.weather.gov/zones/forecast/LAZ031',
          'https://api.weather.gov/zones/forecast/LAZ028',
          'https://api.weather.gov/zones/forecast/LAZ073',
          'https://api.weather.gov/zones/forecast/TXZ201',
          'https://api.weather.gov/zones/forecast/TXZ260',
          'https://api.weather.gov/zones/forecast/TXZ261'
        ],
        references: [],
        sent: '2018-08-10T07:28:00-05:00',
        effective: '2018-08-10T07:28:00-05:00',
        onset: '2018-08-10T07:28:00-05:00',
        expires: '2018-08-10T19:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Lake Charles LA',
        headline:
          'Special Weather Statement issued August 10 at 7:28AM CDT by NWS Lake Charles LA',
        description:
          'A very moist and unstable tropical airmass is in place across\nthe area. Meanwhile...the vertical wind profile over the area\nis light and variable. These conditions are favorable for the\ndevelopment of tropical funnel clouds...especially where rain\ncooled boundaries...known as outflow boundaries...and the\nseabreeze collide.\n\nThese tropical funnel clouds are usually short-lived and do not\nreach the ground. If the funnel cloud becomes more severe and\nreaches the ground...minor damage may occur...and a tornado\nwarning will likely be issued.\n\nStay tuned for later statements and updates on this weather\nsituation.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['TROPICAL FUNNEL CLOUDS POSSIBLE'],
          'EAS-ORG': ['WXR'],
          PIL: ['LCHSPSLCH'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041430-2715379',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041430-2715379',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041430-2715379',
        areaDesc: 'Lafayette; Iowa; Sauk',
        geocode: {
          UGC: ['WIZ067', 'WIZ062', 'WIZ056'],
          SAME: ['055065', '055049', '055111']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/WIZ067',
          'https://api.weather.gov/zones/forecast/WIZ062',
          'https://api.weather.gov/zones/forecast/WIZ056'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041401-2715369',
            identifier: 'NWS-IDP-PROD-3041401-2715369',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T06:26:00-05:00'
          }
        ],
        sent: '2018-08-10T07:05:00-05:00',
        effective: '2018-08-10T07:05:00-05:00',
        onset: '2018-08-10T07:05:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: '2018-08-10T09:00:00-05:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Dense Fog Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Milwaukee/Sullivan WI',
        headline:
          'Dense Fog Advisory issued August 10 at 7:05AM CDT expiring August 10 at 9:00AM CDT by NWS Milwaukee/Sullivan WI',
        description:
          'A Dense Fog Advisory remains in effect until 9 AM CDT this\nmorning.\n\n* TIMING...Areas of dense fog will continue across portions of\nsouth central Wisconsin.\n\n* VISIBILITY...Frequently one quarter mile or less.\n\n* IMPACTS...Severely restricted visibility and stopping distance.\n\n* CURRENT CONDITIONS...Areas of dense fog linger in the Baraboo,\nDodgeville and Darlington areas, however web cams and surface\nobservations continue to show gradual improvement.',
        instruction:
          'A Dense Fog Advisory means visibilities will frequently be\nreduced to less than one quarter mile. If driving...slow down...\nuse your headlights...and leave plenty of distance ahead of you.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'DENSE FOG ADVISORY REMAINS IN EFFECT UNTIL 9 AM CDT THIS MORNING'
          ],
          VTEC: ['/O.CON.KMKX.FG.Y.0018.000000T0000Z-180810T1400Z/'],
          PIL: ['MKXNPWMKX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T09:00:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041424-2715375',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041424-2715375',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041424-2715375',
        areaDesc: 'Kane; Ogle; Winnebago; DuPage; De Kalb; Boone; McHenry; Lee',
        geocode: {
          UGC: [
            'ILZ012',
            'ILZ008',
            'ILZ003',
            'ILZ013',
            'ILZ011',
            'ILZ004',
            'ILZ005',
            'ILZ010'
          ],
          SAME: [
            '017089',
            '017141',
            '017201',
            '017043',
            '017037',
            '017007',
            '017111',
            '017103'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ILZ012',
          'https://api.weather.gov/zones/forecast/ILZ008',
          'https://api.weather.gov/zones/forecast/ILZ003',
          'https://api.weather.gov/zones/forecast/ILZ013',
          'https://api.weather.gov/zones/forecast/ILZ011',
          'https://api.weather.gov/zones/forecast/ILZ004',
          'https://api.weather.gov/zones/forecast/ILZ005',
          'https://api.weather.gov/zones/forecast/ILZ010'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041384-2715354',
            identifier: 'NWS-IDP-PROD-3041384-2715354',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T05:38:00-05:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041385-2715355',
            identifier: 'NWS-IDP-PROD-3041385-2715355',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T05:38:00-05:00'
          }
        ],
        sent: '2018-08-10T06:55:00-05:00',
        effective: '2018-08-10T06:55:00-05:00',
        onset: '2018-08-10T06:55:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: '2018-08-10T09:00:00-05:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Dense Fog Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Chicago IL',
        headline:
          'Dense Fog Advisory issued August 10 at 6:55AM CDT expiring August 10 at 9:00AM CDT by NWS Chicago IL',
        description:
          '* VISIBILITY...Less than a quarter mile.\n\n* IMPACTS...Low visibilities will create hazardous travel\nconditions west and northwest of Chicago early this morning.',
        instruction:
          'A Dense Fog Advisory means visibilities will frequently be\nreduced to less than one quarter mile. If driving...slow down...\nuse your headlights...and leave plenty of distance ahead of you.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'DENSE FOG ADVISORY REMAINS IN EFFECT UNTIL 9 AM CDT THIS MORNING'
          ],
          VTEC: ['/O.CON.KLOT.FG.Y.0013.000000T0000Z-180810T1400Z/'],
          PIL: ['LOTNPWLOT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T09:00:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041421',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041421',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041421',
        areaDesc:
          'Point Piedras Blancas to Point Sal westward out to 10 NM; Point Piedras Blancas to Point Sal from 10 to 60 NM; Waters from Pt. Sal to Santa Cruz Island CA and westward 60 nm including San Miguel and Santa Rosa Islands',
        geocode: {
          UGC: ['PZZ645', 'PZZ670', 'PZZ673'],
          SAME: ['057645', '057670', '057673']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/PZZ645',
          'https://api.weather.gov/zones/forecast/PZZ670',
          'https://api.weather.gov/zones/forecast/PZZ673'
        ],
        references: [],
        sent: '2018-08-10T04:54:00-07:00',
        effective: '2018-08-10T04:54:00-07:00',
        onset: '2018-08-10T04:54:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Marine Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'Marine Weather Statement issued August 10 at 4:54AM PDT by NWS Los Angeles/Oxnard CA',
        description:
          'Mariners should be prepared for abrupt visibility changes down to\none nautical mile or less. Reduce speeds and be on the lookout for\nexposed rocks and other vessels, including large ships in the\nshipping lanes. Use radar or GPS navigation if available, and\nconsider remaining in harbor if such equipment is unavailable..',
        instruction: '',
        response: 'Monitor',
        parameters: {
          NWSheadline: [
            'DENSE FOG TO AFFECT MOST OF THE COASTAL WATERS NORTH OF POINT CONCEPTION THROUGH THIS MORNING'
          ],
          PIL: ['LOXMWSLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041422',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041422',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041422',
        areaDesc:
          'Point Piedras Blancas to Point Sal westward out to 10 NM; Point Piedras Blancas to Point Sal from 10 to 60 NM; Waters from Pt. Sal to Santa Cruz Island CA and westward 60 nm including San Miguel and Santa Rosa Islands',
        geocode: {
          UGC: ['PZZ645', 'PZZ670', 'PZZ673'],
          SAME: ['057645', '057670', '057673']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/PZZ645',
          'https://api.weather.gov/zones/forecast/PZZ670',
          'https://api.weather.gov/zones/forecast/PZZ673'
        ],
        references: [],
        sent: '2018-08-10T04:54:00-07:00',
        effective: '2018-08-10T04:54:00-07:00',
        onset: '2018-08-10T04:54:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Marine Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'Marine Weather Statement issued August 10 at 4:54AM PDT by NWS Los Angeles/Oxnard CA',
        description:
          'Mariners should be prepared for abrupt visibility changes down to\none nautical mile or less. Reduce speeds and be on the lookout for\nexposed rocks and other vessels, including large ships in the\nshipping lanes. Use radar or GPS navigation if available, and\nconsider remaining in harbor if such equipment is unavailable..',
        instruction: '',
        response: 'Monitor',
        parameters: {
          NWSheadline: [
            'DENSE FOG TO AFFECT MOST OF THE COASTAL WATERS NORTH OF POINT CONCEPTION THROUGH THIS MORNING'
          ],
          PIL: ['LOXMWSLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041420-2715373',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041420-2715373',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041420-2715373',
        areaDesc: 'W Mendocino NF/E Mendocino Unit',
        geocode: {
          UGC: ['CAZ277'],
          SAME: ['006011', '006033', '006105', '006103', '006045', '006021']
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ277'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040483-2715022',
            identifier: 'NWS-IDP-PROD-3040483-2715022',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T17:20:00-07:00'
          }
        ],
        sent: '2018-08-10T04:50:00-07:00',
        effective: '2018-08-10T04:50:00-07:00',
        onset: '2018-08-10T04:50:00-07:00',
        expires: '2018-08-10T13:00:00-07:00',
        ends: '2018-08-10T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Eureka CA',
        headline:
          'Red Flag Warning issued August 10 at 4:50AM PDT expiring August 10 at 9:00PM PDT by NWS Eureka CA',
        description:
          '* AFFECTED AREA...SE half of fire weather zone 277.\n\n* WIND...Calm or NW 3 to 5 mph this morning. This afternoon: W to\nNW 6 to 12 mph on lower slopes. W to NW increasing to 12 to 18\nmph with gusts over 25 mph on upper slopes and ridgetops.\nLighter NW wind expected on Saturday.\n\n* HUMIDITY...Minimum values 15 to 25 percent Friday afternoon.\nRecoveries to 50 percent on lower slopes and 30 to 40 percent on\nupper slopes and ridgetops this morning. Recoveries improving\ntonight to 50 to 70 percent in valleys, 40 to 50 percent upper\nslopes and ridges.\n\n* IMPACTS...Any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT UNTIL 9 PM PDT THIS EVENING'
          ],
          VTEC: ['/O.CON.KEKA.FW.W.0004.000000T0000Z-180811T0400Z/'],
          PIL: ['EKARFWEKA'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041419-2715372',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-112.22, 32.710000000000001],
            [-112.26000000000001, 32.840000000000003],
            [-112.19000000000001, 33.140000000000001],
            [-112.07000000000001, 33.210000000000001],
            [-112.01000000000001, 33.409999900000003],
            [-111.77000000000001, 33.510000000000005],
            [-111.59, 33.520000000000003],
            [-111.39, 33.450000000000003],
            [-111.39, 33.350000000000001],
            [-111.54000000000001, 33.240000000000002],
            [-111.57000000000001, 33.120000000000005],
            [-111.75000000000001, 32.940000000000005],
            [-111.89000000000001, 32.860000000000007],
            [-111.89000000000001, 32.770000000000003],
            [-112.05000000000001, 32.760000000000005],
            [-112.07000000000001, 32.720000000000006],
            [-112.15000000000001, 32.700000000000003],
            [-112.22, 32.710000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041419-2715372',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041419-2715372',
        areaDesc: 'Pinal, AZ; Maricopa, AZ',
        geocode: {
          UGC: ['AZC021', 'AZC013'],
          SAME: ['004021', '004013']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/AZC021',
          'https://api.weather.gov/zones/county/AZC013'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041316-2715327',
            identifier: 'NWS-IDP-PROD-3041316-2715327',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T02:37:00-07:00'
          }
        ],
        sent: '2018-08-10T04:49:00-07:00',
        effective: '2018-08-10T04:49:00-07:00',
        onset: '2018-08-10T04:49:00-07:00',
        expires: '2018-08-10T08:30:00-07:00',
        ends: '2018-08-10T08:30:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Phoenix AZ',
        headline:
          'Flood Warning issued August 10 at 4:49AM MST expiring August 10 at 8:30AM MST by NWS Phoenix AZ',
        description:
          'At 448 AM MST, media and transportation departments are reporting\nnumerous road closures across the warned area due to heavy rainfall\nfrom earlier storms. Flooding will continue, including excessive\nponding of water on roadways and slow flow through area washes, into\nthe morning commute hours.\n\nSome locations that will experience flooding include...\nPhoenix, Mesa, Chandler, Gilbert, Tempe, Casa Grande, Apache\nJunction, Sun Lakes, East Mesa, Maricopa, Queen Creek, Tempe\nMarketplace, Gold Camp, Falcon Field Airport and Lost Dutchman State\nPark.\n\nThis includes the following highways...\nAZ Interstate 10 between mile markers 152 and 188.\nAZ Interstate 8 between mile markers 145 and 165.\nUS Highway 60 between mile markers 173 and 205.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nExcessive runoff from heavy rainfall will cause flooding of small\ncreeks and streams, urban areas, highways, streets and underpasses as\nwell as other drainage areas and low lying spots.",
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'A FLOOD WARNING FOR URBAN AREAS AND SMALL STREAMS REMAINS IN EFFECT UNTIL 830 AM MST FOR MARICOPA AND PINAL COUNTIES'
          ],
          VTEC: ['/O.CON.KPSR.FA.W.0004.000000T0000Z-180810T1530Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['PSRFLSPSR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T08:30:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041417-2715371',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041417-2715371',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041417-2715371',
        areaDesc:
          'Los Angeles County Coast including Downtown Los Angeles; Ventura County Coastal Valleys; Los Angeles County San Gabriel Valley; Santa Monica Mountains Recreational Area; Ventura County Interior Valleys; Los Angeles County San Fernando Valley; Santa Clarita Valley',
        geocode: {
          UGC: [
            'CAZ041',
            'CAZ045',
            'CAZ548',
            'CAZ046',
            'CAZ044',
            'CAZ547',
            'CAZ088'
          ],
          SAME: ['006037', '006111']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/CAZ041',
          'https://api.weather.gov/zones/forecast/CAZ045',
          'https://api.weather.gov/zones/forecast/CAZ548',
          'https://api.weather.gov/zones/forecast/CAZ046',
          'https://api.weather.gov/zones/forecast/CAZ044',
          'https://api.weather.gov/zones/forecast/CAZ547',
          'https://api.weather.gov/zones/forecast/CAZ088'
        ],
        references: [],
        sent: '2018-08-10T04:36:00-07:00',
        effective: '2018-08-10T04:36:00-07:00',
        onset: '2018-08-10T04:36:00-07:00',
        expires: '2018-08-10T13:30:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'Heat Advisory issued August 10 at 4:36AM PDT expiring August 10 at 8:00PM PDT by NWS Los Angeles/Oxnard CA',
        description:
          'The National Weather Service in Los Angeles/Oxnard has issued a\nHeat Advisory, which is in effect until 8 PM PDT this evening.\n\n* TEMPERATURE...High temperatures will range from the 80s at the\nbeaches to the mid 90s across inland sections of the coastal\nplain, to between 93 and 103 in the valleys and the Santa Monica\nMountains.\n\n* IMPACTS...Increased potential for serious heat-related\nillnesses, especially for the young and elderly, those\nperforming outdoor activities, as well as those without access\nto air conditioning. Increased potential for power outages.',
        instruction:
          'A Heat Advisory is issued when temperatures will be high enough to\npotentially cause heat illnesses. Drink plenty of fluids, stay in\nan air-conditioned room, stay out of the sun, and check up on\nrelatives and neighbors.\n\nNever, ever, leave people or pets in enclosed vehicles, even for\na short period of time.\n\nTake extra precautions if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening.  Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water.',
        response: 'Execute',
        parameters: {
          NWSheadline: ['HEAT ADVISORY IN EFFECT UNTIL 8 PM PDT THIS EVENING'],
          VTEC: ['/O.NEW.KLOX.HT.Y.0006.180810T1136Z-180811T0300Z/'],
          PIL: ['LOXNPWLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041400-2715368',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-99.549999999999997, 30.710000000000001],
            [-99.599999999999994, 30.510000000000002],
            [-99.7099999, 30.430000000000003],
            [-100.03, 30.420000000000002],
            [-100.06, 30.710000000000001],
            [-99.549999999999997, 30.710000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041400-2715368',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041400-2715368',
        areaDesc: 'Kimble, TX',
        geocode: {
          UGC: ['TXC267'],
          SAME: ['048267']
        },
        affectedZones: ['https://api.weather.gov/zones/county/TXC267'],
        references: [],
        sent: '2018-08-10T06:24:00-05:00',
        effective: '2018-08-10T06:24:00-05:00',
        onset: '2018-08-10T06:24:00-05:00',
        expires: '2018-08-10T08:30:00-05:00',
        ends: '2018-08-10T08:30:00-05:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Flash Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Angelo TX',
        headline:
          'Flash Flood Warning issued August 10 at 6:24AM CDT expiring August 10 at 8:30AM CDT by NWS San Angelo TX',
        description:
          'The National Weather Service in San Angelo has issued a\n\n* Flash Flood Warning for...\nNorthern Kimble County in west central Texas...\n\n* Until 830 AM CDT.\n\n* At 623 AM CDT, Doppler radar indicated thunderstorms producing\nheavy rain across the warned area. Up to three inches of rain have\nalready fallen. Flash flooding is expected to begin shortly.\n\n* Some locations that will experience flooding include...\nJunction, London, South Llano River State Park, Yates Crossing,\nCleo and Us-83 Near The Kimble-Menard County Line.\n\nThis includes the following low water crossings ...\nPark Road 73 crossing South Llano River...\nRM 2291 crossings along Bear Creek...\nFlatrock Lane crossing South Llano River...\nCounty Road 370 crossing Big Saline Creek...\nKC 314 crossing Llano River...\nCounty Road 351 crossing Big Saline Creek...\nCounty Road 275 crossing North Llano River.\nDo not drive through these low water crossings or any other\nlow water crossing with water flowing across the roadway.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nExcessive runoff from heavy rainfall will cause flooding of small\ncreeks and streams, urban areas, highways, streets and underpasses as\nwell as other drainage areas and low lying spots.\n\nExcessive runoff from heavy rainfall will cause flooding of small\ncreeks and streams, country roads, farmland, and other low lying\nspots.",
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.NEW.KSJT.FF.W.0012.180810T1124Z-180810T1330Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['SJTFFWSJT'],
          BLOCKCHANNEL: ['EAS', 'NWEM'],
          CMAMtext: [
            'Flash Flood Warning this area til 8:30 AM CDT. Avoid flood areas. -NWS'
          ],
          eventEndingTime: ['2018-08-10T08:30:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041399-2715367',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041399-2715367',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041399-2715367',
        areaDesc:
          'Cascade; Chouteau; Hill; Blaine; Liberty; Toole; Northern Rocky Mountain Front; Eastern Glacier; Southern Rocky Mountain Front; Eastern Pondera; Eastern Teton; Fergus; Judith Basin',
        geocode: {
          UGC: [
            'MTZ012',
            'MTZ013',
            'MTZ011',
            'MTZ047',
            'MTZ045',
            'MTZ044',
            'MTZ009',
            'MTZ010',
            'MTZ048',
            'MTZ046',
            'MTZ049',
            'MTZ051',
            'MTZ050'
          ],
          SAME: [
            '030013',
            '030015',
            '030041',
            '030005',
            '030051',
            '030101',
            '030073',
            '030035',
            '030099',
            '030049',
            '030027',
            '030045'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MTZ012',
          'https://api.weather.gov/zones/forecast/MTZ013',
          'https://api.weather.gov/zones/forecast/MTZ011',
          'https://api.weather.gov/zones/forecast/MTZ047',
          'https://api.weather.gov/zones/forecast/MTZ045',
          'https://api.weather.gov/zones/forecast/MTZ044',
          'https://api.weather.gov/zones/forecast/MTZ009',
          'https://api.weather.gov/zones/forecast/MTZ010',
          'https://api.weather.gov/zones/forecast/MTZ048',
          'https://api.weather.gov/zones/forecast/MTZ046',
          'https://api.weather.gov/zones/forecast/MTZ049',
          'https://api.weather.gov/zones/forecast/MTZ051',
          'https://api.weather.gov/zones/forecast/MTZ050'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039966-2714757',
            identifier: 'NWS-IDP-PROD-3039966-2714757',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T15:06:00-06:00'
          }
        ],
        sent: '2018-08-10T05:15:00-06:00',
        effective: '2018-08-10T05:15:00-06:00',
        onset: '2018-08-10T05:15:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Great Falls MT',
        headline:
          'Heat Advisory issued August 10 at 5:15AM MDT expiring August 11 at 9:00PM MDT by NWS Great Falls MT',
        description:
          '* TEMPERATURES...95 to 105 degrees at lower elevations.\n\n* TIMING...Mainly during the afternoon and early evening hours.\n\n* IMPACTS...Heat exhaustion or stroke is possible if proper\nprecautions are not taken. Temperatures in parked cars can rise\nquickly.',
        instruction:
          'A Heat Advisory means that a period of hot temperatures is\nexpected. The combination of hot temperatures will create a\nsituation in which heat illnesses are possible.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT UNTIL 9 PM MDT SATURDAY'
          ],
          VTEC: ['/O.CON.KTFX.HT.Y.0001.000000T0000Z-180812T0300Z/'],
          PIL: ['TFXNPWTFX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041398-2715366',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041398-2715366',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041398-2715366',
        areaDesc:
          'Salish and Kootenai Indian Reservation; Eastern Lolo National Forest/Welcome Creek And Scapegoat Wildernesses; Bitterroot National Forest; Flathead National Forest/Glacier Park/Bob Marshall And Mission Mountain Wilderness; Deerlodge/Western Beaverhead National Forest; Eastern Beaverhead National Forest',
        geocode: {
          UGC: ['MTZ107', 'MTZ108', 'MTZ109', 'MTZ105', 'MTZ110', 'MTZ111'],
          SAME: [
            '030063',
            '030047',
            '030089',
            '030029',
            '030077',
            '030049',
            '016049',
            '030081',
            '030039',
            '030001',
            '016059',
            '030099',
            '030053',
            '030035',
            '030073',
            '030023',
            '030093',
            '030043',
            '030057',
            '030031',
            '016033',
            '016043'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ107',
          'https://api.weather.gov/zones/fire/MTZ108',
          'https://api.weather.gov/zones/fire/MTZ109',
          'https://api.weather.gov/zones/fire/MTZ105',
          'https://api.weather.gov/zones/fire/MTZ110',
          'https://api.weather.gov/zones/fire/MTZ111'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039824-2714687',
            identifier: 'NWS-IDP-PROD-3039824-2714687',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:23:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039824-2714688',
            identifier: 'NWS-IDP-PROD-3039824-2714688',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:23:00-06:00'
          }
        ],
        sent: '2018-08-10T05:11:00-06:00',
        effective: '2018-08-10T05:11:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-11T05:15:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Missoula MT',
        headline:
          'Red Flag Warning issued August 10 at 5:11AM MDT expiring August 12 at 12:00AM MDT by NWS Missoula MT',
        description:
          '* Affected area: Fire Zone 105 (Flathead/Glacier Park). Fire\nZone 107 (Salish and Kootenai Reservation). Fire Zone 108\n(East Lolo). Fire Zone 109 (Bitterroot). Fire Zone 110\n(Deerlodge/West Beaverhead). Fire Zone 111 (East Beaverhead).\n\n* Impacts: Near record high temperatures are expected today\nwith a Haines Index of 6. This hot, dry, and unstable period\nwill be followed by limited overnight humidity recoveries on\ntonight then a dry cold front on Saturday. This front\nwill result in a significant increase in westerly winds while\nlow relative humidity values continue on Saturday afternoon\nand evening. Also, an isolated thunderstorm will be possible\non Saturday afternoon across northwest Montana and down along\nthe Continental Divide.\n\n* Winds: Sustained winds 5 to 10 mph with local gusts to 20 mph\non this afternoon and evening especially towards higher\nelevations. Increasing west wind 15 to 25 mph with gust to 35 mph\non Saturday with the highest speeds in the afternoon and\nevening.\n\n* Minimum humidities: 8 to 18 percent on Friday. 10 to 20\npercent on Saturday.\n\n* Haines: 6 today.',
        instruction: '',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM NOON TODAY TO MIDNIGHT MDT SATURDAY NIGHT'
          ],
          VTEC: ['/O.CON.KMSO.FW.W.0005.180810T1800Z-180812T0600Z/'],
          PIL: ['MSORFWMSO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041397-2715365',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041397-2715365',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041397-2715365',
        areaDesc:
          'Western Lolo National Forest; Kootenai National Forest/Talley Lake District/fnf; Clearwater/Nezperce National Forest; Palouse/Nezperce Reservation/Hells Canyon  Region',
        geocode: {
          UGC: ['MTZ106', 'MTZ104', 'IDZ103', 'IDZ102'],
          SAME: [
            '016079',
            '030053',
            '030061',
            '030063',
            '030089',
            '030029',
            '016049',
            '016035',
            '016021',
            '016017',
            '030047',
            '030081',
            '053075',
            '016009',
            '016057',
            '016061',
            '016069',
            '016003',
            '041063',
            '053003'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ106',
          'https://api.weather.gov/zones/fire/MTZ104',
          'https://api.weather.gov/zones/fire/IDZ103',
          'https://api.weather.gov/zones/fire/IDZ102'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039825-2714690',
            identifier: 'NWS-IDP-PROD-3039825-2714690',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:23:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039825-2714689',
            identifier: 'NWS-IDP-PROD-3039825-2714689',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:23:00-06:00'
          }
        ],
        sent: '2018-08-10T05:11:00-06:00',
        effective: '2018-08-10T05:11:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-11T05:15:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Missoula MT',
        headline:
          'Red Flag Warning issued August 10 at 5:11AM MDT expiring August 11 at 9:00PM MDT by NWS Missoula MT',
        description:
          '* Affected area: Fire Zone 102 (Palouse/Hells Canyon). Fire Zone\n103 (Clearwater/Nez Perce). Fire Zone 104 (Kootenai). Fire\nZone 106 (West Lolo).\n\n* Impacts: Near record high temperatures are expected today\nwith a Haines Index of 6. This hot, dry, and unstable period\nwill be followed by limited overnight humidity recoveries\ntonight and then a dry cold front on Saturday. This\nfront will result in an increase in westerly winds while low\nrelative humidity values continue into Saturday afternoon.\n\n* Winds: Sustained west winds 5 to 10 mph with gusts on the ridges\nto 20 mph on this afternoon and evening. Increasing west 10 to 15 mph\nwith gust to 30 mph on Saturday.\n\n* Minimum humidities: 7 to 16 percent today. 15 to 25 percent\non Saturday.\n\n* Haines: 6 today.',
        instruction: '',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM NOON MDT /11 AM PDT/ TODAY TO 9 PM MDT /8 PM PDT/ SATURDAY'
          ],
          VTEC: ['/O.CON.KMSO.FW.W.0005.180810T1800Z-180812T0300Z/'],
          PIL: ['MSORFWMSO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041392-2715362',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041392-2715362',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041392-2715362',
        areaDesc:
          'Chouteau and Fergus Counties; Hill and Blaine Counties; Central and Eastern Lewis and Clark National Forest Areas; Lewis and Clark National Forest Rocky Mountain District-Rocky Mountain Front; Helena and Townsend Ranger Districts of the Helena National Forest; Lincoln Ranger District of the Helena National Forest; Eastern Glacier/Toole/Central/Eastern Pondera/Liberty',
        geocode: {
          UGC: [
            'MTZ115',
            'MTZ113',
            'MTZ117',
            'MTZ114',
            'MTZ118',
            'MTZ116',
            'MTZ112'
          ],
          SAME: [
            '030013',
            '030015',
            '030027',
            '030069',
            '030099',
            '030071',
            '030073',
            '030051',
            '030005',
            '030041',
            '030045',
            '030065',
            '030007',
            '030031',
            '030097',
            '030067',
            '030037',
            '030107',
            '030049',
            '030059',
            '030077',
            '030029',
            '030035',
            '030043',
            '030057',
            '030101'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ115',
          'https://api.weather.gov/zones/fire/MTZ113',
          'https://api.weather.gov/zones/fire/MTZ117',
          'https://api.weather.gov/zones/fire/MTZ114',
          'https://api.weather.gov/zones/fire/MTZ118',
          'https://api.weather.gov/zones/fire/MTZ116',
          'https://api.weather.gov/zones/fire/MTZ112'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039954-2714751',
            identifier: 'NWS-IDP-PROD-3039954-2714751',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T15:02:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039954-2714752',
            identifier: 'NWS-IDP-PROD-3039954-2714752',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T15:02:00-06:00'
          }
        ],
        sent: '2018-08-10T05:03:00-06:00',
        effective: '2018-08-10T05:03:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Great Falls MT',
        headline:
          'Red Flag Warning issued August 10 at 5:03AM MDT expiring August 12 at 12:00AM MDT by NWS Great Falls MT',
        description:
          '* AFFECTED AREA...In Montana, Fire Weather Zones 112 Eastern\nGlacier/Toole/Central/Eastern Pondera/Liberty, 113 Hill and\nBlaine Counties, 114 Lewis and Clark National Forest Rocky\nMountain District-Rocky Mountain Front, 115 Chouteau and Fergus\nCounties, 116 Lincoln Ranger District of the Helena National\nForest, 117 Central and Eastern Lewis and Clark National Forest\nAreas and 118 Helena and Townsend Ranger Districts of the\nHelena National Forest.\n\n* TIMING...Primarily Friday and Saturday afternoons and evenings.\n\n* WINDS...South 5 to 15 mph, with gusts near 25 mph.\n\n* RELATIVE HUMIDITY...As low as 8 percent.\n\n* TEMPERATURES...95 to 105 degrees.\n\n* THUNDERSTORMS...A mix of wet and dry thunderstorms is possible\nlate Saturday afternoon.\n\n* IMPACTS...Fires could start easily and will have the potential\nto spread rapidly.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions are\neither occurring now, or will shortly. A combination of winds, low\nrelative humidity, and warm temperatures can contribute to extreme\nfire behavior.\n\nPlease advise the appropriate officials or fire crews in these\nareas of this Red Flag Warning.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM NOON TODAY TO MIDNIGHT MDT SATURDAY NIGHT FOR LOW HUMIDITY, BREEZY WINDS TODAY AND SATURDAY AND ISOLATED DRY THUNDERSTORMS SATURDAY FOR FIRE WEATHER ZONES 112, 113, 114, 115, 116, 117 AND 118'
          ],
          VTEC: ['/O.CON.KTFX.FW.W.0007.180810T1800Z-180812T0600Z/'],
          PIL: ['TFXRFWTFX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041387-2715356',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041387-2715356',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041387-2715356',
        areaDesc:
          'Coastal Brunswick; Coastal Pender; Coastal Horry; Coastal Georgetown; Coastal New Hanover',
        geocode: {
          UGC: ['NCZ110', 'NCZ106', 'SCZ054', 'SCZ056', 'NCZ108'],
          SAME: ['037019', '037141', '045051', '045043', '037129']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/NCZ110',
          'https://api.weather.gov/zones/forecast/NCZ106',
          'https://api.weather.gov/zones/forecast/SCZ054',
          'https://api.weather.gov/zones/forecast/SCZ056',
          'https://api.weather.gov/zones/forecast/NCZ108'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040702-2715111',
            identifier: 'NWS-IDP-PROD-3040702-2715111',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T22:04:00-04:00'
          }
        ],
        sent: '2018-08-10T06:46:00-04:00',
        effective: '2018-08-10T06:46:00-04:00',
        onset: '2018-08-10T06:46:00-04:00',
        expires: '2018-08-10T20:00:00-04:00',
        ends: '2018-08-10T20:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Wilmington NC',
        headline:
          'Beach Hazards Statement issued August 10 at 6:46AM EDT expiring August 10 at 8:00PM EDT by NWS Wilmington NC',
        description:
          'A Beach Hazards Statement remains in effect from Friday morning\nthrough Friday evening.\n\nJellyfish have been reported at multiple beaches in our area. The\njellyfish are small and mostly a nuisance, stinging feet of\nbeachgoers.',
        instruction:
          'A Beach Hazards Statement is issued when threats such as rip\ncurrents, longshore currents, and other hazards create life-\nthreatening conditions in the surf zone. Caution should be used when\nin or near the water.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT THROUGH THIS EVENING'
          ],
          VTEC: ['/O.CON.KILM.BH.S.0023.000000T0000Z-180811T0000Z/'],
          PIL: ['ILMCFWILM'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041390-2715360',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041390-2715360',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041390-2715360',
        areaDesc: 'Modoc County Except for the Surprise Valley',
        geocode: {
          UGC: ['CAZ285'],
          SAME: ['006089', '006093', '006049', '006035', '041035']
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ285'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040902-2715197',
            identifier: 'NWS-IDP-PROD-3040902-2715197',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040902-2715196',
            identifier: 'NWS-IDP-PROD-3040902-2715196',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040902-2715198',
            identifier: 'NWS-IDP-PROD-3040902-2715198',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          }
        ],
        sent: '2018-08-10T03:46:00-07:00',
        effective: '2018-08-10T03:46:00-07:00',
        onset: '2018-08-10T13:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-10T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Red Flag Warning issued August 10 at 3:46AM PDT expiring August 10 at 9:00PM PDT by NWS Medford OR',
        description:
          '..Haines 6 expected over the McCoy Fire in Oregon Fire Zone 624...\nThe National Weather Service in Medford has issued a Fire Weather\nWatch...which is in effect from Saturday afternoon through\nSaturday evening.\n\n* Impacts: Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of new\nand existing fires.\n\n* Affected area in Warning: All of California Fire Weather Zone 285\nto include Alturas.\n\n* Affected area in Watch: Eastern portion of California Fire\nWeather Zone 285 to include Alturas.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 10 to 20 mph with gusts up to 30 mph.\n\n* Humidity: As low as 9 percent.',
        instruction:
          'Strong winds and low relative humidities will cause fires to\nspread very rapidly. A Red Flag Warning means that critical fire\nweather conditions are forecast to occur.\n\nA Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO 9 PM PDT THIS EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR FIRE WEATHER ZONE 285... ...FIRE WEATHER WATCH IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR EASTERN FIRE WEATHER ZONE 285'
          ],
          VTEC: ['/O.CON.KMFR.FW.W.0021.180810T2000Z-180811T0400Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041388-2715357',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041388-2715357',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041388-2715357',
        areaDesc:
          'South Central Oregon Desert including the BLM Land in Eastern Lake and Western Harney Counties; Klamath Basin and the Fremont-Winema National Forest',
        geocode: {
          UGC: ['ORZ625', 'ORZ624'],
          SAME: [
            '041017',
            '032013',
            '006049',
            '041025',
            '032031',
            '041037',
            '006093',
            '041035'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/ORZ625',
          'https://api.weather.gov/zones/fire/ORZ624'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040900-2715193',
            identifier: 'NWS-IDP-PROD-3040900-2715193',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040900-2715194',
            identifier: 'NWS-IDP-PROD-3040900-2715194',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          }
        ],
        sent: '2018-08-10T03:46:00-07:00',
        effective: '2018-08-10T03:46:00-07:00',
        onset: '2018-08-10T13:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-10T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Red Flag Warning issued August 10 at 3:46AM PDT expiring August 10 at 9:00PM PDT by NWS Medford OR',
        description:
          '..Haines 6 expected over the McCoy Fire in Oregon Fire Zone 624...\nThe National Weather Service in Medford has issued a Fire Weather\nWatch...which is in effect from Saturday afternoon through\nSaturday evening.\n\n* Impacts: Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of new\nand existing fires. Very dry and unstable conditions will support\nsignificant fire growth. Plume domination is possible with\nlocally-generated erratic and gusty winds. Spotting could be\nproblematic.\n\n* Affected area in Warning: All of Oregon Fire Weather Zone 625\nand the eastern half of Fire Weather Zone 624. The Haines 6 Red\nFlag Warning is for the McCoy Fire.\n\n* Affected area in Watch: Southern Fire Weather Zone 625 and\nsoutheastern Fire Weather Zone 624.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 10 to 20 mph with gusts up to 30 mph.\n\n* Humidity: As low as 10 percent.\n\n* Haines Index Friday: 6, which means there is an increased chance\nfor uncontrolled fires to become plume dominated.',
        instruction:
          'Strong winds and low relative humidities will cause fires to\nspread very rapidly. A Red Flag Warning means that critical fire\nweather conditions are forecast to occur.\n\nA Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO 9 PM PDT THIS EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR PORTIONS OF FIRE WEATHER ZONE 624 AND ALL FIRE WEATHER ZONE 625 AND FOR HAINES 6 AT THE MCCOY FIRE... ...FIRE WEATHER WATCH IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR EASTERN FIRE WEATHER ZONE 624 AND SOUTHERN FIRE WEATHER ZONE 625'
          ],
          VTEC: ['/O.CON.KMFR.FW.W.0021.180810T2000Z-180811T0400Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041390-2715361',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041390-2715361',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041390-2715361',
        areaDesc: 'Modoc County Except for the Surprise Valley',
        geocode: {
          UGC: ['CAZ285'],
          SAME: ['006089', '006093', '006049', '006035', '041035']
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ285'],
        references: [],
        sent: '2018-08-10T03:46:00-07:00',
        effective: '2018-08-10T03:46:00-07:00',
        onset: '2018-08-11T14:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-11T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Fire Weather Watch issued August 10 at 3:46AM PDT expiring August 11 at 8:00PM PDT by NWS Medford OR',
        description:
          '..Haines 6 expected over the McCoy Fire in Oregon Fire Zone 624...\nThe National Weather Service in Medford has issued a Fire Weather\nWatch...which is in effect from Saturday afternoon through\nSaturday evening.\n\n* Impacts: Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of new\nand existing fires.\n\n* Affected area in Warning: All of California Fire Weather Zone 285\nto include Alturas.\n\n* Affected area in Watch: Eastern portion of California Fire\nWeather Zone 285 to include Alturas.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 10 to 20 mph with gusts up to 30 mph.\n\n* Humidity: As low as 9 percent.',
        instruction:
          'Strong winds and low relative humidities will cause fires to\nspread very rapidly. A Red Flag Warning means that critical fire\nweather conditions are forecast to occur.\n\nA Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO 9 PM PDT THIS EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR FIRE WEATHER ZONE 285... ...FIRE WEATHER WATCH IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR EASTERN FIRE WEATHER ZONE 285'
          ],
          VTEC: ['/O.NEW.KMFR.FW.A.0012.180811T2100Z-180812T0300Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041389-2715359',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041389-2715359',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041389-2715359',
        areaDesc:
          'Siskiyou County from the Cascade Mountains East and South to Mt Shasta',
        geocode: {
          UGC: ['CAZ284'],
          SAME: ['006089', '006093', '006049', '041035']
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ284'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040903-2715199',
            identifier: 'NWS-IDP-PROD-3040903-2715199',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040903-2715200',
            identifier: 'NWS-IDP-PROD-3040903-2715200',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:04:00-07:00'
          }
        ],
        sent: '2018-08-10T03:46:00-07:00',
        effective: '2018-08-10T03:46:00-07:00',
        onset: '2018-08-10T13:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-10T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Red Flag Warning issued August 10 at 3:46AM PDT expiring August 10 at 9:00PM PDT by NWS Medford OR',
        description:
          '..Haines 6 expected over the McCoy Fire in Oregon Fire Zone 624...\n* Impacts: Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of any new\nand existing fires.\n\n* Affected area: Eastern Fire Weather Zone 284...east of Tennant.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 10 to 15 mph with gusts up to 30 mph.\n\n* Humidity: As low as 11 percent.',
        instruction:
          'Strong winds and low relative humidities will cause fires to\nspread very rapidly. A Red Flag Warning means that critical fire\nweather conditions are forecast to occur.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO 9 PM PDT THIS EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR FIRE WEATHER ZONE 284'
          ],
          VTEC: ['/O.CON.KMFR.FW.W.0021.180810T2000Z-180811T0400Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041388-2715358',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041388-2715358',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041388-2715358',
        areaDesc:
          'South Central Oregon Desert including the BLM Land in Eastern Lake and Western Harney Counties; Klamath Basin and the Fremont-Winema National Forest',
        geocode: {
          UGC: ['ORZ625', 'ORZ624'],
          SAME: [
            '041017',
            '032013',
            '006049',
            '041025',
            '032031',
            '041037',
            '006093',
            '041035'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/ORZ625',
          'https://api.weather.gov/zones/fire/ORZ624'
        ],
        references: [],
        sent: '2018-08-10T03:46:00-07:00',
        effective: '2018-08-10T03:46:00-07:00',
        onset: '2018-08-11T14:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-11T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Fire Weather Watch issued August 10 at 3:46AM PDT expiring August 11 at 8:00PM PDT by NWS Medford OR',
        description:
          '..Haines 6 expected over the McCoy Fire in Oregon Fire Zone 624...\nThe National Weather Service in Medford has issued a Fire Weather\nWatch...which is in effect from Saturday afternoon through\nSaturday evening.\n\n* Impacts: Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of new\nand existing fires. Very dry and unstable conditions will support\nsignificant fire growth. Plume domination is possible with\nlocally-generated erratic and gusty winds. Spotting could be\nproblematic.\n\n* Affected area in Warning: All of Oregon Fire Weather Zone 625\nand the eastern half of Fire Weather Zone 624. The Haines 6 Red\nFlag Warning is for the McCoy Fire.\n\n* Affected area in Watch: Southern Fire Weather Zone 625 and\nsoutheastern Fire Weather Zone 624.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 10 to 20 mph with gusts up to 30 mph.\n\n* Humidity: As low as 10 percent.\n\n* Haines Index Friday: 6, which means there is an increased chance\nfor uncontrolled fires to become plume dominated.',
        instruction:
          'Strong winds and low relative humidities will cause fires to\nspread very rapidly. A Red Flag Warning means that critical fire\nweather conditions are forecast to occur.\n\nA Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO 9 PM PDT THIS EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR PORTIONS OF FIRE WEATHER ZONE 624 AND ALL FIRE WEATHER ZONE 625 AND FOR HAINES 6 AT THE MCCOY FIRE... ...FIRE WEATHER WATCH IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR EASTERN FIRE WEATHER ZONE 624 AND SOUTHERN FIRE WEATHER ZONE 625'
          ],
          VTEC: ['/O.NEW.KMFR.FW.A.0012.180811T2100Z-180812T0300Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041368',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041368',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041368',
        areaDesc:
          'Stephenson; Carroll; Putnam; Clinton; Jo Daviess; Dubuque; Whiteside; Rock Island; Henry; Scott; Jackson; Bureau',
        geocode: {
          UGC: [
            'ILZ002',
            'ILZ007',
            'ILZ018',
            'IAZ066',
            'ILZ001',
            'IAZ042',
            'ILZ009',
            'ILZ015',
            'ILZ016',
            'IAZ068',
            'IAZ054',
            'ILZ017'
          ],
          SAME: [
            '017177',
            '017015',
            '017155',
            '019045',
            '017085',
            '019061',
            '017195',
            '017161',
            '017073',
            '019163',
            '019097',
            '017011'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ILZ002',
          'https://api.weather.gov/zones/forecast/ILZ007',
          'https://api.weather.gov/zones/forecast/ILZ018',
          'https://api.weather.gov/zones/forecast/IAZ066',
          'https://api.weather.gov/zones/forecast/ILZ001',
          'https://api.weather.gov/zones/forecast/IAZ042',
          'https://api.weather.gov/zones/forecast/ILZ009',
          'https://api.weather.gov/zones/forecast/ILZ015',
          'https://api.weather.gov/zones/forecast/ILZ016',
          'https://api.weather.gov/zones/forecast/IAZ068',
          'https://api.weather.gov/zones/forecast/IAZ054',
          'https://api.weather.gov/zones/forecast/ILZ017'
        ],
        references: [],
        sent: '2018-08-10T05:27:00-05:00',
        effective: '2018-08-10T05:27:00-05:00',
        onset: '2018-08-10T05:27:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Quad Cities IA IL',
        headline:
          'Special Weather Statement issued August 10 at 5:27AM CDT by NWS Quad Cities IA IL',
        description:
          'Moisture from rainfall last evening, combined with clear skies\nand light winds, will cause areas of fog to develop early this\nmorning. Some of the fog may become dense with visibilities less\nthan 1/4 mile. The fog should dissipate by 9 am.\n\nMotorists should drive with extra caution and allow additional\ntravel time. Use low beams, reduce speed, and allow for plenty of\nroom between you and other cars. Be alert to rapid fluctuations in\nvisibility.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['.Locally Dense Fog Early This Morning'],
          'EAS-ORG': ['WXR'],
          PIL: ['DVNSPSDVN'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041348-2715350',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-98.780000000000001, 31.609999999999999],
            [-98.760000000000005, 31.689999999999998],
            [-98.5, 31.719999999999999],
            [-98.269999999999996, 31.41],
            [-98.560000000000002, 31.23],
            [-98.629999999999995, 31.27],
            [-98.589999999999989, 31.329999999999998],
            [-98.639999999999986, 31.309999999999999],
            [-98.649999999999991, 31.369999999999997],
            [-98.709999899999985, 31.349999999999998],
            [-98.689999999999984, 31.389999999999997],
            [-98.72999999999999, 31.429999999999996],
            [-98.779999999999987, 31.379999999999995],
            [-98.779999999999987, 31.409999999999997],
            [-98.84999999999998, 31.409999999999997],
            [-98.869999999999976, 31.439999999999998],
            [-98.929999999999978, 31.429999999999996],
            [-98.939999999999984, 31.459999999999997],
            [-98.969999999999985, 31.439999999999998],
            [-98.999999999999986, 31.469999999999999],
            [-98.780000000000001, 31.609999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041348-2715350',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041348-2715350',
        areaDesc: 'Mills, TX',
        geocode: {
          UGC: ['TXC333'],
          SAME: ['048333']
        },
        affectedZones: ['https://api.weather.gov/zones/county/TXC333'],
        references: [],
        sent: '2018-08-10T05:16:00-05:00',
        effective: '2018-08-10T05:16:00-05:00',
        onset: '2018-08-10T05:16:00-05:00',
        expires: '2018-08-10T08:45:00-05:00',
        ends: '2018-08-10T08:45:00-05:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Flood Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Fort Worth TX',
        headline:
          'Flood Advisory issued August 10 at 5:16AM CDT expiring August 10 at 8:45AM CDT by NWS Fort Worth TX',
        description:
          'The National Weather Service in Fort Worth has issued a\n\n* Flood Advisory for Minor Flooding in Poor Drainage Areas for...\nMills County in central Texas...\n\n* Until 845 AM CDT.\n\n* At 515 AM CDT, Doppler radar indicated thunderstorms that were\nproducing heavy rainfall. Excessive runoff from these\nthunderstorms will cause minor flooding. Areas that are low lying\nor usually experience poor drainage are most likely to experience\nflooding. This means some low water crossings in the region may\nbecome impassable. Up to two inches of rain have already fallen.\n\n* Some locations that will experience flooding include...\nGoldthwaite and Mullin.\n\nAdditional rainfall of one to two inches is expected over the area.\nThis additional rain will cause minor flooding.',
        instruction:
          "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.",
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.NEW.KFWD.FA.Y.0062.180810T1016Z-180810T1345Z/'],
          PIL: ['FWDFLSFWD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T08:45:00-05:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041347',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041347',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041347',
        areaDesc:
          'Allamakee; Houston; La Crosse; Trempealeau; Richland; Taylor; Winona; Jackson; Crawford; Grant; Buffalo; Monroe; Vernon; Clark; Clayton; Wabasha',
        geocode: {
          UGC: [
            'IAZ011',
            'MNZ096',
            'WIZ041',
            'WIZ033',
            'WIZ055',
            'WIZ017',
            'MNZ088',
            'WIZ034',
            'WIZ054',
            'WIZ061',
            'WIZ032',
            'WIZ042',
            'WIZ053',
            'WIZ029',
            'IAZ030',
            'MNZ079'
          ],
          SAME: [
            '019005',
            '027055',
            '055063',
            '055121',
            '055103',
            '055119',
            '027169',
            '055053',
            '055023',
            '055043',
            '055011',
            '055081',
            '055123',
            '055019',
            '019043',
            '027157'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IAZ011',
          'https://api.weather.gov/zones/forecast/MNZ096',
          'https://api.weather.gov/zones/forecast/WIZ041',
          'https://api.weather.gov/zones/forecast/WIZ033',
          'https://api.weather.gov/zones/forecast/WIZ055',
          'https://api.weather.gov/zones/forecast/WIZ017',
          'https://api.weather.gov/zones/forecast/MNZ088',
          'https://api.weather.gov/zones/forecast/WIZ034',
          'https://api.weather.gov/zones/forecast/WIZ054',
          'https://api.weather.gov/zones/forecast/WIZ061',
          'https://api.weather.gov/zones/forecast/WIZ032',
          'https://api.weather.gov/zones/forecast/WIZ042',
          'https://api.weather.gov/zones/forecast/WIZ053',
          'https://api.weather.gov/zones/forecast/WIZ029',
          'https://api.weather.gov/zones/forecast/IAZ030',
          'https://api.weather.gov/zones/forecast/MNZ079'
        ],
        references: [],
        sent: '2018-08-10T05:13:00-05:00',
        effective: '2018-08-10T05:13:00-05:00',
        onset: '2018-08-10T05:13:00-05:00',
        expires: '2018-08-10T08:30:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS La Crosse WI',
        headline:
          'Special Weather Statement issued August 10 at 5:13AM CDT by NWS La Crosse WI',
        description:
          'Areas of fog have developed early this morning, mainly in river\nvalley locations and across north-central Wisconsin. The fog may\nbe locally dense at times, with visibility reduced to a half mile\nor less. The fog is expected to dissipate by around 9 AM.\n\nIf traveling early this morning, be prepared for rapid changes in\nvisibility and allow extra time to reach your destination.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['Areas of Dense Fog This Morning'],
          'EAS-ORG': ['WXR'],
          PIL: ['ARXSPSARX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041343-2715345',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041343-2715345',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041343-2715345',
        areaDesc:
          'Coastal Waters from Point Arena to Point Reyes California out to 10 nm',
        geocode: {
          UGC: ['PZZ540'],
          SAME: ['057540']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ540'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040883-2715178',
            identifier: 'NWS-IDP-PROD-3040883-2715178',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T03:09:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T18:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 6:00PM PDT by NWS San Francisco CA',
        description:
          '* WINDS...Northwest 15 to 25 kt with gusts up to 30 kt.\n\n* SEAS...6 to 8 feet.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT UNTIL 6 PM PDT SATURDAY'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0163.000000T0000Z-180812T0100Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T18:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041344-2715346',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041344-2715346',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041344-2715346',
        areaDesc:
          'Coastal Waters from Pigeon Point to Point Pinos California out to 10 nm',
        geocode: {
          UGC: ['PZZ560'],
          SAME: ['057560']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ560'],
        references: [],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-11T11:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 9:00PM PDT by NWS San Francisco CA',
        description:
          'The National Weather Service in San Francisco has issued a Small\nCraft Advisory, which is in effect from 11 AM to 9 PM PDT\nSaturday.\n\n* WINDS...Northwest 15 to 25 kt with gusts up to 30 kt.\n\n* SEAS...6 to 8 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY IN EFFECT FROM 11 AM TO 9 PM PDT SATURDAY'
          ],
          VTEC: ['/O.NEW.KMTR.SC.Y.0166.180811T1800Z-180812T0400Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041342-2715344',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041342-2715344',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041342-2715344',
        areaDesc: 'Waters from Point Reyes to Pigeon Point 10-60 NM',
        geocode: {
          UGC: ['PZZ571'],
          SAME: ['057571']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ571'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040885-2715180',
            identifier: 'NWS-IDP-PROD-3040885-2715180',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T15:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T18:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 6:00PM PDT by NWS San Francisco CA',
        description:
          '* WINDS...Northwest 15 to 25 kt with gusts up to 30 kt.\n\n* SEAS...7 to 9 feet.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 3 PM THIS AFTERNOON TO 6 PM PDT SATURDAY'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0165.180810T2200Z-180812T0100Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T18:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041345-2715347',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041345-2715347',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041345-2715347',
        areaDesc: 'San Francisco Bay South of the Bay Bridge',
        geocode: {
          UGC: ['PZZ531'],
          SAME: ['057531']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ531'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040881-2715176',
            identifier: 'NWS-IDP-PROD-3040881-2715176',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-10T22:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 10 at 10:00PM PDT by NWS San Francisco CA',
        description: '* WINDS...West 10 to 20 kt with gusts up to 30 kt.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 11 AM THIS MORNING TO 10 PM PDT THIS EVENING'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0163.180810T1800Z-180811T0500Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T22:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041340-2715342',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041340-2715342',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041340-2715342',
        areaDesc:
          'Coastal Waters from Point Pinos to Point Piedras Blancas California out to 10 nm',
        geocode: {
          UGC: ['PZZ565'],
          SAME: ['057565']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ565'],
        references: [],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-11T13:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 9:00PM PDT by NWS San Francisco CA',
        description:
          'The National Weather Service in San Francisco has issued a Small\nCraft Advisory, which is in effect from 1 PM to 9 PM PDT\nSaturday.\n\n* WINDS...Northwest 10 to 20 kt with gusts up to 30 kt.\n\n* SEAS...6 to 8 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY IN EFFECT FROM 1 PM TO 9 PM PDT SATURDAY'
          ],
          VTEC: ['/O.NEW.KMTR.SC.Y.0166.180811T2000Z-180812T0400Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041346-2715348',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041346-2715348',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041346-2715348',
        areaDesc:
          'San Pablo Bay, Suisun Bay, the West Delta and  the San Francisco Bay north of the Bay Bridge',
        geocode: {
          UGC: ['PZZ530'],
          SAME: ['057530']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ530'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040886-2715182',
            identifier: 'NWS-IDP-PROD-3040886-2715182',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040886-2715181',
            identifier: 'NWS-IDP-PROD-3040886-2715181',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-10T22:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 10 at 10:00PM PDT by NWS San Francisco CA',
        description:
          'The National Weather Service in San Francisco has issued a Small\nCraft Advisory, which is in effect from 1 PM to 10 PM PDT\nSaturday.\n\n* WINDS...Southwest 10 to 20 kt with gusts up to 30 kt.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 11 AM THIS MORNING TO 10 PM PDT THIS EVENING... ...SMALL CRAFT ADVISORY IN EFFECT FROM 1 PM TO 10 PM PDT SATURDAY'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0164.180810T1800Z-180811T0500Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T22:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041346-2715349',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041346-2715349',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041346-2715349',
        areaDesc:
          'San Pablo Bay, Suisun Bay, the West Delta and  the San Francisco Bay north of the Bay Bridge',
        geocode: {
          UGC: ['PZZ530'],
          SAME: ['057530']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ530'],
        references: [],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-11T13:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T22:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 10:00PM PDT by NWS San Francisco CA',
        description:
          'The National Weather Service in San Francisco has issued a Small\nCraft Advisory, which is in effect from 1 PM to 10 PM PDT\nSaturday.\n\n* WINDS...Southwest 10 to 20 kt with gusts up to 30 kt.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 11 AM THIS MORNING TO 10 PM PDT THIS EVENING... ...SMALL CRAFT ADVISORY IN EFFECT FROM 1 PM TO 10 PM PDT SATURDAY'
          ],
          VTEC: ['/O.NEW.KMTR.SC.Y.0166.180811T2000Z-180812T0500Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T22:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041341-2715343',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041341-2715343',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041341-2715343',
        areaDesc:
          'Coastal Waters from Point Reyes to Pigeon Point California out to 10 nm',
        geocode: {
          UGC: ['PZZ545'],
          SAME: ['057545']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ545'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040882-2715177',
            identifier: 'NWS-IDP-PROD-3040882-2715177',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T18:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 6:00PM PDT by NWS San Francisco CA',
        description:
          '* WINDS...Northwest 10 to 20 kt with gusts up to 30 kt.\n\n* SEAS...4 to 6 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 11 AM THIS MORNING TO 6 PM PDT SATURDAY'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0163.180810T1800Z-180812T0100Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T18:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041339-2715340',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041339-2715340',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041339-2715340',
        areaDesc: 'Waters from Point Arena to Point Reyes 10-60 NM',
        geocode: {
          UGC: ['PZZ570'],
          SAME: ['057570']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ570'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040880-2715175',
            identifier: 'NWS-IDP-PROD-3040880-2715175',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040880-2715174',
            identifier: 'NWS-IDP-PROD-3040880-2715174',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:46:00-07:00'
          }
        ],
        sent: '2018-08-10T03:09:00-07:00',
        effective: '2018-08-10T03:09:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-10T11:15:00-07:00',
        ends: '2018-08-11T18:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 10 at 3:09AM PDT expiring August 11 at 6:00PM PDT by NWS San Francisco CA',
        description:
          '* WINDS...Northwest 15 to 25 kt with gusts up to 30 kt.\n\n* SEAS...6 to 8 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY NOW IN EFFECT FROM 11 AM THIS MORNING TO 6 PM PDT SATURDAY'
          ],
          VTEC: ['/O.EXT.KMTR.SC.Y.0165.180810T1800Z-180812T0100Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T18:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041329-2715337',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041329-2715337',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041329-2715337',
        areaDesc:
          'Northern Cambell; Crook and Weston County Plains; Southern Campbell',
        geocode: {
          UGC: ['WYZ297', 'WYZ298', 'WYZ259'],
          SAME: [
            '056011',
            '056019',
            '056005',
            '056033',
            '030075',
            '056027',
            '056045',
            '056009',
            '030011',
            '046019',
            '046033'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/WYZ297',
          'https://api.weather.gov/zones/fire/WYZ298',
          'https://api.weather.gov/zones/fire/WYZ259'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039850-2714697',
            identifier: 'NWS-IDP-PROD-3039850-2714697',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:32:00-06:00'
          }
        ],
        sent: '2018-08-10T04:03:00-06:00',
        effective: '2018-08-10T04:03:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-11T06:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Rapid City SD',
        headline:
          'Fire Weather Watch issued August 10 at 4:03AM MDT expiring August 11 at 9:00PM MDT by NWS Rapid City SD',
        description:
          'Hot and dry weather is expected on Saturday afternoon. With\ntemperatures in the 90s, relative humidity values could be as low\nas 12 percent. Dry conditions, combined with southerly winds\ngusting to 25 mph, could lead to critical fire weather\nconditions.\n* Affected Area...Fire Weather Zones 259...297 and 298.\n\n* Winds...South 14 to 18 mph with gusts up to 25 mph.\n\n* Relative Humidity...As low as 12 percent.\n\n* Impacts...The combination of gusty winds and low relative\nhumidity could produce critical fire weather conditions.',
        instruction:
          'A fire weather watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible\nred flag warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH REMAINS IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR GUSTY WINDS AND LOW RELATIVE HUMIDITY FOR FIRE WEATHER ZONES 259...297 AND 298'
          ],
          VTEC: ['/O.CON.KUNR.FW.A.0002.180811T1800Z-180812T0300Z/'],
          PIL: ['UNRRFWUNR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041328-2715336',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041328-2715336',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041328-2715336',
        areaDesc:
          'Surprise Valley California; Eastern Lassen County; Western Lassen/Eastern Plumas/Eastern Sierra/Eastern Nevada Counties; Northern Washoe County',
        geocode: {
          UGC: ['CAZ270', 'CAZ278', 'CAZ271', 'NVZ458'],
          SAME: [
            '006049',
            '032031',
            '006035',
            '006091',
            '006089',
            '006063',
            '006057',
            '032013',
            '032027'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/CAZ270',
          'https://api.weather.gov/zones/fire/CAZ278',
          'https://api.weather.gov/zones/fire/CAZ271',
          'https://api.weather.gov/zones/fire/NVZ458'
        ],
        references: [],
        sent: '2018-08-10T02:59:00-07:00',
        effective: '2018-08-10T02:59:00-07:00',
        onset: '2018-08-11T11:00:00-07:00',
        expires: '2018-08-10T17:00:00-07:00',
        ends: '2018-08-11T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Reno NV',
        headline:
          'Fire Weather Watch issued August 10 at 2:59AM PDT expiring August 11 at 9:00PM PDT by NWS Reno NV',
        description:
          'The National Weather Service in Reno has issued a Fire Weather\nWatch for gusty winds and low humidity, which is in effect from\nSaturday morning through Saturday evening. The Fire Weather Watch\nhas been cancelled.\n\n* AFFECTED AREA...Fire Zone 270 Surprise Valley California, Fire\nZone 271 Western Lassen/Eastern Plumas/Eastern Sierra/Eastern\nNevada Counties, Fire Zone 278 Eastern Lassen County and Fire\nZone 458 Northern Washoe County.\n\n* Winds Saturday...Southwest 15 to 25 mph with gusts to 35 mph.\n\n* Minimum Humidity...10 to 16%\n\n* Duration...3 to 6 hours.\n\n* Impacts...The combination of gusty winds and low humidity can\ncause fire to rapidly grow in size and intensity before first\nresponders can contain them.',
        instruction:
          'Avoid outdoor activities that can cause a spark near dry\nvegetation, such as yard work, target shooting, or campfires.\nFollow local fire restrictions. Check weather.gov/reno for\nupdates and livingwithfire.info for preparedness tips.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH IN EFFECT FROM SATURDAY MORNING THROUGH SATURDAY EVENING FOR NORTHEAST CALIFORNIA AND NORTHWEST NEVADA DUE TO GUSTY WINDS AND LOW HUMIDITY... ...FIRE WEATHER WATCH FOR FRIDAY IS CANCELED FOR NORTHEAST CALIFORNIA AND NORTHWEST NEVADA'
          ],
          VTEC: ['/O.NEW.KREV.FW.A.0013.180811T1800Z-180812T0400Z/'],
          PIL: ['REVRFWREV'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041322-2715330',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041322-2715330',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041322-2715330',
        areaDesc:
          'Garfield; Southwest Phillips; Sheridan; McCone; Petroleum; Eastern Roosevelt; Western Roosevelt; Northern Valley; Daniels; Richland; Dawson; Central and Southern Valley; Northern Phillips; Wibaux; Central and Southeast Phillips; Prairie',
        geocode: {
          UGC: [
            'MTZ022',
            'MTZ060',
            'MTZ019',
            'MTZ023',
            'MTZ021',
            'MTZ062',
            'MTZ020',
            'MTZ061',
            'MTZ018',
            'MTZ024',
            'MTZ025',
            'MTZ017',
            'MTZ059',
            'MTZ027',
            'MTZ016',
            'MTZ026'
          ],
          SAME: [
            '030033',
            '030071',
            '030091',
            '030055',
            '030069',
            '030085',
            '030105',
            '030019',
            '030083',
            '030021',
            '030109',
            '030079'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MTZ022',
          'https://api.weather.gov/zones/forecast/MTZ060',
          'https://api.weather.gov/zones/forecast/MTZ019',
          'https://api.weather.gov/zones/forecast/MTZ023',
          'https://api.weather.gov/zones/forecast/MTZ021',
          'https://api.weather.gov/zones/forecast/MTZ062',
          'https://api.weather.gov/zones/forecast/MTZ020',
          'https://api.weather.gov/zones/forecast/MTZ061',
          'https://api.weather.gov/zones/forecast/MTZ018',
          'https://api.weather.gov/zones/forecast/MTZ024',
          'https://api.weather.gov/zones/forecast/MTZ025',
          'https://api.weather.gov/zones/forecast/MTZ017',
          'https://api.weather.gov/zones/forecast/MTZ059',
          'https://api.weather.gov/zones/forecast/MTZ027',
          'https://api.weather.gov/zones/forecast/MTZ016',
          'https://api.weather.gov/zones/forecast/MTZ026'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041294-2715302',
            identifier: 'NWS-IDP-PROD-3041294-2715302',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T03:01:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041294-2715303',
            identifier: 'NWS-IDP-PROD-3041294-2715303',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T03:01:00-06:00'
          }
        ],
        sent: '2018-08-10T03:50:00-06:00',
        effective: '2018-08-10T03:50:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T18:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Excessive Heat Warning issued August 10 at 3:50AM MDT expiring August 11 at 9:00PM MDT by NWS Glasgow MT',
        description:
          '* HIGHS...99 to 105 today and 100 to 106 Saturday.\n\n* TIMING...Noon today through Saturday evening.',
        instruction:
          'An Excessive Heat Warning means that a prolonged period of\ndangerously hot temperatures will occur. Hot temperatures will\ncreate a dangerous situation in which heat illnesses are likely.\nDrink plenty of fluids, stay in an air- conditioned room, stay\nout of the sun, and check up on relatives and neighbors.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT FROM NOON TODAY TO 9 PM MDT SATURDAY'
          ],
          VTEC: ['/O.CON.KGGW.EH.W.0001.180810T1800Z-180812T0300Z/'],
          PIL: ['GGWNPWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041317-2715328',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041317-2715328',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041317-2715328',
        areaDesc:
          'Raft River Region; Arco/Mud Lake Desert; Wood River Foothills; Southern Hills/Albion Mountains; Lower Snake River Plain; Franklin/Eastern Oneida Region; Marsh and Arbon Highlands; Upper Snake River Plain; Shoshone/Lava Beds; Eastern Magic Valley',
        geocode: {
          UGC: [
            'IDZ057',
            'IDZ052',
            'IDZ075',
            'IDZ056',
            'IDZ054',
            'IDZ059',
            'IDZ058',
            'IDZ053',
            'IDZ051',
            'IDZ055'
          ],
          SAME: [
            '016071',
            '016077',
            '016031',
            '016011',
            '016019',
            '016051',
            '016023',
            '016013',
            '016005',
            '016041',
            '016029',
            '016065',
            '016043',
            '016063',
            '016067'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IDZ057',
          'https://api.weather.gov/zones/forecast/IDZ052',
          'https://api.weather.gov/zones/forecast/IDZ075',
          'https://api.weather.gov/zones/forecast/IDZ056',
          'https://api.weather.gov/zones/forecast/IDZ054',
          'https://api.weather.gov/zones/forecast/IDZ059',
          'https://api.weather.gov/zones/forecast/IDZ058',
          'https://api.weather.gov/zones/forecast/IDZ053',
          'https://api.weather.gov/zones/forecast/IDZ051',
          'https://api.weather.gov/zones/forecast/IDZ055'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039702-2714656',
            identifier: 'NWS-IDP-PROD-3039702-2714656',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T13:31:00-06:00'
          }
        ],
        sent: '2018-08-10T03:38:00-06:00',
        effective: '2018-08-10T03:38:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T15:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pocatello ID',
        headline:
          'Heat Advisory issued August 10 at 3:38AM MDT expiring August 11 at 9:00PM MDT by NWS Pocatello ID',
        description:
          '* TEMPERATURE...95 to 100 from Idaho Falls to Rexburg and the\nArco Desert extending into the Southern Wood River Valley. 98\nto 102 from Pocatello to Burley and for Southern Valleys both\nFriday and Saturday.\n\n* IMPACTS...Increased risk of heat related illness and injury,\nespecially for sensitive groups and those spending time\noutdoors during the afternoon and early evening.',
        instruction:
          'Take extra precautions if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water. If possible, stay in an air-\nconditioned area, stay out of the sun, and check up on relatives\nand neighbors.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT FROM NOON TODAY TO 9 PM MDT SATURDAY'
          ],
          VTEC: ['/O.CON.KPIH.HT.Y.0002.180810T1800Z-180812T0300Z/'],
          PIL: ['PIHNPWPIH'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041314-2715324',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041314-2715324',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041314-2715324',
        areaDesc:
          'Central U.S. Waters Strait Of Juan De Fuca; East Entrance U.S. Waters Strait Of Juan De Fuca',
        geocode: {
          UGC: ['PZZ131', 'PZZ132'],
          SAME: ['057131', '057132']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/PZZ131',
          'https://api.weather.gov/zones/forecast/PZZ132'
        ],
        references: [],
        sent: '2018-08-10T02:31:00-07:00',
        effective: '2018-08-10T02:31:00-07:00',
        onset: '2018-08-10T17:00:00-07:00',
        expires: '2018-08-10T10:45:00-07:00',
        ends: '2018-08-11T02:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Gale Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Seattle WA',
        headline:
          'Gale Warning issued August 10 at 2:31AM PDT expiring August 11 at 2:00AM PDT by NWS Seattle WA',
        description:
          'The National Weather Service in Seattle has issued a Gale\nWarning...which is in effect from 5 PM this afternoon to 2 AM PDT\nSaturday. The Gale Watch is no longer in effect.\n\n\n* WIND...West rising to 25 to 35 knots this evening.\n\n* WIND WAVES...4 to 6 feet this evening.',
        instruction:
          'A Gale Warning means winds of 34 to 47 knots are imminent or\noccurring. Operating a vessel in gale conditions requires\nexperience and properly equipped vessels. It is highly\nrecommended that mariners without the proper experience seek safe\nharbor prior to the onset of gale conditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'GALE WARNING IN EFFECT FROM 5 PM THIS AFTERNOON TO 2 AM PDT SATURDAY'
          ],
          VTEC: ['/O.NEW.KSEW.GL.W.0064.180811T0000Z-180811T0900Z/'],
          PIL: ['SEWMWWSEW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T02:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041311-2715321',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041311-2715321',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041311-2715321',
        areaDesc:
          'East Salmon River Mountains/Salmon NF; Sawtooth Range/Northern Sawtooth NF; Lemhi and Lost River Range/Challis NF',
        geocode: {
          UGC: ['IDZ475', 'IDZ422', 'IDZ476'],
          SAME: [
            '030001',
            '016037',
            '016085',
            '016015',
            '016049',
            '016059',
            '030081',
            '016023',
            '016039',
            '016025',
            '016063',
            '016013',
            '016033'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/IDZ475',
          'https://api.weather.gov/zones/fire/IDZ422',
          'https://api.weather.gov/zones/fire/IDZ476'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039809-2714678',
            identifier: 'NWS-IDP-PROD-3039809-2714678',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:14:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039809-2714679',
            identifier: 'NWS-IDP-PROD-3039809-2714679',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:14:00-06:00'
          }
        ],
        sent: '2018-08-10T03:23:00-06:00',
        effective: '2018-08-10T03:23:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T15:00:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pocatello ID',
        headline:
          'Red Flag Warning issued August 10 at 3:23AM MDT expiring August 12 at 12:00AM MDT by NWS Pocatello ID',
        description:
          '* AFFECTED AREA...Idaho Fire Weather Zones 422, 475, and 476.\n\n* HAINES...6.\n\n* WIND...Winds expected to remain mainly light on Friday.\nHowever, winds of 10 to 20 mph with gusts to 30 mph remain\npossible for Saturday. Ridge top winds on Saturday increase\nto 20 to 25 mph sustained.\n\n* HUMIDITY...5 to 15 percent on Friday and Saturday afternoon.\nPoor humidity recovery at ridgetop of 20 to 35 percent in\nsome areas.\n\n* IMPACTS...any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.\n\nA red flag warning means that critical fire weather conditions\nare either occurring now, or will shortly based on these criteria\nfor Southeastern Idaho:\n\n* Relative humidity at or below 15 percent and wind gusts of at\nleast 25 mph in the mountains, or 30 mph in the Snake Plain.\n\n* Thunderstorm coverage of 25 percent, without specific rainfall\ncriteria.\n\n* Other high impact evens deemed critical by the National\nWeather Service and area fire management agencies.',
        instruction: '',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FOR HAINES 6 AND LOW HUMIDITY ON FRIDAY AND LOW HUMIDITY, GUSTY WINDS, AND HAINES 6 ON SATURDAY FOR IDAHO FIRE WEATHER ZONES 422, 475 AND 476'
          ],
          VTEC: ['/O.CON.KPIH.FW.W.0006.180810T1800Z-180812T0600Z/'],
          PIL: ['PIHRFWPIH'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041310-2715320',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041310-2715320',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041310-2715320',
        areaDesc: 'Dawson/McCone/Prairie/Richland/Wibaux Counties',
        geocode: {
          UGC: ['MTZ122'],
          SAME: [
            '030033',
            '030083',
            '030085',
            '030105',
            '038053',
            '038033',
            '030021',
            '030079',
            '030055',
            '030109',
            '030017',
            '030025'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/MTZ122'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039895-2714717',
            identifier: 'NWS-IDP-PROD-3039895-2714717',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:46:00-06:00'
          }
        ],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-12T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:21AM MDT expiring August 12 at 9:00PM MDT by NWS Glasgow MT',
        description:
          '* AFFECTED AREA...Fire Weather Zone 122.\n\n* TIMING...Saturday afternoon through Sunday evening.\n\n* WINDS...South 10 to 15 mph.\n\n* RELATIVE HUMIDITY...As low as 12 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Fire Weather Watch.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SUNDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 122'
          ],
          VTEC: ['/O.EXT.KGGW.FW.A.0003.180811T1800Z-180813T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041308-2715317',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041308-2715317',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041308-2715317',
        areaDesc:
          'The Lower Missouri River Breaks including the Charles M Russell National Wildlife Refuge; Northern Valley and Northern Phillips Counties; The Little Rockies',
        geocode: {
          UGC: ['MTZ136', 'MTZ134', 'MTZ135'],
          SAME: [
            '030027',
            '030033',
            '030069',
            '030105',
            '030071',
            '030055',
            '030019',
            '030005'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ136',
          'https://api.weather.gov/zones/fire/MTZ134',
          'https://api.weather.gov/zones/fire/MTZ135'
        ],
        references: [],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-10T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Red Flag Warning issued August 10 at 3:21AM MDT expiring August 10 at 9:00PM MDT by NWS Glasgow MT',
        description:
          'The National Weather Service in Glasgow has issued a Red Flag\nWarning for low humidity and gusty winds, which is in effect from\nnoon today to 9 PM MDT this evening.\n\n* AFFECTED AREA...Fire Weather Zones 134, 135 and 136.\n\n* TIMING...Friday afternoon through Saturday evening.\n\n* WINDS...South 10 to 15 mph.\n\n* RELATIVE HUMIDITY...As low as 8 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Red Flag Warning.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM NOON TODAY TO 9 PM MDT THIS EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONES 134, 135 AND 136... ...FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONES 134, 135 AND 136'
          ],
          VTEC: ['/O.NEW.KGGW.FW.W.0004.180810T1800Z-180811T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041309-2715319',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041309-2715319',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041309-2715319',
        areaDesc: 'Southern Petroleum and Southern Garfield Counties',
        geocode: {
          UGC: ['MTZ137'],
          SAME: [
            '030027',
            '030033',
            '030069',
            '030079',
            '030055',
            '030087',
            '030017',
            '030065'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/MTZ137'],
        references: [],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-10T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Red Flag Warning issued August 10 at 3:21AM MDT expiring August 10 at 9:00PM MDT by NWS Glasgow MT',
        description:
          'The National Weather Service in Glasgow has issued a Red Flag\nWarning for low humidity and gusty winds which is in effect from\nnoon today to 9 PM MDT this evening.\n\n* AFFECTED AREA...Fire Weather Zone 137.\n\n* TIMING...This afternoon through Sunday evening.\n\n* WINDS...South 10 to 15 mph today and Saturday. Northwest 10 to\n15 mph on Sunday.\n\n* RELATIVE HUMIDITY...As low as 9 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Red Flag Warning.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM NOON TODAY TO 9 PM MDT THIS EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 137... ...FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SUNDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 137'
          ],
          VTEC: ['/O.NEW.KGGW.FW.W.0004.180810T1800Z-180811T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041307-2715315',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041307-2715315',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041307-2715315',
        areaDesc:
          'Fort Peck Reservation and Daniels/Roosevelt/Sheridan Counties',
        geocode: {
          UGC: ['MTZ120'],
          SAME: [
            '030083',
            '030085',
            '030105',
            '038023',
            '038105',
            '030019',
            '030055',
            '030091'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/MTZ120'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039893-2714715',
            identifier: 'NWS-IDP-PROD-3039893-2714715',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:46:00-06:00'
          }
        ],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:21AM MDT expiring August 11 at 9:00PM MDT by NWS Glasgow MT',
        description:
          '* AFFECTED AREA...Fire Weather Zone 120.\n\n* TIMING...Saturday evening through Saturday evening.\n\n* WINDS...South 10 to 15 mph.\n\n* RELATIVE HUMIDITY...As low as 12 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Fire Weather Watch.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 120'
          ],
          VTEC: ['/O.EXT.KGGW.FW.A.0003.180811T1800Z-180812T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041309-2715318',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041309-2715318',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041309-2715318',
        areaDesc: 'Southern Petroleum and Southern Garfield Counties',
        geocode: {
          UGC: ['MTZ137'],
          SAME: [
            '030027',
            '030033',
            '030069',
            '030079',
            '030055',
            '030087',
            '030017',
            '030065'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/MTZ137'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039892-2714714',
            identifier: 'NWS-IDP-PROD-3039892-2714714',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:46:00-06:00'
          }
        ],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-12T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:21AM MDT expiring August 12 at 9:00PM MDT by NWS Glasgow MT',
        description:
          'The National Weather Service in Glasgow has issued a Red Flag\nWarning for low humidity and gusty winds which is in effect from\nnoon today to 9 PM MDT this evening.\n\n* AFFECTED AREA...Fire Weather Zone 137.\n\n* TIMING...This afternoon through Sunday evening.\n\n* WINDS...South 10 to 15 mph today and Saturday. Northwest 10 to\n15 mph on Sunday.\n\n* RELATIVE HUMIDITY...As low as 9 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Red Flag Warning.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM NOON TODAY TO 9 PM MDT THIS EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 137... ...FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SUNDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONE 137'
          ],
          VTEC: ['/O.EXT.KGGW.FW.A.0002.180811T1800Z-180813T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041308-2715316',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041308-2715316',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041308-2715316',
        areaDesc:
          'The Lower Missouri River Breaks including the Charles M Russell National Wildlife Refuge; Northern Valley and Northern Phillips Counties; The Little Rockies',
        geocode: {
          UGC: ['MTZ136', 'MTZ134', 'MTZ135'],
          SAME: [
            '030027',
            '030033',
            '030069',
            '030105',
            '030071',
            '030055',
            '030019',
            '030005'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ136',
          'https://api.weather.gov/zones/fire/MTZ134',
          'https://api.weather.gov/zones/fire/MTZ135'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039894-2714716',
            identifier: 'NWS-IDP-PROD-3039894-2714716',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:46:00-06:00'
          }
        ],
        sent: '2018-08-10T03:21:00-06:00',
        effective: '2018-08-10T03:21:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T17:00:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Glasgow MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:21AM MDT expiring August 11 at 9:00PM MDT by NWS Glasgow MT',
        description:
          'The National Weather Service in Glasgow has issued a Red Flag\nWarning for low humidity and gusty winds, which is in effect from\nnoon today to 9 PM MDT this evening.\n\n* AFFECTED AREA...Fire Weather Zones 134, 135 and 136.\n\n* TIMING...Friday afternoon through Saturday evening.\n\n* WINDS...South 10 to 15 mph.\n\n* RELATIVE HUMIDITY...As low as 8 percent.\n\n* TEMPERATURES...100 to 105.',
        instruction:
          'Please advise the appropriate officials or fire crews in these\nareas of this Red Flag Warning.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM NOON TODAY TO 9 PM MDT THIS EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONES 134, 135 AND 136... ...FIRE WEATHER WATCH NOW IN EFFECT FROM SATURDAY AFTERNOON THROUGH SATURDAY EVENING FOR LOW HUMIDITY AND GUSTY WINDS FOR FIRE WEATHER ZONES 134, 135 AND 136'
          ],
          VTEC: ['/O.EXT.KGGW.FW.A.0002.180811T1800Z-180812T0300Z/'],
          PIL: ['GGWRFWGGW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041303-2715311',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041303-2715311',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041303-2715311',
        areaDesc:
          'Northern Cheyenne Indian Reservation/Ashland Ranger District Custer Natl Forest; Northern Rosebud/Northern Treasure Counties; Custer County; Sioux Ranger District Custer National Forest',
        geocode: {
          UGC: ['MTZ131', 'MTZ130', 'MTZ132', 'MTZ133'],
          SAME: [
            '030003',
            '030087',
            '056011',
            '056005',
            '056033',
            '030011',
            '030075',
            '030017',
            '030103',
            '030111',
            '030033',
            '030069',
            '030065',
            '030079',
            '030025',
            '046063',
            '038087',
            '038011',
            '046105',
            '046019',
            '030109'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ131',
          'https://api.weather.gov/zones/fire/MTZ130',
          'https://api.weather.gov/zones/fire/MTZ132',
          'https://api.weather.gov/zones/fire/MTZ133'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039908-2714729',
            identifier: 'NWS-IDP-PROD-3039908-2714729',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:50:00-06:00'
          }
        ],
        sent: '2018-08-10T03:16:00-06:00',
        effective: '2018-08-10T03:16:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T15:30:00-06:00',
        ends: '2018-08-13T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Billings MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:16AM MDT expiring August 13 at 12:00AM MDT by NWS Billings MT',
        description:
          '* IMPACTS: Low humidities, hot temperatures, wind shift with a cold\nfront, and dry thunderstorms with gusty and erratic outflow winds\nmay create erratic fire behavior and new fire starts.\n\n* AFFECTED AREA:\nIn Southeast MT Fire Zones...130...131...132.\nIn Southeast MT and Northwest SD Fire Zone....133.\n\n* COUNTIES AFFECTED:\nIn Northwest SD...Harding.\nIn South Central MT...Big Horn.\nIn Southeast MT...Carter...Custer...Fallon...Powder River\nRosebud...Treasure.\n\n* TEMPERATURES: 99 to 107.\n\n* HUMIDITY: 5 to 15 percent.\n\n* THUNDERSTORMS: Isolated thunderstorms are expected Sunday\nevening.\n\n* WINDS: South 10 to 20 mph with gusts to 25 mph on Saturday.\nLighter winds on Sunday, but with an increased risk of strong\nerratic wind gusts near thunderstorms by late in the day.',
        instruction:
          'A Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH REMAINS IN EFFECT FROM SATURDAY AFTERNOON THROUGH SUNDAY EVENING'
          ],
          VTEC: ['/O.CON.KBYZ.FW.A.0001.180811T1800Z-180813T0600Z/'],
          PIL: ['BYZRFWBYZ'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-13T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041304-2715312',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041304-2715312',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041304-2715312',
        areaDesc:
          'Stillwater County; Yellowstone County; Wheatland County/Sweet Grass County; Beartooth Ranger District Custer National Forest; Crow Indian Reservation/Big Horn Canyon Rec Area; Gallatin National Forest; Golden Valley County/Musselshell County',
        geocode: {
          UGC: [
            'MTZ125',
            'MTZ128',
            'MTZ124',
            'MTZ126',
            'MTZ129',
            'MTZ123',
            'MTZ127'
          ],
          SAME: [
            '030097',
            '030095',
            '030037',
            '030009',
            '030111',
            '030003',
            '030087',
            '030065',
            '030103',
            '030067',
            '030107',
            '030059',
            '056003',
            '056029',
            '056033',
            '030031',
            '016043',
            '030057',
            '030027'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ125',
          'https://api.weather.gov/zones/fire/MTZ128',
          'https://api.weather.gov/zones/fire/MTZ124',
          'https://api.weather.gov/zones/fire/MTZ126',
          'https://api.weather.gov/zones/fire/MTZ129',
          'https://api.weather.gov/zones/fire/MTZ123',
          'https://api.weather.gov/zones/fire/MTZ127'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039907-2714728',
            identifier: 'NWS-IDP-PROD-3039907-2714728',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:50:00-06:00'
          }
        ],
        sent: '2018-08-10T03:16:00-06:00',
        effective: '2018-08-10T03:16:00-06:00',
        onset: '2018-08-11T12:00:00-06:00',
        expires: '2018-08-10T15:30:00-06:00',
        ends: '2018-08-13T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Billings MT',
        headline:
          'Fire Weather Watch issued August 10 at 3:16AM MDT expiring August 13 at 12:00AM MDT by NWS Billings MT',
        description:
          '* IMPACTS: Low humidities, hot temperatures, wind shift with a cold\nfront, and dry thunderstorms with gusty and erratic outflow winds\nmay create erratic fire behavior and new fire starts.\n\n* AFFECTED AREA:\nIn South Central MT...Fire Weather Zones 123...124...125...126...\n127...128 and 129.\n\n* COUNTIES AFFECTED:\nIn Central MT...Golden Valley...Musselshell...Wheatland.\nIn South Central MT...Big Horn...Carbon...Park...Stillwater\nSweet Grass...Yellowstone.\nIn Southwest MT...Gallatin.\n\n* TEMPERATURES: 95 to 105.\n\n* HUMIDITY: 5 to 15 percent.\n\n* THUNDERSTORMS: Isolated dry thunderstorms possible Saturday\nafternoon and evening. Thunderstorm activity and the potential\nfor strong erratic winds will increase Sunday afternoon and\nevening.\n\n* WINDS: South 10 to 20 mph. Higher gusts near thunderstorms.',
        instruction:
          'A Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible Red\nFlag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH REMAINS IN EFFECT FROM SATURDAY AFTERNOON THROUGH SUNDAY EVENING'
          ],
          VTEC: ['/O.CON.KBYZ.FW.A.0001.180811T1800Z-180813T0600Z/'],
          PIL: ['BYZRFWBYZ'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-13T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041306-2715314',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041306-2715314',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041306-2715314',
        areaDesc:
          'Lower Hells Canyon/Salmon River Region; Orofino/Grangeville Region; Northern Clearwater Mountains',
        geocode: {
          UGC: ['IDZ008', 'IDZ007', 'IDZ005'],
          SAME: ['016049', '016035']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IDZ008',
          'https://api.weather.gov/zones/forecast/IDZ007',
          'https://api.weather.gov/zones/forecast/IDZ005'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039108-2714488',
            identifier: 'NWS-IDP-PROD-3039108-2714488',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T03:32:00-06:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039108-2714487',
            identifier: 'NWS-IDP-PROD-3039108-2714487',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T03:32:00-06:00'
          }
        ],
        sent: '2018-08-10T03:16:00-06:00',
        effective: '2018-08-10T03:16:00-06:00',
        onset: '2018-08-10T03:16:00-06:00',
        expires: '2018-08-10T21:00:00-06:00',
        ends: '2018-08-10T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Missoula MT',
        headline:
          'Excessive Heat Warning issued August 10 at 3:16AM MDT expiring August 10 at 9:00PM MDT by NWS Missoula MT',
        description:
          'The National Weather Service in Missoula has issued an Excessive\nHeat Warning...which is in effect until 8 PM PDT Friday.\n\n* Temperatures: Temperatures today will be as hot, if not hotter\ncompared to Thursday. 105 to 115 in valleys and upper 90s in the\nhigher elevations are expected in the warned areas. If smoke\nbecomes dense, valley high temperatures will be closer to 100.',
        instruction:
          'To reduce risk during outdoor work, the occupational safety\nand health administration recommends scheduling frequent rest\nbreaks in shaded or air conditioned environments. Anyone overcome\nby heat should be moved to a cool and shaded location.   Heat\nstroke is an emergency, call 9 1 1.\n\nYoung children and pets should never be left unattended in\nvehicles under any circumstances.  This is especially true during\nwarm or hot weather when car interiors can reach lethal\ntemperatures in a matter of minutes.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM PDT THIS EVENING'
          ],
          VTEC: ['/O.CON.KMSO.EH.W.0001.000000T0000Z-180811T0300Z/'],
          PIL: ['MSONPWMSO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041305-2715313',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041305-2715313',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041305-2715313',
        areaDesc:
          'Kootenai/Cabinet Region; Potomac/Seeley Lake Region; Missoula/Bitterroot Valleys; Flathead/Mission Valleys; Lower Clark Fork Region; West Glacier Region',
        geocode: {
          UGC: ['MTZ001', 'MTZ043', 'MTZ005', 'MTZ003', 'MTZ004', 'MTZ002'],
          SAME: [
            '030089',
            '030053',
            '030029',
            '030077',
            '030063',
            '030047',
            '030039',
            '030081',
            '030061'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MTZ001',
          'https://api.weather.gov/zones/forecast/MTZ043',
          'https://api.weather.gov/zones/forecast/MTZ005',
          'https://api.weather.gov/zones/forecast/MTZ003',
          'https://api.weather.gov/zones/forecast/MTZ004',
          'https://api.weather.gov/zones/forecast/MTZ002'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039107-2714486',
            identifier: 'NWS-IDP-PROD-3039107-2714486',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T03:32:00-06:00'
          }
        ],
        sent: '2018-08-10T03:16:00-06:00',
        effective: '2018-08-10T03:16:00-06:00',
        onset: '2018-08-10T03:16:00-06:00',
        expires: '2018-08-10T21:00:00-06:00',
        ends: '2018-08-10T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Missoula MT',
        headline:
          'Heat Advisory issued August 10 at 3:16AM MDT expiring August 10 at 9:00PM MDT by NWS Missoula MT',
        description:
          '* Temperatures: 100 to 106 in the lower valleys, 95 to 100 in\nthe mountain valleys, and 85 to 90 in higher elevations. If\nsmoke becomes dense, valley high temperatures will be closer\nto the upper 90s, but if smoke remains light, temperatures\nwill approach 106.',
        instruction:
          'Take extra precautions, if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water.\n\nYoung children and pets should never be left unattended in\nvehicles under any circumstances. This is especially true during\nwarm or hot weather when car interiors can reach lethal\ntemperatures in a matter of minutes.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT UNTIL 9 PM MDT THIS EVENING'
          ],
          VTEC: ['/O.CON.KMSO.HT.Y.0002.000000T0000Z-180811T0300Z/'],
          PIL: ['MSONPWMSO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041302-2715310',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041302-2715310',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041302-2715310',
        areaDesc:
          'Hamlin Beach to Sodus Bay NY; Niagara River to Hamlin Beach NY',
        geocode: {
          UGC: ['LOZ043', 'LOZ042'],
          SAME: ['097043', '097042']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/LOZ043',
          'https://api.weather.gov/zones/forecast/LOZ042'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3041019-2715237',
            identifier: 'NWS-IDP-PROD-3041019-2715237',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-10T01:57:00-04:00'
          }
        ],
        sent: '2018-08-10T05:12:00-04:00',
        effective: '2018-08-10T05:12:00-04:00',
        onset: '2018-08-10T05:12:00-04:00',
        expires: '2018-08-10T13:15:00-04:00',
        ends: '2018-08-10T15:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Buffalo NY',
        headline:
          'Small Craft Advisory issued August 10 at 5:12AM EDT expiring August 10 at 3:00PM EDT by NWS Buffalo NY',
        description:
          '* WINDS...Northeast 15 to 20 knots.\n\n* WAVES...3 to 5 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 18 to 33 knots\nand/or waves averaging 4 feet or more are expected to produce\nhazardous wave conditions to small craft. Inexperienced\nmariners...especially those operating smaller vessels...should\navoid navigating in these conditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY REMAINS IN EFFECT UNTIL 3 PM EDT THIS AFTERNOON'
          ],
          VTEC: ['/O.CON.KBUF.SC.Y.0068.000000T0000Z-180810T1900Z/'],
          PIL: ['BUFMWWBUF'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T15:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041301-2715309',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041301-2715309',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041301-2715309',
        areaDesc:
          'Yellowstone; Sheridan Foothills; Northern Rosebud; Northern Big Horn; Carter; Musselshell; Treasure; Southern Big Horn; Powder River; Southern Rosebud; Eastern Carbon; Fallon; Custer',
        geocode: {
          UGC: [
            'MTZ035',
            'WYZ099',
            'MTZ031',
            'MTZ057',
            'MTZ037',
            'MTZ029',
            'MTZ030',
            'MTZ038',
            'MTZ036',
            'MTZ058',
            'MTZ039',
            'MTZ033',
            'MTZ032'
          ],
          SAME: [
            '030111',
            '056033',
            '030087',
            '030003',
            '030011',
            '030065',
            '030103',
            '030075',
            '030009',
            '030025',
            '030017'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MTZ035',
          'https://api.weather.gov/zones/forecast/WYZ099',
          'https://api.weather.gov/zones/forecast/MTZ031',
          'https://api.weather.gov/zones/forecast/MTZ057',
          'https://api.weather.gov/zones/forecast/MTZ037',
          'https://api.weather.gov/zones/forecast/MTZ029',
          'https://api.weather.gov/zones/forecast/MTZ030',
          'https://api.weather.gov/zones/forecast/MTZ038',
          'https://api.weather.gov/zones/forecast/MTZ036',
          'https://api.weather.gov/zones/forecast/MTZ058',
          'https://api.weather.gov/zones/forecast/MTZ039',
          'https://api.weather.gov/zones/forecast/MTZ033',
          'https://api.weather.gov/zones/forecast/MTZ032'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039853-2714700',
            identifier: 'NWS-IDP-PROD-3039853-2714700',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:34:00-06:00'
          }
        ],
        sent: '2018-08-10T03:09:00-06:00',
        effective: '2018-08-10T03:09:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-11T03:15:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Billings MT',
        headline:
          'Excessive Heat Warning issued August 10 at 3:09AM MDT expiring August 12 at 12:00AM MDT by NWS Billings MT',
        description:
          '* WHAT...Hot temperatures will increase the risk of heat related\nillnesses. Many locations will see high temperatures of at least\n100 degrees.\n\n* WHERE...Southeast Montana and North Central Wyoming.\n\n* WHEN...Daytime and early evening hours Today and Saturday.\n\n* ADDITIONAL CONCERNS...Hot temperatures may continue into Sunday\nover southeast Montana, with temps near or in excess of 100\ndegrees possible.',
        instruction:
          'Excessive heat will result in an increased potential for heat\nrelated illnesses. Those working or participating in outdoor\nactivities during the afternoon and early evening hours or those\nwithout relief from air conditioning will be most at risk.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT FROM NOON TODAY TO MIDNIGHT MDT SATURDAY NIGHT'
          ],
          VTEC: ['/O.CON.KBYZ.EH.W.0001.180810T1800Z-180812T0600Z/'],
          PIL: ['BYZNPWBYZ'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041300-2715308',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041300-2715308',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041300-2715308',
        areaDesc:
          'Red Lodge Foothills; Golden Valley; Northern Sweet Grass; Paradise Valley; Beartooth Foothills; Livingston Area; Northern Stillwater; Northern Park; Judith Gap; Southern Wheatland',
        geocode: {
          UGC: [
            'MTZ056',
            'MTZ042',
            'MTZ041',
            'MTZ064',
            'MTZ066',
            'MTZ065',
            'MTZ034',
            'MTZ040',
            'MTZ063',
            'MTZ028'
          ],
          SAME: ['030009', '030037', '030097', '030067', '030095', '030107']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MTZ056',
          'https://api.weather.gov/zones/forecast/MTZ042',
          'https://api.weather.gov/zones/forecast/MTZ041',
          'https://api.weather.gov/zones/forecast/MTZ064',
          'https://api.weather.gov/zones/forecast/MTZ066',
          'https://api.weather.gov/zones/forecast/MTZ065',
          'https://api.weather.gov/zones/forecast/MTZ034',
          'https://api.weather.gov/zones/forecast/MTZ040',
          'https://api.weather.gov/zones/forecast/MTZ063',
          'https://api.weather.gov/zones/forecast/MTZ028'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039852-2714699',
            identifier: 'NWS-IDP-PROD-3039852-2714699',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:34:00-06:00'
          }
        ],
        sent: '2018-08-10T03:09:00-06:00',
        effective: '2018-08-10T03:09:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-11T03:15:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Billings MT',
        headline:
          'Heat Advisory issued August 10 at 3:09AM MDT expiring August 12 at 12:00AM MDT by NWS Billings MT',
        description:
          '* WHAT...Hot temperatures will increase the risk of heat related\nillnesses. Expect high temperatures near 100 degrees.\n\n* WHERE...South Central Montana.\n\n* WHEN...Daytime and early evening hours Today and Saturday.',
        instruction:
          'Excessive heat will result in an increase potential for heat\nrelated illnesses. Those working or participating in outdoor\nactivities during the afternoon and early evening hours or those\nwithout relief from air conditioning will be most at risk.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT FROM NOON TODAY TO MIDNIGHT MDT SATURDAY NIGHT'
          ],
          VTEC: ['/O.CON.KBYZ.HT.Y.0001.180810T1800Z-180812T0600Z/'],
          PIL: ['BYZNPWBYZ'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041296-2715305',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041296-2715305',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041296-2715305',
        areaDesc: 'Western Magic Valley; Southern Twin  Falls County',
        geocode: {
          UGC: ['IDZ016', 'IDZ030'],
          SAME: ['016083', '016053', '016047']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IDZ016',
          'https://api.weather.gov/zones/forecast/IDZ030'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040894-2715188',
            identifier: 'NWS-IDP-PROD-3040894-2715188',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:53:00-06:00'
          }
        ],
        sent: '2018-08-10T03:03:00-06:00',
        effective: '2018-08-10T03:03:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-11T00:00:00-06:00',
        ends: '2018-08-11T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Boise ID',
        headline:
          'Heat Advisory issued August 10 at 3:03AM MDT expiring August 11 at 12:00AM MDT by NWS Boise ID',
        description:
          'A strong upper level high, combined with less smoke than\nexpected, will result in very hot temperatures today. Some of\nthese will be record or near-record temperatures.\n* TEMPERATURE...High temperatures from 95 to 104.\n\n* IMPACTS...Increased risk of heat related illness and injury,\nespecially for sensitive groups and those spending time\noutdoors during the afternoon and early evening.',
        instruction:
          'A Heat Advisory means that a period of hot temperatures is\nexpected. The hot temperatures will create a situation in which\nheat illnesses are possible. Drink plenty of fluids, stay in an\nair-conditioned room, stay out of the sun, and check up on\nrelatives and neighbors.\n\nTake extra precautions, if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks\nin shaded or air-conditioned environments. Anyone overcome by\nheat should be moved to a cool and shaded location.   Heat stroke\nis an emergency, call 9 1 1.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT FROM NOON TODAY TO MIDNIGHT MDT TONIGHT'
          ],
          VTEC: ['/O.CON.KBOI.HT.Y.0003.180810T1800Z-180811T0600Z/'],
          PIL: ['BOINPWBOI'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041297-2715306',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041297-2715306',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041297-2715306',
        areaDesc:
          'Harney County; Baker County; Lower Treasure Valley; Upper Weiser River; Malheur County; Upper Treasure Valley; Oregon Lower Treasure Valley; West Central Mountains',
        geocode: {
          UGC: [
            'ORZ061',
            'ORZ062',
            'IDZ012',
            'IDZ033',
            'ORZ063',
            'IDZ014',
            'ORZ064',
            'IDZ011'
          ],
          SAME: [
            '041025',
            '041001',
            '016087',
            '016075',
            '016073',
            '016045',
            '016027',
            '016003',
            '041045',
            '016039',
            '016001',
            '016085'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ORZ061',
          'https://api.weather.gov/zones/forecast/ORZ062',
          'https://api.weather.gov/zones/forecast/IDZ012',
          'https://api.weather.gov/zones/forecast/IDZ033',
          'https://api.weather.gov/zones/forecast/ORZ063',
          'https://api.weather.gov/zones/forecast/IDZ014',
          'https://api.weather.gov/zones/forecast/ORZ064',
          'https://api.weather.gov/zones/forecast/IDZ011'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040893-2715187',
            identifier: 'NWS-IDP-PROD-3040893-2715187',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T21:53:00-06:00'
          }
        ],
        sent: '2018-08-10T03:03:00-06:00',
        effective: '2018-08-10T03:03:00-06:00',
        onset: '2018-08-10T03:03:00-06:00',
        expires: '2018-08-11T00:00:00-06:00',
        ends: '2018-08-11T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Boise ID',
        headline:
          'Excessive Heat Warning issued August 10 at 3:03AM MDT expiring August 11 at 12:00AM MDT by NWS Boise ID',
        description:
          'A strong upper level high, combined with less smoke than\nexpected, will result in very hot temperatures today. Some of\nthese will be record or near-record temperatures.\n* TEMPERATURE...Highs from 99 to 109.\n\n* IMPACTS...Increased risk of heat related illness and injury,\nespecially for sensitive groups and those spending time\noutdoors during the afternoon and early evening.',
        instruction:
          'Take extra precautions, if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks\nin shaded or air-conditioned environments. Anyone overcome by\nheat should be moved to a cool and shaded location.   Heat stroke\nis an emergency, call 9 1 1.\n\nAn Excessive Heat Warning means that a prolonged period of\ndangerously hot temperatures will occur. The hot temperatures\nwill create a DANGEROUS SITUATION in which heat illnesses are\nlikely. Drink plenty of fluids, stay in an air-conditioned room,\nstay out of the sun, and check up on relatives and neighbors.\n\nYoung children, the elderly, and pets should never be left\nunattended in vehicles under any circumstances.  This is\nespecially true during warm or hot weather when car interiors can\nreach lethal temperatures in a matter of minutes.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT UNTIL MIDNIGHT MDT /11 PM PDT/ TONIGHT'
          ],
          VTEC: ['/O.CON.KBOI.EH.W.0002.000000T0000Z-180811T0600Z/'],
          PIL: ['BOINPWBOI'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041258',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041258',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041258',
        areaDesc:
          'Stephenson; Carroll; Putnam; Jo Daviess; Whiteside; Henry; Bureau',
        geocode: {
          UGC: [
            'ILZ002',
            'ILZ007',
            'ILZ018',
            'ILZ001',
            'ILZ009',
            'ILZ016',
            'ILZ017'
          ],
          SAME: [
            '017177',
            '017015',
            '017155',
            '017085',
            '017195',
            '017073',
            '017011'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ILZ002',
          'https://api.weather.gov/zones/forecast/ILZ007',
          'https://api.weather.gov/zones/forecast/ILZ018',
          'https://api.weather.gov/zones/forecast/ILZ001',
          'https://api.weather.gov/zones/forecast/ILZ009',
          'https://api.weather.gov/zones/forecast/ILZ016',
          'https://api.weather.gov/zones/forecast/ILZ017'
        ],
        references: [],
        sent: '2018-08-10T03:49:00-05:00',
        effective: '2018-08-10T03:49:00-05:00',
        onset: '2018-08-10T03:49:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Quad Cities IA IL',
        headline:
          'Special Weather Statement issued August 10 at 3:49AM CDT by NWS Quad Cities IA IL',
        description:
          'Moisture from rainfall last evening, combined with clear skies\nand light winds, will cause areas of fog to develop early this\nmorning. Some of the fog may become dense with visibilities less\nthan 1/4 mile. The fog should dissipate by 9 am.\n\nMotorists should drive with extra caution and allow additional\ntravel time. Use low beams, reduce speed, and allow for plenty of\nroom between you and other cars. Be alert to rapid fluctuations in\nvisibility.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['.Locally Dense Fog Early This Morning'],
          'EAS-ORG': ['WXR'],
          PIL: ['DVNSPSDVN'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041256-2715298',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041256-2715298',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041256-2715298',
        areaDesc: 'Ventura County Coast',
        geocode: {
          UGC: ['CAZ040'],
          SAME: ['006111']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/CAZ040'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039916-2714733',
            identifier: 'NWS-IDP-PROD-3039916-2714733',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T13:54:00-07:00'
          }
        ],
        sent: '2018-08-10T01:45:00-07:00',
        effective: '2018-08-10T01:45:00-07:00',
        onset: '2018-08-10T01:45:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: '2018-08-12T00:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'High Surf Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'High Surf Advisory issued August 10 at 1:45AM PDT expiring August 12 at 12:00AM PDT by NWS Los Angeles/Oxnard CA',
        description:
          '* SURF...Surf will peak at 4 to 7 feet today through Saturday.\nSurf will slowly subside late Saturday and Saturday night. Surf\nwill be highest on exposed south and southeast facing beaches.\nStrong and frequent rip currents are expected with possible\nsneaker waves.\n\n* COASTAL FLOODING AND TIDES...Minor coastal flooding will be\npossible during times of highest tide on low-lying south and\nsoutheast facing beach walkways and parking lots. The high tides\nat Ventura Harbor are expected this evening at 917 pm PDT with\na height of 7.2 feet, and Saturday evening at 1005 pm PDT with a\nheight of 7.0 feet.\n\n* IMPACTS...There is an increased risk for ocean drowning. Rip\ncurrents can pull swimmers and surfers out to sea. Large\nbreaking waves can cause injury...wash people off beaches and\nrocks...and capsize small boats near shore.',
        instruction:
          "A High Surf Advisory means that high surf will affect beaches in\nthe advisory area...producing localized beach erosion and\ndangerous swimming conditions. Swim near a lifeguard. If caught\nin a rip current, relax and float. Don't swim against the\ncurrent. If able, swim in a direction following the shoreline. If\nunable to escape, face the shore and call or wave for help.",
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL MIDNIGHT PDT SATURDAY NIGHT'
          ],
          VTEC: ['/O.CON.KLOX.SU.Y.0015.000000T0000Z-180812T0700Z/'],
          PIL: ['LOXCFWLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041255-2715297',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041255-2715297',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041255-2715297',
        areaDesc:
          'Santa Barbara County South Coast; San Luis Obispo County Central Coast; Santa Barbara County Central Coast',
        geocode: {
          UGC: ['CAZ039', 'CAZ034', 'CAZ035'],
          SAME: ['006083', '006079']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/CAZ039',
          'https://api.weather.gov/zones/forecast/CAZ034',
          'https://api.weather.gov/zones/forecast/CAZ035'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039918-2714735',
            identifier: 'NWS-IDP-PROD-3039918-2714735',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T13:54:00-07:00'
          }
        ],
        sent: '2018-08-10T01:45:00-07:00',
        effective: '2018-08-10T01:45:00-07:00',
        onset: '2018-08-10T01:45:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: '2018-08-12T00:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'Beach Hazards Statement issued August 10 at 1:45AM PDT expiring August 12 at 12:00AM PDT by NWS Los Angeles/Oxnard CA',
        description:
          '* HAZARDS...Surf will peak today through Saturday at 4 to 7 feet.\nSurf will be highest on exposed south facing beaches. Surf will\nsubside slowly late Saturday and Saturday night. The maximum\nhigh tides will be around 7 feet between 7 PM and 9 PM PDT each\nevening.\n\n* IMPACTS...Minor coastal flooding is possible over low-lying\ncoastal areas such as beach parking lots and harbor walkways.\nNo significant damage is expected. Dangerous rip currents and\npowerful breaking waves are likely.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT THROUGH SATURDAY EVENING'
          ],
          VTEC: ['/O.CON.KLOX.BH.S.0007.000000T0000Z-180812T0700Z/'],
          PIL: ['LOXCFWLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041257-2715299',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041257-2715299',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041257-2715299',
        areaDesc:
          'Los Angeles County Coast including Downtown Los Angeles; Catalina and Santa Barbara Islands',
        geocode: {
          UGC: ['CAZ041', 'CAZ087'],
          SAME: ['006037']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/CAZ041',
          'https://api.weather.gov/zones/forecast/CAZ087'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039917-2714734',
            identifier: 'NWS-IDP-PROD-3039917-2714734',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T13:54:00-07:00'
          }
        ],
        sent: '2018-08-10T01:45:00-07:00',
        effective: '2018-08-10T01:45:00-07:00',
        onset: '2018-08-10T01:45:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: '2018-08-12T00:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'High Surf Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'High Surf Advisory issued August 10 at 1:45AM PDT expiring August 12 at 12:00AM PDT by NWS Los Angeles/Oxnard CA',
        description:
          '* SURF...Surf will peak at 4 to 7 feet today through Saturday.\nSurf will slowly subside late Saturday and Saturday night. Surf\nwill be highest on exposed south and southeast facing beaches.\nStrong and frequent rip currents are expected with possible\nsneaker waves.\n\n* COASTAL FLOODING AND TIDES...Minor coastal flooding will be\npossible during times of highest tide on low-lying south and\nsoutheast facing beach walkways and parking lots. High tides\nbetween 7.0 to 7.5 feet are expected at Los Angeles Harbor this\nevening at 807 pm PDT, and Saturday evening at 854 pm PDT.\n\n* IMPACTS...Minor coastal flooding is possible over low-lying\ncoastal areas such as beach parking lots and harbor walkways.\nNo significant damage is expected. Dangerous rip currents and\npowerful breaking waves are likely.',
        instruction:
          "A High Surf Advisory means that high surf will affect beaches in\nthe advisory area...producing localized beach erosion and\ndangerous swimming conditions. Swim near a lifeguard. If caught\nin a rip current, relax and float. Don't swim against the\ncurrent. If able, swim in a direction following the shoreline. If\nunable to escape, face the shore and call or wave for help.",
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL MIDNIGHT PDT SATURDAY NIGHT'
          ],
          VTEC: ['/O.CON.KLOX.SU.Y.0015.000000T0000Z-180812T0700Z/'],
          PIL: ['LOXCFWLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041222-2715290',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041222-2715290',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041222-2715290',
        areaDesc: 'Southern Queens; Southern Nassau',
        geocode: {
          UGC: ['NYZ178', 'NYZ179'],
          SAME: ['036081', '036059']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/NYZ178',
          'https://api.weather.gov/zones/forecast/NYZ179'
        ],
        references: [],
        sent: '2018-08-10T04:16:00-04:00',
        effective: '2018-08-10T04:16:00-04:00',
        onset: '2018-08-10T19:00:00-04:00',
        expires: '2018-08-10T23:00:00-04:00',
        ends: '2018-08-10T23:00:00-04:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Coastal Flood Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Upton NY',
        headline:
          'Coastal Flood Statement issued August 10 at 4:16AM EDT expiring August 10 at 11:00PM EDT by NWS Upton NY',
        description:
          '* LOCATIONS...Vulnerable locales along the south shore bays of\nNassau and Queens counties.\n\n* TIDAL DEPARTURE...Generally 1/2 to 1 ft above astronomical\ntides, but locally 1 1/2 ft above.\n\n* COASTAL FLOOD IMPACTS...Brief minor flooding of the most\nvulnerable locations near the waterfront and shoreline.\n\n* TIMING...During times of high tide between 7pm and 11 pm.',
        instruction: '',
        response: 'Monitor',
        parameters: {
          NWSheadline: ['Localized Minor Flooding Tonight'],
          VTEC: ['/O.NEW.KOKX.CF.S.0028.180810T2300Z-180811T0300Z/'],
          PIL: ['OKXCFWOKX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T23:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041221-2715289',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041221-2715289',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041221-2715289',
        areaDesc: 'Southern Westchester; Southern Fairfield',
        geocode: {
          UGC: ['NYZ071', 'CTZ009'],
          SAME: ['036119', '009001']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/NYZ071',
          'https://api.weather.gov/zones/forecast/CTZ009'
        ],
        references: [],
        sent: '2018-08-10T04:16:00-04:00',
        effective: '2018-08-10T04:16:00-04:00',
        onset: '2018-08-10T22:00:00-04:00',
        expires: '2018-08-11T00:00:00-04:00',
        ends: '2018-08-11T00:00:00-04:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Coastal Flood Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Upton NY',
        headline:
          'Coastal Flood Statement issued August 10 at 4:16AM EDT expiring August 11 at 12:00AM EDT by NWS Upton NY',
        description:
          '* LOCATIONS...Vulnerable areas along Long Island Sound.\n\n* TIDAL DEPARTURE...Around 1/2 ft above astronomical tides.\n\n* COASTAL FLOOD IMPACTS...Brief minor flooding of the most\nvulnerable locations near the waterfront and shoreline.\n\n* TIMING...During times of high tide between 10pm and midnight.',
        instruction: '',
        response: 'Monitor',
        parameters: {
          NWSheadline: ['Localized Minor Flooding Tonight'],
          VTEC: ['/O.NEW.KOKX.CF.S.0028.180811T0200Z-180811T0400Z/'],
          PIL: ['OKXCFWOKX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T00:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041191',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041191',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041191',
        areaDesc:
          'Coastal Kleberg; Duval; Inland Nueces; Jim Wells; Inland Kleberg; Coastal Nueces; Webb',
        geocode: {
          UGC: [
            'TXZ342',
            'TXZ240',
            'TXZ243',
            'TXZ241',
            'TXZ242',
            'TXZ343',
            'TXZ239'
          ],
          SAME: ['048273', '048131', '048355', '048249', '048479']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/TXZ342',
          'https://api.weather.gov/zones/forecast/TXZ240',
          'https://api.weather.gov/zones/forecast/TXZ243',
          'https://api.weather.gov/zones/forecast/TXZ241',
          'https://api.weather.gov/zones/forecast/TXZ242',
          'https://api.weather.gov/zones/forecast/TXZ343',
          'https://api.weather.gov/zones/forecast/TXZ239'
        ],
        references: [],
        sent: '2018-08-10T02:55:00-05:00',
        effective: '2018-08-10T02:55:00-05:00',
        onset: '2018-08-10T02:55:00-05:00',
        expires: '2018-08-10T18:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Corpus Christi TX',
        headline:
          'Special Weather Statement issued August 10 at 2:55AM CDT by NWS Corpus Christi TX',
        description:
          'The combination of warm temperatures and high dewpoints will\nproduce heat indices between 105 and 109 degrees today.  Residents\nwith outdoor activities planned are urged to drink plenty of water,\nwear light weight and light colored clothing and take frequent breaks\nfrom the heat.  Young children and pets should never be left\nunattended in vehicles under any circumstances. This is especially\ntrue during warm or hot weather when car interiors can reach lethal\ntemperatures in a matter of minutes.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT INDICIES BETWEEN 105 AND 109 DEGREES EXPECTED THIS AFTERNOON ACROSS THE SOUTHERN COASTAL BEND TO THE RIO GRANDE PLAINS'
          ],
          'EAS-ORG': ['WXR'],
          PIL: ['CRPSPSCRP'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041184-2715281',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041184-2715281',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041184-2715281',
        areaDesc: 'Cumberland; Monroe; Clinton; Russell',
        geocode: {
          UGC: ['KYZ081', 'KYZ075', 'KYZ082', 'KYZ078'],
          SAME: ['021057', '021171', '021053', '021207']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/KYZ081',
          'https://api.weather.gov/zones/forecast/KYZ075',
          'https://api.weather.gov/zones/forecast/KYZ082',
          'https://api.weather.gov/zones/forecast/KYZ078'
        ],
        references: [],
        sent: '2018-08-10T03:51:00-04:00',
        effective: '2018-08-10T03:51:00-04:00',
        onset: '2018-08-10T03:51:00-04:00',
        expires: '2018-08-10T16:00:00-04:00',
        ends: '2018-08-10T16:00:00-04:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Flash Flood Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Louisville KY',
        headline:
          'Flash Flood Watch issued August 10 at 3:51AM EDT expiring August 10 at 4:00PM EDT by NWS Louisville KY',
        description:
          'A moist and slow moving storm system will bring numerous showers\nand storms to the region through at least mid afternoon. Given\nheavy rainfall rates, slow storm movement, and recent heavy\nrainfall over the past few days an isolated Flash Flooding threat\nwill exist. Drier air moves into the area by late afternoon,\nshutting the heavy rainfall threat down.\nThe National Weather Service in Louisville has issued a\n\n* Flash Flood Watch for a portion of south central Kentucky,\nincluding the following areas, Clinton, Cumberland, Monroe,\nand Russell.\n\n* Through this afternoon\n\n* Heavy rainfall rates, slow storm movement, and recent heavy\nrainfall will contribute to a Flash Flood threat\n\n* Flash flooding of small streams and creeks will be possible,\nespecially in low lying and poor drainage areas.',
        instruction:
          'A Flash Flood Watch means that conditions may develop that lead\nto flash flooding. Flash flooding is a very dangerous situation.\n\nYou should monitor later forecasts and be prepared to take action\nshould Flash Flood Warnings be issued.',
        response: 'Monitor',
        parameters: {
          NWSheadline: ['FLASH FLOOD WATCH IN EFFECT THROUGH THIS AFTERNOON'],
          VTEC: ['/O.NEW.KLMK.FF.A.0007.180810T0751Z-180810T2000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['LMKFFALMK'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T16:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041167-2715276',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041167-2715276',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041167-2715276',
        areaDesc: 'Wayne; Knox; Bell; Whitley; Pulaski; Laurel; McCreary',
        geocode: {
          UGC: [
            'KYZ083',
            'KYZ086',
            'KYZ087',
            'KYZ085',
            'KYZ079',
            'KYZ080',
            'KYZ084'
          ],
          SAME: [
            '021231',
            '021121',
            '021013',
            '021235',
            '021199',
            '021125',
            '021147'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/KYZ083',
          'https://api.weather.gov/zones/forecast/KYZ086',
          'https://api.weather.gov/zones/forecast/KYZ087',
          'https://api.weather.gov/zones/forecast/KYZ085',
          'https://api.weather.gov/zones/forecast/KYZ079',
          'https://api.weather.gov/zones/forecast/KYZ080',
          'https://api.weather.gov/zones/forecast/KYZ084'
        ],
        references: [],
        sent: '2018-08-10T03:44:00-04:00',
        effective: '2018-08-10T03:44:00-04:00',
        onset: '2018-08-10T03:44:00-04:00',
        expires: '2018-08-10T12:00:00-04:00',
        ends: '2018-08-10T18:00:00-04:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Flash Flood Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Jackson KY',
        headline:
          'Flash Flood Watch issued August 10 at 3:44AM EDT expiring August 10 at 6:00PM EDT by NWS Jackson KY',
        description:
          'An approaching upper level disturbance will bring periods of\nshowers and thunderstorms to portions of the area today. Given\nthe high moisture content of the air mass in place, as well as\nthe slow movement of the showers and thunderstorms, isolated flash\nflooding will be possible.\nThe National Weather Service in Jackson has issued a\n\n* Flash Flood Watch for portions of south central Kentucky and\nsoutheast Kentucky, including the following areas, in south\ncentral Kentucky, Laurel, McCreary, Pulaski, Wayne, and\nWhitley. In southeast Kentucky, Bell and Knox.\n\n* Through this afternoon.\n\n* Slow moving showers and thunderstorms will bring the potential\nfor isolated flash flooding to the area through this afternoon.\n\n* Flash flooding of small streams and creeks will be possible,\nespecially in low lying and poor drainage areas.',
        instruction:
          'A Flash Flood Watch means that conditions may develop that lead\nto flash flooding. Flash flooding is a VERY DANGEROUS SITUATION.\n\nYou should monitor later forecasts and be prepared to take action\nshould Flash Flood Warnings be issued.',
        response: 'Monitor',
        parameters: {
          NWSheadline: ['FLASH FLOOD WATCH IN EFFECT THROUGH THIS AFTERNOON'],
          VTEC: ['/O.NEW.KJKL.FF.A.0006.180810T0744Z-180810T2200Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['JKLFFAJKL'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T18:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041091-2715263',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3041091-2715263',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3041091-2715263',
        areaDesc: 'Coastal Washington; Coastal Hancock',
        geocode: {
          UGC: ['MEZ030', 'MEZ029'],
          SAME: ['023029', '023009']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/MEZ030',
          'https://api.weather.gov/zones/forecast/MEZ029'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040715-2715112',
            identifier: 'NWS-IDP-PROD-3040715-2715112',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T22:07:00-04:00'
          }
        ],
        sent: '2018-08-10T03:05:00-04:00',
        effective: '2018-08-10T03:05:00-04:00',
        onset: '2018-08-10T08:00:00-04:00',
        expires: '2018-08-10T20:00:00-04:00',
        ends: '2018-08-10T20:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Caribou ME',
        headline:
          'Beach Hazards Statement issued August 10 at 3:05AM EDT expiring August 10 at 8:00PM EDT by NWS Caribou ME',
        description:
          '* Location...Acadia National Park...Schoodic Point...Lamoine\nState Park...Castine...Roque Bluffs State Park...Quoddy Head\nState Park\n\n* Beach Hazard...The warm air temperatures in the upper 70s may\ncause people to underestimate the dangers of the cold water\ntemperatures which are currently only in the mid to upper 50s.\n\n* Timing...Friday\n\n* Impacts...Anyone on boats or paddlecraft should use caution\nand be prepared for immersion. Dress for water temperatures\nand know how to perform rescues.',
        instruction:
          'A Beach Hazards Statement is issued on days when a significant\nnumber of boats and paddlecraft are expected to be out on the\nwater and when warm air temperatures may cause people to\nunderestimate the danger of the cold water. Paddle smart from the\nstart. Always wear your lifejacket. Be aware of wind conditions,\ntides and localized currents.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT FROM 8 AM EDT THIS MORNING THROUGH THIS EVENING'
          ],
          VTEC: ['/O.CON.KCAR.BH.S.0028.180810T1200Z-180811T0000Z/'],
          PIL: ['CARCFWCAR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040999',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040999',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040999',
        areaDesc: 'Jackson; Marshall; DeKalb',
        geocode: {
          UGC: ['ALZ009', 'ALZ008', 'ALZ010'],
          SAME: ['001071', '001095', '001049']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ALZ009',
          'https://api.weather.gov/zones/forecast/ALZ008',
          'https://api.weather.gov/zones/forecast/ALZ010'
        ],
        references: [],
        sent: '2018-08-10T00:51:00-05:00',
        effective: '2018-08-10T00:51:00-05:00',
        onset: '2018-08-10T00:51:00-05:00',
        expires: '2018-08-10T09:00:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Huntsville AL',
        headline:
          'Special Weather Statement issued August 10 at 12:51AM CDT by NWS Huntsville AL',
        description:
          'Patchy Dense Fog has developed across portions of northeast Alabama,\nwith visibilities dropping to one quarter of a mile or less in\nisolated areas.\n\nThe threat for dense fog early this morning will primarily be\nconfined to the larger river valleys of northeast Alabama, such as\nthe Dekalb, Paint Rock, and Tennessee, with rapid fluctuations in\nvisibility expected along several major thoroughfares, such as\nInterstate 59 and US Highway 72. However, a developing deck of low\nstratus clouds may result in visibility reductions along higher ridge\ntops as well.\n\nMotorists are urged to drive with extreme caution, as visibilities\nwill vary significantly given the patchy nature of the dense fog. Use\nlow beams, reduce driving speed, and allow for plenty of room\nbetween you and other cars.\n\nThe fog should begin to burn off by 9 AM CDT.\n\nStay tuned to NOAA Weather Radio, or a favorite local media outlet,\nfor further statements or updates from the National Weather Service\nin Huntsville.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'Significant Weather Advisory for Patchy Dense Fog across northeast Alabama'
          ],
          'EAS-ORG': ['WXR'],
          PIL: ['HUNSPSHUN'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040962-2715229',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040962-2715229',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040962-2715229',
        areaDesc:
          'Lower Columbia Basin of Oregon; Lower Columbia Basin of Washington',
        geocode: {
          UGC: ['ORZ641', 'WAZ641'],
          SAME: [
            '041021',
            '041055',
            '041065',
            '053039',
            '041069',
            '041049',
            '041059',
            '053071',
            '053005',
            '053021',
            '053075',
            '053001',
            '053023',
            '053013',
            '053003',
            '053077'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/ORZ641',
          'https://api.weather.gov/zones/fire/WAZ641'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039995-2714779',
            identifier: 'NWS-IDP-PROD-3039995-2714779',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:15:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039995-2714778',
            identifier: 'NWS-IDP-PROD-3039995-2714778',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:15:00-07:00'
          }
        ],
        sent: '2018-08-09T22:27:00-07:00',
        effective: '2018-08-09T22:27:00-07:00',
        onset: '2018-08-10T14:00:00-07:00',
        expires: '2018-08-10T10:30:00-07:00',
        ends: '2018-08-10T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pendleton OR',
        headline:
          'Red Flag Warning issued August 9 at 10:27PM PDT expiring August 10 at 11:00PM PDT by NWS Pendleton OR',
        description:
          'An upper low off the Pacific Northwest coast will approach the\nregion Friday afternoon/evening bringing breezy to locally windy\nconditions to the Columbia Basin.\n* TIMING...Friday afternoon and evening.\n\n* WIND...15 to 22 mph with gusts up to 30 mph.\n\n* HUMIDITY...13 to 21 percent.\n\n* IMPACTS...Any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now....or will shortly. A combination of\nstrong winds...low relative humidity...and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT FROM 2 PM TO 11 PM PDT FRIDAY FOR GUSTY WINDS AND LOW HUMIDITY FOR FIRE WEATHER ZONES 641'
          ],
          VTEC: ['/O.CON.KPDT.FW.W.0013.180810T2100Z-180811T0600Z/'],
          PIL: ['PDTRFWPDT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040961-2715227',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040961-2715227',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040961-2715227',
        areaDesc: 'Eastern Washington Southern Columbia Basin',
        geocode: {
          UGC: ['WAZ675'],
          SAME: [
            '053021',
            '053037',
            '053025',
            '053001',
            '053039',
            '053077',
            '053005'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/WAZ675'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039996-2714782',
            identifier: 'NWS-IDP-PROD-3039996-2714782',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:15:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039996-2714780',
            identifier: 'NWS-IDP-PROD-3039996-2714780',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:15:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039996-2714781',
            identifier: 'NWS-IDP-PROD-3039996-2714781',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:15:00-07:00'
          }
        ],
        sent: '2018-08-09T22:27:00-07:00',
        effective: '2018-08-09T22:27:00-07:00',
        onset: '2018-08-10T14:00:00-07:00',
        expires: '2018-08-10T10:30:00-07:00',
        ends: '2018-08-10T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pendleton OR',
        headline:
          'Red Flag Warning issued August 9 at 10:27PM PDT expiring August 10 at 11:00PM PDT by NWS Pendleton OR',
        description:
          'An upper low off the Pacific Northwest coast will approach the\nregion Friday afternoon/evening bringing breezy to locally windy\nconditions to the Columbia Basin.\n* TIMING...Friday afternoon and evening.\n\n* WIND...10 to 20 mph with gusts up to 30 mph.\n\n* HUMIDITY...14 to 19 percent.\n\n* IMPACTS...Any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now....or will shortly. A combination of\nstrong winds...low relative humidity...and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM 2 PM TO 11 PM PDT FRIDAY FOR GUSTY WINDS AND LOW HUMIDITY FOR FIRE WEATHER ZONE 675'
          ],
          VTEC: ['/O.CON.KPDT.FW.W.0013.180810T2100Z-180811T0600Z/'],
          PIL: ['PDTRFWPDT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040955',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040955',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040955',
        areaDesc:
          'Upper Wind River Basin; Southwest Big Horn Basin; Wind River Basin; Owl Creek and Bridger Mountains; North Big Horn Basin; Northeast Johnson County; Flaming Gorge; Natrona County Lower Elevations; Southeast Johnson County; Cody Foothills; South Lincoln County; Rock Springs and Green River; Southeast Big Horn Basin; Green Mountains and Rattlesnake Range; Yellowstone National Park; Star Valley; Jackson Hole; Upper Green River Basin Foothills; Salt River and Wyoming Ranges; Lander Foothills; Upper Green River Basin; East Sweetwater County',
        geocode: {
          UGC: [
            'WYZ016',
            'WYZ005',
            'WYZ017',
            'WYZ007',
            'WYZ004',
            'WYZ010',
            'WYZ029',
            'WYZ020',
            'WYZ011',
            'WYZ003',
            'WYZ027',
            'WYZ028',
            'WYZ006',
            'WYZ019',
            'WYZ001',
            'WYZ023',
            'WYZ013',
            'WYZ025',
            'WYZ024',
            'WYZ018',
            'WYZ026',
            'WYZ030'
          ],
          SAME: [
            '056013',
            '056017',
            '056025',
            '056029',
            '056003',
            '056019',
            '056037',
            '056023',
            '056043',
            '056039',
            '030067',
            '030031',
            '016043',
            '056035'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/WYZ016',
          'https://api.weather.gov/zones/forecast/WYZ005',
          'https://api.weather.gov/zones/forecast/WYZ017',
          'https://api.weather.gov/zones/forecast/WYZ007',
          'https://api.weather.gov/zones/forecast/WYZ004',
          'https://api.weather.gov/zones/forecast/WYZ010',
          'https://api.weather.gov/zones/forecast/WYZ029',
          'https://api.weather.gov/zones/forecast/WYZ020',
          'https://api.weather.gov/zones/forecast/WYZ011',
          'https://api.weather.gov/zones/forecast/WYZ003',
          'https://api.weather.gov/zones/forecast/WYZ027',
          'https://api.weather.gov/zones/forecast/WYZ028',
          'https://api.weather.gov/zones/forecast/WYZ006',
          'https://api.weather.gov/zones/forecast/WYZ019',
          'https://api.weather.gov/zones/forecast/WYZ001',
          'https://api.weather.gov/zones/forecast/WYZ023',
          'https://api.weather.gov/zones/forecast/WYZ013',
          'https://api.weather.gov/zones/forecast/WYZ025',
          'https://api.weather.gov/zones/forecast/WYZ024',
          'https://api.weather.gov/zones/forecast/WYZ018',
          'https://api.weather.gov/zones/forecast/WYZ026',
          'https://api.weather.gov/zones/forecast/WYZ030'
        ],
        references: [],
        sent: '2018-08-09T23:14:00-06:00',
        effective: '2018-08-09T23:14:00-06:00',
        onset: '2018-08-09T23:14:00-06:00',
        expires: '2018-08-10T16:00:00-06:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Riverton WY',
        headline:
          'Special Weather Statement issued August 9 at 11:14PM MDT by NWS Riverton WY',
        description:
          'Hot and mainly dry conditions will be in place across western and\ncentral Wyoming through this weekend. Winds will be light, but\nmuch of the vegetation below 8500 ft is very dry. Temperatures\nwill reach the mid to upper 90s over the lower elevations, with\ntemperatures over 100 possible in the Bighorn Basin Saturday.\nRelative humidity will drop below 15 percent in the afternoons.\n\nCheck for local burning restrictions in your area.  Outdoor\nburning is highly discouraged! Activities that produce sparks,\nsuch as grinding and welding are not recommended. Avoid parking\nin high grass and do not throw cigarette butts out. Drown your\ncampfires!',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: ['Elevated to Critical Fire Danger this weekend'],
          'EAS-ORG': ['WXR'],
          PIL: ['RIWSPSRIW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040934-2715205',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040934-2715205',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040934-2715205',
        areaDesc:
          'Coastal Manatee; Coastal Charlotte; Coastal Sarasota; Coastal Lee',
        geocode: {
          UGC: ['FLZ155', 'FLZ162', 'FLZ160', 'FLZ165'],
          SAME: ['012081', '012015', '012115', '012071']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/FLZ155',
          'https://api.weather.gov/zones/forecast/FLZ162',
          'https://api.weather.gov/zones/forecast/FLZ160',
          'https://api.weather.gov/zones/forecast/FLZ165'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040500-2715030',
            identifier: 'NWS-IDP-PROD-3040500-2715030',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T20:31:00-04:00'
          }
        ],
        sent: '2018-08-10T00:35:00-04:00',
        effective: '2018-08-10T00:35:00-04:00',
        onset: '2018-08-10T00:35:00-04:00',
        expires: '2018-08-10T22:00:00-04:00',
        ends: '2018-08-13T22:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Tampa Bay Ruskin FL',
        headline:
          'Beach Hazards Statement issued August 10 at 12:35AM EDT expiring August 13 at 10:00PM EDT by NWS Tampa Bay Ruskin FL',
        description:
          '* RED TIDE HAZARDS...Possible respiratory irritation in some\ncoastal areas of Manatee, Sarasota, Charlotte, and Lee\ncounties.\n\nFor red tide forecast information visit\nhttps://tidesandcurrents.noaa.gov/hab/gomx.html\n\n* FLORIDA RED TIDE RESPIRATORY IRRITATION IMPACTS...Symptoms may\ninclude coughing, sneezing, and tearing eyes.\n\n* FLORIDA RED TIDE RESPIRATORY IRRITATION TIMING/LOCATION...\nNOAA FORECAST: Coastal southern Manatee County: Gulf coast and\nbay regions...possible Friday and Saturday. Coastal\nnorthern/southern Sarasota County: Gulf coast and bay regions\npossible Friday and Saturday. Coastal northern/southern\nCharlotte County: Gulf coast and bay regions possible Friday\nand Saturday. Coastal northern/central/southern Lee County:\nGulf coast and bay regions possible Friday and Saturday.',
        instruction:
          'Florida red tide observations...You can find unaffected beaches\nby checking reports of recent local observations and data: Mote\nMarine Laboratory daily beach conditions at\nhttps://visitbeaches.org and the Florida Fish and Wildlife\nConservation Commission (FWC) red tide status at\nmyfwc.com/redtidestatus.\n\nFlorida red tide health information...Consult the Florida\nDepartment of Health at: www.floridahealth.gov/environmental-\nhealth/aquatic-toxins/red-tide.html or call the Poison Control\nCenter at: 1 800 222 1222.\n\nInclusion of external links does not constitute endorsement by\nthe Department of Commerce (DOC)/(NOAA) of these external web\nsites or the information, products, or services contained\ntherein.\n\nFlorida red tide information sources...red tide forecasts are\nprovided by the National Ocean Service with data provided by the\nFWC and Mote Marine Laboratory.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT THROUGH MONDAY EVENING'
          ],
          VTEC: ['/O.CON.KTBW.BH.S.0008.000000T0000Z-180814T0200Z/'],
          PIL: ['TBWCFWTBW'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-13T22:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040830-2715160',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040830-2715160',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040830-2715160',
        areaDesc:
          'Lower Columbia Basin of Oregon; Foothills of the Southern Blue Mountains of Oregon; Simcoe Highlands; John Day Basin; Kittitas Valley; Wallowa County; Foothills of the Blue Mountains of Washington; Foothills of the Northern Blue Mountains of Oregon; Yakima Valley; Lower Columbia Basin of Washington; Grande Ronde Valley',
        geocode: {
          UGC: [
            'ORZ044',
            'ORZ508',
            'WAZ521',
            'ORZ505',
            'WAZ026',
            'ORZ050',
            'WAZ029',
            'ORZ507',
            'WAZ027',
            'WAZ028',
            'ORZ049'
          ],
          SAME: [
            '041059',
            '041049',
            '041069',
            '041021',
            '053077',
            '053039',
            '041065',
            '041031',
            '041023',
            '053037',
            '041063',
            '041061',
            '053071',
            '053013',
            '053021',
            '053005'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/ORZ044',
          'https://api.weather.gov/zones/forecast/ORZ508',
          'https://api.weather.gov/zones/forecast/WAZ521',
          'https://api.weather.gov/zones/forecast/ORZ505',
          'https://api.weather.gov/zones/forecast/WAZ026',
          'https://api.weather.gov/zones/forecast/ORZ050',
          'https://api.weather.gov/zones/forecast/WAZ029',
          'https://api.weather.gov/zones/forecast/ORZ507',
          'https://api.weather.gov/zones/forecast/WAZ027',
          'https://api.weather.gov/zones/forecast/WAZ028',
          'https://api.weather.gov/zones/forecast/ORZ049'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039982-2714771',
            identifier: 'NWS-IDP-PROD-3039982-2714771',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:10:00-07:00'
          }
        ],
        sent: '2018-08-09T20:06:00-07:00',
        effective: '2018-08-09T20:06:00-07:00',
        onset: '2018-08-09T20:06:00-07:00',
        expires: '2018-08-10T09:00:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pendleton OR',
        headline:
          'Excessive Heat Warning issued August 9 at 8:06PM PDT expiring August 10 at 8:00PM PDT by NWS Pendleton OR',
        description:
          'Strong high pressure over the region will result in very hot\ntemperatures through Friday evening.\n* TEMPERATURES...Highs 100 to 106 Friday. Lows tonight in the\n60s to lower 70s can be expected.\n\n* TIMING...Through Friday evening.\n\n* IMPACTS...Hot temperatures will increase chances for heat\nrelated illness especially for those without access to air\nconditioning. Heat stress is also possible for livestock and\noutdoor pets.',
        instruction:
          'An Excessive Heat Warning means that a prolonged period of\ndangerously hot temperatures will occur. The hot temperatures\nwill create a dangerous situation in which heat illnesses are\nlikely. Drink plenty of fluids, stay in an air-conditioned room,\nstay out of the sun, and check up on relatives and neighbors.\nTake extra precautions, if you work or spend time outside, when\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear light weight and loose fitting clothing when\npossible and drink plenty of water. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency...call 9 1 1.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM PDT FRIDAY'
          ],
          VTEC: ['/O.CON.KPDT.EH.W.0002.000000T0000Z-180811T0300Z/'],
          PIL: ['PDTNPWPDT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040828-2715157',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040828-2715157',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040828-2715157',
        areaDesc:
          'Northwest Blue Mountains; Northern Blue Mountains of Oregon; Southern Blue Mountains of Oregon; Ochoco-John Day Highlands',
        geocode: {
          UGC: ['WAZ030', 'ORZ502', 'ORZ503', 'ORZ506'],
          SAME: [
            '053071',
            '053013',
            '041063',
            '041061',
            '041059',
            '041069',
            '041049',
            '041023',
            '041021',
            '041031',
            '041017',
            '041013'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/WAZ030',
          'https://api.weather.gov/zones/forecast/ORZ502',
          'https://api.weather.gov/zones/forecast/ORZ503',
          'https://api.weather.gov/zones/forecast/ORZ506'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039981-2714769',
            identifier: 'NWS-IDP-PROD-3039981-2714769',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:10:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039981-2714770',
            identifier: 'NWS-IDP-PROD-3039981-2714770',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T14:10:00-07:00'
          }
        ],
        sent: '2018-08-09T20:06:00-07:00',
        effective: '2018-08-09T20:06:00-07:00',
        onset: '2018-08-09T20:06:00-07:00',
        expires: '2018-08-10T09:00:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pendleton OR',
        headline:
          'Heat Advisory issued August 9 at 8:06PM PDT expiring August 10 at 8:00PM PDT by NWS Pendleton OR',
        description:
          'Strong high pressure over the region will result in very hot\ntemperatures through Friday evening.\n* TEMPERATURES...Highs in the 90s Friday. Low temperatures tonight\nin the upper 50s to mid 60s.\n\n* TIMING...Through Friday evening.\n\n* IMPACTS...Hot temperatures will increase chances for heat\nrelated illness especially for those without access to air\nconditioning. Heat stress is also possible for livestock and\noutdoor pets.',
        instruction:
          'A Heat Advisory means that a period of hot temperatures is\nexpected. This will create a situation in which heat illnesses\nare possible. Drink plenty of fluids...stay in an air-conditioned\nroom, stay out of the sun, and check up on relatives and\nneighbors. If you work or spend time outside, when possible,\nreschedule strenuous activities to early morning or evening. Know\nthe signs and symptoms of heat exhaustion and heat stroke. Wear\nlight weight and loose fitting clothing when possible and drink\nplenty of water. Anyone overcome by heat should be moved to a\ncool and shaded location. Heat stroke is an emergency...call\n9 1 1.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT UNTIL 8 PM PDT FRIDAY... ...EXCESSIVE HEAT WARNING HAS EXPIRED'
          ],
          VTEC: ['/O.CON.KPDT.HT.Y.0004.000000T0000Z-180811T0300Z/'],
          PIL: ['PDTNPWPDT'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040791-2715140',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040791-2715140',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040791-2715140',
        areaDesc:
          'Eastern Washington East Columbia Basin; Idaho Palouse; Northeast Mountains',
        geocode: {
          UGC: ['WAZ674', 'IDZ101', 'WAZ686'],
          SAME: [
            '053019',
            '053021',
            '053065',
            '053075',
            '053043',
            '016009',
            '016057',
            '016055',
            '053063',
            '053001',
            '016069',
            '053023',
            '053013',
            '053003',
            '016079',
            '030053',
            '016021',
            '016017',
            '053051',
            '030061',
            '030089',
            '016035'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/WAZ674',
          'https://api.weather.gov/zones/fire/IDZ101',
          'https://api.weather.gov/zones/fire/WAZ686'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040210-2714879',
            identifier: 'NWS-IDP-PROD-3040210-2714879',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T15:26:00-07:00'
          }
        ],
        sent: '2018-08-09T19:47:00-07:00',
        effective: '2018-08-09T19:47:00-07:00',
        onset: '2018-08-09T19:47:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: '2018-08-10T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Spokane WA',
        headline:
          'Red Flag Warning issued August 9 at 7:47PM PDT expiring August 10 at 11:00PM PDT by NWS Spokane WA',
        description:
          'Hot, dry and unstable conditions will persist Friday across much\nof the districts. This will be followed by a strong cold front\nlate Friday night into Saturday morning with the potential for\ndry breezy winds and a threat of dry thunderstorms. This\ncombination may lead to critical fire weather conditions with the\npotential for increased fire spread of current fires and possible\nnew fire starts.\n* Affected Area: Fire Weather Zone 101 Northern and Central\nIdaho Panhandle (Zone 101)...Fire Weather Zone 674 East\nWashington Palouse and Spokane Area (Zone 674) and Fire\nWeather Zone 686 East Washington Northeast (Zone 686).\n\n* Winds: Light winds around 5 mph Friday morning. Increase to\nsouth to southwest 10 to 20 mph with gusts up to 30 mph by\nFriday afternoon and evening.\n\n* Haines Index: 6 (high).\n\n* Timing: Hot, dry and unstable conditions will peak on Friday.\n\n* Relative Humidities: Minimum values 7 to 18 percent.\n\n* Temperatures: 99 to 108 across the low lands Friday, then\ncooling into the mid to upper 80s Saturday.\n\n* Lightning: Slight chance of dry thunderstorms Friday night.\n\n* Impacts: Hot, dry and unstable conditions could lead to\nincreased growth on current fires or new fires. Any\nthunderstorms can lead to new fire starts. Dry and breezy\nwinds have the potential for increased fire spread of current\nor new fires.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now....or will shortly. A combination of\nstrong winds...low relative humidity...and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT UNTIL 11 PM PDT FRIDAY FOR HOT, DRY, UNSTABLE CONDITIONS FOLLOWED BY BREEZY WINDS FOR MUCH OF NORTHEAST WASHINGTON AND NORTH IDAHO'
          ],
          VTEC: ['/O.CON.KOTX.FW.W.0013.000000T0000Z-180811T0600Z/'],
          PIL: ['OTXRFWOTX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040790-2715139',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040790-2715139',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040790-2715139',
        areaDesc:
          'Central Cascade Mountains; Okanogan Highlands; South Central Cascade Valleys; South Central Cascade Mountains; North Cascades; Central Cascade Valleys; Northern Columbia Basin; Okanogan Valley',
        geocode: {
          UGC: [
            'WAZ682',
            'WAZ687',
            'WAZ676',
            'WAZ680',
            'WAZ685',
            'WAZ677',
            'WAZ673',
            'WAZ684'
          ],
          SAME: [
            '053037',
            '053007',
            '053061',
            '053057',
            '053033',
            '053019',
            '053065',
            '053047',
            '053043',
            '053017',
            '053025',
            '053077',
            '053041',
            '053053',
            '053073',
            '053021',
            '053075',
            '053001',
            '053005'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/WAZ682',
          'https://api.weather.gov/zones/fire/WAZ687',
          'https://api.weather.gov/zones/fire/WAZ676',
          'https://api.weather.gov/zones/fire/WAZ680',
          'https://api.weather.gov/zones/fire/WAZ685',
          'https://api.weather.gov/zones/fire/WAZ677',
          'https://api.weather.gov/zones/fire/WAZ673',
          'https://api.weather.gov/zones/fire/WAZ684'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3040211-2714880',
            identifier: 'NWS-IDP-PROD-3040211-2714880',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T15:26:00-07:00'
          }
        ],
        sent: '2018-08-09T19:47:00-07:00',
        effective: '2018-08-09T19:47:00-07:00',
        onset: '2018-08-09T19:47:00-07:00',
        expires: '2018-08-10T12:00:00-07:00',
        ends: '2018-08-11T11:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Spokane WA',
        headline:
          'Red Flag Warning issued August 9 at 7:47PM PDT expiring August 11 at 11:00AM PDT by NWS Spokane WA',
        description:
          'Hot, dry and unstable conditions will persist Friday across much\nof the districts. This will be followed by a strong cold front\nlate Friday night into Saturday morning with the potential for\ndry breezy winds and a threat of dry thunderstorms. This\ncombination may lead to critical fire weather conditions with the\npotential for increased fire spread of current fires and possible\nnew fire starts.\n* Affected Area: Fire Weather Zone 673 East Washington Northern\nColumbia Basin (Zone 673)...Fire Weather Zone 676 East\nWashington South Central Cascade Valleys (Zone 676)...Fire\nWeather Zone 677 East Washington Central Cascade Valleys (Zone\n677)...Fire Weather Zone 680 East Washington South Central\nCascade Mountains (Zone 680)...Fire Weather Zone 682 East\nWashington Central Cascade Mountains (Zone 682)...Fire Weather\nZone 684 East Washington Okanogan/Methow Valleys (Zone 684)...\nFire Weather Zone 685 East Washington North Cascades (Zone\n685) and Fire Weather Zone 687 East Washington Okanogan\nHighlands (Zone 687).\n\n* Winds: Light winds around 5 mph Friday morning. Increase to\nwest to southwest 10 to 20 mph with gusts up to 30 mph by late\nFriday afternoon and continuing Friday night. Expect local\nwind gusts to 40 mph on the ridge tops.\n\n* Haines Index: 5 (moderate) to 6 (high).\n\n* Timing: Hot, dry and unstable conditions will persist into\nFriday morning. Dry and breezy winds increase late Friday\nafternoon and evening and will continue into Saturday.\n\n* Relative Humidities: Minimum readings 9 to 19 percent, then 20\nto 30 percent near the Cascade crest Friday.\n\n* Temperatures: 98 to 107 in the low lands Friday and cooling to\nthe 80s by Saturday.\n\n* Lightning: Isolated to scattered dry thunderstorms Friday\nnight into Saturday morning.\n\n* Impacts: Hot, dry and unstable conditions could lead to\nincreased growth on current fires. Any thunderstorms can lead\nto new fire starts. Dry and breezy winds have the potential\nfor increased fire spread of current or new fires.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now....or will shortly. A combination of\nstrong winds...low relative humidity...and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING REMAINS IN EFFECT UNTIL 11 AM PDT SATURDAY FOR HOT, DRY, UNSTABLE CONDITIONS FOLLOWED BY DRY GUSTY WINDS AND DRY THUNDERSTORMS FOR THE CASCADE VALLEYS AND MOUNTAINS, OKANOGAN HIGHLANDS AND COLUMBIA BASIN'
          ],
          VTEC: ['/O.CON.KOTX.FW.W.0013.000000T0000Z-180811T1800Z/'],
          PIL: ['OTXRFWOTX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T11:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040772-2715130',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040772-2715130',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040772-2715130',
        areaDesc:
          "Northeast Mountains; Coeur d'Alene Area; Spokane Area; Washington Palouse; Idaho Palouse; Moses Lake Area; Lower Garfield and Asotin Counties; Northeast Blue Mountains; Lewiston Area; Lewis and Southern Nez Perce Counties; Upper Columbia Basin; Wenatchee Area; Okanogan Valley; Okanogan Highlands; Central Panhandle Mountains; Waterville Plateau",
        geocode: {
          UGC: [
            'WAZ037',
            'IDZ002',
            'WAZ036',
            'WAZ033',
            'IDZ003',
            'WAZ034',
            'WAZ032',
            'WAZ031',
            'IDZ026',
            'IDZ027',
            'WAZ035',
            'WAZ041',
            'WAZ043',
            'WAZ038',
            'IDZ004',
            'WAZ044'
          ],
          SAME: [
            '053065',
            '053063',
            '053051',
            '016055',
            '053043',
            '053075',
            '016057',
            '016009',
            '053025',
            '053001',
            '053023',
            '053003',
            '016069',
            '016061',
            '053047',
            '053017',
            '053007',
            '053019',
            '016079'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/WAZ037',
          'https://api.weather.gov/zones/forecast/IDZ002',
          'https://api.weather.gov/zones/forecast/WAZ036',
          'https://api.weather.gov/zones/forecast/WAZ033',
          'https://api.weather.gov/zones/forecast/IDZ003',
          'https://api.weather.gov/zones/forecast/WAZ034',
          'https://api.weather.gov/zones/forecast/WAZ032',
          'https://api.weather.gov/zones/forecast/WAZ031',
          'https://api.weather.gov/zones/forecast/IDZ026',
          'https://api.weather.gov/zones/forecast/IDZ027',
          'https://api.weather.gov/zones/forecast/WAZ035',
          'https://api.weather.gov/zones/forecast/WAZ041',
          'https://api.weather.gov/zones/forecast/WAZ043',
          'https://api.weather.gov/zones/forecast/WAZ038',
          'https://api.weather.gov/zones/forecast/IDZ004',
          'https://api.weather.gov/zones/forecast/WAZ044'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039472-2714607',
            identifier: 'NWS-IDP-PROD-3039472-2714607',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T09:40:00-07:00'
          }
        ],
        sent: '2018-08-09T19:41:00-07:00',
        effective: '2018-08-09T19:41:00-07:00',
        onset: '2018-08-09T19:41:00-07:00',
        expires: '2018-08-10T20:00:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Excessive Heat Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Spokane WA',
        headline:
          'Excessive Heat Warning issued August 9 at 7:41PM PDT expiring August 10 at 8:00PM PDT by NWS Spokane WA',
        description:
          "* Temperatures...Highs 98 to 107 except near 110 in the Lewiston\narea. Overnight lows in the mid 60s to mid 70s.\n\n* Timing...Afternoons to early evenings through Friday.\n\n* Impacts...Hot temperatures and limited relief overnight will\nincrease chances for heat related illness especially for those\nwithout access to air conditioning. Heat stress is also\npossible for livestock and outdoor pets.\n\n* Locations...Republic, Inchelium, Wauconda, Kamiah, Craigmont,\nNezperce, Winchester, Lewiston, Lapwai, Peck, Culdesac,\nGifford, Moscow, Plummer, Potlatch, Genesee, Coeur d'Alene,\nPost Falls, Hayden, Worley, Kellogg, Pinehurst, Osburn,\nWallace, Mullan, Wenatchee, Chelan, Entiat, Cashmere, Omak,\nOkanogan, Brewster, Bridgeport, Oroville, Nespelem, Waterville,\nMansfield, Anatone, Peola, Pullman, Colfax, Rosalia, La\nCrosse, Oakesdale, Tekoa, Uniontown, Clarkston, Pomeroy,\nRitzville, Grand Coulee, Odessa, Wilbur, Coulee City, Moses\nLake, Ephrata, Othello, Quincy, Colville, Deer Park, Chewelah,\nNewport, Kettle Falls, Spokane, Cheney, Davenport, and\nRockford.",
        instruction:
          'An Excessive Heat Warning means that a prolonged period of\ndangerously hot temperatures will occur. The combination of hot\ntemperatures and high humidity will combine to create a dangerous\nsituation in which heat illnesses are likely. Drink plenty of\nfluids...stay in an air-conditioned room...stay out of the sun...\nand check up on relatives and neighbors.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'EXCESSIVE HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM PDT FRIDAY'
          ],
          VTEC: ['/O.CON.KOTX.EH.W.0002.000000T0000Z-180811T0300Z/'],
          PIL: ['OTXNPWOTX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040773-2715131',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040773-2715131',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040773-2715131',
        areaDesc: 'Northern Panhandle; East Slopes Northern Cascades',
        geocode: {
          UGC: ['IDZ001', 'WAZ042'],
          SAME: ['016055', '016021', '016017', '053047', '053007']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/IDZ001',
          'https://api.weather.gov/zones/forecast/WAZ042'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039473-2714608',
            identifier: 'NWS-IDP-PROD-3039473-2714608',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T09:40:00-07:00'
          }
        ],
        sent: '2018-08-09T19:41:00-07:00',
        effective: '2018-08-09T19:41:00-07:00',
        onset: '2018-08-09T19:41:00-07:00',
        expires: '2018-08-10T20:00:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Heat Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Spokane WA',
        headline:
          'Heat Advisory issued August 9 at 7:41PM PDT expiring August 10 at 8:00PM PDT by NWS Spokane WA',
        description:
          '* Temperatures...Highs temperatures in the valley 97 to 104.\nOvernight lows in the 60s.\n\n* Timing...Afternoons and evenings through Friday.\n\n* Impacts...Hot temperatures and limited relief overnight will\nincrease chances for heat related illness especially for those\nwithout access to air conditioning. Heat stress is also\npossible for livestock and outdoor pets.\n\n* Locations...Sandpoint, Rathdrum, Bonners Ferry, Priest River,\nEastport, Leavenworth, Mazama, Twisp, Winthrop, Stehekin, and\nConconully.',
        instruction:
          'A Heat Advisory means that a period of hot temperatures is\nexpected. The combination of hot temperatures and high humidity\nwill combine to create a situation in which heat illnesses are\npossible. Drink plenty of fluids...stay in an air-conditioned\nroom...stay out of the sun...and check up on relatives and\nneighbors.',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'HEAT ADVISORY REMAINS IN EFFECT UNTIL 8 PM PDT FRIDAY'
          ],
          VTEC: ['/O.CON.KOTX.HT.Y.0003.000000T0000Z-180811T0300Z/'],
          PIL: ['OTXNPWOTX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040632-2715098',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-79.620000000000005, 34.240000000000002],
            [-79.5, 34.240000000000002],
            [-79.450000000000003, 34],
            [-79.319999899999999, 33.850000000000001],
            [-79.439999999999998, 33.850000000000001],
            [-79.569999899999999, 33.979999900000003],
            [-79.620000000000005, 34.240000000000002]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040632-2715098',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040632-2715098',
        areaDesc: 'Florence, SC; Marion, SC',
        geocode: {
          UGC: ['SCC041', 'SCC067'],
          SAME: ['045041', '045067']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/SCC041',
          'https://api.weather.gov/zones/county/SCC067'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039247-2714539',
            identifier: 'NWS-IDP-PROD-3039247-2714539',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T09:21:00-04:00'
          }
        ],
        sent: '2018-08-09T21:50:00-04:00',
        effective: '2018-08-09T21:50:00-04:00',
        onset: '2018-08-09T21:50:00-04:00',
        expires: '2018-08-10T13:50:00-04:00',
        ends: '2018-08-10T23:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Wilmington NC',
        headline:
          'Flood Warning issued August 9 at 9:50PM EDT expiring August 10 at 11:00PM EDT by NWS Wilmington NC',
        description:
          'Great Pee Dee At Pee Dee affecting Marion and Florence Counties SC',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nPeople with interests along the river should take the necessary precautions to\nprotect life and property from the flood waters.\n\nAdditional information is available on our website at weather.gov/ilm under the\n"Rivers and Lakes" link.',
        response: 'Avoid',
        parameters: {
          NWSheadline: ['Flood Warning now in effect until Friday evening'],
          VTEC: ['/O.EXT.KILM.FL.W.0007.000000T0000Z-180811T0300Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['ILMFLSILM'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T23:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040627-2715094',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040627-2715094',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040627-2715094',
        areaDesc: 'Coastal Collier County',
        geocode: {
          UGC: ['FLZ069'],
          SAME: ['012021']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/FLZ069'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039457-2714595',
            identifier: 'NWS-IDP-PROD-3039457-2714595',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T12:13:00-04:00'
          }
        ],
        sent: '2018-08-09T21:46:00-04:00',
        effective: '2018-08-09T21:46:00-04:00',
        onset: '2018-08-09T21:46:00-04:00',
        expires: '2018-08-10T22:15:00-04:00',
        ends: '2018-08-12T22:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Beach Hazards Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Miami FL',
        headline:
          'Beach Hazards Statement issued August 9 at 9:46PM EDT expiring August 12 at 10:00PM EDT by NWS Miami FL',
        description:
          '* RED TIDE HAZARDS...Possible respiratory irritation in some\ncoastal areas.\n\nFor Red Tide forecast information visit\nhttp://tidesandcurrents.noaa.gov/hab (all lower case).\n\n* FLORIDA RED TIDE RESPIRATORY IRRITATION POTENTIAL IMPACTS...\nSymptoms may include coughing...sneezing...and tearing eyes.\nPeople with respiratory conditions such as asthma...\nemphysema...and other pulmonary diseases...may be more\nsensitive. Irritation may vary locally and throughout the day.\nIf you experience uncomfortable symptoms...consider going to\nan unaffected beach nearby.\n\n* FLORIDA RED TIDE RESPIRATORY IRRITATION TIMING/LOCATION...NOAA\nFORECAST: Coastal northern/central Collier County: Gulf\ncoast...possible Friday and Saturday.',
        instruction:
          '* Florida Red Tide Observations. You can find unaffected beaches\nby checking reports of recent, local observations and data:\nMote Marine Laboratory daily beach conditions\nhttp://www.mote.org/beaches and the Florida Fish and Wildlife\nConservation Commission (FWC) Red Tide Status:\nhttp://myfwc.com/redtidestatus.\n\n* Florida Red Tide Health Information. Consult the Florida\nDepartment of Health:\nhttp://www.floridahealth.gov/environmental- health/aquatic-\ntoxins/red-tide.html or call the Poison Control Center: 1-800-\n222-1222.\n\nInclusion of external links does not constitute endorsement by\nthe Department of Commerce/NOAA of these external web sites or\nthe information, products or services contained therein.\n\n* Florida Red Tide Information Sources. Red Tide forecasts are\nprovided by the National Ocean Service with data provided by\nthe FWC and Mote Marine Laboratory\n(http://www.mote.org/pages/Florida-Red-Tide1).',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'BEACH HAZARDS STATEMENT REMAINS IN EFFECT THROUGH SUNDAY EVENING'
          ],
          VTEC: ['/O.CON.KMFL.BH.S.0005.000000T0000Z-180813T0200Z/'],
          PIL: ['MFLCFWMFL'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T22:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040621-2715091',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-81.840000000000003, 31.289999999999999],
            [-81.829999999999998, 31.140000000000001],
            [-81.899999999999991, 31.140000000000001],
            [-81.909999999999997, 31.280000000000001],
            [-81.840000000000003, 31.289999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040621-2715091',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040621-2715091',
        areaDesc: 'Brantley, GA',
        geocode: {
          UGC: ['GAC025'],
          SAME: ['013025']
        },
        affectedZones: ['https://api.weather.gov/zones/county/GAC025'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039326-2714562',
            identifier: 'NWS-IDP-PROD-3039326-2714562',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T10:21:00-04:00'
          }
        ],
        sent: '2018-08-09T21:43:00-04:00',
        effective: '2018-08-09T21:43:00-04:00',
        onset: '2018-08-09T21:43:00-04:00',
        expires: '2018-08-10T21:42:00-04:00',
        ends: null,
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Jacksonville FL',
        headline:
          'Flood Warning issued August 9 at 9:43PM EDT by NWS Jacksonville FL',
        description:
          '..The flood warning continues for the following rivers in Georgia..\nSatilla River At Atkinson affecting Brantley County\nThe Flood Warning continues for\nThe Satilla River At Atkinson.\n* until further notice...Or until the warning is cancelled.\n* At  8:45 PM Thursday the stage was 14.6 feet.\n* Minor flooding is occurring and Minor flooding is forecast.\n* Flood stage is 13.0 feet.\n* Forecast...The river will continue rising to near 14.6 feet by\nafter midnight tomorrow. Additional rises may be possible\nthereafter.\n* Impact...At 14.0 feet...River Rock Road begins to experience\nflooding across the road.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nAll persons with interest along the river should monitor the latest\nforecasts...And be prepared to take necessary precautions to protect\nlife and property. Do not drive cars through flooded areas. If you\nsee flood waters...Remember to turn around and do not drown.\n\nFor graphical hydrologic information...Please go to weather.gov and\nclick on your state. Select Rivers and Lakes under current weather.\nThe Advanced Hydrologic Prediction Service page provides current and\nforecast river information...Gage locations...Impacts... and\nhistorical crest information for all forecast points by clicking on\neach point.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KJAX.FL.W.0019.000000T0000Z-000000T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['JAXFLSJAX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040611-2715083',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-82.760000000000005, 29.93],
            [-82.680000000000007, 29.850000000000001],
            [-82.660000000000011, 29.84],
            [-82.660000000000011, 29.82],
            [-82.709999900000014, 29.82],
            [-82.79000000000002, 29.899999999999999],
            [-82.760000000000005, 29.93]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040611-2715083',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040611-2715083',
        areaDesc: 'Gilchrist, FL; Columbia, FL',
        geocode: {
          UGC: ['FLC041', 'FLC023'],
          SAME: ['012041', '012023']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/FLC041',
          'https://api.weather.gov/zones/county/FLC023'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039325-2714561',
            identifier: 'NWS-IDP-PROD-3039325-2714561',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T10:21:00-04:00'
          }
        ],
        sent: '2018-08-09T21:35:00-04:00',
        effective: '2018-08-09T21:35:00-04:00',
        onset: '2018-08-09T21:35:00-04:00',
        expires: '2018-08-10T21:35:00-04:00',
        ends: '2018-08-13T14:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Jacksonville FL',
        headline:
          'Flood Warning issued August 9 at 9:35PM EDT expiring August 13 at 2:00PM EDT by NWS Jacksonville FL',
        description:
          "Santa Fe River Near O'Leno State Park affecting Alachua and Columbia\nCounties\nSanta Fe River At Fort White affecting Columbia and Gilchrist\nCounties",
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nAll persons with interest along the river should monitor the latest\nforecasts...And be prepared to take necessary precautions to protect\nlife and property. Do not drive cars through flooded areas. If you\nsee flood waters...Remember to turn around and do not drown.\n\nFor graphical hydrologic information...Please go to weather.gov and\nclick on your state. Select Rivers and Lakes under current weather.\nThe Advanced Hydrologic Prediction Service page provides current and\nforecast river information...Gage locations...Impacts... and\nhistorical crest information for all forecast points by clicking on\neach point.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.EXT.KJAX.FL.W.0015.000000T0000Z-180813T1800Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['JAXFLSJAX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-13T14:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040612-2715084',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-82.609999999999999, 29.879999999999999],
            [-82.590000000000003, 29.939999999999998],
            [-82.530000000000001, 29.949999999999999],
            [-82.530000000000001, 29.93],
            [-82.560000000000002, 29.91],
            [-82.569999899999999, 29.870000000000001],
            [-82.609999999999999, 29.879999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040612-2715084',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040612-2715084',
        areaDesc: 'Alachua, FL; Columbia, FL',
        geocode: {
          UGC: ['FLC001', 'FLC023'],
          SAME: ['012001', '012023']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/FLC001',
          'https://api.weather.gov/zones/county/FLC023'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039327-2714563',
            identifier: 'NWS-IDP-PROD-3039327-2714563',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T10:21:00-04:00'
          }
        ],
        sent: '2018-08-09T21:35:00-04:00',
        effective: '2018-08-09T21:35:00-04:00',
        onset: '2018-08-09T21:35:00-04:00',
        expires: '2018-08-10T21:35:00-04:00',
        ends: '2018-08-12T02:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Jacksonville FL',
        headline:
          'Flood Warning issued August 9 at 9:35PM EDT expiring August 12 at 2:00AM EDT by NWS Jacksonville FL',
        description:
          "Santa Fe River Near O'Leno State Park affecting Alachua and Columbia\nCounties\nSanta Fe River At Fort White affecting Columbia and Gilchrist\nCounties",
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nAll persons with interest along the river should monitor the latest\nforecasts...And be prepared to take necessary precautions to protect\nlife and property. Do not drive cars through flooded areas. If you\nsee flood waters...Remember to turn around and do not drown.\n\nFor graphical hydrologic information...Please go to weather.gov and\nclick on your state. Select Rivers and Lakes under current weather.\nThe Advanced Hydrologic Prediction Service page provides current and\nforecast river information...Gage locations...Impacts... and\nhistorical crest information for all forecast points by clicking on\neach point.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.EXT.KJAX.FL.W.0012.000000T0000Z-180812T0600Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['JAXFLSJAX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T02:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040603-2715077',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040603-2715077',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040603-2715077',
        areaDesc:
          'Maalaea Bay; Big Island Southeast Waters; Pailolo Channel; Big Island Leeward Waters; Big Island Windward Waters; Kauai Northwest Waters; Maui County Leeward Waters; Kauai Channel; Alenuihaha Channel; Oahu Windward Waters; Oahu Leeward Waters; Kauai Leeward Waters; Maui County Windward Waters; Kaiwi Channel; Kauai Windward Waters',
        geocode: {
          UGC: [
            'PHZ119',
            'PHZ124',
            'PHZ120',
            'PHZ123',
            'PHZ122',
            'PHZ110',
            'PHZ118',
            'PHZ113',
            'PHZ121',
            'PHZ114',
            'PHZ115',
            'PHZ112',
            'PHZ117',
            'PHZ116',
            'PHZ111'
          ],
          SAME: [
            '059119',
            '059124',
            '059120',
            '059123',
            '059122',
            '059110',
            '059118',
            '059113',
            '059121',
            '059114',
            '059115',
            '059112',
            '059117',
            '059116',
            '059111'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/PHZ119',
          'https://api.weather.gov/zones/forecast/PHZ124',
          'https://api.weather.gov/zones/forecast/PHZ120',
          'https://api.weather.gov/zones/forecast/PHZ123',
          'https://api.weather.gov/zones/forecast/PHZ122',
          'https://api.weather.gov/zones/forecast/PHZ110',
          'https://api.weather.gov/zones/forecast/PHZ118',
          'https://api.weather.gov/zones/forecast/PHZ113',
          'https://api.weather.gov/zones/forecast/PHZ121',
          'https://api.weather.gov/zones/forecast/PHZ114',
          'https://api.weather.gov/zones/forecast/PHZ115',
          'https://api.weather.gov/zones/forecast/PHZ112',
          'https://api.weather.gov/zones/forecast/PHZ117',
          'https://api.weather.gov/zones/forecast/PHZ116',
          'https://api.weather.gov/zones/forecast/PHZ111'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039416-2714576',
            identifier: 'NWS-IDP-PROD-3039416-2714576',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T05:45:00-10:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039416-2714577',
            identifier: 'NWS-IDP-PROD-3039416-2714577',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T05:45:00-10:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039417-2714578',
            identifier: 'NWS-IDP-PROD-3039417-2714578',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T05:45:00-10:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039417-2714579',
            identifier: 'NWS-IDP-PROD-3039417-2714579',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T05:45:00-10:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039418-2714580',
            identifier: 'NWS-IDP-PROD-3039418-2714580',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T05:45:00-10:00'
          }
        ],
        sent: '2018-08-09T15:29:00-10:00',
        effective: '2018-08-09T15:29:00-10:00',
        onset: '2018-08-09T15:29:00-10:00',
        expires: '2018-08-10T04:30:00-10:00',
        ends: '2018-08-10T06:00:00-10:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Honolulu HI',
        headline:
          'Small Craft Advisory issued August 9 at 3:29PM HST expiring August 10 at 6:00AM HST by NWS Honolulu HI',
        description:
          '* Winds and Seas...East winds 15 to 25 kt with higher gusts. Seas\n6 to 8 feet.',
        instruction:
          'A Small Craft Advisory means that winds speeds of 25 to 33 knots\nand/or seas 10 feet or greater are expected to produce conditions\nhazardous to small craft. Inexperienced mariners, especially\nthose operating smaller vessels, should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'SMALL CRAFT ADVISORY REMAINS IN EFFECT UNTIL 6 AM HST FRIDAY'
          ],
          VTEC: ['/O.CON.PHFO.SC.Y.0029.000000T0000Z-180810T1600Z/'],
          PIL: ['HFOMWWHFO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T06:00:00-10:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040600-2715074',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040600-2715074',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040600-2715074',
        areaDesc:
          'Oahu South Shore; Waianae Coast; Maui Leeward West; Molokai Leeward; Kauai Windward; Kauai Leeward; Lanai Makai; Leeward Haleakala; Kahoolawe; Maui Central Valley',
        geocode: {
          UGC: [
            'HIZ005',
            'HIZ006',
            'HIZ018',
            'HIZ013',
            'HIZ002',
            'HIZ003',
            'HIZ014',
            'HIZ021',
            'HIZ016',
            'HIZ019'
          ],
          SAME: ['015003', '015009', '015007']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/HIZ005',
          'https://api.weather.gov/zones/forecast/HIZ006',
          'https://api.weather.gov/zones/forecast/HIZ018',
          'https://api.weather.gov/zones/forecast/HIZ013',
          'https://api.weather.gov/zones/forecast/HIZ002',
          'https://api.weather.gov/zones/forecast/HIZ003',
          'https://api.weather.gov/zones/forecast/HIZ014',
          'https://api.weather.gov/zones/forecast/HIZ021',
          'https://api.weather.gov/zones/forecast/HIZ016',
          'https://api.weather.gov/zones/forecast/HIZ019'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039828-2714692',
            identifier: 'NWS-IDP-PROD-3039828-2714692',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T10:23:00-10:00'
          }
        ],
        sent: '2018-08-09T15:25:00-10:00',
        effective: '2018-08-09T15:25:00-10:00',
        onset: '2018-08-09T15:25:00-10:00',
        expires: '2018-08-10T04:30:00-10:00',
        ends: '2018-08-10T06:00:00-10:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'High Surf Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Honolulu HI',
        headline:
          'High Surf Advisory issued August 9 at 3:25PM HST expiring August 10 at 6:00AM HST by NWS Honolulu HI',
        description:
          'Swell from Hurricane Hector is now on its decline, but is still\nbringing elevated surf to south facing shores this afternoon.\nSome overwash along low-lying coastal areas and roadways will be\npossible, especially during the high tide this afternoon. Surf is\nexpected to quickly drop off on Friday.\n* SURF...6 to 10 feet this afternoon, decreasing to 5 to 8 feet\ntonight along south facing shores.\n\n* TIMING...Declining through tonight.\n\n* IMPACTS...Moderate...Expect strong breaking waves, shore break,\nand strong longshore and rip currents making swimming difficult\nand dangerous. Some overwash along low-lying coastal areas and\nroadways will be possible, especially around high tide this\nafternoon.',
        instruction:
          'Large breaking surf, significant shorebreak, and dangerous\ncurrents make entering the water very hazardous. Boaters should\nbe aware of increased number of surfers utilizing the harbor\nchannel to access surfing areas.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 6 AM HST FRIDAY'
          ],
          VTEC: ['/O.CON.PHFO.SU.Y.0035.000000T0000Z-180810T1600Z/'],
          PIL: ['HFOCFWHFO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T06:00:00-10:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040308-2714928',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-133.52000000000001, 57.189999999999998],
            [-133.52000000000001, 57.199999999999996],
            [-133.12, 57.329999999999998],
            [-133.48000000000002, 57.369999999999997],
            [-133.65000000000001, 57.710000000000001],
            [-132.88, 57.5],
            [-133.56999999999999, 57.829999999999998],
            [-133.45999999999998, 57.839999999999996],
            [-133.10999999999999, 57.849999999999994],
            [-133.17999999999998, 57.899999999999991],
            [-134.00999999999999, 57.759999999999991],
            [-134.29999999999998, 58.029999999999994],
            [-133.94999999999999, 57.579999999999991],
            [-134.66999989999999, 57.609999999999992],
            [-134.66999989999999, 57.61999999999999],
            [-135.03, 58.509999999999991],
            [-134.34, 58.959999999999994],
            [-133.38999989999999, 58.429999999999993],
            [-132.25999999999999, 57.219999999999992],
            [-133.52000000000001, 57.189999999999998]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040308-2714928',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040308-2714928',
        areaDesc: 'Juneau Borough and Northern Admiralty Island',
        geocode: {
          UGC: ['AKZ025'],
          SAME: ['002195', '002110', '002105']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/AKZ025'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037323-2713654',
            identifier: 'NWS-IDP-PROD-3037323-2713654',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T12:01:00-08:00'
          }
        ],
        sent: '2018-08-09T15:04:00-08:00',
        effective: '2018-08-09T15:04:00-08:00',
        onset: '2018-08-09T14:53:00-08:00',
        expires: '2018-08-10T10:00:00-08:00',
        ends: '2018-08-10T10:00:00-08:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Juneau AK',
        headline:
          'Flood Warning issued August 9 at 2:53PM AKDT expiring August 10 at 10:00AM AKDT by NWS Juneau AK',
        description:
          'At 253 PM AKDT, steady rain has diminished across the area, but\nshowers will continue tonight and could be locally heavy this\nevening. Up to 2 inches of rain has fallen in the past 12 hours. Up\nto 1/2 inch of rain is expected over the area through tonight.\nMendenhall Lake is currently at moderate flood levels.\n\nFor the Mendenhall Lake: At 215 PM AKDT the stage was 10.3 feet.\nFlood stage is 9.0 feet.\nForecast: Water levels are expected to fall through Friday, and the\nlake will likely drop below flood stage late tonight or Friday\nmorning.\n\nImpacts: Mendenhall Campground is currently closed. There is\nflooding over parts of View Drive, the Mendenhall Campground, and\nSkaters Cabin Road. These flood waters should gradually recede as\nthe lake level drops tonight and Friday.\n\nPlease stay tuned to NOAA weather radio or your favorite local\nweather news source for updates on this situation.',
        instruction:
          'A Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'A FLOOD WARNING FROM HEAVY RAINFALL REMAINS IN EFFECT UNTIL 1000 AM AKDT FRIDAY FOR MENDENHALL LAKE AND RIVER IN THE NORTH CENTRAL INNER CHANNELS'
          ],
          VTEC: ['/O.CON.PAJK.FA.W.0003.000000T0000Z-180810T1800Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['AJKFLSAJK'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T10:00:00-08:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040277-2714912',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-135.28999999999999, 59.630000000000003],
            [-135.28999999999999, 59.57],
            [-135.31999999999999, 59.509999999999998],
            [-135.38, 59.519999999999996],
            [-135.35999999999999, 59.629999999999995],
            [-135.28999999999999, 59.630000000000003]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040277-2714912',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040277-2714912',
        areaDesc: 'Taiya Inlet and Klondike Highway',
        geocode: {
          UGC: ['AKZ018'],
          SAME: ['002230']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/AKZ018'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037868-2713931',
            identifier: 'NWS-IDP-PROD-3037868-2713931',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T14:27:00-08:00'
          }
        ],
        sent: '2018-08-09T14:52:00-08:00',
        effective: '2018-08-09T14:52:00-08:00',
        onset: '2018-08-09T14:38:00-08:00',
        expires: '2018-08-10T10:00:00-08:00',
        ends: '2018-08-10T10:00:00-08:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Juneau AK',
        headline:
          'Flood Warning issued August 9 at 2:38PM AKDT expiring August 10 at 10:00AM AKDT by NWS Juneau AK',
        description:
          'At 238 PM AKDT, satellite estimates and automated rain gauges\nindicated locally heavy rain across the warned area causing impacts.\nUp to 1.5 inches of rain have fallen in the last 12 hours.\nAdditional rainfall of up to 1/2 inch is possible tonight. This will\nmaintain moderate flooding along the Taiya River through at\nleast this evening.\n\nFor the Taiya River: At 2 PM AKDT the stage was 18.0 feet.\nFlood stage is 16.5 feet.\nForecast: Water levels may fluctuate some early tonight around 18\nfeet, then begin a faster drop later tonight and Friday. It is\nforecasted to drop below the moderate flood stage of 17.0 feet by\nlate Friday morning.\n\nImpacts: The National Park Service has closed the Chilkoot Trail due\nto the flooding. The National Park Service also advises against\nboating and other recreational water-based activities on the Taiya\nRiver until flood waters recede.\n\nPlease stay tuned to NOAA weather radio or your\nfavorite local weather news source for updates on this situation.',
        instruction:
          'Be especially cautious at night when it is harder to recognize the\ndangers of flooding.\n\nFlooding is occurring or is imminent. It is important to know where\nyou are relative to streams, rivers, or creeks which can become\nkillers in heavy rains. Campers and hikers should avoid streams or\ncreeks.\n\nPlease report flooding to your local law enforcement agency when you\ncan do so safely.\n\nA Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'A FLOOD WARNING FROM HEAVY RAINFALL REMAINS IN EFFECT UNTIL 1000 AM AKDT FRIDAY FOR THE TAIYA RIVER IN THE NORTHERN INNER CHANNELS'
          ],
          VTEC: ['/O.CON.PAJK.FA.W.0002.000000T0000Z-180810T1800Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['AJKFLSAJK'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T10:00:00-08:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040238',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040238',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040238',
        areaDesc: 'Western Prince William Sound',
        geocode: {
          UGC: ['AKZ125'],
          SAME: ['002261', '002122', '002020']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/AKZ125'],
        references: [],
        sent: '2018-08-09T14:34:00-08:00',
        effective: '2018-08-09T14:34:00-08:00',
        onset: '2018-08-09T14:34:00-08:00',
        expires: '2018-08-11T12:15:00-08:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Anchorage, AK',
        headline:
          'Special Weather Statement issued August 9 at 2:34PM AKDT by NWS Anchorage, AK',
        description:
          'An unnamed lake restricted by Bear Glacier in Kenai Fjords National Park near\nSeward AK has begun to release water. Water levels in Bear Glacier Lagoon are\nexpected to rise rapidly and significantly. Iceberg production and\nmovement is also expected. Persons traveling or recreating in\nthe area are urged to remain alert for rising water levels,\npotential flooding, and iceberg movement over the next few days.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'RAPID AND SIGNIFICANT WATER LEVEL RISES IN BEAR GLACIER LAGOON THROUGH SATURDAY AFTERNOON'
          ],
          'EAS-ORG': ['WXR'],
          PIL: ['AERSPSAER'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040104',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3040104',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3040104',
        areaDesc:
          'Central Interior; Deltana and Tanana Flats; Middle Tanana Valley; Upper Tanana Valley and the Fortymile Country; Eastern Alaska Range; Denali',
        geocode: {
          UGC: ['AKZ221', 'AKZ223', 'AKZ222', 'AKZ224', 'AKZ226', 'AKZ225'],
          SAME: ['002290', '002090', '002068', '002240', '002261', '002170']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/AKZ221',
          'https://api.weather.gov/zones/forecast/AKZ223',
          'https://api.weather.gov/zones/forecast/AKZ222',
          'https://api.weather.gov/zones/forecast/AKZ224',
          'https://api.weather.gov/zones/forecast/AKZ226',
          'https://api.weather.gov/zones/forecast/AKZ225'
        ],
        references: [],
        sent: '2018-08-09T13:56:00-08:00',
        effective: '2018-08-09T13:56:00-08:00',
        onset: '2018-08-09T13:56:00-08:00',
        expires: '2018-08-10T18:00:00-08:00',
        ends: null,
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Moderate',
        certainty: 'Observed',
        urgency: 'Expected',
        event: 'Special Weather Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Fairbanks AK',
        headline:
          'Special Weather Statement issued August 9 at 1:56PM AKDT by NWS Fairbanks AK',
        description:
          'Rivers are running high to bankfull across the area and with the\nrecent rain and runoff will continue running high into early next\nweek.\n\nIncreased debris flow can be expected on the rivers ans streams\ndue to the elevated water levels.\n\nMinor ground water flooding is possible near rivers and streams as\nthe water table remains very high. Low lying areas will continue\nwith minor flooding.\n\nFor the latest forecasts go to www.weather.gov/fairbanks and the\nlatest river information can be found at www.weather.gov/aprfc.',
        instruction: '',
        response: 'Execute',
        parameters: {
          NWSheadline: [
            'Rivers and Streams to remain high through the weekend into next week'
          ],
          'EAS-ORG': ['WXR'],
          PIL: ['AFGSPSAFG'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039796-2714677',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039796-2714677',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039796-2714677',
        areaDesc:
          'Oahu South Shore; Waianae Coast; Maui Leeward West; Molokai Leeward; Kauai Windward; Kauai Leeward; Lanai Makai; Leeward Haleakala; Kahoolawe; Maui Central Valley',
        geocode: {
          UGC: [
            'HIZ005',
            'HIZ006',
            'HIZ018',
            'HIZ013',
            'HIZ002',
            'HIZ003',
            'HIZ014',
            'HIZ021',
            'HIZ016',
            'HIZ019'
          ],
          SAME: ['015003', '015009', '015007']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/HIZ005',
          'https://api.weather.gov/zones/forecast/HIZ006',
          'https://api.weather.gov/zones/forecast/HIZ018',
          'https://api.weather.gov/zones/forecast/HIZ013',
          'https://api.weather.gov/zones/forecast/HIZ002',
          'https://api.weather.gov/zones/forecast/HIZ003',
          'https://api.weather.gov/zones/forecast/HIZ014',
          'https://api.weather.gov/zones/forecast/HIZ021',
          'https://api.weather.gov/zones/forecast/HIZ016',
          'https://api.weather.gov/zones/forecast/HIZ019'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3039617-2714640',
            identifier: 'NWS-IDP-PROD-3039617-2714640',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-09T09:05:00-10:00'
          }
        ],
        sent: '2018-08-09T10:11:00-10:00',
        effective: '2018-08-09T10:11:00-10:00',
        onset: '2018-08-09T10:11:00-10:00',
        expires: '2018-08-09T23:15:00-10:00',
        ends: '2018-08-10T06:00:00-10:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'High Surf Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Honolulu HI',
        headline:
          'High Surf Advisory issued August 9 at 10:11AM HST expiring August 10 at 6:00AM HST by NWS Honolulu HI',
        description:
          'Swell from Hurricane Hector has arrived and is expected to peak\ntoday and decrease Friday as Hector continues westward.\n* SURF...8 to 12 feet along south facing shores.\n\n* TIMING...Peaking today and continuing through tonight.\n\n* IMPACTS...Moderate...Expect strong breaking waves, shore break,\nand strong longshore and rip currents making swimming difficult\nand dangerous. Boaters can expect breaking waves near harbor\nentrances.',
        instruction:
          'Large breaking surf, significant shorebreak, and dangerous\ncurrents make entering the water very hazardous. Boaters should\nbe aware of breaking waves near harbor entrances and an increased\nnumber of surfers utilizing the harbor channel to access surfing\nareas.',
        response: 'Avoid',
        parameters: {
          NWSheadline: [
            'HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 6 AM HST FRIDAY'
          ],
          VTEC: ['/O.CON.PHFO.SU.Y.0035.000000T0000Z-180810T1600Z/'],
          PIL: ['HFOCFWHFO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T06:00:00-10:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039666-2714652',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039666-2714652',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039666-2714652',
        areaDesc:
          'Eastern Payette National Forest; Western Payette National Forest; Baker Valley; Northern Boise National Forest; Southern Boise/Western Sawtooth NF, including the Camas Prairie',
        geocode: {
          UGC: ['IDZ402', 'IDZ401', 'ORZ646', 'IDZ403', 'IDZ421'],
          SAME: [
            '016085',
            '016049',
            '016059',
            '016087',
            '016003',
            '041001',
            '041063',
            '016045',
            '041061',
            '041045',
            '016037',
            '016015',
            '016039',
            '016025',
            '016001',
            '016047',
            '016063',
            '016013'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/IDZ402',
          'https://api.weather.gov/zones/fire/IDZ401',
          'https://api.weather.gov/zones/fire/ORZ646',
          'https://api.weather.gov/zones/fire/IDZ403',
          'https://api.weather.gov/zones/fire/IDZ421'
        ],
        references: [],
        sent: '2018-08-09T13:28:00-06:00',
        effective: '2018-08-09T13:28:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-10T11:00:00-06:00',
        ends: '2018-08-11T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Boise ID',
        headline:
          'Red Flag Warning issued August 9 at 1:28PM MDT expiring August 11 at 12:00AM MDT by NWS Boise ID',
        description:
          'The National Weather Service in Boise has issued a Red Flag\nWarning, which is in effect from noon MDT /11 AM PDT/ Friday to\nmidnight MDT /11 PM PDT/ Friday night.\n\nAn upper ridge continues over the region bringing well above\nnormal temperatures along with dry conditions. A surface thermal\ntrough begins to amplify into Central Oregon today then slides\neastward Friday as an upper low edges toward the coast. This\nallows the airmass to become more unstable bringing the Haines\nIndex into the High category.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM NOON MDT /11 AM PDT/ FRIDAY TO MIDNIGHT MDT /11 PM PDT/ FRIDAY NIGHT FOR HOT, DRY, AND UNSTABLE CONDITIONS LEADING TO A HIGH HAINES INDEX'
          ],
          VTEC: ['/O.NEW.KBOI.FW.W.0007.180810T1800Z-180811T0600Z/'],
          PIL: ['BOIRFWBOI'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039463-2714601',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039463-2714601',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039463-2714601',
        areaDesc: 'Waters from Point Reyes to Pigeon Point 10-60 NM',
        geocode: {
          UGC: ['PZZ571'],
          SAME: ['057571']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/PZZ571'],
        references: [],
        sent: '2018-08-09T09:16:00-07:00',
        effective: '2018-08-09T09:16:00-07:00',
        onset: '2018-08-09T09:16:00-07:00',
        expires: '2018-08-09T17:30:00-07:00',
        ends: '2018-08-10T18:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Small Craft Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS San Francisco CA',
        headline:
          'Small Craft Advisory issued August 9 at 9:16AM PDT expiring August 10 at 6:00PM PDT by NWS San Francisco CA',
        description:
          'The National Weather Service in San Francisco has issued a Small\nCraft Advisory, which is in effect until 6 PM PDT Friday.\n\n* WINDS...Northwest 15 to 20 kt with gusts up to 25 kt.\n\n* SEAS...5 to 7 feet.',
        instruction:
          'A Small Craft Advisory means that wind speeds of 21 to 33 knots\nand/or steep waves are expected to produce hazardous wave\nconditions to small craft. Inexperienced mariners...especially\nthose operating smaller vessels should avoid navigating in these\nconditions.',
        response: 'Avoid',
        parameters: {
          NWSheadline: ['SMALL CRAFT ADVISORY IN EFFECT UNTIL 6 PM PDT FRIDAY'],
          VTEC: ['/O.EXB.KMTR.SC.Y.0163.180809T1616Z-180811T0100Z/'],
          PIL: ['MTRMWWMTR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T18:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039296-2714555',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-81.5, 29.079999999999998],
            [-81.689999999999998, 29.319999999999997],
            [-81.569999899999999, 29.349999999999998],
            [-81.420000000000002, 29.099999999999998],
            [-81.5, 29.079999999999998]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039296-2714555',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039296-2714555',
        areaDesc: 'Volusia, FL; Lake, FL',
        geocode: {
          UGC: ['FLC127', 'FLC069'],
          SAME: ['012127', '012069']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/FLC127',
          'https://api.weather.gov/zones/county/FLC069'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036664-2713395',
            identifier: 'NWS-IDP-PROD-3036664-2713395',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T10:13:00-04:00'
          }
        ],
        sent: '2018-08-09T09:55:00-04:00',
        effective: '2018-08-09T09:55:00-04:00',
        onset: '2018-08-09T09:55:00-04:00',
        expires: '2018-08-10T20:00:00-04:00',
        ends: '2018-08-10T20:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Melbourne FL',
        headline:
          'Flood Warning issued August 9 at 9:55AM EDT expiring August 10 at 8:00PM EDT by NWS Melbourne FL',
        description:
          'A River Flood Warning remains in effect for...the Saint Johns River\nat Astor...\n\nThe river level on the Saint Johns River at Astor is forecast to remain\nnearly steady in minor flood stage through the late week, then begin to\nslowly decline this weekend into early next week. The river may\nrecede below Minor Flood Stage over the next 5 days, but will remain\nelevated above Action Stage beyond the forecast period.\nThe Flood Warning Continues For\nThe St Johns River Near Astor.\n* Minor Flooding is Occurring and Minor Flooding is Forecast.\n\n*At 2.3 feet, Minor flooding of low lying streets and yards north of\nFox Road on Lake County side of Astor, and from River Road northward\non Volusia side of river.  Water begins to cover docks at South Moon\nFish Camp.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.EXT.KMLB.FL.W.0003.000000T0000Z-180811T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['MLBFLSMLB'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039217-2714529',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-98.310000000000002, 42.859999999999999],
            [-98.299999999999997, 42.909999900000003],
            [-98.099999999999994, 42.840000000000003],
            [-98.109999999999999, 42.790000000000006],
            [-98.159999999999997, 42.820000000000007],
            [-98.25, 42.850000000000009],
            [-98.310000000000002, 42.859999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039217-2714529',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039217-2714529',
        areaDesc: 'Knox, NE; Charles Mix, SD; Bon Homme, SD',
        geocode: {
          UGC: ['NEC107', 'SDC023', 'SDC009'],
          SAME: ['031107', '046023', '046009']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/NEC107',
          'https://api.weather.gov/zones/county/SDC023',
          'https://api.weather.gov/zones/county/SDC009'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036597-2713357',
            identifier: 'NWS-IDP-PROD-3036597-2713357',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T08:05:00-05:00'
          }
        ],
        sent: '2018-08-09T07:00:00-05:00',
        effective: '2018-08-09T07:00:00-05:00',
        onset: '2018-08-09T07:00:00-05:00',
        expires: '2018-08-10T10:59:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sioux Falls SD',
        headline:
          'Flood Warning issued August 9 at 7:00AM CDT by NWS Sioux Falls SD',
        description:
          'Missouri River Near Greenwood\nMissouri River Near Verdel\nMissouri River At Niobrara\nMissouri River At Springfield\n\n.The following river forecasts include forecast precipitation through\ntonight. Any additional future rains could affect the crest\nforecasts.\nThe Flood Warning continues for\nThe Missouri River Near Verdel.\n* until further notice.\n* At 06AM Thursday the stage was 24.24 feet.\n* Flood stage is 24.00 feet.\n* At stages near 25.0 feet...Boat docks at Lazy River Acres near\nVerdel will be flooded and some homes will be surrounded by water.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nSafety message...Do not drive cars through flooded areas. the water\ndepth and road condition may be unsafe.\n\nAdditional information is available at\n\nhttp://water.weather.gov/ahps2/index.php?wfo=fsd\n\nStay tuned for further updates by listening to NOAA weather radio...\nor your local radio and TV stations.\n\nThe next scheduled statement will be issued tomorrow morning.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KFSD.FL.W.0182.000000T0000Z-000000T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['FSDFLSFSD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039216-2714528',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-97.900000000000006, 42.780000000000001],
            [-97.950000000000003, 42.82],
            [-97.909999999999997, 42.869999999999997],
            [-97.840000000000003, 42.879999999999995],
            [-97.829999999999998, 42.829999999999998],
            [-97.879999999999995, 42.809999999999995],
            [-97.900000000000006, 42.780000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039216-2714528',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039216-2714528',
        areaDesc: 'Knox, NE; Bon Homme, SD',
        geocode: {
          UGC: ['NEC107', 'SDC009'],
          SAME: ['031107', '046009']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/NEC107',
          'https://api.weather.gov/zones/county/SDC009'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036596-2713356',
            identifier: 'NWS-IDP-PROD-3036596-2713356',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T08:05:00-05:00'
          }
        ],
        sent: '2018-08-09T07:00:00-05:00',
        effective: '2018-08-09T07:00:00-05:00',
        onset: '2018-08-09T07:00:00-05:00',
        expires: '2018-08-10T10:59:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sioux Falls SD',
        headline:
          'Flood Warning issued August 9 at 7:00AM CDT by NWS Sioux Falls SD',
        description:
          'Missouri River Near Greenwood\nMissouri River Near Verdel\nMissouri River At Niobrara\nMissouri River At Springfield\n\n.The following river forecasts include forecast precipitation through\ntonight. Any additional future rains could affect the crest\nforecasts.\nThe Flood Warning continues for\nThe Missouri River At Springfield.\n* until further notice.\n* At 06AM Thursday the stage was 11.41 feet.\n* Flood stage is 10.00 feet.\n* At stages near 12.0 feet...Some camping areas at Springfield\nRecreational Area will be flooded.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nSafety message...Do not drive cars through flooded areas. the water\ndepth and road condition may be unsafe.\n\nAdditional information is available at\n\nhttp://water.weather.gov/ahps2/index.php?wfo=fsd\n\nStay tuned for further updates by listening to NOAA weather radio...\nor your local radio and TV stations.\n\nThe next scheduled statement will be issued tomorrow morning.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KFSD.FL.W.0172.000000T0000Z-000000T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['FSDFLSFSD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039215-2714527',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-98.109999999999999, 42.789999999999999],
            [-98.099999999999994, 42.839999999999996],
            [-98.009999999999991, 42.789999999999999],
            [-97.949999999999989, 42.82],
            [-97.899999999999991, 42.780000000000001],
            [-98.009999999999991, 42.740000000000002],
            [-98.109999999999999, 42.789999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039215-2714527',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039215-2714527',
        areaDesc: 'Knox, NE; Bon Homme, SD',
        geocode: {
          UGC: ['NEC107', 'SDC009'],
          SAME: ['031107', '046009']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/NEC107',
          'https://api.weather.gov/zones/county/SDC009'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036598-2713358',
            identifier: 'NWS-IDP-PROD-3036598-2713358',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T08:05:00-05:00'
          }
        ],
        sent: '2018-08-09T07:00:00-05:00',
        effective: '2018-08-09T07:00:00-05:00',
        onset: '2018-08-09T07:00:00-05:00',
        expires: '2018-08-10T10:59:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sioux Falls SD',
        headline:
          'Flood Warning issued August 9 at 7:00AM CDT by NWS Sioux Falls SD',
        description:
          'Missouri River Near Greenwood\nMissouri River Near Verdel\nMissouri River At Niobrara\nMissouri River At Springfield\n\n.The following river forecasts include forecast precipitation through\ntonight. Any additional future rains could affect the crest\nforecasts.\nThe Flood Warning continues for\nThe Missouri River At Niobrara.\n* until further notice.\n* At 06AM Thursday the stage was 22.04 feet.\n* Flood stage is 21.00 feet.\n* At stages near 22.0 feet...Bottom Road near Springfield floods.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nSafety message...Do not drive cars through flooded areas. the water\ndepth and road condition may be unsafe.\n\nAdditional information is available at\n\nhttp://water.weather.gov/ahps2/index.php?wfo=fsd\n\nStay tuned for further updates by listening to NOAA weather radio...\nor your local radio and TV stations.\n\nThe next scheduled statement will be issued tomorrow morning.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KFSD.FL.W.0173.000000T0000Z-000000T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['FSDFLSFSD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039214-2714526',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-98.590000000000003, 43.039999999999999],
            [-98.540000000000006, 43.089999999999996],
            [-98.440000000000012, 42.959999999999994],
            [-98.300000000000011, 42.909999899999995],
            [-98.310000000000016, 42.859999999999992],
            [-98.490000000000023, 42.929999999999993],
            [-98.590000000000003, 43.039999999999999]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3039214-2714526',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3039214-2714526',
        areaDesc: 'Boyd, NE; Charles Mix, SD',
        geocode: {
          UGC: ['NEC015', 'SDC023'],
          SAME: ['031015', '046023']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/NEC015',
          'https://api.weather.gov/zones/county/SDC023'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036595-2713355',
            identifier: 'NWS-IDP-PROD-3036595-2713355',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T08:05:00-05:00'
          }
        ],
        sent: '2018-08-09T07:00:00-05:00',
        effective: '2018-08-09T07:00:00-05:00',
        onset: '2018-08-09T07:00:00-05:00',
        expires: '2018-08-10T10:59:00-05:00',
        ends: null,
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sioux Falls SD',
        headline:
          'Flood Warning issued August 9 at 7:00AM CDT by NWS Sioux Falls SD',
        description:
          'Missouri River Near Greenwood\nMissouri River Near Verdel\nMissouri River At Niobrara\nMissouri River At Springfield\n\n.The following river forecasts include forecast precipitation through\ntonight. Any additional future rains could affect the crest\nforecasts.\nThe Flood Warning continues for\nThe Missouri River Near Greenwood.\n* until further notice.\n* At 06AM Thursday the stage was 30.12 feet.\n* Flood stage is 30.00 feet.\n* At stages near 30.0 feet...Flooding begins to affect significant\namounts of agricultural land.',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nSafety message...Do not drive cars through flooded areas. the water\ndepth and road condition may be unsafe.\n\nAdditional information is available at\n\nhttp://water.weather.gov/ahps2/index.php?wfo=fsd\n\nStay tuned for further updates by listening to NOAA weather radio...\nor your local radio and TV stations.\n\nThe next scheduled statement will be issued tomorrow morning.',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.CON.KFSD.FL.W.0187.000000T0000Z-000000T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['FSDFLSFSD'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038547-2714286',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-79.620000000000005, 34.240000000000002],
            [-79.5, 34.240000000000002],
            [-79.450000000000003, 34],
            [-79.319999899999999, 33.850000000000001],
            [-79.439999999999998, 33.850000000000001],
            [-79.569999899999999, 33.979999900000003],
            [-79.620000000000005, 34.240000000000002]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038547-2714286',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3038547-2714286',
        areaDesc: 'Florence, SC; Marion, SC',
        geocode: {
          UGC: ['SCC041', 'SCC067'],
          SAME: ['045041', '045067']
        },
        affectedZones: [
          'https://api.weather.gov/zones/county/SCC041',
          'https://api.weather.gov/zones/county/SCC067'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3036594-2713354',
            identifier: 'NWS-IDP-PROD-3036594-2713354',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T09:04:00-04:00'
          }
        ],
        sent: '2018-08-08T22:14:00-04:00',
        effective: '2018-08-08T22:14:00-04:00',
        onset: '2018-08-08T22:14:00-04:00',
        expires: '2018-08-09T14:14:00-04:00',
        ends: '2018-08-11T20:00:00-04:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Observed',
        urgency: 'Immediate',
        event: 'Flood Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Wilmington NC',
        headline:
          'Flood Warning issued August 8 at 10:14PM EDT expiring August 11 at 8:00PM EDT by NWS Wilmington NC',
        description:
          'Great Pee Dee At Pee Dee affecting Marion and Florence Counties SC',
        instruction:
          'PRECAUTIONARY/PREPAREDNESS ACTIONS...\n\nPeople with interests along the river should take the necessary precautions to\nprotect life and property from the flood waters.\n\nAdditional information is available on our website at weather.gov/ilm under the\n"Rivers and Lakes" link.',
        response: 'Avoid',
        parameters: {
          NWSheadline: ['Flood Warning now in effect until Saturday evening'],
          VTEC: ['/O.EXT.KILM.FL.W.0007.000000T0000Z-180812T0000Z/'],
          'EAS-ORG': ['WXR'],
          PIL: ['ILMFLSILM'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T20:00:00-04:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038131-2714086',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038131-2714086',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3038131-2714086',
        areaDesc: 'Tahoe - Eldorado National Forest',
        geocode: {
          UGC: ['CAZ269'],
          SAME: [
            '006061',
            '006115',
            '006005',
            '006009',
            '006063',
            '006091',
            '006017',
            '006057',
            '006003',
            '006007'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ269'],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037414-2713686',
            identifier: 'NWS-IDP-PROD-3037414-2713686',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T13:22:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037414-2713685',
            identifier: 'NWS-IDP-PROD-3037414-2713685',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T13:22:00-07:00'
          }
        ],
        sent: '2018-08-08T17:01:00-07:00',
        effective: '2018-08-08T17:01:00-07:00',
        onset: '2018-08-10T11:00:00-07:00',
        expires: '2018-08-09T17:15:00-07:00',
        ends: '2018-08-11T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sacramento CA',
        headline:
          'Red Flag Warning issued August 8 at 5:01PM PDT expiring August 11 at 11:00PM PDT by NWS Sacramento CA',
        description:
          'Wind will increase Thursday afternoon through Saturday evening\nas a low pressure system passes through Northern California.\nLocal gusts up to 35 mph will be possible, particularly during\nthe afternoons and early evenings over higher elevations. These\nwinds when coupled with low humidity levels will bring critical\nfire weather conditions. Highest threat areas include the Carr\nFire, the Mendocino Complex and over exposed ridges.\nThe National Weather Service in Sacramento has issued a Red Flag\nWarning, which is in effect from 11 AM Friday to 11 PM PDT\nSaturday. The Fire Weather Watch is no longer in effect.\n\n* WIND...Local west to southwest ridgetop wind gusts 25 to 35\nmph Friday afternoon into Saturday evening.\n\n* HUMIDITY...Afternoon minimum humidities of 10 to 20 percent\nare expected with overnight humidity recoveries as low as 35\nto 40 percent.\n\n* HIGHEST THREAT...Over exposed ridges.\n\n* IMPACTS...Any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          VTEC: ['/O.CON.KSTO.FW.W.0005.180810T1800Z-180812T0600Z/'],
          PIL: ['STORFWSTO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038130-2714085',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3038130-2714085',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3038130-2714085',
        areaDesc:
          'Eastern Portion of Shasta/Trinity NF; Lake County Portion of Lake-Nappa-Sonoma RU; Northern Sierra Including Lassen NP and Plumas and Lassen NF/S West of the Sierra Crest - West of Evans Peak/Grizzly Peak/Beckworth Peak; E Mendocino NF; Southern and Eastern Mendocino NF/Southeast Edge Shasta/Trinity NF and Western Portions of Tahima/Glenn RU; Central Sacramento Valley including Glenn/Colusa/Yuba/Northern Sutter/Butte County Below 1000 Ft; Northern Sacramento Valley to Southern Tehama County Line Below 1000 Ft; Burney Basin and Northeast Plateau in Shasta County Including Northwest Lassen NF north of Lassen NP; Northern Sierra Foothills from 1000 to 3000 Ft. Includes Nevada-Yuba-Placer RU and Anador-Eldorado RU',
        geocode: {
          UGC: [
            'CAZ213',
            'CAZ264',
            'CAZ268',
            'CAZ279',
            'CAZ263',
            'CAZ216',
            'CAZ215',
            'CAZ214',
            'CAZ266'
          ],
          SAME: [
            '006089',
            '006105',
            '006113',
            '006011',
            '006033',
            '006055',
            '006097',
            '006045',
            '006115',
            '006063',
            '006091',
            '006103',
            '006035',
            '006007',
            '006021',
            '006061',
            '006101',
            '006057'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/CAZ213',
          'https://api.weather.gov/zones/fire/CAZ264',
          'https://api.weather.gov/zones/fire/CAZ268',
          'https://api.weather.gov/zones/fire/CAZ279',
          'https://api.weather.gov/zones/fire/CAZ263',
          'https://api.weather.gov/zones/fire/CAZ216',
          'https://api.weather.gov/zones/fire/CAZ215',
          'https://api.weather.gov/zones/fire/CAZ214',
          'https://api.weather.gov/zones/fire/CAZ266'
        ],
        references: [
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037416-2713688',
            identifier: 'NWS-IDP-PROD-3037416-2713688',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T13:22:00-07:00'
          },
          {
            '@id':
              'https://api.weather.gov/alerts/NWS-IDP-PROD-3037416-2713689',
            identifier: 'NWS-IDP-PROD-3037416-2713689',
            sender: 'w-nws.webmaster@noaa.gov',
            sent: '2018-08-08T13:22:00-07:00'
          }
        ],
        sent: '2018-08-08T17:01:00-07:00',
        effective: '2018-08-08T17:01:00-07:00',
        onset: '2018-08-09T14:00:00-07:00',
        expires: '2018-08-09T17:15:00-07:00',
        ends: '2018-08-11T23:00:00-07:00',
        status: 'Actual',
        messageType: 'Update',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Red Flag Warning',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Sacramento CA',
        headline:
          'Red Flag Warning issued August 8 at 5:01PM PDT expiring August 11 at 11:00PM PDT by NWS Sacramento CA',
        description:
          'Wind will increase Thursday afternoon through Saturday evening\nas a low pressure system passes through Northern California.\nLocal gusts up to 35 mph will be possible, particularly during\nthe afternoons and early evenings over higher elevations. These\nwinds when coupled with low humidity levels will bring critical\nfire weather conditions. Highest threat areas include the Carr\nFire, the Mendocino Complex and over exposed ridges.\nThe National Weather Service in Sacramento has issued a Red Flag\nWarning, which is in effect from 2 PM Thursday to 11 PM PDT\nSaturday. The Fire Weather Watch is no longer in effect.\n\n* WIND...Local south to southwest ridgetop wind gusts 25 to 35\nmph Thursday afternoon into Saturday evening. Valley winds\ngusting to 25 mph.\n\n* HUMIDITY...Afternoon minimum humidities of 10 to 20 percent\nare expected with overnight humidity recoveries as low as 30\nto 40 percent.\n\n* HIGHEST THREAT...Near the Mendocino Complex Fires, Carr Fire,\nand over exposed ridges.\n\n* IMPACTS...Any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'RED FLAG WARNING IN EFFECT FROM 2 PM THURSDAY TO 11 PM PDT SATURDAY FOR VERY DRY AND LOCALLY GUSTY WINDS FOR FIRE WEATHER ZONES 213, 214, 215, 216, 263, 264, 266, 268, AND 279'
          ],
          VTEC: ['/O.CON.KSTO.FW.W.0005.180809T2100Z-180812T0600Z/'],
          PIL: ['STORFWSTO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T23:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037850-2713916',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037850-2713916',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3037850-2713916',
        areaDesc:
          'Siskiyou County from the Cascade Mountains East and South to Mt Shasta',
        geocode: {
          UGC: ['CAZ284'],
          SAME: ['006089', '006093', '006049', '041035']
        },
        affectedZones: ['https://api.weather.gov/zones/fire/CAZ284'],
        references: [],
        sent: '2018-08-08T15:21:00-07:00',
        effective: '2018-08-08T15:21:00-07:00',
        onset: '2018-08-10T13:00:00-07:00',
        expires: '2018-08-09T07:00:00-07:00',
        ends: '2018-08-10T21:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Medford OR',
        headline:
          'Fire Weather Watch issued August 8 at 3:21PM PDT expiring August 10 at 9:00PM PDT by NWS Medford OR',
        description:
          'Approaching low pressure will begin to break down the upper level\nridge over the region late this week. This will result in strong\nand gusty southerly winds with low RH leading to the potential for\nwind driven fire.\nThe National Weather Service in Medford has issued a Fire Weather\nWatch...which is in effect from Friday afternoon through Friday\nevening.\n\n* Impacts:  Strong, gusty wind with low relative humidity and high\nfire danger will likely contribute to a significant spread of new\nand existing fires.\n\n* Affected area:\nIn Northern CA...Fire Weather Zone 284 eastward from Macdoel and\nTennant.\n\n* For a detailed view of the advisory area, go to\nhttps://www.wrh.noaa.gov/map/?wfo=mfr\n\n* Wind: Southwest 15 to 25 mph with gusts 25 to 40 mph.\n\n* Humidity: 7 to 15 percent.\n\n* Counties affected:\nIn Northern CA...Siskiyou.',
        instruction: '',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH IN EFFECT FROM FRIDAY AFTERNOON THROUGH FRIDAY EVENING FOR STRONG GUSTY WIND WITH LOW RH FOR FIRE WEATHER ZONE 284'
          ],
          VTEC: ['/O.EXA.KMFR.FW.A.0011.180810T2000Z-180811T0400Z/'],
          PIL: ['MFRRFWMFR'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T21:00:00-07:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037771-2713866',
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-142.75999999999999, 63.280000000000001],
            [-142.73999999999998, 63.259999999999998],
            [-142.75999999999999, 63.259999999999998],
            [-142.78, 63.280000000000001],
            [-142.75999999999999, 63.280000000000001]
          ]
        ]
      },
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037771-2713866',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3037771-2713866',
        areaDesc: 'Upper Tanana Valley and the Fortymile Country',
        geocode: {
          UGC: ['AKZ224'],
          SAME: ['002290', '002261', '002240', '002090']
        },
        affectedZones: ['https://api.weather.gov/zones/forecast/AKZ224'],
        references: [],
        sent: '2018-08-08T14:00:00-08:00',
        effective: '2018-08-08T14:00:00-08:00',
        onset: '2018-08-08T14:00:00-08:00',
        expires: '2018-08-10T14:00:00-08:00',
        ends: '2018-08-10T14:00:00-08:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Flood Advisory',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Fairbanks AK',
        headline:
          'Flood Advisory issued August 8 at 1:56PM AKDT expiring August 10 at 2:00PM AKDT by NWS Fairbanks AK',
        description:
          'The National Weather Service in Fairbanks has issued a\n\n* Flood Advisory for...\nTetlin Village road around mile 6...\n\n* Until 200 PM AKDT Friday.\n\n* At 156 PM AKDT, Heavy rains over the past couple days are moving\ninto the Tanana River and the river is flowing out of its banks\ncausing minor flooding along the road. The flooding is expected to\npersist through the weekend.',
        instruction: '',
        response: 'Avoid',
        parameters: {
          VTEC: ['/O.NEW.PAFG.FA.Y.0011.180808T2200Z-180810T2200Z/'],
          PIL: ['AFGFLSAFG'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T14:00:00-08:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037384-2713668',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037384-2713668',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3037384-2713668',
        areaDesc:
          'Western Lolo National Forest; Kootenai National Forest/Talley Lake District/fnf; Clearwater/Nezperce National Forest; Palouse/Nezperce Reservation/Hells Canyon  Region',
        geocode: {
          UGC: ['MTZ106', 'MTZ104', 'IDZ103', 'IDZ102'],
          SAME: [
            '016079',
            '030053',
            '030061',
            '030063',
            '030089',
            '030029',
            '016049',
            '016035',
            '016021',
            '016017',
            '030047',
            '030081',
            '053075',
            '016009',
            '016057',
            '016061',
            '016069',
            '016003',
            '041063',
            '053003'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/MTZ106',
          'https://api.weather.gov/zones/fire/MTZ104',
          'https://api.weather.gov/zones/fire/IDZ103',
          'https://api.weather.gov/zones/fire/IDZ102'
        ],
        references: [],
        sent: '2018-08-08T14:13:00-06:00',
        effective: '2018-08-08T14:13:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-09T14:15:00-06:00',
        ends: '2018-08-11T21:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Missoula MT',
        headline:
          'Fire Weather Watch issued August 8 at 2:13PM MDT expiring August 11 at 9:00PM MDT by NWS Missoula MT',
        description:
          '* Affected area:\nFire Zone 102 (Palouse/Hells Canyon).\nFire Zone 103 (Clearwater/Nez Perce).\nFire Zone 104 (Kootenai).\nFire Zone 106 (West Lolo).\n\n* Impacts: Near record high temperatures are expected Friday with\na Haines Index of 6. This hot, dry, and unstable period will be\nfollowed by limited overnight humidity recoveries on Friday\nnight and then a dry cold front on Saturday. This front will\nresult in an increase in westerly winds while low relative\nhumidity values continue into Saturday afternoon.\n\n* Winds: Sustained winds 10 to 15 mph with gust to 20 mph on\nFriday afternoon and evening. Shifting to the west 10 to 15 mph\nwith gust to 25 mph on Saturday.\n\n* Minimum humidities: 8 to 18 percent on Friday. 15 to 25 percent\non Saturday.\n\n* Haines: 6 on Friday.',
        instruction: '',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH IN EFFECT FROM FRIDAY AFTERNOON THROUGH SATURDAY EVENING'
          ],
          VTEC: ['/O.NEW.KMSO.FW.A.0004.180810T1800Z-180812T0300Z/'],
          PIL: ['MSORFWMSO'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-11T21:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037300-2713646',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037300-2713646',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3037300-2713646',
        areaDesc:
          'East Salmon River Mountains/Salmon NF; Lemhi and Lost River Range/Challis NF',
        geocode: {
          UGC: ['IDZ475', 'IDZ476'],
          SAME: [
            '030001',
            '016037',
            '016085',
            '016015',
            '016049',
            '016059',
            '030081',
            '016033',
            '016023',
            '016013'
          ]
        },
        affectedZones: [
          'https://api.weather.gov/zones/fire/IDZ475',
          'https://api.weather.gov/zones/fire/IDZ476'
        ],
        references: [],
        sent: '2018-08-08T13:55:00-06:00',
        effective: '2018-08-08T13:55:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-09T06:00:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pocatello ID',
        headline:
          'Fire Weather Watch issued August 8 at 1:55PM MDT expiring August 12 at 12:00AM MDT by NWS Pocatello ID',
        description:
          'The National Weather Service in Pocatello has issued a Fire\nWeather Watch, which is in effect from Friday afternoon through\nSaturday evening.\n\n* AFFECTED AREA...Fire weather zone 475 and Fire weather zone\n476.\n\n* HAINES...6 on Friday.\n\n* WIND...Ridgetop wind gusts around 25 mph Friday and Friday\nevening. Widespread gusts 25 to 35 mph, with ridgetop gusts\naround 40 mph again on Saturday.\n\n* HUMIDITY...7 to 13 percent Friday. 9 to 16 percent Saturday.\nPoor humidity recovery at ridgetop of 20 to 35 percent in some\nareas.\n\n\n* IMPACTS...any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A fire weather watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible\nRed Flag Warnings.',
        response: 'Prepare',
        parameters: {
          NWSheadline: [
            'FIRE WEATHER WATCH IN EFFECT FROM FRIDAY AFTERNOON THROUGH SATURDAY EVENING FOR HAINES 6, GUSTY WINDS/LOW HUMIDITY FRIDAY AND GUSTY WINDS/LOW HUMIDITY SATURDAY FOR FIRE WEATHER ZONES 475 AND 476'
          ],
          VTEC: ['/O.NEW.KPIH.FW.A.0002.180810T1800Z-180812T0600Z/'],
          PIL: ['PIHRFWPIH'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037301-2713647',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3037301-2713647',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3037301-2713647',
        areaDesc: 'Sawtooth Range/Northern Sawtooth NF',
        geocode: {
          UGC: ['IDZ422'],
          SAME: [
            '016037',
            '016015',
            '016023',
            '016039',
            '016025',
            '016063',
            '016013'
          ]
        },
        affectedZones: ['https://api.weather.gov/zones/fire/IDZ422'],
        references: [],
        sent: '2018-08-08T13:55:00-06:00',
        effective: '2018-08-08T13:55:00-06:00',
        onset: '2018-08-10T12:00:00-06:00',
        expires: '2018-08-09T06:00:00-06:00',
        ends: '2018-08-12T00:00:00-06:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Severe',
        certainty: 'Possible',
        urgency: 'Future',
        event: 'Fire Weather Watch',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Pocatello ID',
        headline:
          'Fire Weather Watch issued August 8 at 1:55PM MDT expiring August 12 at 12:00AM MDT by NWS Pocatello ID',
        description:
          'The National Weather Service in Pocatello has issued a Fire\nWeather Watch, which is in effect from Friday afternoon through\nSaturday evening.\n40\n* AFFECTED AREA...Fire weather zone 422.\n\n* HAINES...6 on Friday.\n\n* WIND...Ridgetop wind gusts 20 to 25 mph Friday afternoon and\nevening. Widespread gusts 25 to 35 mph Saturday, locally higher\non ridgetops.\n\n* HUMIDITY...7 to 13 percent Friday. Friday night 10 to 17 percent\nSaturday. Poor humidity recovery at 20 to 35 percent within\nthermal belts.\n\n* IMPACTS...any fires that develop will likely spread rapidly.\nOutdoor burning is not recommended.',
        instruction:
          'A fire weather watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible\nRed Flag Warnings.',
        response: 'Prepare',
        parameters: {
          VTEC: ['/O.NEW.KPIH.FW.A.0002.180810T1800Z-180812T0600Z/'],
          PIL: ['PIHRFWPIH'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-12T00:00:00-06:00']
        }
      }
    },
    {
      id: 'https://api.weather.gov/alerts/NWS-IDP-PROD-3029184-2710337',
      type: 'Feature',
      geometry: null,
      properties: {
        '@id': 'https://api.weather.gov/alerts/NWS-IDP-PROD-3029184-2710337',
        '@type': 'wx:Alert',
        id: 'NWS-IDP-PROD-3029184-2710337',
        areaDesc:
          'Los Angeles County Coast including Downtown Los Angeles; Santa Barbara County South Coast; San Luis Obispo County Central Coast; Santa Barbara County Central Coast; Ventura County Coast; Catalina and Santa Barbara Islands',
        geocode: {
          UGC: ['CAZ041', 'CAZ039', 'CAZ034', 'CAZ035', 'CAZ040', 'CAZ087'],
          SAME: ['006037', '006083', '006079', '006111']
        },
        affectedZones: [
          'https://api.weather.gov/zones/forecast/CAZ041',
          'https://api.weather.gov/zones/forecast/CAZ039',
          'https://api.weather.gov/zones/forecast/CAZ034',
          'https://api.weather.gov/zones/forecast/CAZ035',
          'https://api.weather.gov/zones/forecast/CAZ040',
          'https://api.weather.gov/zones/forecast/CAZ087'
        ],
        references: [],
        sent: '2018-08-05T04:12:00-07:00',
        effective: '2018-08-05T04:12:00-07:00',
        onset: '2018-08-09T12:00:00-07:00',
        expires: '2018-08-05T19:15:00-07:00',
        ends: '2018-08-10T20:00:00-07:00',
        status: 'Actual',
        messageType: 'Alert',
        category: 'Met',
        severity: 'Minor',
        certainty: 'Likely',
        urgency: 'Expected',
        event: 'Coastal Flood Statement',
        sender: 'w-nws.webmaster@noaa.gov',
        senderName: 'NWS Los Angeles/Oxnard CA',
        headline:
          'Coastal Flood Statement issued August 5 at 4:12AM PDT expiring August 10 at 8:00PM PDT by NWS Los Angeles/Oxnard CA',
        description:
          '.There is a potential for high surf, strong RIP currents and high\ntides over 7 feet later this week. South to southwest facing\nbeaches will see the highest surf. There will be potential for\nlocal beach erosion and minor flooding of beach parking lots.\nFurther statements will be issued as this surf event approaches.',
        instruction: '',
        response: 'Monitor',
        parameters: {
          NWSheadline: [
            'THERE WILL BE THE POTENTIAL FOR HIGH SURF ACROSS SOUTH FACING BEACHES AND ASTRONOMICAL HIGH TIDES LATE THIS WEEK'
          ],
          VTEC: ['/O.NEW.KLOX.CF.S.0001.180809T1900Z-180811T0300Z/'],
          PIL: ['LOXCFWLOX'],
          BLOCKCHANNEL: ['CMAS', 'EAS', 'NWEM'],
          eventEndingTime: ['2018-08-10T20:00:00-07:00']
        }
      }
    }
  ],
  title: 'Current watches, warnings, and advisories',
  updated: '2018-08-10T13:25:18+00:00'
}
