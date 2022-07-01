const smartgrid = require('smart-grid')

module.exports = function grid(done) {
    smartgrid('app/styles/libs/',  {
        outputStyle: "sass",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width
        mobileFirst: false,
        detailedCalc: true,
        container: {
            maxWidth: "1570px",
            fields: "15px" // side fields
        },
        breakPoints: {
            xs: {
                width: "320px"
            },
            mobile_s: {
                width: "375px"
            },
            mobile_m: {
                width: "425px"
            },
            sm: {
                width: "576px"
            },
            md: {
                width: "768px"
            },
            lg: {
                width: "992px"
            },
            xl: {
                width: "1200px"
            },
            sm_desktop: {
                width: "1366px"
            },
            small_desktop: {
                width: "1440px"
            },
            md_desktop: {
                width: "1600px"
            },
            medium_desktop: {
                width: "1700px"
            }
        }
    })

    done()
}