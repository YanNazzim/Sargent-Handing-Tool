// src/data.js

import { Images } from './images/images'; // Import the Images object

export const productData = {
  "exitDevices": [
    {
      series: "8300 Series",
      category: "80 Series",
      description: "Sargent 8300 Series Narrow Design Mortise Lock Exit Devices.",
      functions: [
        {
          functionCode: "8304",
          handing: "handed",
          explanation: "This function is handed; Night Latch with Key Retracts Latch feature.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8310",
          handing: "reversible",
          explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8313",
          handing: "handed",
          explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8315",
          handing: "reversible",
          explanation: "This function is fully reversible; Passage Only.", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8340",
          handing: "reversible",
          explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8343",
          handing: "handed",
          explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8344",
          handing: "handed",
          explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8375",
          handing: "handed",
          explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8376",
          handing: "handed",
          explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
      ]
    },
    {
      series: "8400 Series",
      category: "80 Series",
      description: "Sargent 8400 Series Narrow Design Concealed Vertical Rod Exit Devices.", // 
      functions: [
        {
          functionCode: "8404", // This was existing, kept as reversible to match original pattern.
          handing: "reversible",
          explanation: "This function is fully reversible and does not require specific handing.",
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8406",
          handing: "handed",
          explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8410",
          handing: "reversible",
          explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8413",
          handing: "handed",
          explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8415",
          handing: "reversible",
          explanation: "This function is fully reversible; Passage Only.", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8440",
          handing: "reversible",
          explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8443",
          handing: "handed",
          explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8446",
          handing: "handed",
          explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.", // 
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        },
        {
          functionCode: "8473",
          handing: "reversible",
          explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.", // 
          visuals: {
            generic: Images.reversible
          }
        },
        {
          functionCode: "8474",
          handing: "reversible",
          explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.", // 
          visuals: {
            generic: Images.reversible
          }
        },
      ]
    },
    {
        series: "8500 Series",
        category: "80 Series",
        description: "Sargent 8500 Series Narrow Design Rim Exit Devices.", // 
        functions: [
          {
            functionCode: "8504",
            handing: "handed", // Corrected to handed based on function description
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8506",
            handing: "handed",
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8510",
            handing: "reversible",
            explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8513",
            handing: "handed",
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8515",
            handing: "reversible",
            explanation: "This function is fully reversible; Passage Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8540",
            handing: "reversible",
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8543",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8544",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8546",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8573",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8574",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.", // 
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "8600 Series",
        category: "80 Series",
        description: "Sargent 8600 Series Concealed Vertical Rod Exit Devices.", // Covers MD, AD, WD, LP, LR, LS 8600 variants. 
        functions: [
          {
            functionCode: "8604", // Existing, kept as handed.
            handing: "handed",
            explanation: "This function is handed because of the specific cylinder engagement.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8606",
            handing: "handed",
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8610",
            handing: "reversible",
            explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8613",
            handing: "handed",
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8615",
            handing: "reversible",
            explanation: "This function is fully reversible; Passage Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8640",
            handing: "reversible",
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8643",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8646",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8673",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8674",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.", // 
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "8700 Series",
        category: "80 Series",
        description: "Sargent 8700 Series Surface Vertical Rod Exit Devices.", // Covers NB8700, HC4-8700, HC8700, FM8700 variants. 
        functions: [
          {
            functionCode: "8704", // Existing, kept as reversible.
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8706",
            handing: "handed",
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8710",
            handing: "reversible",
            explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8713",
            handing: "handed",
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8715",
            handing: "reversible",
            explanation: "This function is fully reversible; Passage Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8740",
            handing: "reversible",
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8743",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8746",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8773",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8774",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.", // 
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "8800 Series",
        category: "80 Series",
        description: "Sargent 8800 Series Rim Exit Devices.", // Covers 8888/8810, HC8800, WS8800 variants. 
        functions: [
          {
            functionCode: "8804",
            handing: "handed",
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8806",
            handing: "handed",
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8810",
            handing: "reversible",
            explanation: "This function is fully reversible; No outside operation or Pull Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8813",
            handing: "handed",
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8815",
            handing: "reversible",
            explanation: "This function is fully reversible; Passage Only.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8816",
            handing: "handed",
            explanation: "This function is handed; Key Outside Retracts Latch and Key Inside Unlocks/Locks Outside Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8840",
            handing: "reversible",
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8843",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8844",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8846",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8873",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8874",
            handing: "reversible",
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.", // 
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "8875",
            handing: "handed",
            explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8876",
            handing: "handed",
            explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
        ]
      },
      {
        series: "8900 Series",
        category: "80 Series",
        description: "Sargent 8900 Series Mortise Lock Exit Devices.", // Covers WS8900 variant. 
        functions: [
          {
            functionCode: "8904",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8906",
            handing: "handed",
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8910",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; No outside operation or Pull Only.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8913",
            handing: "handed",
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8915",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; Passage Only.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8916",
            handing: "handed",
            explanation: "This function is handed; Key Outside Retracts Latch, Key Inside Unlocks/Locks Outside Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8940",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; Freewheeling Trim with No outside operation (Dummy Trim).", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8943",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8944",
            handing: "handed",
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8975",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "8976",
            handing: "handed", // Corrected: 8900 series is explicitly handed 
            explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.", // 
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
        ]
      },
      {
        series: "PE8300 Series",
        category: "PE80 Series",
        description: "Sargent PE8300 Series Exit Devices (PE version of 8300 Series).",
        functions: [
          {
            functionCode: "PE8304",
            handing: "handed", // Mirrors 8304
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8310",
            handing: "reversible", // Mirrors 8310
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8313",
            handing: "handed", // Mirrors 8313
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8315",
            handing: "reversible", // Mirrors 8315
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8340",
            handing: "reversible", // Mirrors 8340
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8343",
            handing: "handed", // Mirrors 8343
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8344",
            handing: "handed", // Mirrors 8344
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8375",
            handing: "handed", // Mirrors 8375
            explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8376",
            handing: "handed", // Mirrors 8376
            explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
        ]
      },
      {
        series: "PE8400 Series",
        category: "PE80 Series",
        description: "Sargent PE8400 Series Exit Devices (PE version of 8400 Series).",
        functions: [
          {
            functionCode: "PE8404",
            handing: "reversible", // Mirrors 8404
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8406",
            handing: "handed", // Mirrors 8406
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8410",
            handing: "reversible", // Mirrors 8410
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8413",
            handing: "handed", // Mirrors 8413
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8415",
            handing: "reversible", // Mirrors 8415
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8440",
            handing: "reversible", // Mirrors 8440
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8443",
            handing: "handed", // Mirrors 8443
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8446",
            handing: "handed", // Mirrors 8446
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8473",
            handing: "reversible", // Mirrors 8473
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8474",
            handing: "reversible", // Mirrors 8474
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.",
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "PE8500 Series",
        category: "PE80 Series",
        description: "Sargent PE8500 Series Exit Devices (PE version of 8500 Series).",
        functions: [
          {
            functionCode: "PE8504",
            handing: "handed", // Mirrors 8504
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8506",
            handing: "handed", // Mirrors 8506
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8510",
            handing: "reversible", // Mirrors 8510
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8513",
            handing: "handed", // Mirrors 8513
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8515",
            handing: "reversible", // Mirrors 8515
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8540",
            handing: "reversible", // Mirrors 8540
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8543",
            handing: "handed", // Mirrors 8543
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8544",
            handing: "handed", // Mirrors 8544
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8546",
            handing: "handed", // Mirrors 8546
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8573",
            handing: "reversible", // Mirrors 8573
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8574",
            handing: "reversible", // Mirrors 8574
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.",
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "PE8600 Series",
        category: "PE80 Series",
        description: "Sargent PE8600 Series Exit Devices (PE version of 8600 Series).",
        functions: [
          {
            functionCode: "PE8604",
            handing: "handed", // Mirrors 8604
            explanation: "This function is handed because of the specific cylinder engagement.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8606",
            handing: "handed", // Mirrors 8606
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8610",
            handing: "reversible", // Mirrors 8610
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8613",
            handing: "handed", // Mirrors 8613
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8615",
            handing: "reversible", // Mirrors 8615
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8640",
            handing: "reversible", // Mirrors 8640
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8643",
            handing: "handed", // Mirrors 8643
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8646",
            handing: "handed", // Mirrors 8646
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8673",
            handing: "reversible", // Mirrors 8673
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8674",
            handing: "reversible", // Mirrors 8674
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.",
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "PE8700 Series",
        category: "PE80 Series",
        description: "Sargent PE8700 Series Exit Devices (PE version of 8700 Series).",
        functions: [
          {
            functionCode: "PE8704",
            handing: "reversible", // Mirrors 8704
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8706",
            handing: "handed", // Mirrors 8706
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8710",
            handing: "reversible", // Mirrors 8710
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8713",
            handing: "handed", // Mirrors 8713
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8715",
            handing: "reversible", // Mirrors 8715
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8740",
            handing: "reversible", // Mirrors 8740
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8743",
            handing: "handed", // Mirrors 8743
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8746",
            handing: "handed", // Mirrors 8746
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8773",
            handing: "reversible", // Mirrors 8773
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8774",
            handing: "reversible", // Mirrors 8774
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.",
            visuals: {
              generic: Images.reversible
            }
          },
        ]
      },
      {
        series: "PE8800 Series",
        category: "PE80 Series",
        description: "Sargent PE8800 Series Exit Devices (PE version of 8800 Series).",
        functions: [
          {
            functionCode: "PE8804",
            handing: "handed", // Mirrors 8804
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8806",
            handing: "handed", // Mirrors 8806
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8810",
            handing: "reversible", // Mirrors 8810
            explanation: "This function is fully reversible; No outside operation or Pull Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8813",
            handing: "handed", // Mirrors 8813
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8815",
            handing: "reversible", // Mirrors 8815
            explanation: "This function is fully reversible; Passage Only.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8816",
            handing: "handed", // Mirrors 8816
            explanation: "This function is handed; Key Outside Retracts Latch and Key Inside Unlocks/Locks Outside Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8840",
            handing: "reversible", // Mirrors 8840
            explanation: "This function is fully reversible; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8843",
            handing: "handed", // Mirrors 8843
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8844",
            handing: "handed", // Mirrors 8844
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8846",
            handing: "handed", // Mirrors 8846
            explanation: "This function is handed; Freewheeling Trim with Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8873",
            handing: "reversible", // Mirrors 8873
            explanation: "This function is fully reversible; Electrified ET Trim Fail Safe.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8874",
            handing: "reversible", // Mirrors 8874
            explanation: "This function is fully reversible; Electrified ET Trim Fail Secure.",
            visuals: {
              generic: Images.reversible
            }
          },
          {
            functionCode: "PE8875",
            handing: "handed", // Mirrors 8875
            explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8876",
            handing: "handed", // Mirrors 8876
            explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
        ]
      },
      {
        series: "PE8900 Series",
        category: "PE80 Series",
        description: "Sargent PE8900 Series Exit Devices (PE version of 8900 Series).",
        functions: [
          {
            functionCode: "PE8904",
            handing: "handed", // Mirrors 8904
            explanation: "This function is handed; Night Latch with Key Retracts Latch feature.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8906",
            handing: "handed", // Mirrors 8906
            explanation: "This function is handed; Key unlocks Trim and Trim retracts latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8910",
            handing: "handed", // Mirrors 8910
            explanation: "This function is handed; No outside operation or Pull Only.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8913",
            handing: "handed", // Mirrors 8913
            explanation: "This function is handed; Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8915",
            handing: "handed", // Mirrors 8915
            explanation: "This function is handed; Passage Only.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8916",
            handing: "handed", // Mirrors 8916
            explanation: "This function is handed; Key Outside Retracts Latch and Key Inside Unlocks/Locks Outside Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8940",
            handing: "handed", // Mirrors 8940
            explanation: "This function is handed; Freewheeling Trim with No outside operation (Dummy Trim).",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8943",
            handing: "handed", // Mirrors 8943
            explanation: "This function is handed; Freewheeling Trim with Key Outside Unlocks/locks Trim.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8944",
            handing: "handed", // Mirrors 8944
            explanation: "This function is handed; Freewheeling Trim with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8975",
            handing: "handed", // Mirrors 8975
            explanation: "This function is handed; Electrified ET Trim Fail Safe with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
          {
            functionCode: "PE8976",
            handing: "handed", // Mirrors 8976
            explanation: "This function is handed; Electrified ET Trim Fail Secure with Key Retracts Latch.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          },
        ]
      },
  ],
  "mortiseLocks": [
    {
      type: "All Mortise Locks",
      handing: "handed",
      explanation: "Mortise locks are inherently handed due to the design of the latchbolt and auxiliary latch. You must specify LH, RH, LHR, or RHR.",
      visuals: {
        lh: Images.lh,
        rh: Images.rh,
        lhr: Images.lhr,
        rhr: Images.rhr,
      }
    }
  ],
  "boredLocks": [
    {
      type: "All Bored Locks",
      handing: "reversible",
      explanation: "Bored locks are typically reversible in the field and do not require specific handing unless a specific trim requires it.",
      visuals: {
        generic: Images.reversible
      }
    }
  ]
};