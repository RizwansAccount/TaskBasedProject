import { StyleSheet } from "react-native"
import themeStyles from "./themeStyles"
const fontFamily = {
    semibold:'Manrope-SemiBold',
    medium:'Manrope-Medium',
    regular:'Manrope-Regular',
    bold:'Manrope-Bold',
  }
 const globalStyles = StyleSheet.create({
    shadowDefault:{
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 5,
        elevation:5 
    },
    fontFamilyBold: { fontFamily: fontFamily.bold },
    fontFamilyMedium: { fontFamily: fontFamily.medium },
    fontFamilyRegular: { fontFamily: fontFamily.regular },
    fontFamilySemiBold: { fontFamily: fontFamily.semibold},

    h1R : { fontFamily: fontFamily.regular, fontSize: 32, color:themeStyles.LIGHT },
    h1B : { fontFamily: fontFamily.bold, fontSize: 32, color:themeStyles.LIGHT },
    h1T : { fontFamily: fontFamily.semibold, fontSize: 32, color:themeStyles.LIGHT },
    h1M : { fontFamily: fontFamily.medium, fontSize: 32, color:themeStyles.LIGHT },

    h2R : { fontFamily: fontFamily.regular, fontSize: 28, color:themeStyles.LIGHT },
    h2B : { fontFamily: fontFamily.bold, fontSize: 28, color:themeStyles.LIGHT },
    h2T : { fontFamily: fontFamily.semibold, fontSize: 28, color:themeStyles.LIGHT },
    h2M : { fontFamily: fontFamily.medium, fontSize: 28, color:themeStyles.LIGHT },

    h3R : { fontFamily: fontFamily.regular, fontSize: 24, color:themeStyles.LIGHT },
    h3B : { fontFamily: fontFamily.bold, fontSize: 24, color:themeStyles.LIGHT },
    h3T : { fontFamily: fontFamily.semibold, fontSize: 24, color:themeStyles.LIGHT },
    h3M : { fontFamily: fontFamily.medium, fontSize: 24, color:themeStyles.LIGHT },

    h4R : { fontFamily: fontFamily.regular, fontSize: 20, color:themeStyles.LIGHT },
    h4B : { fontFamily: fontFamily.bold, fontSize: 20, color:themeStyles.LIGHT },
    h4T : { fontFamily: fontFamily.semibold, fontSize: 20, color:themeStyles.LIGHT },
    h4M : { fontFamily: fontFamily.medium, fontSize: 20, color:themeStyles.LIGHT },

    h5R : { fontFamily: fontFamily.regular, fontSize: 18, color:themeStyles.LIGHT },
    h5B : { fontFamily: fontFamily.bold, fontSize: 18, color:themeStyles.LIGHT },
    h5T : { fontFamily: fontFamily.semibold, fontSize: 18, color:themeStyles.LIGHT },
    h5M : { fontFamily: fontFamily.medium, fontSize: 18, color:themeStyles.LIGHT },

    h6R : { fontFamily: fontFamily.regular, fontSize: 16, color:themeStyles.LIGHT },
    h6B : { fontFamily: fontFamily.bold, fontSize: 16, color:themeStyles.LIGHT },
    h6T : { fontFamily: fontFamily.semibold, fontSize: 16, color:themeStyles.LIGHT },
    h6M : { fontFamily: fontFamily.medium, fontSize: 16, color:themeStyles.LIGHT },

    h7R : { fontFamily: fontFamily.regular, fontSize: 14, color:themeStyles.LIGHT },
    h7B : { fontFamily: fontFamily.bold, fontSize: 14, color:themeStyles.LIGHT },
    h7T : { fontFamily: fontFamily.semibold, fontSize: 14, color:themeStyles.LIGHT },
    h7M : { fontFamily: fontFamily.medium, fontSize: 14, color:themeStyles.LIGHT },
 })
 export default globalStyles