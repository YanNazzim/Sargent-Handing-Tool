// src/data.js

export const productData = {
  "exitDevices": [
    {
      series: "8300 Series",
      description: "Sargent 8300 Series Exit Devices.",
      functions: [
        {
          functionCode: "8304",
          handing: "handed", // or "reversible"
          explanation: "This function is handed due to the specific trim interaction requiring precise orientation.",
          visuals: {
            lh: "/images/lh_door.png", // Placeholder for LH image
            rh: "/images/rh_door.png", // Placeholder for RH image
            lhr: "/images/lhr_door.png", // Placeholder for LHR image
            rhr: "/images/rhr_door.png", // Placeholder for RHR image
          }
        },
        {
          functionCode: "8310",
          handing: "reversible",
          explanation: "This function is fully reversible and does not require specific handing.",
          visuals: {
            generic: "/images/logo.png" // Placeholder for reversible image
          }
        }
      ]
    },
    {
      series: "8400 Series",
      description: "Sargent 8400 Series Exit Devices.",
      functions: [
        {
          functionCode: "8404",
          handing: "reversible",
          explanation: "This function is fully reversible and does not require specific handing.",
          visuals: {
            generic: "/images/reversible_door.png"
          }
        },
        {
          functionCode: "8413",
          handing: "handed",
          explanation: "This function is handed because of the internal mechanism's orientation.",
          visuals: {
            lh: "/images/lh_door.png",
            rh: "/images/rh_door.png",
            lhr: "/images/lhr_door.png",
            rhr: "/images/rhr_door.png",
          }
        }
      ]
    },
    {
        series: "8500 Series",
        description: "Sargent 8500 Series Exit Devices.",
        functions: [
          {
            functionCode: "8504",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: "/images/reversible_door.png"
            }
          }
        ]
      },
      {
        series: "8600 Series",
        description: "Sargent 8600 Series Exit Devices.",
        functions: [
          {
            functionCode: "8604",
            handing: "handed",
            explanation: "This function is handed because of the specific cylinder engagement.",
            visuals: {
              lh: "/images/lh_door.png",
              rh: "/images/rh_door.png",
              lhr: "/images/lhr_door.png",
              rhr: "/images/rhr_door.png",
            }
          }
        ]
      },
      {
        series: "8700 Series",
        description: "Sargent 8700 Series Exit Devices.",
        functions: [
          {
            functionCode: "8704",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: "/images/reversible_door.png"
            }
          }
        ]
      },
      {
        series: "8800 Series",
        description: "Sargent 8800 Series Exit Devices.",
        functions: [
          {
            functionCode: "8804",
            handing: "handed",
            explanation: "This function is handed due to the specific trim design.",
            visuals: {
              lh: "/images/lh_door.png",
              rh: "/images/rh_door.png",
              lhr: "/images/lhr_door.png",
              rhr: "/images/rhr_door.png",
            }
          }
        ]
      },
      {
        series: "8900 Series",
        description: "Sargent 8900 Series Exit Devices.",
        functions: [
          {
            functionCode: "8904",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: "/images/reversible_door.png"
            }
          }
        ]
      }
    // Add more exit device series and functions here
  ],
  "mortiseLocks": [
    {
      type: "All Mortise Locks",
      handing: "handed",
      explanation: "Mortise locks are inherently handed due to the design of the latchbolt and auxiliary latch. You must specify LH, RH, LHR, or RHR.",
      visuals: {
        lh: "/images/lh_door.png",
        rh: "/images/rh_door.png",
        lhr: "/images/lhr_door.png",
        rhr: "/images/rhr_door.png",
      }
    }
  ],
  "boredLocks": [
    {
      type: "All Bored Locks",
      handing: "reversible",
      explanation: "Bored locks are typically reversible in the field and do not require specific handing unless a specific trim requires it.",
      visuals: {
        generic: "/images/reversible_door.png"
      }
    }
  ]
};