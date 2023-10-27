type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  border: string;
  playarea: string;
  tileText: string;
  text: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f9f9f9',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 94.0%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 89.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  '#FDFAE7',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  '#BEADA5',
  '#D8C1B3',
  '#807F82',
  '#776E65',
  'rgba(0,0,0,0.066)',
  'rgba(0,0,0,0.02)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(214, 65.8%, 17.9%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(40, 55.0%, 13.5%, 0)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(155, 40.0%, 14.0%, 0)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(211, 100%, 15.0%, 0)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(272, 66.0%, 16.0%, 0)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(320, 70.0%, 13.5%, 0)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(354, 50.0%, 14.6%, 0)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(53, 100%, 91.0%, 0)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(137, 72.0%, 94.0%, 0)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(206, 98.0%, 95.8%, 0)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(279, 75.0%, 95.7%, 0)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(322, 90.0%, 95.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(351, 89.0%, 96.0%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
  'transparent',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'border',
'playarea',
'tileText',
'text',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 2],[14, 3],[15, 4],[16, 0],[17, 13],[18, 11],[19, 10],[20, 11],[21, 10],[22, 14],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 15],[29, 16],[30, 17],[31, 18],[32, 19],[33, 20],[34, 21],[35, 22],[36, 23],[37, 24],[38, 25],[39, 26],[40, 27],[41, 2],[42, 3],[43, 28],[44, 29],[45, 30],[46, 31],[47, 32],[48, 8],[49, 33],[50, 34],[51, 11],[52, 35],[53, 36],[54, 37],[55, 38],[56, 39],[57, 40],[58, 41],[59, 42],[60, 43],[61, 44],[62, 45],[63, 46],[64, 47],[65, 48],[66, 49],[67, 50],[68, 51],[69, 52],[70, 53],[71, 54],[72, 55],[73, 56],[74, 57],[75, 58],[76, 59],[77, 60],[78, 61],[79, 62],[80, 63],[81, 64],[82, 65],[83, 66],[84, 67],[85, 68],[86, 69],[87, 70],[88, 71],[89, 72],[90, 73],[91, 74],[92, 75],[93, 76],[94, 77],[95, 78],[96, 79],[97, 80],[98, 81],[99, 82],[100, 83],[101, 84],[102, 85],[103, 86],[104, 87],[105, 88],[106, 89],[107, 90],[108, 91],[109, 92],[110, 93],[111, 94],[112, 95],[113, 96],[114, 97],[115, 98],[116, 99],[117, 100],[118, 101],[119, 102],[120, 103],[121, 104],[122, 105],[123, 106],[124, 107],[125, 108],[126, 109],[127, 110],[128, 111],[129, 111],[130, 112],[131, 112]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 113],[1, 114],[2, 115],[3, 116],[4, 117],[5, 118],[6, 119],[7, 120],[8, 121],[9, 122],[10, 123],[11, 0],[12, 12],[13, 115],[14, 116],[15, 117],[16, 113],[17, 14],[18, 0],[19, 123],[20, 0],[21, 123],[22, 13],[23, 117],[24, 118],[25, 116],[26, 117],[27, 121],[28, 124],[29, 125],[30, 126],[31, 127],[32, 128],[33, 129],[34, 130],[35, 131],[36, 23],[37, 132],[38, 133],[39, 134],[40, 135],[41, 136],[42, 137],[43, 138],[44, 139],[45, 140],[46, 141],[47, 142],[48, 143],[49, 144],[50, 145],[51, 28],[52, 146],[53, 147],[54, 148],[55, 149],[56, 150],[57, 151],[58, 152],[59, 153],[60, 43],[61, 154],[62, 155],[63, 156],[64, 157],[65, 158],[66, 159],[67, 160],[68, 161],[69, 162],[70, 163],[71, 164],[72, 55],[73, 165],[74, 166],[75, 167],[76, 168],[77, 169],[78, 170],[79, 171],[80, 172],[81, 173],[82, 174],[83, 175],[84, 67],[85, 176],[86, 177],[87, 178],[88, 179],[89, 180],[90, 181],[91, 182],[92, 183],[93, 184],[94, 185],[95, 186],[96, 79],[97, 187],[98, 188],[99, 189],[100, 190],[101, 191],[102, 192],[103, 193],[104, 194],[105, 195],[106, 196],[107, 197],[108, 91],[109, 198],[110, 199],[111, 200],[112, 201],[113, 202],[114, 203],[115, 204],[116, 205],[117, 206],[118, 207],[119, 208],[120, 103],[121, 209],[122, 210],[123, 211],[124, 107],[125, 108],[126, 109],[127, 110],[128, 212],[129, 212],[130, 213],[131, 213]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 47],[1, 48],[2, 49],[3, 50],[4, 51],[5, 52],[6, 54],[7, 55],[8, 56],[9, 57],[10, 58],[11, 11],[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 214],[18, 11],[19, 58],[20, 11],[21, 58],[22, 215],[23, 50],[24, 51],[25, 50],[26, 50],[27, 56]]) as Theme

export const light_orange = n3 as Theme
const n4 = t([[0, 95],[1, 96],[2, 97],[3, 98],[4, 99],[5, 100],[6, 102],[7, 103],[8, 104],[9, 105],[10, 106],[11, 11],[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 216],[18, 11],[19, 106],[20, 11],[21, 106],[22, 217],[23, 98],[24, 99],[25, 98],[26, 98],[27, 104]]) as Theme

export const light_yellow = n4 as Theme
const n5 = t([[0, 35],[1, 36],[2, 37],[3, 38],[4, 39],[5, 40],[6, 42],[7, 43],[8, 44],[9, 45],[10, 46],[11, 11],[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 218],[18, 11],[19, 46],[20, 11],[21, 46],[22, 219],[23, 38],[24, 39],[25, 38],[26, 38],[27, 44]]) as Theme

export const light_green = n5 as Theme
const n6 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 20],[6, 22],[7, 23],[8, 24],[9, 25],[10, 26],[11, 11],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 220],[18, 11],[19, 26],[20, 11],[21, 26],[22, 221],[23, 18],[24, 19],[25, 18],[26, 18],[27, 24]]) as Theme

export const light_blue = n6 as Theme
const n7 = t([[0, 71],[1, 72],[2, 73],[3, 74],[4, 75],[5, 76],[6, 78],[7, 79],[8, 80],[9, 81],[10, 82],[11, 11],[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 222],[18, 11],[19, 82],[20, 11],[21, 82],[22, 223],[23, 74],[24, 75],[25, 74],[26, 74],[27, 80]]) as Theme

export const light_purple = n7 as Theme
const n8 = t([[0, 59],[1, 60],[2, 61],[3, 62],[4, 63],[5, 64],[6, 66],[7, 67],[8, 68],[9, 69],[10, 70],[11, 11],[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 224],[18, 11],[19, 70],[20, 11],[21, 70],[22, 225],[23, 62],[24, 63],[25, 62],[26, 62],[27, 68]]) as Theme

export const light_pink = n8 as Theme
const n9 = t([[0, 83],[1, 84],[2, 85],[3, 86],[4, 87],[5, 88],[6, 90],[7, 91],[8, 92],[9, 93],[10, 94],[11, 11],[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 226],[18, 11],[19, 94],[20, 11],[21, 94],[22, 227],[23, 86],[24, 87],[25, 86],[26, 86],[27, 92]]) as Theme

export const light_red = n9 as Theme
const n10 = t([[0, 157],[1, 158],[2, 159],[3, 160],[4, 161],[5, 162],[6, 164],[7, 55],[8, 165],[9, 166],[10, 167],[11, 0],[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 228],[18, 0],[19, 167],[20, 0],[21, 167],[22, 229],[23, 161],[24, 162],[25, 160],[26, 161],[27, 165]]) as Theme

export const dark_orange = n10 as Theme
export const dark_orange_ListItem = n10 as Theme
const n11 = t([[0, 201],[1, 202],[2, 203],[3, 204],[4, 205],[5, 206],[6, 208],[7, 103],[8, 209],[9, 210],[10, 211],[11, 0],[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 230],[18, 0],[19, 211],[20, 0],[21, 211],[22, 231],[23, 205],[24, 206],[25, 204],[26, 205],[27, 209]]) as Theme

export const dark_yellow = n11 as Theme
export const dark_yellow_ListItem = n11 as Theme
const n12 = t([[0, 146],[1, 147],[2, 148],[3, 149],[4, 150],[5, 151],[6, 153],[7, 43],[8, 154],[9, 155],[10, 156],[11, 0],[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 232],[18, 0],[19, 156],[20, 0],[21, 156],[22, 233],[23, 150],[24, 151],[25, 149],[26, 150],[27, 154]]) as Theme

export const dark_green = n12 as Theme
export const dark_green_ListItem = n12 as Theme
const n13 = t([[0, 124],[1, 125],[2, 126],[3, 127],[4, 128],[5, 129],[6, 131],[7, 23],[8, 132],[9, 133],[10, 134],[11, 0],[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 234],[18, 0],[19, 134],[20, 0],[21, 134],[22, 235],[23, 128],[24, 129],[25, 127],[26, 128],[27, 132]]) as Theme

export const dark_blue = n13 as Theme
export const dark_blue_ListItem = n13 as Theme
const n14 = t([[0, 179],[1, 180],[2, 181],[3, 182],[4, 183],[5, 184],[6, 186],[7, 79],[8, 187],[9, 188],[10, 189],[11, 0],[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 236],[18, 0],[19, 189],[20, 0],[21, 189],[22, 237],[23, 183],[24, 184],[25, 182],[26, 183],[27, 187]]) as Theme

export const dark_purple = n14 as Theme
export const dark_purple_ListItem = n14 as Theme
const n15 = t([[0, 168],[1, 169],[2, 170],[3, 171],[4, 172],[5, 173],[6, 175],[7, 67],[8, 176],[9, 177],[10, 178],[11, 0],[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 238],[18, 0],[19, 178],[20, 0],[21, 178],[22, 239],[23, 172],[24, 173],[25, 171],[26, 172],[27, 176]]) as Theme

export const dark_pink = n15 as Theme
export const dark_pink_ListItem = n15 as Theme
const n16 = t([[0, 190],[1, 191],[2, 192],[3, 193],[4, 194],[5, 195],[6, 197],[7, 91],[8, 198],[9, 199],[10, 200],[11, 0],[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 240],[18, 0],[19, 200],[20, 0],[21, 200],[22, 241],[23, 194],[24, 195],[25, 193],[26, 194],[27, 198]]) as Theme

export const dark_red = n16 as Theme
export const dark_red_ListItem = n16 as Theme
const n17 = t([[12, 242]]) as Theme

export const light_SheetOverlay = n17 as Theme
export const light_DialogOverlay = n17 as Theme
export const light_ModalOverlay = n17 as Theme
export const light_orange_SheetOverlay = n17 as Theme
export const light_orange_DialogOverlay = n17 as Theme
export const light_orange_ModalOverlay = n17 as Theme
export const light_yellow_SheetOverlay = n17 as Theme
export const light_yellow_DialogOverlay = n17 as Theme
export const light_yellow_ModalOverlay = n17 as Theme
export const light_green_SheetOverlay = n17 as Theme
export const light_green_DialogOverlay = n17 as Theme
export const light_green_ModalOverlay = n17 as Theme
export const light_blue_SheetOverlay = n17 as Theme
export const light_blue_DialogOverlay = n17 as Theme
export const light_blue_ModalOverlay = n17 as Theme
export const light_purple_SheetOverlay = n17 as Theme
export const light_purple_DialogOverlay = n17 as Theme
export const light_purple_ModalOverlay = n17 as Theme
export const light_pink_SheetOverlay = n17 as Theme
export const light_pink_DialogOverlay = n17 as Theme
export const light_pink_ModalOverlay = n17 as Theme
export const light_red_SheetOverlay = n17 as Theme
export const light_red_DialogOverlay = n17 as Theme
export const light_red_ModalOverlay = n17 as Theme
export const light_alt1_SheetOverlay = n17 as Theme
export const light_alt1_DialogOverlay = n17 as Theme
export const light_alt1_ModalOverlay = n17 as Theme
export const light_alt2_SheetOverlay = n17 as Theme
export const light_alt2_DialogOverlay = n17 as Theme
export const light_alt2_ModalOverlay = n17 as Theme
export const light_active_SheetOverlay = n17 as Theme
export const light_active_DialogOverlay = n17 as Theme
export const light_active_ModalOverlay = n17 as Theme
export const light_orange_alt1_SheetOverlay = n17 as Theme
export const light_orange_alt1_DialogOverlay = n17 as Theme
export const light_orange_alt1_ModalOverlay = n17 as Theme
export const light_orange_alt2_SheetOverlay = n17 as Theme
export const light_orange_alt2_DialogOverlay = n17 as Theme
export const light_orange_alt2_ModalOverlay = n17 as Theme
export const light_orange_active_SheetOverlay = n17 as Theme
export const light_orange_active_DialogOverlay = n17 as Theme
export const light_orange_active_ModalOverlay = n17 as Theme
export const light_yellow_alt1_SheetOverlay = n17 as Theme
export const light_yellow_alt1_DialogOverlay = n17 as Theme
export const light_yellow_alt1_ModalOverlay = n17 as Theme
export const light_yellow_alt2_SheetOverlay = n17 as Theme
export const light_yellow_alt2_DialogOverlay = n17 as Theme
export const light_yellow_alt2_ModalOverlay = n17 as Theme
export const light_yellow_active_SheetOverlay = n17 as Theme
export const light_yellow_active_DialogOverlay = n17 as Theme
export const light_yellow_active_ModalOverlay = n17 as Theme
export const light_green_alt1_SheetOverlay = n17 as Theme
export const light_green_alt1_DialogOverlay = n17 as Theme
export const light_green_alt1_ModalOverlay = n17 as Theme
export const light_green_alt2_SheetOverlay = n17 as Theme
export const light_green_alt2_DialogOverlay = n17 as Theme
export const light_green_alt2_ModalOverlay = n17 as Theme
export const light_green_active_SheetOverlay = n17 as Theme
export const light_green_active_DialogOverlay = n17 as Theme
export const light_green_active_ModalOverlay = n17 as Theme
export const light_blue_alt1_SheetOverlay = n17 as Theme
export const light_blue_alt1_DialogOverlay = n17 as Theme
export const light_blue_alt1_ModalOverlay = n17 as Theme
export const light_blue_alt2_SheetOverlay = n17 as Theme
export const light_blue_alt2_DialogOverlay = n17 as Theme
export const light_blue_alt2_ModalOverlay = n17 as Theme
export const light_blue_active_SheetOverlay = n17 as Theme
export const light_blue_active_DialogOverlay = n17 as Theme
export const light_blue_active_ModalOverlay = n17 as Theme
export const light_purple_alt1_SheetOverlay = n17 as Theme
export const light_purple_alt1_DialogOverlay = n17 as Theme
export const light_purple_alt1_ModalOverlay = n17 as Theme
export const light_purple_alt2_SheetOverlay = n17 as Theme
export const light_purple_alt2_DialogOverlay = n17 as Theme
export const light_purple_alt2_ModalOverlay = n17 as Theme
export const light_purple_active_SheetOverlay = n17 as Theme
export const light_purple_active_DialogOverlay = n17 as Theme
export const light_purple_active_ModalOverlay = n17 as Theme
export const light_pink_alt1_SheetOverlay = n17 as Theme
export const light_pink_alt1_DialogOverlay = n17 as Theme
export const light_pink_alt1_ModalOverlay = n17 as Theme
export const light_pink_alt2_SheetOverlay = n17 as Theme
export const light_pink_alt2_DialogOverlay = n17 as Theme
export const light_pink_alt2_ModalOverlay = n17 as Theme
export const light_pink_active_SheetOverlay = n17 as Theme
export const light_pink_active_DialogOverlay = n17 as Theme
export const light_pink_active_ModalOverlay = n17 as Theme
export const light_red_alt1_SheetOverlay = n17 as Theme
export const light_red_alt1_DialogOverlay = n17 as Theme
export const light_red_alt1_ModalOverlay = n17 as Theme
export const light_red_alt2_SheetOverlay = n17 as Theme
export const light_red_alt2_DialogOverlay = n17 as Theme
export const light_red_alt2_ModalOverlay = n17 as Theme
export const light_red_active_SheetOverlay = n17 as Theme
export const light_red_active_DialogOverlay = n17 as Theme
export const light_red_active_ModalOverlay = n17 as Theme
const n18 = t([[12, 243]]) as Theme

export const dark_SheetOverlay = n18 as Theme
export const dark_DialogOverlay = n18 as Theme
export const dark_ModalOverlay = n18 as Theme
export const dark_orange_SheetOverlay = n18 as Theme
export const dark_orange_DialogOverlay = n18 as Theme
export const dark_orange_ModalOverlay = n18 as Theme
export const dark_yellow_SheetOverlay = n18 as Theme
export const dark_yellow_DialogOverlay = n18 as Theme
export const dark_yellow_ModalOverlay = n18 as Theme
export const dark_green_SheetOverlay = n18 as Theme
export const dark_green_DialogOverlay = n18 as Theme
export const dark_green_ModalOverlay = n18 as Theme
export const dark_blue_SheetOverlay = n18 as Theme
export const dark_blue_DialogOverlay = n18 as Theme
export const dark_blue_ModalOverlay = n18 as Theme
export const dark_purple_SheetOverlay = n18 as Theme
export const dark_purple_DialogOverlay = n18 as Theme
export const dark_purple_ModalOverlay = n18 as Theme
export const dark_pink_SheetOverlay = n18 as Theme
export const dark_pink_DialogOverlay = n18 as Theme
export const dark_pink_ModalOverlay = n18 as Theme
export const dark_red_SheetOverlay = n18 as Theme
export const dark_red_DialogOverlay = n18 as Theme
export const dark_red_ModalOverlay = n18 as Theme
export const dark_alt1_SheetOverlay = n18 as Theme
export const dark_alt1_DialogOverlay = n18 as Theme
export const dark_alt1_ModalOverlay = n18 as Theme
export const dark_alt2_SheetOverlay = n18 as Theme
export const dark_alt2_DialogOverlay = n18 as Theme
export const dark_alt2_ModalOverlay = n18 as Theme
export const dark_active_SheetOverlay = n18 as Theme
export const dark_active_DialogOverlay = n18 as Theme
export const dark_active_ModalOverlay = n18 as Theme
export const dark_orange_alt1_SheetOverlay = n18 as Theme
export const dark_orange_alt1_DialogOverlay = n18 as Theme
export const dark_orange_alt1_ModalOverlay = n18 as Theme
export const dark_orange_alt2_SheetOverlay = n18 as Theme
export const dark_orange_alt2_DialogOverlay = n18 as Theme
export const dark_orange_alt2_ModalOverlay = n18 as Theme
export const dark_orange_active_SheetOverlay = n18 as Theme
export const dark_orange_active_DialogOverlay = n18 as Theme
export const dark_orange_active_ModalOverlay = n18 as Theme
export const dark_yellow_alt1_SheetOverlay = n18 as Theme
export const dark_yellow_alt1_DialogOverlay = n18 as Theme
export const dark_yellow_alt1_ModalOverlay = n18 as Theme
export const dark_yellow_alt2_SheetOverlay = n18 as Theme
export const dark_yellow_alt2_DialogOverlay = n18 as Theme
export const dark_yellow_alt2_ModalOverlay = n18 as Theme
export const dark_yellow_active_SheetOverlay = n18 as Theme
export const dark_yellow_active_DialogOverlay = n18 as Theme
export const dark_yellow_active_ModalOverlay = n18 as Theme
export const dark_green_alt1_SheetOverlay = n18 as Theme
export const dark_green_alt1_DialogOverlay = n18 as Theme
export const dark_green_alt1_ModalOverlay = n18 as Theme
export const dark_green_alt2_SheetOverlay = n18 as Theme
export const dark_green_alt2_DialogOverlay = n18 as Theme
export const dark_green_alt2_ModalOverlay = n18 as Theme
export const dark_green_active_SheetOverlay = n18 as Theme
export const dark_green_active_DialogOverlay = n18 as Theme
export const dark_green_active_ModalOverlay = n18 as Theme
export const dark_blue_alt1_SheetOverlay = n18 as Theme
export const dark_blue_alt1_DialogOverlay = n18 as Theme
export const dark_blue_alt1_ModalOverlay = n18 as Theme
export const dark_blue_alt2_SheetOverlay = n18 as Theme
export const dark_blue_alt2_DialogOverlay = n18 as Theme
export const dark_blue_alt2_ModalOverlay = n18 as Theme
export const dark_blue_active_SheetOverlay = n18 as Theme
export const dark_blue_active_DialogOverlay = n18 as Theme
export const dark_blue_active_ModalOverlay = n18 as Theme
export const dark_purple_alt1_SheetOverlay = n18 as Theme
export const dark_purple_alt1_DialogOverlay = n18 as Theme
export const dark_purple_alt1_ModalOverlay = n18 as Theme
export const dark_purple_alt2_SheetOverlay = n18 as Theme
export const dark_purple_alt2_DialogOverlay = n18 as Theme
export const dark_purple_alt2_ModalOverlay = n18 as Theme
export const dark_purple_active_SheetOverlay = n18 as Theme
export const dark_purple_active_DialogOverlay = n18 as Theme
export const dark_purple_active_ModalOverlay = n18 as Theme
export const dark_pink_alt1_SheetOverlay = n18 as Theme
export const dark_pink_alt1_DialogOverlay = n18 as Theme
export const dark_pink_alt1_ModalOverlay = n18 as Theme
export const dark_pink_alt2_SheetOverlay = n18 as Theme
export const dark_pink_alt2_DialogOverlay = n18 as Theme
export const dark_pink_alt2_ModalOverlay = n18 as Theme
export const dark_pink_active_SheetOverlay = n18 as Theme
export const dark_pink_active_DialogOverlay = n18 as Theme
export const dark_pink_active_ModalOverlay = n18 as Theme
export const dark_red_alt1_SheetOverlay = n18 as Theme
export const dark_red_alt1_DialogOverlay = n18 as Theme
export const dark_red_alt1_ModalOverlay = n18 as Theme
export const dark_red_alt2_SheetOverlay = n18 as Theme
export const dark_red_alt2_DialogOverlay = n18 as Theme
export const dark_red_alt2_ModalOverlay = n18 as Theme
export const dark_red_active_SheetOverlay = n18 as Theme
export const dark_red_active_DialogOverlay = n18 as Theme
export const dark_red_active_ModalOverlay = n18 as Theme
const n19 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt1 = n19 as Theme
const n20 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt2 = n20 as Theme
const n21 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 14],[10, 14],[11, 14],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_active = n21 as Theme
const n22 = t([[0, 114],[1, 115],[2, 116],[3, 117],[4, 118],[5, 119],[6, 120],[7, 121],[8, 122],[9, 123],[10, 0],[11, 0],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 123],[19, 122],[20, 123],[21, 122],[22, 0],[23, 118],[24, 119],[25, 117],[26, 118],[27, 120]]) as Theme

export const dark_alt1 = n22 as Theme
export const dark_alt1_ListItem = n22 as Theme
const n23 = t([[0, 115],[1, 116],[2, 117],[3, 118],[4, 119],[5, 120],[6, 121],[7, 122],[8, 123],[9, 0],[10, 0],[11, 0],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 122],[19, 121],[20, 122],[21, 121],[22, 123],[23, 119],[24, 120],[25, 118],[26, 119],[27, 119]]) as Theme

export const dark_alt2 = n23 as Theme
export const dark_alt2_ListItem = n23 as Theme
const n24 = t([[0, 116],[1, 117],[2, 118],[3, 119],[4, 120],[5, 121],[6, 122],[7, 123],[8, 0],[9, 13],[10, 13],[11, 13],[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[19, 120],[20, 121],[21, 120],[22, 122],[23, 120],[24, 121],[25, 119],[26, 120],[27, 118]]) as Theme

export const dark_active = n24 as Theme
export const dark_active_ListItem = n24 as Theme
const n25 = t([[0, 48],[1, 49],[2, 50],[3, 51],[4, 52],[5, 54],[6, 55],[7, 56],[8, 57],[9, 58],[10, 11],[11, 11],[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 47],[18, 58],[19, 57],[20, 58],[21, 57],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 55]]) as Theme

export const light_orange_alt1 = n25 as Theme
const n26 = t([[0, 49],[1, 50],[2, 51],[3, 52],[4, 54],[5, 55],[6, 56],[7, 57],[8, 58],[9, 11],[10, 11],[11, 11],[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[18, 57],[19, 56],[20, 57],[21, 56],[22, 58],[23, 52],[24, 54],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_alt2 = n26 as Theme
const n27 = t([[0, 50],[1, 51],[2, 52],[3, 54],[4, 55],[5, 56],[6, 57],[7, 58],[8, 11],[9, 215],[10, 215],[11, 215],[12, 51],[13, 52],[14, 54],[15, 55],[16, 50],[17, 49],[19, 55],[20, 56],[21, 55],[22, 57],[23, 54],[24, 55],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_active = n27 as Theme
const n28 = t([[0, 96],[1, 97],[2, 98],[3, 99],[4, 100],[5, 102],[6, 103],[7, 104],[8, 105],[9, 106],[10, 11],[11, 11],[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 95],[18, 106],[19, 105],[20, 106],[21, 105],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 103]]) as Theme

export const light_yellow_alt1 = n28 as Theme
const n29 = t([[0, 97],[1, 98],[2, 99],[3, 100],[4, 102],[5, 103],[6, 104],[7, 105],[8, 106],[9, 11],[10, 11],[11, 11],[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[18, 105],[19, 104],[20, 105],[21, 104],[22, 106],[23, 100],[24, 102],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_alt2 = n29 as Theme
const n30 = t([[0, 98],[1, 99],[2, 100],[3, 102],[4, 103],[5, 104],[6, 105],[7, 106],[8, 11],[9, 217],[10, 217],[11, 217],[12, 99],[13, 100],[14, 102],[15, 103],[16, 98],[17, 97],[19, 103],[20, 104],[21, 103],[22, 105],[23, 102],[24, 103],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_active = n30 as Theme
const n31 = t([[0, 36],[1, 37],[2, 38],[3, 39],[4, 40],[5, 42],[6, 43],[7, 44],[8, 45],[9, 46],[10, 11],[11, 11],[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 35],[18, 46],[19, 45],[20, 46],[21, 45],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 43]]) as Theme

export const light_green_alt1 = n31 as Theme
const n32 = t([[0, 37],[1, 38],[2, 39],[3, 40],[4, 42],[5, 43],[6, 44],[7, 45],[8, 46],[9, 11],[10, 11],[11, 11],[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[18, 45],[19, 44],[20, 45],[21, 44],[22, 46],[23, 40],[24, 42],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_alt2 = n32 as Theme
const n33 = t([[0, 38],[1, 39],[2, 40],[3, 42],[4, 43],[5, 44],[6, 45],[7, 46],[8, 11],[9, 219],[10, 219],[11, 219],[12, 39],[13, 40],[14, 42],[15, 43],[16, 38],[17, 37],[19, 43],[20, 44],[21, 43],[22, 45],[23, 42],[24, 43],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_active = n33 as Theme
const n34 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 20],[5, 22],[6, 23],[7, 24],[8, 25],[9, 26],[10, 11],[11, 11],[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 26],[19, 25],[20, 26],[21, 25],[22, 11],[23, 19],[24, 20],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_alt1 = n34 as Theme
const n35 = t([[0, 17],[1, 18],[2, 19],[3, 20],[4, 22],[5, 23],[6, 24],[7, 25],[8, 26],[9, 11],[10, 11],[11, 11],[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 26],[23, 20],[24, 22],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_alt2 = n35 as Theme
const n36 = t([[0, 18],[1, 19],[2, 20],[3, 22],[4, 23],[5, 24],[6, 25],[7, 26],[8, 11],[9, 221],[10, 221],[11, 221],[12, 19],[13, 20],[14, 22],[15, 23],[16, 18],[17, 17],[19, 23],[20, 24],[21, 23],[22, 25],[23, 22],[24, 23],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_active = n36 as Theme
const n37 = t([[0, 72],[1, 73],[2, 74],[3, 75],[4, 76],[5, 78],[6, 79],[7, 80],[8, 81],[9, 82],[10, 11],[11, 11],[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 71],[18, 82],[19, 81],[20, 82],[21, 81],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 79]]) as Theme

export const light_purple_alt1 = n37 as Theme
const n38 = t([[0, 73],[1, 74],[2, 75],[3, 76],[4, 78],[5, 79],[6, 80],[7, 81],[8, 82],[9, 11],[10, 11],[11, 11],[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[18, 81],[19, 80],[20, 81],[21, 80],[22, 82],[23, 76],[24, 78],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_alt2 = n38 as Theme
const n39 = t([[0, 74],[1, 75],[2, 76],[3, 78],[4, 79],[5, 80],[6, 81],[7, 82],[8, 11],[9, 223],[10, 223],[11, 223],[12, 75],[13, 76],[14, 78],[15, 79],[16, 74],[17, 73],[19, 79],[20, 80],[21, 79],[22, 81],[23, 78],[24, 79],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_active = n39 as Theme
const n40 = t([[0, 60],[1, 61],[2, 62],[3, 63],[4, 64],[5, 66],[6, 67],[7, 68],[8, 69],[9, 70],[10, 11],[11, 11],[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 59],[18, 70],[19, 69],[20, 70],[21, 69],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 67]]) as Theme

export const light_pink_alt1 = n40 as Theme
const n41 = t([[0, 61],[1, 62],[2, 63],[3, 64],[4, 66],[5, 67],[6, 68],[7, 69],[8, 70],[9, 11],[10, 11],[11, 11],[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[18, 69],[19, 68],[20, 69],[21, 68],[22, 70],[23, 64],[24, 66],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_alt2 = n41 as Theme
const n42 = t([[0, 62],[1, 63],[2, 64],[3, 66],[4, 67],[5, 68],[6, 69],[7, 70],[8, 11],[9, 225],[10, 225],[11, 225],[12, 63],[13, 64],[14, 66],[15, 67],[16, 62],[17, 61],[19, 67],[20, 68],[21, 67],[22, 69],[23, 66],[24, 67],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_active = n42 as Theme
const n43 = t([[0, 84],[1, 85],[2, 86],[3, 87],[4, 88],[5, 90],[6, 91],[7, 92],[8, 93],[9, 94],[10, 11],[11, 11],[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 83],[18, 94],[19, 93],[20, 94],[21, 93],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 91]]) as Theme

export const light_red_alt1 = n43 as Theme
const n44 = t([[0, 85],[1, 86],[2, 87],[3, 88],[4, 90],[5, 91],[6, 92],[7, 93],[8, 94],[9, 11],[10, 11],[11, 11],[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[18, 93],[19, 92],[20, 93],[21, 92],[22, 94],[23, 88],[24, 90],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_alt2 = n44 as Theme
const n45 = t([[0, 86],[1, 87],[2, 88],[3, 90],[4, 91],[5, 92],[6, 93],[7, 94],[8, 11],[9, 227],[10, 227],[11, 227],[12, 87],[13, 88],[14, 90],[15, 91],[16, 86],[17, 85],[19, 91],[20, 92],[21, 91],[22, 93],[23, 90],[24, 91],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_active = n45 as Theme
const n46 = t([[0, 158],[1, 159],[2, 160],[3, 161],[4, 162],[5, 164],[6, 55],[7, 165],[8, 166],[9, 167],[10, 0],[11, 0],[12, 159],[13, 160],[14, 161],[15, 162],[16, 158],[17, 157],[18, 167],[19, 166],[20, 167],[21, 166],[22, 0],[23, 162],[24, 164],[25, 161],[26, 162],[27, 55]]) as Theme

export const dark_orange_alt1 = n46 as Theme
export const dark_orange_alt1_ListItem = n46 as Theme
const n47 = t([[0, 159],[1, 160],[2, 161],[3, 162],[4, 164],[5, 55],[6, 165],[7, 166],[8, 167],[9, 0],[10, 0],[11, 0],[12, 160],[13, 161],[14, 162],[15, 164],[16, 159],[17, 158],[18, 166],[19, 165],[20, 166],[21, 165],[22, 167],[23, 164],[24, 55],[25, 162],[26, 164],[27, 164]]) as Theme

export const dark_orange_alt2 = n47 as Theme
export const dark_orange_alt2_ListItem = n47 as Theme
const n48 = t([[0, 160],[1, 161],[2, 162],[3, 164],[4, 55],[5, 165],[6, 166],[7, 167],[8, 0],[9, 229],[10, 229],[11, 229],[12, 161],[13, 162],[14, 164],[15, 55],[16, 160],[17, 159],[19, 55],[20, 165],[21, 55],[22, 166],[23, 55],[24, 165],[25, 164],[26, 55],[27, 162]]) as Theme

export const dark_orange_active = n48 as Theme
export const dark_orange_active_ListItem = n48 as Theme
const n49 = t([[0, 202],[1, 203],[2, 204],[3, 205],[4, 206],[5, 208],[6, 103],[7, 209],[8, 210],[9, 211],[10, 0],[11, 0],[12, 203],[13, 204],[14, 205],[15, 206],[16, 202],[17, 201],[18, 211],[19, 210],[20, 211],[21, 210],[22, 0],[23, 206],[24, 208],[25, 205],[26, 206],[27, 103]]) as Theme

export const dark_yellow_alt1 = n49 as Theme
export const dark_yellow_alt1_ListItem = n49 as Theme
const n50 = t([[0, 203],[1, 204],[2, 205],[3, 206],[4, 208],[5, 103],[6, 209],[7, 210],[8, 211],[9, 0],[10, 0],[11, 0],[12, 204],[13, 205],[14, 206],[15, 208],[16, 203],[17, 202],[18, 210],[19, 209],[20, 210],[21, 209],[22, 211],[23, 208],[24, 103],[25, 206],[26, 208],[27, 208]]) as Theme

export const dark_yellow_alt2 = n50 as Theme
export const dark_yellow_alt2_ListItem = n50 as Theme
const n51 = t([[0, 204],[1, 205],[2, 206],[3, 208],[4, 103],[5, 209],[6, 210],[7, 211],[8, 0],[9, 231],[10, 231],[11, 231],[12, 205],[13, 206],[14, 208],[15, 103],[16, 204],[17, 203],[19, 103],[20, 209],[21, 103],[22, 210],[23, 103],[24, 209],[25, 208],[26, 103],[27, 206]]) as Theme

export const dark_yellow_active = n51 as Theme
export const dark_yellow_active_ListItem = n51 as Theme
const n52 = t([[0, 147],[1, 148],[2, 149],[3, 150],[4, 151],[5, 153],[6, 43],[7, 154],[8, 155],[9, 156],[10, 0],[11, 0],[12, 148],[13, 149],[14, 150],[15, 151],[16, 147],[17, 146],[18, 156],[19, 155],[20, 156],[21, 155],[22, 0],[23, 151],[24, 153],[25, 150],[26, 151],[27, 43]]) as Theme

export const dark_green_alt1 = n52 as Theme
export const dark_green_alt1_ListItem = n52 as Theme
const n53 = t([[0, 148],[1, 149],[2, 150],[3, 151],[4, 153],[5, 43],[6, 154],[7, 155],[8, 156],[9, 0],[10, 0],[11, 0],[12, 149],[13, 150],[14, 151],[15, 153],[16, 148],[17, 147],[18, 155],[19, 154],[20, 155],[21, 154],[22, 156],[23, 153],[24, 43],[25, 151],[26, 153],[27, 153]]) as Theme

export const dark_green_alt2 = n53 as Theme
export const dark_green_alt2_ListItem = n53 as Theme
const n54 = t([[0, 149],[1, 150],[2, 151],[3, 153],[4, 43],[5, 154],[6, 155],[7, 156],[8, 0],[9, 233],[10, 233],[11, 233],[12, 150],[13, 151],[14, 153],[15, 43],[16, 149],[17, 148],[19, 43],[20, 154],[21, 43],[22, 155],[23, 43],[24, 154],[25, 153],[26, 43],[27, 151]]) as Theme

export const dark_green_active = n54 as Theme
export const dark_green_active_ListItem = n54 as Theme
const n55 = t([[0, 125],[1, 126],[2, 127],[3, 128],[4, 129],[5, 131],[6, 23],[7, 132],[8, 133],[9, 134],[10, 0],[11, 0],[12, 126],[13, 127],[14, 128],[15, 129],[16, 125],[17, 124],[18, 134],[19, 133],[20, 134],[21, 133],[22, 0],[23, 129],[24, 131],[25, 128],[26, 129],[27, 23]]) as Theme

export const dark_blue_alt1 = n55 as Theme
export const dark_blue_alt1_ListItem = n55 as Theme
const n56 = t([[0, 126],[1, 127],[2, 128],[3, 129],[4, 131],[5, 23],[6, 132],[7, 133],[8, 134],[9, 0],[10, 0],[11, 0],[12, 127],[13, 128],[14, 129],[15, 131],[16, 126],[17, 125],[18, 133],[19, 132],[20, 133],[21, 132],[22, 134],[23, 131],[24, 23],[25, 129],[26, 131],[27, 131]]) as Theme

export const dark_blue_alt2 = n56 as Theme
export const dark_blue_alt2_ListItem = n56 as Theme
const n57 = t([[0, 127],[1, 128],[2, 129],[3, 131],[4, 23],[5, 132],[6, 133],[7, 134],[8, 0],[9, 235],[10, 235],[11, 235],[12, 128],[13, 129],[14, 131],[15, 23],[16, 127],[17, 126],[19, 23],[20, 132],[21, 23],[22, 133],[23, 23],[24, 132],[25, 131],[26, 23],[27, 129]]) as Theme

export const dark_blue_active = n57 as Theme
export const dark_blue_active_ListItem = n57 as Theme
const n58 = t([[0, 180],[1, 181],[2, 182],[3, 183],[4, 184],[5, 186],[6, 79],[7, 187],[8, 188],[9, 189],[10, 0],[11, 0],[12, 181],[13, 182],[14, 183],[15, 184],[16, 180],[17, 179],[18, 189],[19, 188],[20, 189],[21, 188],[22, 0],[23, 184],[24, 186],[25, 183],[26, 184],[27, 79]]) as Theme

export const dark_purple_alt1 = n58 as Theme
export const dark_purple_alt1_ListItem = n58 as Theme
const n59 = t([[0, 181],[1, 182],[2, 183],[3, 184],[4, 186],[5, 79],[6, 187],[7, 188],[8, 189],[9, 0],[10, 0],[11, 0],[12, 182],[13, 183],[14, 184],[15, 186],[16, 181],[17, 180],[18, 188],[19, 187],[20, 188],[21, 187],[22, 189],[23, 186],[24, 79],[25, 184],[26, 186],[27, 186]]) as Theme

export const dark_purple_alt2 = n59 as Theme
export const dark_purple_alt2_ListItem = n59 as Theme
const n60 = t([[0, 182],[1, 183],[2, 184],[3, 186],[4, 79],[5, 187],[6, 188],[7, 189],[8, 0],[9, 237],[10, 237],[11, 237],[12, 183],[13, 184],[14, 186],[15, 79],[16, 182],[17, 181],[19, 79],[20, 187],[21, 79],[22, 188],[23, 79],[24, 187],[25, 186],[26, 79],[27, 184]]) as Theme

export const dark_purple_active = n60 as Theme
export const dark_purple_active_ListItem = n60 as Theme
const n61 = t([[0, 169],[1, 170],[2, 171],[3, 172],[4, 173],[5, 175],[6, 67],[7, 176],[8, 177],[9, 178],[10, 0],[11, 0],[12, 170],[13, 171],[14, 172],[15, 173],[16, 169],[17, 168],[18, 178],[19, 177],[20, 178],[21, 177],[22, 0],[23, 173],[24, 175],[25, 172],[26, 173],[27, 67]]) as Theme

export const dark_pink_alt1 = n61 as Theme
export const dark_pink_alt1_ListItem = n61 as Theme
const n62 = t([[0, 170],[1, 171],[2, 172],[3, 173],[4, 175],[5, 67],[6, 176],[7, 177],[8, 178],[9, 0],[10, 0],[11, 0],[12, 171],[13, 172],[14, 173],[15, 175],[16, 170],[17, 169],[18, 177],[19, 176],[20, 177],[21, 176],[22, 178],[23, 175],[24, 67],[25, 173],[26, 175],[27, 175]]) as Theme

export const dark_pink_alt2 = n62 as Theme
export const dark_pink_alt2_ListItem = n62 as Theme
const n63 = t([[0, 171],[1, 172],[2, 173],[3, 175],[4, 67],[5, 176],[6, 177],[7, 178],[8, 0],[9, 239],[10, 239],[11, 239],[12, 172],[13, 173],[14, 175],[15, 67],[16, 171],[17, 170],[19, 67],[20, 176],[21, 67],[22, 177],[23, 67],[24, 176],[25, 175],[26, 67],[27, 173]]) as Theme

export const dark_pink_active = n63 as Theme
export const dark_pink_active_ListItem = n63 as Theme
const n64 = t([[0, 191],[1, 192],[2, 193],[3, 194],[4, 195],[5, 197],[6, 91],[7, 198],[8, 199],[9, 200],[10, 0],[11, 0],[12, 192],[13, 193],[14, 194],[15, 195],[16, 191],[17, 190],[18, 200],[19, 199],[20, 200],[21, 199],[22, 0],[23, 195],[24, 197],[25, 194],[26, 195],[27, 91]]) as Theme

export const dark_red_alt1 = n64 as Theme
export const dark_red_alt1_ListItem = n64 as Theme
const n65 = t([[0, 192],[1, 193],[2, 194],[3, 195],[4, 197],[5, 91],[6, 198],[7, 199],[8, 200],[9, 0],[10, 0],[11, 0],[12, 193],[13, 194],[14, 195],[15, 197],[16, 192],[17, 191],[18, 199],[19, 198],[20, 199],[21, 198],[22, 200],[23, 197],[24, 91],[25, 195],[26, 197],[27, 197]]) as Theme

export const dark_red_alt2 = n65 as Theme
export const dark_red_alt2_ListItem = n65 as Theme
const n66 = t([[0, 193],[1, 194],[2, 195],[3, 197],[4, 91],[5, 198],[6, 199],[7, 200],[8, 0],[9, 241],[10, 241],[11, 241],[12, 194],[13, 195],[14, 197],[15, 91],[16, 193],[17, 192],[19, 91],[20, 198],[21, 91],[22, 199],[23, 91],[24, 198],[25, 197],[26, 91],[27, 195]]) as Theme

export const dark_red_active = n66 as Theme
export const dark_red_active_ListItem = n66 as Theme
const n67 = t([[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n67 as Theme
const n68 = t([[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n68 as Theme
export const light_DrawerFrame = n68 as Theme
export const light_Progress = n68 as Theme
export const light_TooltipArrow = n68 as Theme
const n69 = t([[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 244],[24, 244],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Button = n69 as Theme
const n70 = t([[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Checkbox = n70 as Theme
export const light_Switch = n70 as Theme
export const light_TooltipContent = n70 as Theme
export const light_SliderTrack = n70 as Theme
const n71 = t([[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n71 as Theme
const n72 = t([[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n72 as Theme
const n73 = t([[13, 9],[14, 8],[15, 7],[16, 11],[17, 14],[18, 0],[19, 1],[20, 0],[21, 1],[22, 13],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n73 as Theme
export const light_Tooltip = n73 as Theme
export const light_ProgressIndicator = n73 as Theme
const n74 = t([[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 9]]) as Theme

export const light_Input = n74 as Theme
export const light_TextArea = n74 as Theme
const n75 = t([[0, 113],[1, 114],[2, 115],[3, 116],[4, 117],[5, 118],[6, 119],[7, 120],[8, 121],[9, 122],[10, 123],[11, 0],[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 14],[18, 0],[19, 123],[20, 0],[21, 123],[22, 13],[23, 117],[24, 118],[25, 116],[26, 117],[27, 121]]) as Theme

export const dark_ListItem = n75 as Theme
const n76 = t([[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 0],[19, 123],[20, 0],[21, 123],[22, 0],[23, 118],[24, 119],[25, 117],[26, 118],[27, 120]]) as Theme

export const dark_Card = n76 as Theme
export const dark_DrawerFrame = n76 as Theme
export const dark_Progress = n76 as Theme
export const dark_TooltipArrow = n76 as Theme
const n77 = t([[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 0],[19, 123],[20, 0],[21, 123],[22, 123],[23, 244],[24, 244],[25, 118],[26, 119],[27, 119]]) as Theme

export const dark_Button = n77 as Theme
const n78 = t([[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 0],[19, 123],[20, 0],[21, 123],[22, 123],[23, 119],[24, 120],[25, 118],[26, 119],[27, 119]]) as Theme

export const dark_Checkbox = n78 as Theme
export const dark_Switch = n78 as Theme
export const dark_TooltipContent = n78 as Theme
export const dark_SliderTrack = n78 as Theme
const n79 = t([[13, 0],[14, 123],[15, 122],[16, 0],[17, 0],[18, 113],[19, 114],[20, 113],[21, 114],[22, 113],[23, 122],[24, 121],[25, 123],[26, 122],[27, 114]]) as Theme

export const dark_SwitchThumb = n79 as Theme
const n80 = t([[13, 120],[14, 119],[15, 118],[16, 122],[17, 123],[18, 113],[19, 114],[20, 113],[21, 114],[22, 114],[23, 118],[24, 117],[25, 119],[26, 118],[27, 118]]) as Theme

export const dark_SliderTrackActive = n80 as Theme
const n81 = t([[13, 122],[14, 121],[15, 120],[16, 0],[17, 13],[18, 113],[19, 114],[20, 113],[21, 114],[22, 14],[23, 120],[24, 119],[25, 121],[26, 120],[27, 116]]) as Theme

export const dark_SliderThumb = n81 as Theme
export const dark_Tooltip = n81 as Theme
export const dark_ProgressIndicator = n81 as Theme
const n82 = t([[13, 115],[14, 116],[15, 117],[16, 113],[17, 14],[18, 0],[19, 123],[20, 0],[21, 123],[22, 13],[23, 118],[24, 119],[25, 117],[26, 118],[27, 121]]) as Theme

export const dark_Input = n82 as Theme
export const dark_TextArea = n82 as Theme
const n83 = t([[12, 47],[13, 48],[14, 49],[15, 50],[16, 47],[17, 47],[18, 11],[19, 58],[20, 11],[21, 58],[22, 11],[23, 49],[24, 50],[25, 49],[26, 49],[27, 57]]) as Theme

export const light_orange_ListItem = n83 as Theme
const n84 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 47],[18, 11],[19, 58],[20, 11],[21, 58],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 55]]) as Theme

export const light_orange_Card = n84 as Theme
export const light_orange_DrawerFrame = n84 as Theme
export const light_orange_Progress = n84 as Theme
export const light_orange_TooltipArrow = n84 as Theme
const n85 = t([[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[18, 11],[19, 58],[20, 11],[21, 58],[22, 58],[23, 244],[24, 244],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_Button = n85 as Theme
const n86 = t([[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[18, 11],[19, 58],[20, 11],[21, 58],[22, 58],[23, 52],[24, 54],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_Checkbox = n86 as Theme
export const light_orange_Switch = n86 as Theme
export const light_orange_TooltipContent = n86 as Theme
export const light_orange_SliderTrack = n86 as Theme
const n87 = t([[12, 11],[13, 11],[14, 58],[15, 57],[16, 11],[17, 11],[18, 47],[19, 48],[20, 47],[21, 48],[22, 47],[23, 58],[24, 57],[25, 58],[26, 58],[27, 48]]) as Theme

export const light_orange_SwitchThumb = n87 as Theme
const n88 = t([[12, 56],[13, 55],[14, 54],[15, 52],[16, 57],[17, 58],[18, 47],[19, 48],[20, 47],[21, 48],[22, 48],[23, 54],[24, 52],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_SliderTrackActive = n88 as Theme
const n89 = t([[12, 58],[13, 57],[14, 56],[15, 55],[16, 11],[17, 215],[18, 47],[19, 48],[20, 47],[21, 48],[22, 214],[23, 56],[24, 55],[25, 56],[26, 56],[27, 50]]) as Theme

export const light_orange_SliderThumb = n89 as Theme
export const light_orange_Tooltip = n89 as Theme
export const light_orange_ProgressIndicator = n89 as Theme
const n90 = t([[12, 47],[13, 48],[14, 49],[15, 50],[16, 47],[17, 47],[18, 11],[19, 58],[20, 11],[21, 58],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 57]]) as Theme

export const light_orange_Input = n90 as Theme
export const light_orange_TextArea = n90 as Theme
const n91 = t([[12, 95],[13, 96],[14, 97],[15, 98],[16, 95],[17, 95],[18, 11],[19, 106],[20, 11],[21, 106],[22, 11],[23, 97],[24, 98],[25, 97],[26, 97],[27, 105]]) as Theme

export const light_yellow_ListItem = n91 as Theme
const n92 = t([[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 95],[18, 11],[19, 106],[20, 11],[21, 106],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 103]]) as Theme

export const light_yellow_Card = n92 as Theme
export const light_yellow_DrawerFrame = n92 as Theme
export const light_yellow_Progress = n92 as Theme
export const light_yellow_TooltipArrow = n92 as Theme
const n93 = t([[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[18, 11],[19, 106],[20, 11],[21, 106],[22, 106],[23, 244],[24, 244],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_Button = n93 as Theme
const n94 = t([[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[18, 11],[19, 106],[20, 11],[21, 106],[22, 106],[23, 100],[24, 102],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_Checkbox = n94 as Theme
export const light_yellow_Switch = n94 as Theme
export const light_yellow_TooltipContent = n94 as Theme
export const light_yellow_SliderTrack = n94 as Theme
const n95 = t([[12, 11],[13, 11],[14, 106],[15, 105],[16, 11],[17, 11],[18, 95],[19, 96],[20, 95],[21, 96],[22, 95],[23, 106],[24, 105],[25, 106],[26, 106],[27, 96]]) as Theme

export const light_yellow_SwitchThumb = n95 as Theme
const n96 = t([[12, 104],[13, 103],[14, 102],[15, 100],[16, 105],[17, 106],[18, 95],[19, 96],[20, 95],[21, 96],[22, 96],[23, 102],[24, 100],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_SliderTrackActive = n96 as Theme
const n97 = t([[12, 106],[13, 105],[14, 104],[15, 103],[16, 11],[17, 217],[18, 95],[19, 96],[20, 95],[21, 96],[22, 216],[23, 104],[24, 103],[25, 104],[26, 104],[27, 98]]) as Theme

export const light_yellow_SliderThumb = n97 as Theme
export const light_yellow_Tooltip = n97 as Theme
export const light_yellow_ProgressIndicator = n97 as Theme
const n98 = t([[12, 95],[13, 96],[14, 97],[15, 98],[16, 95],[17, 95],[18, 11],[19, 106],[20, 11],[21, 106],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 105]]) as Theme

export const light_yellow_Input = n98 as Theme
export const light_yellow_TextArea = n98 as Theme
const n99 = t([[12, 35],[13, 36],[14, 37],[15, 38],[16, 35],[17, 35],[18, 11],[19, 46],[20, 11],[21, 46],[22, 11],[23, 37],[24, 38],[25, 37],[26, 37],[27, 45]]) as Theme

export const light_green_ListItem = n99 as Theme
const n100 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 35],[18, 11],[19, 46],[20, 11],[21, 46],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 43]]) as Theme

export const light_green_Card = n100 as Theme
export const light_green_DrawerFrame = n100 as Theme
export const light_green_Progress = n100 as Theme
export const light_green_TooltipArrow = n100 as Theme
const n101 = t([[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[18, 11],[19, 46],[20, 11],[21, 46],[22, 46],[23, 244],[24, 244],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_Button = n101 as Theme
const n102 = t([[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[18, 11],[19, 46],[20, 11],[21, 46],[22, 46],[23, 40],[24, 42],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_Checkbox = n102 as Theme
export const light_green_Switch = n102 as Theme
export const light_green_TooltipContent = n102 as Theme
export const light_green_SliderTrack = n102 as Theme
const n103 = t([[12, 11],[13, 11],[14, 46],[15, 45],[16, 11],[17, 11],[18, 35],[19, 36],[20, 35],[21, 36],[22, 35],[23, 46],[24, 45],[25, 46],[26, 46],[27, 36]]) as Theme

export const light_green_SwitchThumb = n103 as Theme
const n104 = t([[12, 44],[13, 43],[14, 42],[15, 40],[16, 45],[17, 46],[18, 35],[19, 36],[20, 35],[21, 36],[22, 36],[23, 42],[24, 40],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_SliderTrackActive = n104 as Theme
const n105 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 11],[17, 219],[18, 35],[19, 36],[20, 35],[21, 36],[22, 218],[23, 44],[24, 43],[25, 44],[26, 44],[27, 38]]) as Theme

export const light_green_SliderThumb = n105 as Theme
export const light_green_Tooltip = n105 as Theme
export const light_green_ProgressIndicator = n105 as Theme
const n106 = t([[12, 35],[13, 36],[14, 37],[15, 38],[16, 35],[17, 35],[18, 11],[19, 46],[20, 11],[21, 46],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 45]]) as Theme

export const light_green_Input = n106 as Theme
export const light_green_TextArea = n106 as Theme
const n107 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 15],[17, 15],[18, 11],[19, 26],[20, 11],[21, 26],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 25]]) as Theme

export const light_blue_ListItem = n107 as Theme
const n108 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 11],[19, 26],[20, 11],[21, 26],[22, 11],[23, 19],[24, 20],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_Card = n108 as Theme
export const light_blue_DrawerFrame = n108 as Theme
export const light_blue_Progress = n108 as Theme
export const light_blue_TooltipArrow = n108 as Theme
const n109 = t([[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[18, 11],[19, 26],[20, 11],[21, 26],[22, 26],[23, 244],[24, 244],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_Button = n109 as Theme
const n110 = t([[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[18, 11],[19, 26],[20, 11],[21, 26],[22, 26],[23, 20],[24, 22],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_Checkbox = n110 as Theme
export const light_blue_Switch = n110 as Theme
export const light_blue_TooltipContent = n110 as Theme
export const light_blue_SliderTrack = n110 as Theme
const n111 = t([[12, 11],[13, 11],[14, 26],[15, 25],[16, 11],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 15],[23, 26],[24, 25],[25, 26],[26, 26],[27, 16]]) as Theme

export const light_blue_SwitchThumb = n111 as Theme
const n112 = t([[12, 24],[13, 23],[14, 22],[15, 20],[16, 25],[17, 26],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 22],[24, 20],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_SliderTrackActive = n112 as Theme
const n113 = t([[12, 26],[13, 25],[14, 24],[15, 23],[16, 11],[17, 221],[18, 15],[19, 16],[20, 15],[21, 16],[22, 220],[23, 24],[24, 23],[25, 24],[26, 24],[27, 18]]) as Theme

export const light_blue_SliderThumb = n113 as Theme
export const light_blue_Tooltip = n113 as Theme
export const light_blue_ProgressIndicator = n113 as Theme
const n114 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 15],[17, 15],[18, 11],[19, 26],[20, 11],[21, 26],[22, 11],[23, 19],[24, 20],[25, 19],[26, 19],[27, 25]]) as Theme

export const light_blue_Input = n114 as Theme
export const light_blue_TextArea = n114 as Theme
const n115 = t([[12, 71],[13, 72],[14, 73],[15, 74],[16, 71],[17, 71],[18, 11],[19, 82],[20, 11],[21, 82],[22, 11],[23, 73],[24, 74],[25, 73],[26, 73],[27, 81]]) as Theme

export const light_purple_ListItem = n115 as Theme
const n116 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 71],[18, 11],[19, 82],[20, 11],[21, 82],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 79]]) as Theme

export const light_purple_Card = n116 as Theme
export const light_purple_DrawerFrame = n116 as Theme
export const light_purple_Progress = n116 as Theme
export const light_purple_TooltipArrow = n116 as Theme
const n117 = t([[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[18, 11],[19, 82],[20, 11],[21, 82],[22, 82],[23, 244],[24, 244],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_Button = n117 as Theme
const n118 = t([[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[18, 11],[19, 82],[20, 11],[21, 82],[22, 82],[23, 76],[24, 78],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_Checkbox = n118 as Theme
export const light_purple_Switch = n118 as Theme
export const light_purple_TooltipContent = n118 as Theme
export const light_purple_SliderTrack = n118 as Theme
const n119 = t([[12, 11],[13, 11],[14, 82],[15, 81],[16, 11],[17, 11],[18, 71],[19, 72],[20, 71],[21, 72],[22, 71],[23, 82],[24, 81],[25, 82],[26, 82],[27, 72]]) as Theme

export const light_purple_SwitchThumb = n119 as Theme
const n120 = t([[12, 80],[13, 79],[14, 78],[15, 76],[16, 81],[17, 82],[18, 71],[19, 72],[20, 71],[21, 72],[22, 72],[23, 78],[24, 76],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_SliderTrackActive = n120 as Theme
const n121 = t([[12, 82],[13, 81],[14, 80],[15, 79],[16, 11],[17, 223],[18, 71],[19, 72],[20, 71],[21, 72],[22, 222],[23, 80],[24, 79],[25, 80],[26, 80],[27, 74]]) as Theme

export const light_purple_SliderThumb = n121 as Theme
export const light_purple_Tooltip = n121 as Theme
export const light_purple_ProgressIndicator = n121 as Theme
const n122 = t([[12, 71],[13, 72],[14, 73],[15, 74],[16, 71],[17, 71],[18, 11],[19, 82],[20, 11],[21, 82],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 81]]) as Theme

export const light_purple_Input = n122 as Theme
export const light_purple_TextArea = n122 as Theme
const n123 = t([[12, 59],[13, 60],[14, 61],[15, 62],[16, 59],[17, 59],[18, 11],[19, 70],[20, 11],[21, 70],[22, 11],[23, 61],[24, 62],[25, 61],[26, 61],[27, 69]]) as Theme

export const light_pink_ListItem = n123 as Theme
const n124 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 59],[18, 11],[19, 70],[20, 11],[21, 70],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 67]]) as Theme

export const light_pink_Card = n124 as Theme
export const light_pink_DrawerFrame = n124 as Theme
export const light_pink_Progress = n124 as Theme
export const light_pink_TooltipArrow = n124 as Theme
const n125 = t([[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[18, 11],[19, 70],[20, 11],[21, 70],[22, 70],[23, 244],[24, 244],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_Button = n125 as Theme
const n126 = t([[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[18, 11],[19, 70],[20, 11],[21, 70],[22, 70],[23, 64],[24, 66],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_Checkbox = n126 as Theme
export const light_pink_Switch = n126 as Theme
export const light_pink_TooltipContent = n126 as Theme
export const light_pink_SliderTrack = n126 as Theme
const n127 = t([[12, 11],[13, 11],[14, 70],[15, 69],[16, 11],[17, 11],[18, 59],[19, 60],[20, 59],[21, 60],[22, 59],[23, 70],[24, 69],[25, 70],[26, 70],[27, 60]]) as Theme

export const light_pink_SwitchThumb = n127 as Theme
const n128 = t([[12, 68],[13, 67],[14, 66],[15, 64],[16, 69],[17, 70],[18, 59],[19, 60],[20, 59],[21, 60],[22, 60],[23, 66],[24, 64],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_SliderTrackActive = n128 as Theme
const n129 = t([[12, 70],[13, 69],[14, 68],[15, 67],[16, 11],[17, 225],[18, 59],[19, 60],[20, 59],[21, 60],[22, 224],[23, 68],[24, 67],[25, 68],[26, 68],[27, 62]]) as Theme

export const light_pink_SliderThumb = n129 as Theme
export const light_pink_Tooltip = n129 as Theme
export const light_pink_ProgressIndicator = n129 as Theme
const n130 = t([[12, 59],[13, 60],[14, 61],[15, 62],[16, 59],[17, 59],[18, 11],[19, 70],[20, 11],[21, 70],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 69]]) as Theme

export const light_pink_Input = n130 as Theme
export const light_pink_TextArea = n130 as Theme
const n131 = t([[12, 83],[13, 84],[14, 85],[15, 86],[16, 83],[17, 83],[18, 11],[19, 94],[20, 11],[21, 94],[22, 11],[23, 85],[24, 86],[25, 85],[26, 85],[27, 93]]) as Theme

export const light_red_ListItem = n131 as Theme
const n132 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 83],[18, 11],[19, 94],[20, 11],[21, 94],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 91]]) as Theme

export const light_red_Card = n132 as Theme
export const light_red_DrawerFrame = n132 as Theme
export const light_red_Progress = n132 as Theme
export const light_red_TooltipArrow = n132 as Theme
const n133 = t([[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[18, 11],[19, 94],[20, 11],[21, 94],[22, 94],[23, 244],[24, 244],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_Button = n133 as Theme
const n134 = t([[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[18, 11],[19, 94],[20, 11],[21, 94],[22, 94],[23, 88],[24, 90],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_Checkbox = n134 as Theme
export const light_red_Switch = n134 as Theme
export const light_red_TooltipContent = n134 as Theme
export const light_red_SliderTrack = n134 as Theme
const n135 = t([[12, 11],[13, 11],[14, 94],[15, 93],[16, 11],[17, 11],[18, 83],[19, 84],[20, 83],[21, 84],[22, 83],[23, 94],[24, 93],[25, 94],[26, 94],[27, 84]]) as Theme

export const light_red_SwitchThumb = n135 as Theme
const n136 = t([[12, 92],[13, 91],[14, 90],[15, 88],[16, 93],[17, 94],[18, 83],[19, 84],[20, 83],[21, 84],[22, 84],[23, 90],[24, 88],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_SliderTrackActive = n136 as Theme
const n137 = t([[12, 94],[13, 93],[14, 92],[15, 91],[16, 11],[17, 227],[18, 83],[19, 84],[20, 83],[21, 84],[22, 226],[23, 92],[24, 91],[25, 92],[26, 92],[27, 86]]) as Theme

export const light_red_SliderThumb = n137 as Theme
export const light_red_Tooltip = n137 as Theme
export const light_red_ProgressIndicator = n137 as Theme
const n138 = t([[12, 83],[13, 84],[14, 85],[15, 86],[16, 83],[17, 83],[18, 11],[19, 94],[20, 11],[21, 94],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 93]]) as Theme

export const light_red_Input = n138 as Theme
export const light_red_TextArea = n138 as Theme
const n139 = t([[12, 159],[13, 160],[14, 161],[15, 162],[16, 158],[17, 157],[18, 0],[19, 167],[20, 0],[21, 167],[22, 0],[23, 162],[24, 164],[25, 161],[26, 162],[27, 55]]) as Theme

export const dark_orange_Card = n139 as Theme
export const dark_orange_DrawerFrame = n139 as Theme
export const dark_orange_Progress = n139 as Theme
export const dark_orange_TooltipArrow = n139 as Theme
const n140 = t([[12, 160],[13, 161],[14, 162],[15, 164],[16, 159],[17, 158],[18, 0],[19, 167],[20, 0],[21, 167],[22, 167],[23, 244],[24, 244],[25, 162],[26, 164],[27, 164]]) as Theme

export const dark_orange_Button = n140 as Theme
const n141 = t([[12, 160],[13, 161],[14, 162],[15, 164],[16, 159],[17, 158],[18, 0],[19, 167],[20, 0],[21, 167],[22, 167],[23, 164],[24, 55],[25, 162],[26, 164],[27, 164]]) as Theme

export const dark_orange_Checkbox = n141 as Theme
export const dark_orange_Switch = n141 as Theme
export const dark_orange_TooltipContent = n141 as Theme
export const dark_orange_SliderTrack = n141 as Theme
const n142 = t([[12, 0],[13, 0],[14, 167],[15, 166],[16, 0],[17, 0],[18, 157],[19, 158],[20, 157],[21, 158],[22, 157],[23, 166],[24, 165],[25, 167],[26, 166],[27, 158]]) as Theme

export const dark_orange_SwitchThumb = n142 as Theme
const n143 = t([[12, 165],[13, 55],[14, 164],[15, 162],[16, 166],[17, 167],[18, 157],[19, 158],[20, 157],[21, 158],[22, 158],[23, 162],[24, 161],[25, 164],[26, 162],[27, 162]]) as Theme

export const dark_orange_SliderTrackActive = n143 as Theme
const n144 = t([[12, 167],[13, 166],[14, 165],[15, 55],[16, 0],[17, 229],[18, 157],[19, 158],[20, 157],[21, 158],[22, 228],[23, 55],[24, 164],[25, 165],[26, 55],[27, 160]]) as Theme

export const dark_orange_SliderThumb = n144 as Theme
export const dark_orange_Tooltip = n144 as Theme
export const dark_orange_ProgressIndicator = n144 as Theme
const n145 = t([[12, 158],[13, 159],[14, 160],[15, 161],[16, 157],[17, 228],[18, 0],[19, 167],[20, 0],[21, 167],[22, 229],[23, 162],[24, 164],[25, 161],[26, 162],[27, 165]]) as Theme

export const dark_orange_Input = n145 as Theme
export const dark_orange_TextArea = n145 as Theme
const n146 = t([[12, 203],[13, 204],[14, 205],[15, 206],[16, 202],[17, 201],[18, 0],[19, 211],[20, 0],[21, 211],[22, 0],[23, 206],[24, 208],[25, 205],[26, 206],[27, 103]]) as Theme

export const dark_yellow_Card = n146 as Theme
export const dark_yellow_DrawerFrame = n146 as Theme
export const dark_yellow_Progress = n146 as Theme
export const dark_yellow_TooltipArrow = n146 as Theme
const n147 = t([[12, 204],[13, 205],[14, 206],[15, 208],[16, 203],[17, 202],[18, 0],[19, 211],[20, 0],[21, 211],[22, 211],[23, 244],[24, 244],[25, 206],[26, 208],[27, 208]]) as Theme

export const dark_yellow_Button = n147 as Theme
const n148 = t([[12, 204],[13, 205],[14, 206],[15, 208],[16, 203],[17, 202],[18, 0],[19, 211],[20, 0],[21, 211],[22, 211],[23, 208],[24, 103],[25, 206],[26, 208],[27, 208]]) as Theme

export const dark_yellow_Checkbox = n148 as Theme
export const dark_yellow_Switch = n148 as Theme
export const dark_yellow_TooltipContent = n148 as Theme
export const dark_yellow_SliderTrack = n148 as Theme
const n149 = t([[12, 0],[13, 0],[14, 211],[15, 210],[16, 0],[17, 0],[18, 201],[19, 202],[20, 201],[21, 202],[22, 201],[23, 210],[24, 209],[25, 211],[26, 210],[27, 202]]) as Theme

export const dark_yellow_SwitchThumb = n149 as Theme
const n150 = t([[12, 209],[13, 103],[14, 208],[15, 206],[16, 210],[17, 211],[18, 201],[19, 202],[20, 201],[21, 202],[22, 202],[23, 206],[24, 205],[25, 208],[26, 206],[27, 206]]) as Theme

export const dark_yellow_SliderTrackActive = n150 as Theme
const n151 = t([[12, 211],[13, 210],[14, 209],[15, 103],[16, 0],[17, 231],[18, 201],[19, 202],[20, 201],[21, 202],[22, 230],[23, 103],[24, 208],[25, 209],[26, 103],[27, 204]]) as Theme

export const dark_yellow_SliderThumb = n151 as Theme
export const dark_yellow_Tooltip = n151 as Theme
export const dark_yellow_ProgressIndicator = n151 as Theme
const n152 = t([[12, 202],[13, 203],[14, 204],[15, 205],[16, 201],[17, 230],[18, 0],[19, 211],[20, 0],[21, 211],[22, 231],[23, 206],[24, 208],[25, 205],[26, 206],[27, 209]]) as Theme

export const dark_yellow_Input = n152 as Theme
export const dark_yellow_TextArea = n152 as Theme
const n153 = t([[12, 148],[13, 149],[14, 150],[15, 151],[16, 147],[17, 146],[18, 0],[19, 156],[20, 0],[21, 156],[22, 0],[23, 151],[24, 153],[25, 150],[26, 151],[27, 43]]) as Theme

export const dark_green_Card = n153 as Theme
export const dark_green_DrawerFrame = n153 as Theme
export const dark_green_Progress = n153 as Theme
export const dark_green_TooltipArrow = n153 as Theme
const n154 = t([[12, 149],[13, 150],[14, 151],[15, 153],[16, 148],[17, 147],[18, 0],[19, 156],[20, 0],[21, 156],[22, 156],[23, 244],[24, 244],[25, 151],[26, 153],[27, 153]]) as Theme

export const dark_green_Button = n154 as Theme
const n155 = t([[12, 149],[13, 150],[14, 151],[15, 153],[16, 148],[17, 147],[18, 0],[19, 156],[20, 0],[21, 156],[22, 156],[23, 153],[24, 43],[25, 151],[26, 153],[27, 153]]) as Theme

export const dark_green_Checkbox = n155 as Theme
export const dark_green_Switch = n155 as Theme
export const dark_green_TooltipContent = n155 as Theme
export const dark_green_SliderTrack = n155 as Theme
const n156 = t([[12, 0],[13, 0],[14, 156],[15, 155],[16, 0],[17, 0],[18, 146],[19, 147],[20, 146],[21, 147],[22, 146],[23, 155],[24, 154],[25, 156],[26, 155],[27, 147]]) as Theme

export const dark_green_SwitchThumb = n156 as Theme
const n157 = t([[12, 154],[13, 43],[14, 153],[15, 151],[16, 155],[17, 156],[18, 146],[19, 147],[20, 146],[21, 147],[22, 147],[23, 151],[24, 150],[25, 153],[26, 151],[27, 151]]) as Theme

export const dark_green_SliderTrackActive = n157 as Theme
const n158 = t([[12, 156],[13, 155],[14, 154],[15, 43],[16, 0],[17, 233],[18, 146],[19, 147],[20, 146],[21, 147],[22, 232],[23, 43],[24, 153],[25, 154],[26, 43],[27, 149]]) as Theme

export const dark_green_SliderThumb = n158 as Theme
export const dark_green_Tooltip = n158 as Theme
export const dark_green_ProgressIndicator = n158 as Theme
const n159 = t([[12, 147],[13, 148],[14, 149],[15, 150],[16, 146],[17, 232],[18, 0],[19, 156],[20, 0],[21, 156],[22, 233],[23, 151],[24, 153],[25, 150],[26, 151],[27, 154]]) as Theme

export const dark_green_Input = n159 as Theme
export const dark_green_TextArea = n159 as Theme
const n160 = t([[12, 126],[13, 127],[14, 128],[15, 129],[16, 125],[17, 124],[18, 0],[19, 134],[20, 0],[21, 134],[22, 0],[23, 129],[24, 131],[25, 128],[26, 129],[27, 23]]) as Theme

export const dark_blue_Card = n160 as Theme
export const dark_blue_DrawerFrame = n160 as Theme
export const dark_blue_Progress = n160 as Theme
export const dark_blue_TooltipArrow = n160 as Theme
const n161 = t([[12, 127],[13, 128],[14, 129],[15, 131],[16, 126],[17, 125],[18, 0],[19, 134],[20, 0],[21, 134],[22, 134],[23, 244],[24, 244],[25, 129],[26, 131],[27, 131]]) as Theme

export const dark_blue_Button = n161 as Theme
const n162 = t([[12, 127],[13, 128],[14, 129],[15, 131],[16, 126],[17, 125],[18, 0],[19, 134],[20, 0],[21, 134],[22, 134],[23, 131],[24, 23],[25, 129],[26, 131],[27, 131]]) as Theme

export const dark_blue_Checkbox = n162 as Theme
export const dark_blue_Switch = n162 as Theme
export const dark_blue_TooltipContent = n162 as Theme
export const dark_blue_SliderTrack = n162 as Theme
const n163 = t([[12, 0],[13, 0],[14, 134],[15, 133],[16, 0],[17, 0],[18, 124],[19, 125],[20, 124],[21, 125],[22, 124],[23, 133],[24, 132],[25, 134],[26, 133],[27, 125]]) as Theme

export const dark_blue_SwitchThumb = n163 as Theme
const n164 = t([[12, 132],[13, 23],[14, 131],[15, 129],[16, 133],[17, 134],[18, 124],[19, 125],[20, 124],[21, 125],[22, 125],[23, 129],[24, 128],[25, 131],[26, 129],[27, 129]]) as Theme

export const dark_blue_SliderTrackActive = n164 as Theme
const n165 = t([[12, 134],[13, 133],[14, 132],[15, 23],[16, 0],[17, 235],[18, 124],[19, 125],[20, 124],[21, 125],[22, 234],[23, 23],[24, 131],[25, 132],[26, 23],[27, 127]]) as Theme

export const dark_blue_SliderThumb = n165 as Theme
export const dark_blue_Tooltip = n165 as Theme
export const dark_blue_ProgressIndicator = n165 as Theme
const n166 = t([[12, 125],[13, 126],[14, 127],[15, 128],[16, 124],[17, 234],[18, 0],[19, 134],[20, 0],[21, 134],[22, 235],[23, 129],[24, 131],[25, 128],[26, 129],[27, 132]]) as Theme

export const dark_blue_Input = n166 as Theme
export const dark_blue_TextArea = n166 as Theme
const n167 = t([[12, 181],[13, 182],[14, 183],[15, 184],[16, 180],[17, 179],[18, 0],[19, 189],[20, 0],[21, 189],[22, 0],[23, 184],[24, 186],[25, 183],[26, 184],[27, 79]]) as Theme

export const dark_purple_Card = n167 as Theme
export const dark_purple_DrawerFrame = n167 as Theme
export const dark_purple_Progress = n167 as Theme
export const dark_purple_TooltipArrow = n167 as Theme
const n168 = t([[12, 182],[13, 183],[14, 184],[15, 186],[16, 181],[17, 180],[18, 0],[19, 189],[20, 0],[21, 189],[22, 189],[23, 244],[24, 244],[25, 184],[26, 186],[27, 186]]) as Theme

export const dark_purple_Button = n168 as Theme
const n169 = t([[12, 182],[13, 183],[14, 184],[15, 186],[16, 181],[17, 180],[18, 0],[19, 189],[20, 0],[21, 189],[22, 189],[23, 186],[24, 79],[25, 184],[26, 186],[27, 186]]) as Theme

export const dark_purple_Checkbox = n169 as Theme
export const dark_purple_Switch = n169 as Theme
export const dark_purple_TooltipContent = n169 as Theme
export const dark_purple_SliderTrack = n169 as Theme
const n170 = t([[12, 0],[13, 0],[14, 189],[15, 188],[16, 0],[17, 0],[18, 179],[19, 180],[20, 179],[21, 180],[22, 179],[23, 188],[24, 187],[25, 189],[26, 188],[27, 180]]) as Theme

export const dark_purple_SwitchThumb = n170 as Theme
const n171 = t([[12, 187],[13, 79],[14, 186],[15, 184],[16, 188],[17, 189],[18, 179],[19, 180],[20, 179],[21, 180],[22, 180],[23, 184],[24, 183],[25, 186],[26, 184],[27, 184]]) as Theme

export const dark_purple_SliderTrackActive = n171 as Theme
const n172 = t([[12, 189],[13, 188],[14, 187],[15, 79],[16, 0],[17, 237],[18, 179],[19, 180],[20, 179],[21, 180],[22, 236],[23, 79],[24, 186],[25, 187],[26, 79],[27, 182]]) as Theme

export const dark_purple_SliderThumb = n172 as Theme
export const dark_purple_Tooltip = n172 as Theme
export const dark_purple_ProgressIndicator = n172 as Theme
const n173 = t([[12, 180],[13, 181],[14, 182],[15, 183],[16, 179],[17, 236],[18, 0],[19, 189],[20, 0],[21, 189],[22, 237],[23, 184],[24, 186],[25, 183],[26, 184],[27, 187]]) as Theme

export const dark_purple_Input = n173 as Theme
export const dark_purple_TextArea = n173 as Theme
const n174 = t([[12, 170],[13, 171],[14, 172],[15, 173],[16, 169],[17, 168],[18, 0],[19, 178],[20, 0],[21, 178],[22, 0],[23, 173],[24, 175],[25, 172],[26, 173],[27, 67]]) as Theme

export const dark_pink_Card = n174 as Theme
export const dark_pink_DrawerFrame = n174 as Theme
export const dark_pink_Progress = n174 as Theme
export const dark_pink_TooltipArrow = n174 as Theme
const n175 = t([[12, 171],[13, 172],[14, 173],[15, 175],[16, 170],[17, 169],[18, 0],[19, 178],[20, 0],[21, 178],[22, 178],[23, 244],[24, 244],[25, 173],[26, 175],[27, 175]]) as Theme

export const dark_pink_Button = n175 as Theme
const n176 = t([[12, 171],[13, 172],[14, 173],[15, 175],[16, 170],[17, 169],[18, 0],[19, 178],[20, 0],[21, 178],[22, 178],[23, 175],[24, 67],[25, 173],[26, 175],[27, 175]]) as Theme

export const dark_pink_Checkbox = n176 as Theme
export const dark_pink_Switch = n176 as Theme
export const dark_pink_TooltipContent = n176 as Theme
export const dark_pink_SliderTrack = n176 as Theme
const n177 = t([[12, 0],[13, 0],[14, 178],[15, 177],[16, 0],[17, 0],[18, 168],[19, 169],[20, 168],[21, 169],[22, 168],[23, 177],[24, 176],[25, 178],[26, 177],[27, 169]]) as Theme

export const dark_pink_SwitchThumb = n177 as Theme
const n178 = t([[12, 176],[13, 67],[14, 175],[15, 173],[16, 177],[17, 178],[18, 168],[19, 169],[20, 168],[21, 169],[22, 169],[23, 173],[24, 172],[25, 175],[26, 173],[27, 173]]) as Theme

export const dark_pink_SliderTrackActive = n178 as Theme
const n179 = t([[12, 178],[13, 177],[14, 176],[15, 67],[16, 0],[17, 239],[18, 168],[19, 169],[20, 168],[21, 169],[22, 238],[23, 67],[24, 175],[25, 176],[26, 67],[27, 171]]) as Theme

export const dark_pink_SliderThumb = n179 as Theme
export const dark_pink_Tooltip = n179 as Theme
export const dark_pink_ProgressIndicator = n179 as Theme
const n180 = t([[12, 169],[13, 170],[14, 171],[15, 172],[16, 168],[17, 238],[18, 0],[19, 178],[20, 0],[21, 178],[22, 239],[23, 173],[24, 175],[25, 172],[26, 173],[27, 176]]) as Theme

export const dark_pink_Input = n180 as Theme
export const dark_pink_TextArea = n180 as Theme
const n181 = t([[12, 192],[13, 193],[14, 194],[15, 195],[16, 191],[17, 190],[18, 0],[19, 200],[20, 0],[21, 200],[22, 0],[23, 195],[24, 197],[25, 194],[26, 195],[27, 91]]) as Theme

export const dark_red_Card = n181 as Theme
export const dark_red_DrawerFrame = n181 as Theme
export const dark_red_Progress = n181 as Theme
export const dark_red_TooltipArrow = n181 as Theme
const n182 = t([[12, 193],[13, 194],[14, 195],[15, 197],[16, 192],[17, 191],[18, 0],[19, 200],[20, 0],[21, 200],[22, 200],[23, 244],[24, 244],[25, 195],[26, 197],[27, 197]]) as Theme

export const dark_red_Button = n182 as Theme
const n183 = t([[12, 193],[13, 194],[14, 195],[15, 197],[16, 192],[17, 191],[18, 0],[19, 200],[20, 0],[21, 200],[22, 200],[23, 197],[24, 91],[25, 195],[26, 197],[27, 197]]) as Theme

export const dark_red_Checkbox = n183 as Theme
export const dark_red_Switch = n183 as Theme
export const dark_red_TooltipContent = n183 as Theme
export const dark_red_SliderTrack = n183 as Theme
const n184 = t([[12, 0],[13, 0],[14, 200],[15, 199],[16, 0],[17, 0],[18, 190],[19, 191],[20, 190],[21, 191],[22, 190],[23, 199],[24, 198],[25, 200],[26, 199],[27, 191]]) as Theme

export const dark_red_SwitchThumb = n184 as Theme
const n185 = t([[12, 198],[13, 91],[14, 197],[15, 195],[16, 199],[17, 200],[18, 190],[19, 191],[20, 190],[21, 191],[22, 191],[23, 195],[24, 194],[25, 197],[26, 195],[27, 195]]) as Theme

export const dark_red_SliderTrackActive = n185 as Theme
const n186 = t([[12, 200],[13, 199],[14, 198],[15, 91],[16, 0],[17, 241],[18, 190],[19, 191],[20, 190],[21, 191],[22, 240],[23, 91],[24, 197],[25, 198],[26, 91],[27, 193]]) as Theme

export const dark_red_SliderThumb = n186 as Theme
export const dark_red_Tooltip = n186 as Theme
export const dark_red_ProgressIndicator = n186 as Theme
const n187 = t([[12, 191],[13, 192],[14, 193],[15, 194],[16, 190],[17, 240],[18, 0],[19, 200],[20, 0],[21, 200],[22, 241],[23, 195],[24, 197],[25, 194],[26, 195],[27, 198]]) as Theme

export const dark_red_Input = n187 as Theme
export const dark_red_TextArea = n187 as Theme
const n188 = t([[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_alt1_ListItem = n188 as Theme
const n189 = t([[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt1_Card = n189 as Theme
export const light_alt1_DrawerFrame = n189 as Theme
export const light_alt1_Progress = n189 as Theme
export const light_alt1_TooltipArrow = n189 as Theme
const n190 = t([[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 244],[24, 244],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Button = n190 as Theme
const n191 = t([[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Checkbox = n191 as Theme
export const light_alt1_Switch = n191 as Theme
export const light_alt1_TooltipContent = n191 as Theme
export const light_alt1_SliderTrack = n191 as Theme
const n192 = t([[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_alt1_SwitchThumb = n192 as Theme
const n193 = t([[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_alt1_SliderTrackActive = n193 as Theme
const n194 = t([[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_alt1_SliderThumb = n194 as Theme
export const light_alt1_Tooltip = n194 as Theme
export const light_alt1_ProgressIndicator = n194 as Theme
const n195 = t([[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_alt1_Input = n195 as Theme
export const light_alt1_TextArea = n195 as Theme
const n196 = t([[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt2_ListItem = n196 as Theme
const n197 = t([[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt2_Card = n197 as Theme
export const light_alt2_DrawerFrame = n197 as Theme
export const light_alt2_Progress = n197 as Theme
export const light_alt2_TooltipArrow = n197 as Theme
const n198 = t([[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 244],[24, 244],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Button = n198 as Theme
const n199 = t([[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Checkbox = n199 as Theme
export const light_alt2_Switch = n199 as Theme
export const light_alt2_TooltipContent = n199 as Theme
export const light_alt2_SliderTrack = n199 as Theme
const n200 = t([[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_alt2_SwitchThumb = n200 as Theme
const n201 = t([[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 3],[24, 2],[25, 4],[26, 3],[27, 7]]) as Theme

export const light_alt2_SliderTrackActive = n201 as Theme
const n202 = t([[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_alt2_SliderThumb = n202 as Theme
export const light_alt2_Tooltip = n202 as Theme
export const light_alt2_ProgressIndicator = n202 as Theme
const n203 = t([[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_alt2_Input = n203 as Theme
export const light_alt2_TextArea = n203 as Theme
const n204 = t([[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_active_ListItem = n204 as Theme
const n205 = t([[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[19, 7],[20, 8],[21, 7],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_active_Card = n205 as Theme
export const light_active_DrawerFrame = n205 as Theme
export const light_active_Progress = n205 as Theme
export const light_active_TooltipArrow = n205 as Theme
const n206 = t([[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 244],[24, 244],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Button = n206 as Theme
const n207 = t([[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 9],[24, 10],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Checkbox = n207 as Theme
export const light_active_Switch = n207 as Theme
export const light_active_TooltipContent = n207 as Theme
export const light_active_SliderTrack = n207 as Theme
const n208 = t([[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[19, 4],[20, 3],[21, 4],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_active_SwitchThumb = n208 as Theme
const n209 = t([[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 2],[24, 1],[25, 3],[26, 2],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n209 as Theme
const n210 = t([[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[19, 4],[20, 3],[21, 4],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_active_SliderThumb = n210 as Theme
export const light_active_Tooltip = n210 as Theme
export const light_active_ProgressIndicator = n210 as Theme
const n211 = t([[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 8],[24, 9],[25, 7],[26, 8],[27, 6]]) as Theme

export const light_active_Input = n211 as Theme
export const light_active_TextArea = n211 as Theme
const n212 = t([[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 123],[19, 122],[20, 123],[21, 122],[22, 123],[23, 119],[24, 120],[25, 118],[26, 119],[27, 119]]) as Theme

export const dark_alt1_Card = n212 as Theme
export const dark_alt1_DrawerFrame = n212 as Theme
export const dark_alt1_Progress = n212 as Theme
export const dark_alt1_TooltipArrow = n212 as Theme
const n213 = t([[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[18, 123],[19, 122],[20, 123],[21, 122],[22, 122],[23, 244],[24, 244],[25, 119],[26, 120],[27, 118]]) as Theme

export const dark_alt1_Button = n213 as Theme
const n214 = t([[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[18, 123],[19, 122],[20, 123],[21, 122],[22, 122],[23, 120],[24, 121],[25, 119],[26, 120],[27, 118]]) as Theme

export const dark_alt1_Checkbox = n214 as Theme
export const dark_alt1_Switch = n214 as Theme
export const dark_alt1_TooltipContent = n214 as Theme
export const dark_alt1_SliderTrack = n214 as Theme
const n215 = t([[13, 123],[14, 122],[15, 121],[16, 0],[17, 0],[18, 114],[19, 115],[20, 114],[21, 115],[22, 113],[23, 121],[24, 120],[25, 122],[26, 121],[27, 115]]) as Theme

export const dark_alt1_SwitchThumb = n215 as Theme
const n216 = t([[13, 119],[14, 118],[15, 117],[16, 121],[17, 122],[18, 114],[19, 115],[20, 114],[21, 115],[22, 115],[23, 117],[24, 116],[25, 118],[26, 117],[27, 119]]) as Theme

export const dark_alt1_SliderTrackActive = n216 as Theme
const n217 = t([[13, 121],[14, 120],[15, 119],[16, 123],[17, 0],[18, 114],[19, 115],[20, 114],[21, 115],[22, 113],[23, 119],[24, 118],[25, 120],[26, 119],[27, 117]]) as Theme

export const dark_alt1_SliderThumb = n217 as Theme
export const dark_alt1_Tooltip = n217 as Theme
export const dark_alt1_ProgressIndicator = n217 as Theme
const n218 = t([[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 123],[19, 122],[20, 123],[21, 122],[22, 0],[23, 119],[24, 120],[25, 118],[26, 119],[27, 120]]) as Theme

export const dark_alt1_Input = n218 as Theme
export const dark_alt1_TextArea = n218 as Theme
const n219 = t([[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[18, 122],[19, 121],[20, 122],[21, 121],[22, 122],[23, 120],[24, 121],[25, 119],[26, 120],[27, 118]]) as Theme

export const dark_alt2_Card = n219 as Theme
export const dark_alt2_DrawerFrame = n219 as Theme
export const dark_alt2_Progress = n219 as Theme
export const dark_alt2_TooltipArrow = n219 as Theme
const n220 = t([[13, 119],[14, 120],[15, 121],[16, 117],[17, 116],[18, 122],[19, 121],[20, 122],[21, 121],[22, 121],[23, 244],[24, 244],[25, 120],[26, 121],[27, 117]]) as Theme

export const dark_alt2_Button = n220 as Theme
const n221 = t([[13, 119],[14, 120],[15, 121],[16, 117],[17, 116],[18, 122],[19, 121],[20, 122],[21, 121],[22, 121],[23, 121],[24, 122],[25, 120],[26, 121],[27, 117]]) as Theme

export const dark_alt2_Checkbox = n221 as Theme
export const dark_alt2_Switch = n221 as Theme
export const dark_alt2_TooltipContent = n221 as Theme
export const dark_alt2_SliderTrack = n221 as Theme
const n222 = t([[13, 122],[14, 121],[15, 120],[16, 0],[17, 0],[18, 115],[19, 116],[20, 115],[21, 116],[22, 113],[23, 120],[24, 119],[25, 121],[26, 120],[27, 116]]) as Theme

export const dark_alt2_SwitchThumb = n222 as Theme
const n223 = t([[13, 118],[14, 117],[15, 116],[16, 120],[17, 121],[18, 115],[19, 116],[20, 115],[21, 116],[22, 116],[23, 116],[24, 115],[25, 117],[26, 116],[27, 120]]) as Theme

export const dark_alt2_SliderTrackActive = n223 as Theme
const n224 = t([[13, 120],[14, 119],[15, 118],[16, 122],[17, 123],[18, 115],[19, 116],[20, 115],[21, 116],[22, 114],[23, 118],[24, 117],[25, 119],[26, 118],[27, 118]]) as Theme

export const dark_alt2_SliderThumb = n224 as Theme
export const dark_alt2_Tooltip = n224 as Theme
export const dark_alt2_ProgressIndicator = n224 as Theme
const n225 = t([[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[18, 122],[19, 121],[20, 122],[21, 121],[22, 123],[23, 120],[24, 121],[25, 119],[26, 120],[27, 119]]) as Theme

export const dark_alt2_Input = n225 as Theme
export const dark_alt2_TextArea = n225 as Theme
const n226 = t([[13, 119],[14, 120],[15, 121],[16, 117],[17, 116],[19, 120],[20, 121],[21, 120],[22, 121],[23, 121],[24, 122],[25, 120],[26, 121],[27, 117]]) as Theme

export const dark_active_Card = n226 as Theme
export const dark_active_DrawerFrame = n226 as Theme
export const dark_active_Progress = n226 as Theme
export const dark_active_TooltipArrow = n226 as Theme
const n227 = t([[13, 120],[14, 121],[15, 122],[16, 118],[17, 117],[19, 120],[20, 121],[21, 120],[22, 120],[23, 244],[24, 244],[25, 121],[26, 122],[27, 116]]) as Theme

export const dark_active_Button = n227 as Theme
const n228 = t([[13, 120],[14, 121],[15, 122],[16, 118],[17, 117],[19, 120],[20, 121],[21, 120],[22, 120],[23, 122],[24, 123],[25, 121],[26, 122],[27, 116]]) as Theme

export const dark_active_Checkbox = n228 as Theme
export const dark_active_Switch = n228 as Theme
export const dark_active_TooltipContent = n228 as Theme
export const dark_active_SliderTrack = n228 as Theme
const n229 = t([[13, 121],[14, 120],[15, 119],[16, 123],[17, 0],[19, 117],[20, 116],[21, 117],[22, 113],[23, 119],[24, 118],[25, 120],[26, 119],[27, 117]]) as Theme

export const dark_active_SwitchThumb = n229 as Theme
const n230 = t([[13, 117],[14, 116],[15, 115],[16, 119],[17, 120],[19, 117],[20, 116],[21, 117],[22, 117],[23, 115],[24, 114],[25, 116],[26, 115],[27, 121]]) as Theme

export const dark_active_SliderTrackActive = n230 as Theme
const n231 = t([[13, 119],[14, 118],[15, 117],[16, 121],[17, 122],[19, 117],[20, 116],[21, 117],[22, 115],[23, 117],[24, 116],[25, 118],[26, 117],[27, 119]]) as Theme

export const dark_active_SliderThumb = n231 as Theme
export const dark_active_Tooltip = n231 as Theme
export const dark_active_ProgressIndicator = n231 as Theme
const n232 = t([[13, 118],[14, 119],[15, 120],[16, 116],[17, 115],[19, 120],[20, 121],[21, 120],[22, 122],[23, 121],[24, 122],[25, 120],[26, 121],[27, 118]]) as Theme

export const dark_active_Input = n232 as Theme
export const dark_active_TextArea = n232 as Theme
const n233 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 47],[18, 58],[19, 57],[20, 58],[21, 57],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 56]]) as Theme

export const light_orange_alt1_ListItem = n233 as Theme
const n234 = t([[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[18, 58],[19, 57],[20, 58],[21, 57],[22, 58],[23, 52],[24, 54],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_alt1_Card = n234 as Theme
export const light_orange_alt1_DrawerFrame = n234 as Theme
export const light_orange_alt1_Progress = n234 as Theme
export const light_orange_alt1_TooltipArrow = n234 as Theme
const n235 = t([[12, 51],[13, 52],[14, 54],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 57],[23, 244],[24, 244],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_alt1_Button = n235 as Theme
const n236 = t([[12, 51],[13, 52],[14, 54],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 57],[23, 54],[24, 55],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_alt1_Checkbox = n236 as Theme
export const light_orange_alt1_Switch = n236 as Theme
export const light_orange_alt1_TooltipContent = n236 as Theme
export const light_orange_alt1_SliderTrack = n236 as Theme
const n237 = t([[12, 11],[13, 58],[14, 57],[15, 56],[16, 11],[17, 11],[18, 48],[19, 49],[20, 48],[21, 49],[22, 47],[23, 57],[24, 56],[25, 57],[26, 57],[27, 49]]) as Theme

export const light_orange_alt1_SwitchThumb = n237 as Theme
const n238 = t([[12, 55],[13, 54],[14, 52],[15, 51],[16, 56],[17, 57],[18, 48],[19, 49],[20, 48],[21, 49],[22, 49],[23, 52],[24, 51],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_alt1_SliderTrackActive = n238 as Theme
const n239 = t([[12, 57],[13, 56],[14, 55],[15, 54],[16, 58],[17, 11],[18, 48],[19, 49],[20, 48],[21, 49],[22, 47],[23, 55],[24, 54],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_alt1_SliderThumb = n239 as Theme
export const light_orange_alt1_Tooltip = n239 as Theme
export const light_orange_alt1_ProgressIndicator = n239 as Theme
const n240 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 47],[17, 47],[18, 58],[19, 57],[20, 58],[21, 57],[22, 11],[23, 52],[24, 54],[25, 52],[26, 52],[27, 56]]) as Theme

export const light_orange_alt1_Input = n240 as Theme
export const light_orange_alt1_TextArea = n240 as Theme
const n241 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 47],[18, 57],[19, 56],[20, 57],[21, 56],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 55]]) as Theme

export const light_orange_alt2_ListItem = n241 as Theme
const n242 = t([[12, 51],[13, 52],[14, 54],[15, 55],[16, 50],[17, 49],[18, 57],[19, 56],[20, 57],[21, 56],[22, 57],[23, 54],[24, 55],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_alt2_Card = n242 as Theme
export const light_orange_alt2_DrawerFrame = n242 as Theme
export const light_orange_alt2_Progress = n242 as Theme
export const light_orange_alt2_TooltipArrow = n242 as Theme
const n243 = t([[12, 52],[13, 54],[14, 55],[15, 56],[16, 51],[17, 50],[18, 57],[19, 56],[20, 57],[21, 56],[22, 56],[23, 244],[24, 244],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_alt2_Button = n243 as Theme
const n244 = t([[12, 52],[13, 54],[14, 55],[15, 56],[16, 51],[17, 50],[18, 57],[19, 56],[20, 57],[21, 56],[22, 56],[23, 55],[24, 56],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_alt2_Checkbox = n244 as Theme
export const light_orange_alt2_Switch = n244 as Theme
export const light_orange_alt2_TooltipContent = n244 as Theme
export const light_orange_alt2_SliderTrack = n244 as Theme
const n245 = t([[12, 58],[13, 57],[14, 56],[15, 55],[16, 11],[17, 11],[18, 49],[19, 50],[20, 49],[21, 50],[22, 47],[23, 56],[24, 55],[25, 56],[26, 56],[27, 50]]) as Theme

export const light_orange_alt2_SwitchThumb = n245 as Theme
const n246 = t([[12, 54],[13, 52],[14, 51],[15, 50],[16, 55],[17, 56],[18, 49],[19, 50],[20, 49],[21, 50],[22, 50],[23, 51],[24, 50],[25, 51],[26, 51],[27, 55]]) as Theme

export const light_orange_alt2_SliderTrackActive = n246 as Theme
const n247 = t([[12, 56],[13, 55],[14, 54],[15, 52],[16, 57],[17, 58],[18, 49],[19, 50],[20, 49],[21, 50],[22, 48],[23, 54],[24, 52],[25, 54],[26, 54],[27, 52]]) as Theme

export const light_orange_alt2_SliderThumb = n247 as Theme
export const light_orange_alt2_Tooltip = n247 as Theme
export const light_orange_alt2_ProgressIndicator = n247 as Theme
const n248 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 47],[18, 57],[19, 56],[20, 57],[21, 56],[22, 11],[23, 54],[24, 55],[25, 54],[26, 54],[27, 55]]) as Theme

export const light_orange_alt2_Input = n248 as Theme
export const light_orange_alt2_TextArea = n248 as Theme
const n249 = t([[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[19, 55],[20, 56],[21, 55],[22, 58],[23, 52],[24, 54],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_active_ListItem = n249 as Theme
const n250 = t([[12, 52],[13, 54],[14, 55],[15, 56],[16, 51],[17, 50],[19, 55],[20, 56],[21, 55],[22, 56],[23, 55],[24, 56],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_active_Card = n250 as Theme
export const light_orange_active_DrawerFrame = n250 as Theme
export const light_orange_active_Progress = n250 as Theme
export const light_orange_active_TooltipArrow = n250 as Theme
const n251 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 52],[17, 51],[19, 55],[20, 56],[21, 55],[22, 55],[23, 244],[24, 244],[25, 56],[26, 56],[27, 50]]) as Theme

export const light_orange_active_Button = n251 as Theme
const n252 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 52],[17, 51],[19, 55],[20, 56],[21, 55],[22, 55],[23, 56],[24, 57],[25, 56],[26, 56],[27, 50]]) as Theme

export const light_orange_active_Checkbox = n252 as Theme
export const light_orange_active_Switch = n252 as Theme
export const light_orange_active_TooltipContent = n252 as Theme
export const light_orange_active_SliderTrack = n252 as Theme
const n253 = t([[12, 57],[13, 56],[14, 55],[15, 54],[16, 58],[17, 11],[19, 51],[20, 50],[21, 51],[22, 47],[23, 55],[24, 54],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_active_SwitchThumb = n253 as Theme
const n254 = t([[12, 52],[13, 51],[14, 50],[15, 49],[16, 54],[17, 55],[19, 51],[20, 50],[21, 51],[22, 51],[23, 50],[24, 49],[25, 50],[26, 50],[27, 56]]) as Theme

export const light_orange_active_SliderTrackActive = n254 as Theme
const n255 = t([[12, 55],[13, 54],[14, 52],[15, 51],[16, 56],[17, 57],[19, 51],[20, 50],[21, 51],[22, 49],[23, 52],[24, 51],[25, 52],[26, 52],[27, 54]]) as Theme

export const light_orange_active_SliderThumb = n255 as Theme
export const light_orange_active_Tooltip = n255 as Theme
export const light_orange_active_ProgressIndicator = n255 as Theme
const n256 = t([[12, 50],[13, 51],[14, 52],[15, 54],[16, 49],[17, 48],[19, 55],[20, 56],[21, 55],[22, 58],[23, 55],[24, 56],[25, 55],[26, 55],[27, 54]]) as Theme

export const light_orange_active_Input = n256 as Theme
export const light_orange_active_TextArea = n256 as Theme
const n257 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 95],[18, 106],[19, 105],[20, 106],[21, 105],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 104]]) as Theme

export const light_yellow_alt1_ListItem = n257 as Theme
const n258 = t([[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[18, 106],[19, 105],[20, 106],[21, 105],[22, 106],[23, 100],[24, 102],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_alt1_Card = n258 as Theme
export const light_yellow_alt1_DrawerFrame = n258 as Theme
export const light_yellow_alt1_Progress = n258 as Theme
export const light_yellow_alt1_TooltipArrow = n258 as Theme
const n259 = t([[12, 99],[13, 100],[14, 102],[15, 103],[16, 98],[17, 97],[18, 106],[19, 105],[20, 106],[21, 105],[22, 105],[23, 244],[24, 244],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_alt1_Button = n259 as Theme
const n260 = t([[12, 99],[13, 100],[14, 102],[15, 103],[16, 98],[17, 97],[18, 106],[19, 105],[20, 106],[21, 105],[22, 105],[23, 102],[24, 103],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_alt1_Checkbox = n260 as Theme
export const light_yellow_alt1_Switch = n260 as Theme
export const light_yellow_alt1_TooltipContent = n260 as Theme
export const light_yellow_alt1_SliderTrack = n260 as Theme
const n261 = t([[12, 11],[13, 106],[14, 105],[15, 104],[16, 11],[17, 11],[18, 96],[19, 97],[20, 96],[21, 97],[22, 95],[23, 105],[24, 104],[25, 105],[26, 105],[27, 97]]) as Theme

export const light_yellow_alt1_SwitchThumb = n261 as Theme
const n262 = t([[12, 103],[13, 102],[14, 100],[15, 99],[16, 104],[17, 105],[18, 96],[19, 97],[20, 96],[21, 97],[22, 97],[23, 100],[24, 99],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_alt1_SliderTrackActive = n262 as Theme
const n263 = t([[12, 105],[13, 104],[14, 103],[15, 102],[16, 106],[17, 11],[18, 96],[19, 97],[20, 96],[21, 97],[22, 95],[23, 103],[24, 102],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_alt1_SliderThumb = n263 as Theme
export const light_yellow_alt1_Tooltip = n263 as Theme
export const light_yellow_alt1_ProgressIndicator = n263 as Theme
const n264 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 95],[17, 95],[18, 106],[19, 105],[20, 106],[21, 105],[22, 11],[23, 100],[24, 102],[25, 100],[26, 100],[27, 104]]) as Theme

export const light_yellow_alt1_Input = n264 as Theme
export const light_yellow_alt1_TextArea = n264 as Theme
const n265 = t([[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 95],[18, 105],[19, 104],[20, 105],[21, 104],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 103]]) as Theme

export const light_yellow_alt2_ListItem = n265 as Theme
const n266 = t([[12, 99],[13, 100],[14, 102],[15, 103],[16, 98],[17, 97],[18, 105],[19, 104],[20, 105],[21, 104],[22, 105],[23, 102],[24, 103],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_alt2_Card = n266 as Theme
export const light_yellow_alt2_DrawerFrame = n266 as Theme
export const light_yellow_alt2_Progress = n266 as Theme
export const light_yellow_alt2_TooltipArrow = n266 as Theme
const n267 = t([[12, 100],[13, 102],[14, 103],[15, 104],[16, 99],[17, 98],[18, 105],[19, 104],[20, 105],[21, 104],[22, 104],[23, 244],[24, 244],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_alt2_Button = n267 as Theme
const n268 = t([[12, 100],[13, 102],[14, 103],[15, 104],[16, 99],[17, 98],[18, 105],[19, 104],[20, 105],[21, 104],[22, 104],[23, 103],[24, 104],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_alt2_Checkbox = n268 as Theme
export const light_yellow_alt2_Switch = n268 as Theme
export const light_yellow_alt2_TooltipContent = n268 as Theme
export const light_yellow_alt2_SliderTrack = n268 as Theme
const n269 = t([[12, 106],[13, 105],[14, 104],[15, 103],[16, 11],[17, 11],[18, 97],[19, 98],[20, 97],[21, 98],[22, 95],[23, 104],[24, 103],[25, 104],[26, 104],[27, 98]]) as Theme

export const light_yellow_alt2_SwitchThumb = n269 as Theme
const n270 = t([[12, 102],[13, 100],[14, 99],[15, 98],[16, 103],[17, 104],[18, 97],[19, 98],[20, 97],[21, 98],[22, 98],[23, 99],[24, 98],[25, 99],[26, 99],[27, 103]]) as Theme

export const light_yellow_alt2_SliderTrackActive = n270 as Theme
const n271 = t([[12, 104],[13, 103],[14, 102],[15, 100],[16, 105],[17, 106],[18, 97],[19, 98],[20, 97],[21, 98],[22, 96],[23, 102],[24, 100],[25, 102],[26, 102],[27, 100]]) as Theme

export const light_yellow_alt2_SliderThumb = n271 as Theme
export const light_yellow_alt2_Tooltip = n271 as Theme
export const light_yellow_alt2_ProgressIndicator = n271 as Theme
const n272 = t([[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 95],[18, 105],[19, 104],[20, 105],[21, 104],[22, 11],[23, 102],[24, 103],[25, 102],[26, 102],[27, 103]]) as Theme

export const light_yellow_alt2_Input = n272 as Theme
export const light_yellow_alt2_TextArea = n272 as Theme
const n273 = t([[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[19, 103],[20, 104],[21, 103],[22, 106],[23, 100],[24, 102],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_active_ListItem = n273 as Theme
const n274 = t([[12, 100],[13, 102],[14, 103],[15, 104],[16, 99],[17, 98],[19, 103],[20, 104],[21, 103],[22, 104],[23, 103],[24, 104],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_active_Card = n274 as Theme
export const light_yellow_active_DrawerFrame = n274 as Theme
export const light_yellow_active_Progress = n274 as Theme
export const light_yellow_active_TooltipArrow = n274 as Theme
const n275 = t([[12, 102],[13, 103],[14, 104],[15, 105],[16, 100],[17, 99],[19, 103],[20, 104],[21, 103],[22, 103],[23, 244],[24, 244],[25, 104],[26, 104],[27, 98]]) as Theme

export const light_yellow_active_Button = n275 as Theme
const n276 = t([[12, 102],[13, 103],[14, 104],[15, 105],[16, 100],[17, 99],[19, 103],[20, 104],[21, 103],[22, 103],[23, 104],[24, 105],[25, 104],[26, 104],[27, 98]]) as Theme

export const light_yellow_active_Checkbox = n276 as Theme
export const light_yellow_active_Switch = n276 as Theme
export const light_yellow_active_TooltipContent = n276 as Theme
export const light_yellow_active_SliderTrack = n276 as Theme
const n277 = t([[12, 105],[13, 104],[14, 103],[15, 102],[16, 106],[17, 11],[19, 99],[20, 98],[21, 99],[22, 95],[23, 103],[24, 102],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_active_SwitchThumb = n277 as Theme
const n278 = t([[12, 100],[13, 99],[14, 98],[15, 97],[16, 102],[17, 103],[19, 99],[20, 98],[21, 99],[22, 99],[23, 98],[24, 97],[25, 98],[26, 98],[27, 104]]) as Theme

export const light_yellow_active_SliderTrackActive = n278 as Theme
const n279 = t([[12, 103],[13, 102],[14, 100],[15, 99],[16, 104],[17, 105],[19, 99],[20, 98],[21, 99],[22, 97],[23, 100],[24, 99],[25, 100],[26, 100],[27, 102]]) as Theme

export const light_yellow_active_SliderThumb = n279 as Theme
export const light_yellow_active_Tooltip = n279 as Theme
export const light_yellow_active_ProgressIndicator = n279 as Theme
const n280 = t([[12, 98],[13, 99],[14, 100],[15, 102],[16, 97],[17, 96],[19, 103],[20, 104],[21, 103],[22, 106],[23, 103],[24, 104],[25, 103],[26, 103],[27, 102]]) as Theme

export const light_yellow_active_Input = n280 as Theme
export const light_yellow_active_TextArea = n280 as Theme
const n281 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 35],[18, 46],[19, 45],[20, 46],[21, 45],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 44]]) as Theme

export const light_green_alt1_ListItem = n281 as Theme
const n282 = t([[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[18, 46],[19, 45],[20, 46],[21, 45],[22, 46],[23, 40],[24, 42],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_alt1_Card = n282 as Theme
export const light_green_alt1_DrawerFrame = n282 as Theme
export const light_green_alt1_Progress = n282 as Theme
export const light_green_alt1_TooltipArrow = n282 as Theme
const n283 = t([[12, 39],[13, 40],[14, 42],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 45],[23, 244],[24, 244],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_alt1_Button = n283 as Theme
const n284 = t([[12, 39],[13, 40],[14, 42],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 45],[23, 42],[24, 43],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_alt1_Checkbox = n284 as Theme
export const light_green_alt1_Switch = n284 as Theme
export const light_green_alt1_TooltipContent = n284 as Theme
export const light_green_alt1_SliderTrack = n284 as Theme
const n285 = t([[12, 11],[13, 46],[14, 45],[15, 44],[16, 11],[17, 11],[18, 36],[19, 37],[20, 36],[21, 37],[22, 35],[23, 45],[24, 44],[25, 45],[26, 45],[27, 37]]) as Theme

export const light_green_alt1_SwitchThumb = n285 as Theme
const n286 = t([[12, 43],[13, 42],[14, 40],[15, 39],[16, 44],[17, 45],[18, 36],[19, 37],[20, 36],[21, 37],[22, 37],[23, 40],[24, 39],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_alt1_SliderTrackActive = n286 as Theme
const n287 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 46],[17, 11],[18, 36],[19, 37],[20, 36],[21, 37],[22, 35],[23, 43],[24, 42],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_alt1_SliderThumb = n287 as Theme
export const light_green_alt1_Tooltip = n287 as Theme
export const light_green_alt1_ProgressIndicator = n287 as Theme
const n288 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 35],[17, 35],[18, 46],[19, 45],[20, 46],[21, 45],[22, 11],[23, 40],[24, 42],[25, 40],[26, 40],[27, 44]]) as Theme

export const light_green_alt1_Input = n288 as Theme
export const light_green_alt1_TextArea = n288 as Theme
const n289 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 35],[18, 45],[19, 44],[20, 45],[21, 44],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 43]]) as Theme

export const light_green_alt2_ListItem = n289 as Theme
const n290 = t([[12, 39],[13, 40],[14, 42],[15, 43],[16, 38],[17, 37],[18, 45],[19, 44],[20, 45],[21, 44],[22, 45],[23, 42],[24, 43],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_alt2_Card = n290 as Theme
export const light_green_alt2_DrawerFrame = n290 as Theme
export const light_green_alt2_Progress = n290 as Theme
export const light_green_alt2_TooltipArrow = n290 as Theme
const n291 = t([[12, 40],[13, 42],[14, 43],[15, 44],[16, 39],[17, 38],[18, 45],[19, 44],[20, 45],[21, 44],[22, 44],[23, 244],[24, 244],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_alt2_Button = n291 as Theme
const n292 = t([[12, 40],[13, 42],[14, 43],[15, 44],[16, 39],[17, 38],[18, 45],[19, 44],[20, 45],[21, 44],[22, 44],[23, 43],[24, 44],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_alt2_Checkbox = n292 as Theme
export const light_green_alt2_Switch = n292 as Theme
export const light_green_alt2_TooltipContent = n292 as Theme
export const light_green_alt2_SliderTrack = n292 as Theme
const n293 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 11],[17, 11],[18, 37],[19, 38],[20, 37],[21, 38],[22, 35],[23, 44],[24, 43],[25, 44],[26, 44],[27, 38]]) as Theme

export const light_green_alt2_SwitchThumb = n293 as Theme
const n294 = t([[12, 42],[13, 40],[14, 39],[15, 38],[16, 43],[17, 44],[18, 37],[19, 38],[20, 37],[21, 38],[22, 38],[23, 39],[24, 38],[25, 39],[26, 39],[27, 43]]) as Theme

export const light_green_alt2_SliderTrackActive = n294 as Theme
const n295 = t([[12, 44],[13, 43],[14, 42],[15, 40],[16, 45],[17, 46],[18, 37],[19, 38],[20, 37],[21, 38],[22, 36],[23, 42],[24, 40],[25, 42],[26, 42],[27, 40]]) as Theme

export const light_green_alt2_SliderThumb = n295 as Theme
export const light_green_alt2_Tooltip = n295 as Theme
export const light_green_alt2_ProgressIndicator = n295 as Theme
const n296 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 35],[18, 45],[19, 44],[20, 45],[21, 44],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 43]]) as Theme

export const light_green_alt2_Input = n296 as Theme
export const light_green_alt2_TextArea = n296 as Theme
const n297 = t([[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[19, 43],[20, 44],[21, 43],[22, 46],[23, 40],[24, 42],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_active_ListItem = n297 as Theme
const n298 = t([[12, 40],[13, 42],[14, 43],[15, 44],[16, 39],[17, 38],[19, 43],[20, 44],[21, 43],[22, 44],[23, 43],[24, 44],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_active_Card = n298 as Theme
export const light_green_active_DrawerFrame = n298 as Theme
export const light_green_active_Progress = n298 as Theme
export const light_green_active_TooltipArrow = n298 as Theme
const n299 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 40],[17, 39],[19, 43],[20, 44],[21, 43],[22, 43],[23, 244],[24, 244],[25, 44],[26, 44],[27, 38]]) as Theme

export const light_green_active_Button = n299 as Theme
const n300 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 40],[17, 39],[19, 43],[20, 44],[21, 43],[22, 43],[23, 44],[24, 45],[25, 44],[26, 44],[27, 38]]) as Theme

export const light_green_active_Checkbox = n300 as Theme
export const light_green_active_Switch = n300 as Theme
export const light_green_active_TooltipContent = n300 as Theme
export const light_green_active_SliderTrack = n300 as Theme
const n301 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 46],[17, 11],[19, 39],[20, 38],[21, 39],[22, 35],[23, 43],[24, 42],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_active_SwitchThumb = n301 as Theme
const n302 = t([[12, 40],[13, 39],[14, 38],[15, 37],[16, 42],[17, 43],[19, 39],[20, 38],[21, 39],[22, 39],[23, 38],[24, 37],[25, 38],[26, 38],[27, 44]]) as Theme

export const light_green_active_SliderTrackActive = n302 as Theme
const n303 = t([[12, 43],[13, 42],[14, 40],[15, 39],[16, 44],[17, 45],[19, 39],[20, 38],[21, 39],[22, 37],[23, 40],[24, 39],[25, 40],[26, 40],[27, 42]]) as Theme

export const light_green_active_SliderThumb = n303 as Theme
export const light_green_active_Tooltip = n303 as Theme
export const light_green_active_ProgressIndicator = n303 as Theme
const n304 = t([[12, 38],[13, 39],[14, 40],[15, 42],[16, 37],[17, 36],[19, 43],[20, 44],[21, 43],[22, 46],[23, 43],[24, 44],[25, 43],[26, 43],[27, 42]]) as Theme

export const light_green_active_Input = n304 as Theme
export const light_green_active_TextArea = n304 as Theme
const n305 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 15],[18, 26],[19, 25],[20, 26],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 24]]) as Theme

export const light_blue_alt1_ListItem = n305 as Theme
const n306 = t([[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[18, 26],[19, 25],[20, 26],[21, 25],[22, 26],[23, 20],[24, 22],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_alt1_Card = n306 as Theme
export const light_blue_alt1_DrawerFrame = n306 as Theme
export const light_blue_alt1_Progress = n306 as Theme
export const light_blue_alt1_TooltipArrow = n306 as Theme
const n307 = t([[12, 19],[13, 20],[14, 22],[15, 23],[16, 18],[17, 17],[18, 26],[19, 25],[20, 26],[21, 25],[22, 25],[23, 244],[24, 244],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_alt1_Button = n307 as Theme
const n308 = t([[12, 19],[13, 20],[14, 22],[15, 23],[16, 18],[17, 17],[18, 26],[19, 25],[20, 26],[21, 25],[22, 25],[23, 22],[24, 23],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_alt1_Checkbox = n308 as Theme
export const light_blue_alt1_Switch = n308 as Theme
export const light_blue_alt1_TooltipContent = n308 as Theme
export const light_blue_alt1_SliderTrack = n308 as Theme
const n309 = t([[12, 11],[13, 26],[14, 25],[15, 24],[16, 11],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 25],[24, 24],[25, 25],[26, 25],[27, 17]]) as Theme

export const light_blue_alt1_SwitchThumb = n309 as Theme
const n310 = t([[12, 23],[13, 22],[14, 20],[15, 19],[16, 24],[17, 25],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 20],[24, 19],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_alt1_SliderTrackActive = n310 as Theme
const n311 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 26],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 23],[24, 22],[25, 23],[26, 23],[27, 19]]) as Theme

export const light_blue_alt1_SliderThumb = n311 as Theme
export const light_blue_alt1_Tooltip = n311 as Theme
export const light_blue_alt1_ProgressIndicator = n311 as Theme
const n312 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 15],[18, 26],[19, 25],[20, 26],[21, 25],[22, 11],[23, 20],[24, 22],[25, 20],[26, 20],[27, 24]]) as Theme

export const light_blue_alt1_Input = n312 as Theme
export const light_blue_alt1_TextArea = n312 as Theme
const n313 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 19],[24, 20],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_alt2_ListItem = n313 as Theme
const n314 = t([[12, 19],[13, 20],[14, 22],[15, 23],[16, 18],[17, 17],[18, 25],[19, 24],[20, 25],[21, 24],[22, 25],[23, 22],[24, 23],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_alt2_Card = n314 as Theme
export const light_blue_alt2_DrawerFrame = n314 as Theme
export const light_blue_alt2_Progress = n314 as Theme
export const light_blue_alt2_TooltipArrow = n314 as Theme
const n315 = t([[12, 20],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 244],[24, 244],[25, 23],[26, 23],[27, 19]]) as Theme

export const light_blue_alt2_Button = n315 as Theme
const n316 = t([[12, 20],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 23],[24, 24],[25, 23],[26, 23],[27, 19]]) as Theme

export const light_blue_alt2_Checkbox = n316 as Theme
export const light_blue_alt2_Switch = n316 as Theme
export const light_blue_alt2_TooltipContent = n316 as Theme
export const light_blue_alt2_SliderTrack = n316 as Theme
const n317 = t([[12, 26],[13, 25],[14, 24],[15, 23],[16, 11],[17, 11],[18, 17],[19, 18],[20, 17],[21, 18],[22, 15],[23, 24],[24, 23],[25, 24],[26, 24],[27, 18]]) as Theme

export const light_blue_alt2_SwitchThumb = n317 as Theme
const n318 = t([[12, 22],[13, 20],[14, 19],[15, 18],[16, 23],[17, 24],[18, 17],[19, 18],[20, 17],[21, 18],[22, 18],[23, 19],[24, 18],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_alt2_SliderTrackActive = n318 as Theme
const n319 = t([[12, 24],[13, 23],[14, 22],[15, 20],[16, 25],[17, 26],[18, 17],[19, 18],[20, 17],[21, 18],[22, 16],[23, 22],[24, 20],[25, 22],[26, 22],[27, 20]]) as Theme

export const light_blue_alt2_SliderThumb = n319 as Theme
export const light_blue_alt2_Tooltip = n319 as Theme
export const light_blue_alt2_ProgressIndicator = n319 as Theme
const n320 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 22],[24, 23],[25, 22],[26, 22],[27, 23]]) as Theme

export const light_blue_alt2_Input = n320 as Theme
export const light_blue_alt2_TextArea = n320 as Theme
const n321 = t([[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[19, 23],[20, 24],[21, 23],[22, 26],[23, 20],[24, 22],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_active_ListItem = n321 as Theme
const n322 = t([[12, 20],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 23],[20, 24],[21, 23],[22, 24],[23, 23],[24, 24],[25, 23],[26, 23],[27, 19]]) as Theme

export const light_blue_active_Card = n322 as Theme
export const light_blue_active_DrawerFrame = n322 as Theme
export const light_blue_active_Progress = n322 as Theme
export const light_blue_active_TooltipArrow = n322 as Theme
const n323 = t([[12, 22],[13, 23],[14, 24],[15, 25],[16, 20],[17, 19],[19, 23],[20, 24],[21, 23],[22, 23],[23, 244],[24, 244],[25, 24],[26, 24],[27, 18]]) as Theme

export const light_blue_active_Button = n323 as Theme
const n324 = t([[12, 22],[13, 23],[14, 24],[15, 25],[16, 20],[17, 19],[19, 23],[20, 24],[21, 23],[22, 23],[23, 24],[24, 25],[25, 24],[26, 24],[27, 18]]) as Theme

export const light_blue_active_Checkbox = n324 as Theme
export const light_blue_active_Switch = n324 as Theme
export const light_blue_active_TooltipContent = n324 as Theme
export const light_blue_active_SliderTrack = n324 as Theme
const n325 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 26],[17, 11],[19, 19],[20, 18],[21, 19],[22, 15],[23, 23],[24, 22],[25, 23],[26, 23],[27, 19]]) as Theme

export const light_blue_active_SwitchThumb = n325 as Theme
const n326 = t([[12, 20],[13, 19],[14, 18],[15, 17],[16, 22],[17, 23],[19, 19],[20, 18],[21, 19],[22, 19],[23, 18],[24, 17],[25, 18],[26, 18],[27, 24]]) as Theme

export const light_blue_active_SliderTrackActive = n326 as Theme
const n327 = t([[12, 23],[13, 22],[14, 20],[15, 19],[16, 24],[17, 25],[19, 19],[20, 18],[21, 19],[22, 17],[23, 20],[24, 19],[25, 20],[26, 20],[27, 22]]) as Theme

export const light_blue_active_SliderThumb = n327 as Theme
export const light_blue_active_Tooltip = n327 as Theme
export const light_blue_active_ProgressIndicator = n327 as Theme
const n328 = t([[12, 18],[13, 19],[14, 20],[15, 22],[16, 17],[17, 16],[19, 23],[20, 24],[21, 23],[22, 26],[23, 23],[24, 24],[25, 23],[26, 23],[27, 22]]) as Theme

export const light_blue_active_Input = n328 as Theme
export const light_blue_active_TextArea = n328 as Theme
const n329 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 71],[18, 82],[19, 81],[20, 82],[21, 81],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 80]]) as Theme

export const light_purple_alt1_ListItem = n329 as Theme
const n330 = t([[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[18, 82],[19, 81],[20, 82],[21, 81],[22, 82],[23, 76],[24, 78],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_alt1_Card = n330 as Theme
export const light_purple_alt1_DrawerFrame = n330 as Theme
export const light_purple_alt1_Progress = n330 as Theme
export const light_purple_alt1_TooltipArrow = n330 as Theme
const n331 = t([[12, 75],[13, 76],[14, 78],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 81],[23, 244],[24, 244],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_alt1_Button = n331 as Theme
const n332 = t([[12, 75],[13, 76],[14, 78],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 81],[23, 78],[24, 79],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_alt1_Checkbox = n332 as Theme
export const light_purple_alt1_Switch = n332 as Theme
export const light_purple_alt1_TooltipContent = n332 as Theme
export const light_purple_alt1_SliderTrack = n332 as Theme
const n333 = t([[12, 11],[13, 82],[14, 81],[15, 80],[16, 11],[17, 11],[18, 72],[19, 73],[20, 72],[21, 73],[22, 71],[23, 81],[24, 80],[25, 81],[26, 81],[27, 73]]) as Theme

export const light_purple_alt1_SwitchThumb = n333 as Theme
const n334 = t([[12, 79],[13, 78],[14, 76],[15, 75],[16, 80],[17, 81],[18, 72],[19, 73],[20, 72],[21, 73],[22, 73],[23, 76],[24, 75],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_alt1_SliderTrackActive = n334 as Theme
const n335 = t([[12, 81],[13, 80],[14, 79],[15, 78],[16, 82],[17, 11],[18, 72],[19, 73],[20, 72],[21, 73],[22, 71],[23, 79],[24, 78],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_alt1_SliderThumb = n335 as Theme
export const light_purple_alt1_Tooltip = n335 as Theme
export const light_purple_alt1_ProgressIndicator = n335 as Theme
const n336 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 71],[17, 71],[18, 82],[19, 81],[20, 82],[21, 81],[22, 11],[23, 76],[24, 78],[25, 76],[26, 76],[27, 80]]) as Theme

export const light_purple_alt1_Input = n336 as Theme
export const light_purple_alt1_TextArea = n336 as Theme
const n337 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 71],[18, 81],[19, 80],[20, 81],[21, 80],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 79]]) as Theme

export const light_purple_alt2_ListItem = n337 as Theme
const n338 = t([[12, 75],[13, 76],[14, 78],[15, 79],[16, 74],[17, 73],[18, 81],[19, 80],[20, 81],[21, 80],[22, 81],[23, 78],[24, 79],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_alt2_Card = n338 as Theme
export const light_purple_alt2_DrawerFrame = n338 as Theme
export const light_purple_alt2_Progress = n338 as Theme
export const light_purple_alt2_TooltipArrow = n338 as Theme
const n339 = t([[12, 76],[13, 78],[14, 79],[15, 80],[16, 75],[17, 74],[18, 81],[19, 80],[20, 81],[21, 80],[22, 80],[23, 244],[24, 244],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_alt2_Button = n339 as Theme
const n340 = t([[12, 76],[13, 78],[14, 79],[15, 80],[16, 75],[17, 74],[18, 81],[19, 80],[20, 81],[21, 80],[22, 80],[23, 79],[24, 80],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_alt2_Checkbox = n340 as Theme
export const light_purple_alt2_Switch = n340 as Theme
export const light_purple_alt2_TooltipContent = n340 as Theme
export const light_purple_alt2_SliderTrack = n340 as Theme
const n341 = t([[12, 82],[13, 81],[14, 80],[15, 79],[16, 11],[17, 11],[18, 73],[19, 74],[20, 73],[21, 74],[22, 71],[23, 80],[24, 79],[25, 80],[26, 80],[27, 74]]) as Theme

export const light_purple_alt2_SwitchThumb = n341 as Theme
const n342 = t([[12, 78],[13, 76],[14, 75],[15, 74],[16, 79],[17, 80],[18, 73],[19, 74],[20, 73],[21, 74],[22, 74],[23, 75],[24, 74],[25, 75],[26, 75],[27, 79]]) as Theme

export const light_purple_alt2_SliderTrackActive = n342 as Theme
const n343 = t([[12, 80],[13, 79],[14, 78],[15, 76],[16, 81],[17, 82],[18, 73],[19, 74],[20, 73],[21, 74],[22, 72],[23, 78],[24, 76],[25, 78],[26, 78],[27, 76]]) as Theme

export const light_purple_alt2_SliderThumb = n343 as Theme
export const light_purple_alt2_Tooltip = n343 as Theme
export const light_purple_alt2_ProgressIndicator = n343 as Theme
const n344 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 71],[18, 81],[19, 80],[20, 81],[21, 80],[22, 11],[23, 78],[24, 79],[25, 78],[26, 78],[27, 79]]) as Theme

export const light_purple_alt2_Input = n344 as Theme
export const light_purple_alt2_TextArea = n344 as Theme
const n345 = t([[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[19, 79],[20, 80],[21, 79],[22, 82],[23, 76],[24, 78],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_active_ListItem = n345 as Theme
const n346 = t([[12, 76],[13, 78],[14, 79],[15, 80],[16, 75],[17, 74],[19, 79],[20, 80],[21, 79],[22, 80],[23, 79],[24, 80],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_active_Card = n346 as Theme
export const light_purple_active_DrawerFrame = n346 as Theme
export const light_purple_active_Progress = n346 as Theme
export const light_purple_active_TooltipArrow = n346 as Theme
const n347 = t([[12, 78],[13, 79],[14, 80],[15, 81],[16, 76],[17, 75],[19, 79],[20, 80],[21, 79],[22, 79],[23, 244],[24, 244],[25, 80],[26, 80],[27, 74]]) as Theme

export const light_purple_active_Button = n347 as Theme
const n348 = t([[12, 78],[13, 79],[14, 80],[15, 81],[16, 76],[17, 75],[19, 79],[20, 80],[21, 79],[22, 79],[23, 80],[24, 81],[25, 80],[26, 80],[27, 74]]) as Theme

export const light_purple_active_Checkbox = n348 as Theme
export const light_purple_active_Switch = n348 as Theme
export const light_purple_active_TooltipContent = n348 as Theme
export const light_purple_active_SliderTrack = n348 as Theme
const n349 = t([[12, 81],[13, 80],[14, 79],[15, 78],[16, 82],[17, 11],[19, 75],[20, 74],[21, 75],[22, 71],[23, 79],[24, 78],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_active_SwitchThumb = n349 as Theme
const n350 = t([[12, 76],[13, 75],[14, 74],[15, 73],[16, 78],[17, 79],[19, 75],[20, 74],[21, 75],[22, 75],[23, 74],[24, 73],[25, 74],[26, 74],[27, 80]]) as Theme

export const light_purple_active_SliderTrackActive = n350 as Theme
const n351 = t([[12, 79],[13, 78],[14, 76],[15, 75],[16, 80],[17, 81],[19, 75],[20, 74],[21, 75],[22, 73],[23, 76],[24, 75],[25, 76],[26, 76],[27, 78]]) as Theme

export const light_purple_active_SliderThumb = n351 as Theme
export const light_purple_active_Tooltip = n351 as Theme
export const light_purple_active_ProgressIndicator = n351 as Theme
const n352 = t([[12, 74],[13, 75],[14, 76],[15, 78],[16, 73],[17, 72],[19, 79],[20, 80],[21, 79],[22, 82],[23, 79],[24, 80],[25, 79],[26, 79],[27, 78]]) as Theme

export const light_purple_active_Input = n352 as Theme
export const light_purple_active_TextArea = n352 as Theme
const n353 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 59],[18, 70],[19, 69],[20, 70],[21, 69],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 68]]) as Theme

export const light_pink_alt1_ListItem = n353 as Theme
const n354 = t([[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[18, 70],[19, 69],[20, 70],[21, 69],[22, 70],[23, 64],[24, 66],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_alt1_Card = n354 as Theme
export const light_pink_alt1_DrawerFrame = n354 as Theme
export const light_pink_alt1_Progress = n354 as Theme
export const light_pink_alt1_TooltipArrow = n354 as Theme
const n355 = t([[12, 63],[13, 64],[14, 66],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 69],[23, 244],[24, 244],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_alt1_Button = n355 as Theme
const n356 = t([[12, 63],[13, 64],[14, 66],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 69],[23, 66],[24, 67],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_alt1_Checkbox = n356 as Theme
export const light_pink_alt1_Switch = n356 as Theme
export const light_pink_alt1_TooltipContent = n356 as Theme
export const light_pink_alt1_SliderTrack = n356 as Theme
const n357 = t([[12, 11],[13, 70],[14, 69],[15, 68],[16, 11],[17, 11],[18, 60],[19, 61],[20, 60],[21, 61],[22, 59],[23, 69],[24, 68],[25, 69],[26, 69],[27, 61]]) as Theme

export const light_pink_alt1_SwitchThumb = n357 as Theme
const n358 = t([[12, 67],[13, 66],[14, 64],[15, 63],[16, 68],[17, 69],[18, 60],[19, 61],[20, 60],[21, 61],[22, 61],[23, 64],[24, 63],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_alt1_SliderTrackActive = n358 as Theme
const n359 = t([[12, 69],[13, 68],[14, 67],[15, 66],[16, 70],[17, 11],[18, 60],[19, 61],[20, 60],[21, 61],[22, 59],[23, 67],[24, 66],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_alt1_SliderThumb = n359 as Theme
export const light_pink_alt1_Tooltip = n359 as Theme
export const light_pink_alt1_ProgressIndicator = n359 as Theme
const n360 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 59],[17, 59],[18, 70],[19, 69],[20, 70],[21, 69],[22, 11],[23, 64],[24, 66],[25, 64],[26, 64],[27, 68]]) as Theme

export const light_pink_alt1_Input = n360 as Theme
export const light_pink_alt1_TextArea = n360 as Theme
const n361 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 59],[18, 69],[19, 68],[20, 69],[21, 68],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 67]]) as Theme

export const light_pink_alt2_ListItem = n361 as Theme
const n362 = t([[12, 63],[13, 64],[14, 66],[15, 67],[16, 62],[17, 61],[18, 69],[19, 68],[20, 69],[21, 68],[22, 69],[23, 66],[24, 67],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_alt2_Card = n362 as Theme
export const light_pink_alt2_DrawerFrame = n362 as Theme
export const light_pink_alt2_Progress = n362 as Theme
export const light_pink_alt2_TooltipArrow = n362 as Theme
const n363 = t([[12, 64],[13, 66],[14, 67],[15, 68],[16, 63],[17, 62],[18, 69],[19, 68],[20, 69],[21, 68],[22, 68],[23, 244],[24, 244],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_alt2_Button = n363 as Theme
const n364 = t([[12, 64],[13, 66],[14, 67],[15, 68],[16, 63],[17, 62],[18, 69],[19, 68],[20, 69],[21, 68],[22, 68],[23, 67],[24, 68],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_alt2_Checkbox = n364 as Theme
export const light_pink_alt2_Switch = n364 as Theme
export const light_pink_alt2_TooltipContent = n364 as Theme
export const light_pink_alt2_SliderTrack = n364 as Theme
const n365 = t([[12, 70],[13, 69],[14, 68],[15, 67],[16, 11],[17, 11],[18, 61],[19, 62],[20, 61],[21, 62],[22, 59],[23, 68],[24, 67],[25, 68],[26, 68],[27, 62]]) as Theme

export const light_pink_alt2_SwitchThumb = n365 as Theme
const n366 = t([[12, 66],[13, 64],[14, 63],[15, 62],[16, 67],[17, 68],[18, 61],[19, 62],[20, 61],[21, 62],[22, 62],[23, 63],[24, 62],[25, 63],[26, 63],[27, 67]]) as Theme

export const light_pink_alt2_SliderTrackActive = n366 as Theme
const n367 = t([[12, 68],[13, 67],[14, 66],[15, 64],[16, 69],[17, 70],[18, 61],[19, 62],[20, 61],[21, 62],[22, 60],[23, 66],[24, 64],[25, 66],[26, 66],[27, 64]]) as Theme

export const light_pink_alt2_SliderThumb = n367 as Theme
export const light_pink_alt2_Tooltip = n367 as Theme
export const light_pink_alt2_ProgressIndicator = n367 as Theme
const n368 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 59],[18, 69],[19, 68],[20, 69],[21, 68],[22, 11],[23, 66],[24, 67],[25, 66],[26, 66],[27, 67]]) as Theme

export const light_pink_alt2_Input = n368 as Theme
export const light_pink_alt2_TextArea = n368 as Theme
const n369 = t([[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[19, 67],[20, 68],[21, 67],[22, 70],[23, 64],[24, 66],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_active_ListItem = n369 as Theme
const n370 = t([[12, 64],[13, 66],[14, 67],[15, 68],[16, 63],[17, 62],[19, 67],[20, 68],[21, 67],[22, 68],[23, 67],[24, 68],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_active_Card = n370 as Theme
export const light_pink_active_DrawerFrame = n370 as Theme
export const light_pink_active_Progress = n370 as Theme
export const light_pink_active_TooltipArrow = n370 as Theme
const n371 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 64],[17, 63],[19, 67],[20, 68],[21, 67],[22, 67],[23, 244],[24, 244],[25, 68],[26, 68],[27, 62]]) as Theme

export const light_pink_active_Button = n371 as Theme
const n372 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 64],[17, 63],[19, 67],[20, 68],[21, 67],[22, 67],[23, 68],[24, 69],[25, 68],[26, 68],[27, 62]]) as Theme

export const light_pink_active_Checkbox = n372 as Theme
export const light_pink_active_Switch = n372 as Theme
export const light_pink_active_TooltipContent = n372 as Theme
export const light_pink_active_SliderTrack = n372 as Theme
const n373 = t([[12, 69],[13, 68],[14, 67],[15, 66],[16, 70],[17, 11],[19, 63],[20, 62],[21, 63],[22, 59],[23, 67],[24, 66],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_active_SwitchThumb = n373 as Theme
const n374 = t([[12, 64],[13, 63],[14, 62],[15, 61],[16, 66],[17, 67],[19, 63],[20, 62],[21, 63],[22, 63],[23, 62],[24, 61],[25, 62],[26, 62],[27, 68]]) as Theme

export const light_pink_active_SliderTrackActive = n374 as Theme
const n375 = t([[12, 67],[13, 66],[14, 64],[15, 63],[16, 68],[17, 69],[19, 63],[20, 62],[21, 63],[22, 61],[23, 64],[24, 63],[25, 64],[26, 64],[27, 66]]) as Theme

export const light_pink_active_SliderThumb = n375 as Theme
export const light_pink_active_Tooltip = n375 as Theme
export const light_pink_active_ProgressIndicator = n375 as Theme
const n376 = t([[12, 62],[13, 63],[14, 64],[15, 66],[16, 61],[17, 60],[19, 67],[20, 68],[21, 67],[22, 70],[23, 67],[24, 68],[25, 67],[26, 67],[27, 66]]) as Theme

export const light_pink_active_Input = n376 as Theme
export const light_pink_active_TextArea = n376 as Theme
const n377 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 83],[18, 94],[19, 93],[20, 94],[21, 93],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 92]]) as Theme

export const light_red_alt1_ListItem = n377 as Theme
const n378 = t([[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[18, 94],[19, 93],[20, 94],[21, 93],[22, 94],[23, 88],[24, 90],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_alt1_Card = n378 as Theme
export const light_red_alt1_DrawerFrame = n378 as Theme
export const light_red_alt1_Progress = n378 as Theme
export const light_red_alt1_TooltipArrow = n378 as Theme
const n379 = t([[12, 87],[13, 88],[14, 90],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 93],[23, 244],[24, 244],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_alt1_Button = n379 as Theme
const n380 = t([[12, 87],[13, 88],[14, 90],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 93],[23, 90],[24, 91],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_alt1_Checkbox = n380 as Theme
export const light_red_alt1_Switch = n380 as Theme
export const light_red_alt1_TooltipContent = n380 as Theme
export const light_red_alt1_SliderTrack = n380 as Theme
const n381 = t([[12, 11],[13, 94],[14, 93],[15, 92],[16, 11],[17, 11],[18, 84],[19, 85],[20, 84],[21, 85],[22, 83],[23, 93],[24, 92],[25, 93],[26, 93],[27, 85]]) as Theme

export const light_red_alt1_SwitchThumb = n381 as Theme
const n382 = t([[12, 91],[13, 90],[14, 88],[15, 87],[16, 92],[17, 93],[18, 84],[19, 85],[20, 84],[21, 85],[22, 85],[23, 88],[24, 87],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_alt1_SliderTrackActive = n382 as Theme
const n383 = t([[12, 93],[13, 92],[14, 91],[15, 90],[16, 94],[17, 11],[18, 84],[19, 85],[20, 84],[21, 85],[22, 83],[23, 91],[24, 90],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_alt1_SliderThumb = n383 as Theme
export const light_red_alt1_Tooltip = n383 as Theme
export const light_red_alt1_ProgressIndicator = n383 as Theme
const n384 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 83],[17, 83],[18, 94],[19, 93],[20, 94],[21, 93],[22, 11],[23, 88],[24, 90],[25, 88],[26, 88],[27, 92]]) as Theme

export const light_red_alt1_Input = n384 as Theme
export const light_red_alt1_TextArea = n384 as Theme
const n385 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 83],[18, 93],[19, 92],[20, 93],[21, 92],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 91]]) as Theme

export const light_red_alt2_ListItem = n385 as Theme
const n386 = t([[12, 87],[13, 88],[14, 90],[15, 91],[16, 86],[17, 85],[18, 93],[19, 92],[20, 93],[21, 92],[22, 93],[23, 90],[24, 91],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_alt2_Card = n386 as Theme
export const light_red_alt2_DrawerFrame = n386 as Theme
export const light_red_alt2_Progress = n386 as Theme
export const light_red_alt2_TooltipArrow = n386 as Theme
const n387 = t([[12, 88],[13, 90],[14, 91],[15, 92],[16, 87],[17, 86],[18, 93],[19, 92],[20, 93],[21, 92],[22, 92],[23, 244],[24, 244],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_alt2_Button = n387 as Theme
const n388 = t([[12, 88],[13, 90],[14, 91],[15, 92],[16, 87],[17, 86],[18, 93],[19, 92],[20, 93],[21, 92],[22, 92],[23, 91],[24, 92],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_alt2_Checkbox = n388 as Theme
export const light_red_alt2_Switch = n388 as Theme
export const light_red_alt2_TooltipContent = n388 as Theme
export const light_red_alt2_SliderTrack = n388 as Theme
const n389 = t([[12, 94],[13, 93],[14, 92],[15, 91],[16, 11],[17, 11],[18, 85],[19, 86],[20, 85],[21, 86],[22, 83],[23, 92],[24, 91],[25, 92],[26, 92],[27, 86]]) as Theme

export const light_red_alt2_SwitchThumb = n389 as Theme
const n390 = t([[12, 90],[13, 88],[14, 87],[15, 86],[16, 91],[17, 92],[18, 85],[19, 86],[20, 85],[21, 86],[22, 86],[23, 87],[24, 86],[25, 87],[26, 87],[27, 91]]) as Theme

export const light_red_alt2_SliderTrackActive = n390 as Theme
const n391 = t([[12, 92],[13, 91],[14, 90],[15, 88],[16, 93],[17, 94],[18, 85],[19, 86],[20, 85],[21, 86],[22, 84],[23, 90],[24, 88],[25, 90],[26, 90],[27, 88]]) as Theme

export const light_red_alt2_SliderThumb = n391 as Theme
export const light_red_alt2_Tooltip = n391 as Theme
export const light_red_alt2_ProgressIndicator = n391 as Theme
const n392 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 83],[18, 93],[19, 92],[20, 93],[21, 92],[22, 11],[23, 90],[24, 91],[25, 90],[26, 90],[27, 91]]) as Theme

export const light_red_alt2_Input = n392 as Theme
export const light_red_alt2_TextArea = n392 as Theme
const n393 = t([[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[19, 91],[20, 92],[21, 91],[22, 94],[23, 88],[24, 90],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_active_ListItem = n393 as Theme
const n394 = t([[12, 88],[13, 90],[14, 91],[15, 92],[16, 87],[17, 86],[19, 91],[20, 92],[21, 91],[22, 92],[23, 91],[24, 92],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_active_Card = n394 as Theme
export const light_red_active_DrawerFrame = n394 as Theme
export const light_red_active_Progress = n394 as Theme
export const light_red_active_TooltipArrow = n394 as Theme
const n395 = t([[12, 90],[13, 91],[14, 92],[15, 93],[16, 88],[17, 87],[19, 91],[20, 92],[21, 91],[22, 91],[23, 244],[24, 244],[25, 92],[26, 92],[27, 86]]) as Theme

export const light_red_active_Button = n395 as Theme
const n396 = t([[12, 90],[13, 91],[14, 92],[15, 93],[16, 88],[17, 87],[19, 91],[20, 92],[21, 91],[22, 91],[23, 92],[24, 93],[25, 92],[26, 92],[27, 86]]) as Theme

export const light_red_active_Checkbox = n396 as Theme
export const light_red_active_Switch = n396 as Theme
export const light_red_active_TooltipContent = n396 as Theme
export const light_red_active_SliderTrack = n396 as Theme
const n397 = t([[12, 93],[13, 92],[14, 91],[15, 90],[16, 94],[17, 11],[19, 87],[20, 86],[21, 87],[22, 83],[23, 91],[24, 90],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_active_SwitchThumb = n397 as Theme
const n398 = t([[12, 88],[13, 87],[14, 86],[15, 85],[16, 90],[17, 91],[19, 87],[20, 86],[21, 87],[22, 87],[23, 86],[24, 85],[25, 86],[26, 86],[27, 92]]) as Theme

export const light_red_active_SliderTrackActive = n398 as Theme
const n399 = t([[12, 91],[13, 90],[14, 88],[15, 87],[16, 92],[17, 93],[19, 87],[20, 86],[21, 87],[22, 85],[23, 88],[24, 87],[25, 88],[26, 88],[27, 90]]) as Theme

export const light_red_active_SliderThumb = n399 as Theme
export const light_red_active_Tooltip = n399 as Theme
export const light_red_active_ProgressIndicator = n399 as Theme
const n400 = t([[12, 86],[13, 87],[14, 88],[15, 90],[16, 85],[17, 84],[19, 91],[20, 92],[21, 91],[22, 94],[23, 91],[24, 92],[25, 91],[26, 91],[27, 90]]) as Theme

export const light_red_active_Input = n400 as Theme
export const light_red_active_TextArea = n400 as Theme
const n401 = t([[12, 160],[13, 161],[14, 162],[15, 164],[16, 159],[17, 158],[18, 167],[19, 166],[20, 167],[21, 166],[22, 167],[23, 164],[24, 55],[25, 162],[26, 164],[27, 164]]) as Theme

export const dark_orange_alt1_Card = n401 as Theme
export const dark_orange_alt1_DrawerFrame = n401 as Theme
export const dark_orange_alt1_Progress = n401 as Theme
export const dark_orange_alt1_TooltipArrow = n401 as Theme
const n402 = t([[12, 161],[13, 162],[14, 164],[15, 55],[16, 160],[17, 159],[18, 167],[19, 166],[20, 167],[21, 166],[22, 166],[23, 244],[24, 244],[25, 164],[26, 55],[27, 162]]) as Theme

export const dark_orange_alt1_Button = n402 as Theme
const n403 = t([[12, 161],[13, 162],[14, 164],[15, 55],[16, 160],[17, 159],[18, 167],[19, 166],[20, 167],[21, 166],[22, 166],[23, 55],[24, 165],[25, 164],[26, 55],[27, 162]]) as Theme

export const dark_orange_alt1_Checkbox = n403 as Theme
export const dark_orange_alt1_Switch = n403 as Theme
export const dark_orange_alt1_TooltipContent = n403 as Theme
export const dark_orange_alt1_SliderTrack = n403 as Theme
const n404 = t([[12, 0],[13, 167],[14, 166],[15, 165],[16, 0],[17, 0],[18, 158],[19, 159],[20, 158],[21, 159],[22, 157],[23, 165],[24, 55],[25, 166],[26, 165],[27, 159]]) as Theme

export const dark_orange_alt1_SwitchThumb = n404 as Theme
const n405 = t([[12, 55],[13, 164],[14, 162],[15, 161],[16, 165],[17, 166],[18, 158],[19, 159],[20, 158],[21, 159],[22, 159],[23, 161],[24, 160],[25, 162],[26, 161],[27, 164]]) as Theme

export const dark_orange_alt1_SliderTrackActive = n405 as Theme
const n406 = t([[12, 166],[13, 165],[14, 55],[15, 164],[16, 167],[17, 0],[18, 158],[19, 159],[20, 158],[21, 159],[22, 157],[23, 164],[24, 162],[25, 55],[26, 164],[27, 161]]) as Theme

export const dark_orange_alt1_SliderThumb = n406 as Theme
export const dark_orange_alt1_Tooltip = n406 as Theme
export const dark_orange_alt1_ProgressIndicator = n406 as Theme
const n407 = t([[12, 159],[13, 160],[14, 161],[15, 162],[16, 158],[17, 157],[18, 167],[19, 166],[20, 167],[21, 166],[22, 0],[23, 164],[24, 55],[25, 162],[26, 164],[27, 55]]) as Theme

export const dark_orange_alt1_Input = n407 as Theme
export const dark_orange_alt1_TextArea = n407 as Theme
const n408 = t([[12, 161],[13, 162],[14, 164],[15, 55],[16, 160],[17, 159],[18, 166],[19, 165],[20, 166],[21, 165],[22, 166],[23, 55],[24, 165],[25, 164],[26, 55],[27, 162]]) as Theme

export const dark_orange_alt2_Card = n408 as Theme
export const dark_orange_alt2_DrawerFrame = n408 as Theme
export const dark_orange_alt2_Progress = n408 as Theme
export const dark_orange_alt2_TooltipArrow = n408 as Theme
const n409 = t([[12, 162],[13, 164],[14, 55],[15, 165],[16, 161],[17, 160],[18, 166],[19, 165],[20, 166],[21, 165],[22, 165],[23, 244],[24, 244],[25, 55],[26, 165],[27, 161]]) as Theme

export const dark_orange_alt2_Button = n409 as Theme
const n410 = t([[12, 162],[13, 164],[14, 55],[15, 165],[16, 161],[17, 160],[18, 166],[19, 165],[20, 166],[21, 165],[22, 165],[23, 165],[24, 166],[25, 55],[26, 165],[27, 161]]) as Theme

export const dark_orange_alt2_Checkbox = n410 as Theme
export const dark_orange_alt2_Switch = n410 as Theme
export const dark_orange_alt2_TooltipContent = n410 as Theme
export const dark_orange_alt2_SliderTrack = n410 as Theme
const n411 = t([[12, 167],[13, 166],[14, 165],[15, 55],[16, 0],[17, 0],[18, 159],[19, 160],[20, 159],[21, 160],[22, 157],[23, 55],[24, 164],[25, 165],[26, 55],[27, 160]]) as Theme

export const dark_orange_alt2_SwitchThumb = n411 as Theme
const n412 = t([[12, 164],[13, 162],[14, 161],[15, 160],[16, 55],[17, 165],[18, 159],[19, 160],[20, 159],[21, 160],[22, 160],[23, 160],[24, 159],[25, 161],[26, 160],[27, 55]]) as Theme

export const dark_orange_alt2_SliderTrackActive = n412 as Theme
const n413 = t([[12, 165],[13, 55],[14, 164],[15, 162],[16, 166],[17, 167],[18, 159],[19, 160],[20, 159],[21, 160],[22, 158],[23, 162],[24, 161],[25, 164],[26, 162],[27, 162]]) as Theme

export const dark_orange_alt2_SliderThumb = n413 as Theme
export const dark_orange_alt2_Tooltip = n413 as Theme
export const dark_orange_alt2_ProgressIndicator = n413 as Theme
const n414 = t([[12, 160],[13, 161],[14, 162],[15, 164],[16, 159],[17, 158],[18, 166],[19, 165],[20, 166],[21, 165],[22, 167],[23, 55],[24, 165],[25, 164],[26, 55],[27, 164]]) as Theme

export const dark_orange_alt2_Input = n414 as Theme
export const dark_orange_alt2_TextArea = n414 as Theme
const n415 = t([[12, 162],[13, 164],[14, 55],[15, 165],[16, 161],[17, 160],[19, 55],[20, 165],[21, 55],[22, 165],[23, 165],[24, 166],[25, 55],[26, 165],[27, 161]]) as Theme

export const dark_orange_active_Card = n415 as Theme
export const dark_orange_active_DrawerFrame = n415 as Theme
export const dark_orange_active_Progress = n415 as Theme
export const dark_orange_active_TooltipArrow = n415 as Theme
const n416 = t([[12, 164],[13, 55],[14, 165],[15, 166],[16, 162],[17, 161],[19, 55],[20, 165],[21, 55],[22, 55],[23, 244],[24, 244],[25, 165],[26, 166],[27, 160]]) as Theme

export const dark_orange_active_Button = n416 as Theme
const n417 = t([[12, 164],[13, 55],[14, 165],[15, 166],[16, 162],[17, 161],[19, 55],[20, 165],[21, 55],[22, 55],[23, 166],[24, 167],[25, 165],[26, 166],[27, 160]]) as Theme

export const dark_orange_active_Checkbox = n417 as Theme
export const dark_orange_active_Switch = n417 as Theme
export const dark_orange_active_TooltipContent = n417 as Theme
export const dark_orange_active_SliderTrack = n417 as Theme
const n418 = t([[12, 166],[13, 165],[14, 55],[15, 164],[16, 167],[17, 0],[19, 161],[20, 160],[21, 161],[22, 157],[23, 164],[24, 162],[25, 55],[26, 164],[27, 161]]) as Theme

export const dark_orange_active_SwitchThumb = n418 as Theme
const n419 = t([[12, 162],[13, 161],[14, 160],[15, 159],[16, 164],[17, 55],[19, 161],[20, 160],[21, 161],[22, 161],[23, 159],[24, 158],[25, 160],[26, 159],[27, 165]]) as Theme

export const dark_orange_active_SliderTrackActive = n419 as Theme
const n420 = t([[12, 55],[13, 164],[14, 162],[15, 161],[16, 165],[17, 166],[19, 161],[20, 160],[21, 161],[22, 159],[23, 161],[24, 160],[25, 162],[26, 161],[27, 164]]) as Theme

export const dark_orange_active_SliderThumb = n420 as Theme
export const dark_orange_active_Tooltip = n420 as Theme
export const dark_orange_active_ProgressIndicator = n420 as Theme
const n421 = t([[12, 161],[13, 162],[14, 164],[15, 55],[16, 160],[17, 159],[19, 55],[20, 165],[21, 55],[22, 166],[23, 165],[24, 166],[25, 55],[26, 165],[27, 162]]) as Theme

export const dark_orange_active_Input = n421 as Theme
export const dark_orange_active_TextArea = n421 as Theme
const n422 = t([[12, 204],[13, 205],[14, 206],[15, 208],[16, 203],[17, 202],[18, 211],[19, 210],[20, 211],[21, 210],[22, 211],[23, 208],[24, 103],[25, 206],[26, 208],[27, 208]]) as Theme

export const dark_yellow_alt1_Card = n422 as Theme
export const dark_yellow_alt1_DrawerFrame = n422 as Theme
export const dark_yellow_alt1_Progress = n422 as Theme
export const dark_yellow_alt1_TooltipArrow = n422 as Theme
const n423 = t([[12, 205],[13, 206],[14, 208],[15, 103],[16, 204],[17, 203],[18, 211],[19, 210],[20, 211],[21, 210],[22, 210],[23, 244],[24, 244],[25, 208],[26, 103],[27, 206]]) as Theme

export const dark_yellow_alt1_Button = n423 as Theme
const n424 = t([[12, 205],[13, 206],[14, 208],[15, 103],[16, 204],[17, 203],[18, 211],[19, 210],[20, 211],[21, 210],[22, 210],[23, 103],[24, 209],[25, 208],[26, 103],[27, 206]]) as Theme

export const dark_yellow_alt1_Checkbox = n424 as Theme
export const dark_yellow_alt1_Switch = n424 as Theme
export const dark_yellow_alt1_TooltipContent = n424 as Theme
export const dark_yellow_alt1_SliderTrack = n424 as Theme
const n425 = t([[12, 0],[13, 211],[14, 210],[15, 209],[16, 0],[17, 0],[18, 202],[19, 203],[20, 202],[21, 203],[22, 201],[23, 209],[24, 103],[25, 210],[26, 209],[27, 203]]) as Theme

export const dark_yellow_alt1_SwitchThumb = n425 as Theme
const n426 = t([[12, 103],[13, 208],[14, 206],[15, 205],[16, 209],[17, 210],[18, 202],[19, 203],[20, 202],[21, 203],[22, 203],[23, 205],[24, 204],[25, 206],[26, 205],[27, 208]]) as Theme

export const dark_yellow_alt1_SliderTrackActive = n426 as Theme
const n427 = t([[12, 210],[13, 209],[14, 103],[15, 208],[16, 211],[17, 0],[18, 202],[19, 203],[20, 202],[21, 203],[22, 201],[23, 208],[24, 206],[25, 103],[26, 208],[27, 205]]) as Theme

export const dark_yellow_alt1_SliderThumb = n427 as Theme
export const dark_yellow_alt1_Tooltip = n427 as Theme
export const dark_yellow_alt1_ProgressIndicator = n427 as Theme
const n428 = t([[12, 203],[13, 204],[14, 205],[15, 206],[16, 202],[17, 201],[18, 211],[19, 210],[20, 211],[21, 210],[22, 0],[23, 208],[24, 103],[25, 206],[26, 208],[27, 103]]) as Theme

export const dark_yellow_alt1_Input = n428 as Theme
export const dark_yellow_alt1_TextArea = n428 as Theme
const n429 = t([[12, 205],[13, 206],[14, 208],[15, 103],[16, 204],[17, 203],[18, 210],[19, 209],[20, 210],[21, 209],[22, 210],[23, 103],[24, 209],[25, 208],[26, 103],[27, 206]]) as Theme

export const dark_yellow_alt2_Card = n429 as Theme
export const dark_yellow_alt2_DrawerFrame = n429 as Theme
export const dark_yellow_alt2_Progress = n429 as Theme
export const dark_yellow_alt2_TooltipArrow = n429 as Theme
const n430 = t([[12, 206],[13, 208],[14, 103],[15, 209],[16, 205],[17, 204],[18, 210],[19, 209],[20, 210],[21, 209],[22, 209],[23, 244],[24, 244],[25, 103],[26, 209],[27, 205]]) as Theme

export const dark_yellow_alt2_Button = n430 as Theme
const n431 = t([[12, 206],[13, 208],[14, 103],[15, 209],[16, 205],[17, 204],[18, 210],[19, 209],[20, 210],[21, 209],[22, 209],[23, 209],[24, 210],[25, 103],[26, 209],[27, 205]]) as Theme

export const dark_yellow_alt2_Checkbox = n431 as Theme
export const dark_yellow_alt2_Switch = n431 as Theme
export const dark_yellow_alt2_TooltipContent = n431 as Theme
export const dark_yellow_alt2_SliderTrack = n431 as Theme
const n432 = t([[12, 211],[13, 210],[14, 209],[15, 103],[16, 0],[17, 0],[18, 203],[19, 204],[20, 203],[21, 204],[22, 201],[23, 103],[24, 208],[25, 209],[26, 103],[27, 204]]) as Theme

export const dark_yellow_alt2_SwitchThumb = n432 as Theme
const n433 = t([[12, 208],[13, 206],[14, 205],[15, 204],[16, 103],[17, 209],[18, 203],[19, 204],[20, 203],[21, 204],[22, 204],[23, 204],[24, 203],[25, 205],[26, 204],[27, 103]]) as Theme

export const dark_yellow_alt2_SliderTrackActive = n433 as Theme
const n434 = t([[12, 209],[13, 103],[14, 208],[15, 206],[16, 210],[17, 211],[18, 203],[19, 204],[20, 203],[21, 204],[22, 202],[23, 206],[24, 205],[25, 208],[26, 206],[27, 206]]) as Theme

export const dark_yellow_alt2_SliderThumb = n434 as Theme
export const dark_yellow_alt2_Tooltip = n434 as Theme
export const dark_yellow_alt2_ProgressIndicator = n434 as Theme
const n435 = t([[12, 204],[13, 205],[14, 206],[15, 208],[16, 203],[17, 202],[18, 210],[19, 209],[20, 210],[21, 209],[22, 211],[23, 103],[24, 209],[25, 208],[26, 103],[27, 208]]) as Theme

export const dark_yellow_alt2_Input = n435 as Theme
export const dark_yellow_alt2_TextArea = n435 as Theme
const n436 = t([[12, 206],[13, 208],[14, 103],[15, 209],[16, 205],[17, 204],[19, 103],[20, 209],[21, 103],[22, 209],[23, 209],[24, 210],[25, 103],[26, 209],[27, 205]]) as Theme

export const dark_yellow_active_Card = n436 as Theme
export const dark_yellow_active_DrawerFrame = n436 as Theme
export const dark_yellow_active_Progress = n436 as Theme
export const dark_yellow_active_TooltipArrow = n436 as Theme
const n437 = t([[12, 208],[13, 103],[14, 209],[15, 210],[16, 206],[17, 205],[19, 103],[20, 209],[21, 103],[22, 103],[23, 244],[24, 244],[25, 209],[26, 210],[27, 204]]) as Theme

export const dark_yellow_active_Button = n437 as Theme
const n438 = t([[12, 208],[13, 103],[14, 209],[15, 210],[16, 206],[17, 205],[19, 103],[20, 209],[21, 103],[22, 103],[23, 210],[24, 211],[25, 209],[26, 210],[27, 204]]) as Theme

export const dark_yellow_active_Checkbox = n438 as Theme
export const dark_yellow_active_Switch = n438 as Theme
export const dark_yellow_active_TooltipContent = n438 as Theme
export const dark_yellow_active_SliderTrack = n438 as Theme
const n439 = t([[12, 210],[13, 209],[14, 103],[15, 208],[16, 211],[17, 0],[19, 205],[20, 204],[21, 205],[22, 201],[23, 208],[24, 206],[25, 103],[26, 208],[27, 205]]) as Theme

export const dark_yellow_active_SwitchThumb = n439 as Theme
const n440 = t([[12, 206],[13, 205],[14, 204],[15, 203],[16, 208],[17, 103],[19, 205],[20, 204],[21, 205],[22, 205],[23, 203],[24, 202],[25, 204],[26, 203],[27, 209]]) as Theme

export const dark_yellow_active_SliderTrackActive = n440 as Theme
const n441 = t([[12, 103],[13, 208],[14, 206],[15, 205],[16, 209],[17, 210],[19, 205],[20, 204],[21, 205],[22, 203],[23, 205],[24, 204],[25, 206],[26, 205],[27, 208]]) as Theme

export const dark_yellow_active_SliderThumb = n441 as Theme
export const dark_yellow_active_Tooltip = n441 as Theme
export const dark_yellow_active_ProgressIndicator = n441 as Theme
const n442 = t([[12, 205],[13, 206],[14, 208],[15, 103],[16, 204],[17, 203],[19, 103],[20, 209],[21, 103],[22, 210],[23, 209],[24, 210],[25, 103],[26, 209],[27, 206]]) as Theme

export const dark_yellow_active_Input = n442 as Theme
export const dark_yellow_active_TextArea = n442 as Theme
const n443 = t([[12, 149],[13, 150],[14, 151],[15, 153],[16, 148],[17, 147],[18, 156],[19, 155],[20, 156],[21, 155],[22, 156],[23, 153],[24, 43],[25, 151],[26, 153],[27, 153]]) as Theme

export const dark_green_alt1_Card = n443 as Theme
export const dark_green_alt1_DrawerFrame = n443 as Theme
export const dark_green_alt1_Progress = n443 as Theme
export const dark_green_alt1_TooltipArrow = n443 as Theme
const n444 = t([[12, 150],[13, 151],[14, 153],[15, 43],[16, 149],[17, 148],[18, 156],[19, 155],[20, 156],[21, 155],[22, 155],[23, 244],[24, 244],[25, 153],[26, 43],[27, 151]]) as Theme

export const dark_green_alt1_Button = n444 as Theme
const n445 = t([[12, 150],[13, 151],[14, 153],[15, 43],[16, 149],[17, 148],[18, 156],[19, 155],[20, 156],[21, 155],[22, 155],[23, 43],[24, 154],[25, 153],[26, 43],[27, 151]]) as Theme

export const dark_green_alt1_Checkbox = n445 as Theme
export const dark_green_alt1_Switch = n445 as Theme
export const dark_green_alt1_TooltipContent = n445 as Theme
export const dark_green_alt1_SliderTrack = n445 as Theme
const n446 = t([[12, 0],[13, 156],[14, 155],[15, 154],[16, 0],[17, 0],[18, 147],[19, 148],[20, 147],[21, 148],[22, 146],[23, 154],[24, 43],[25, 155],[26, 154],[27, 148]]) as Theme

export const dark_green_alt1_SwitchThumb = n446 as Theme
const n447 = t([[12, 43],[13, 153],[14, 151],[15, 150],[16, 154],[17, 155],[18, 147],[19, 148],[20, 147],[21, 148],[22, 148],[23, 150],[24, 149],[25, 151],[26, 150],[27, 153]]) as Theme

export const dark_green_alt1_SliderTrackActive = n447 as Theme
const n448 = t([[12, 155],[13, 154],[14, 43],[15, 153],[16, 156],[17, 0],[18, 147],[19, 148],[20, 147],[21, 148],[22, 146],[23, 153],[24, 151],[25, 43],[26, 153],[27, 150]]) as Theme

export const dark_green_alt1_SliderThumb = n448 as Theme
export const dark_green_alt1_Tooltip = n448 as Theme
export const dark_green_alt1_ProgressIndicator = n448 as Theme
const n449 = t([[12, 148],[13, 149],[14, 150],[15, 151],[16, 147],[17, 146],[18, 156],[19, 155],[20, 156],[21, 155],[22, 0],[23, 153],[24, 43],[25, 151],[26, 153],[27, 43]]) as Theme

export const dark_green_alt1_Input = n449 as Theme
export const dark_green_alt1_TextArea = n449 as Theme
const n450 = t([[12, 150],[13, 151],[14, 153],[15, 43],[16, 149],[17, 148],[18, 155],[19, 154],[20, 155],[21, 154],[22, 155],[23, 43],[24, 154],[25, 153],[26, 43],[27, 151]]) as Theme

export const dark_green_alt2_Card = n450 as Theme
export const dark_green_alt2_DrawerFrame = n450 as Theme
export const dark_green_alt2_Progress = n450 as Theme
export const dark_green_alt2_TooltipArrow = n450 as Theme
const n451 = t([[12, 151],[13, 153],[14, 43],[15, 154],[16, 150],[17, 149],[18, 155],[19, 154],[20, 155],[21, 154],[22, 154],[23, 244],[24, 244],[25, 43],[26, 154],[27, 150]]) as Theme

export const dark_green_alt2_Button = n451 as Theme
const n452 = t([[12, 151],[13, 153],[14, 43],[15, 154],[16, 150],[17, 149],[18, 155],[19, 154],[20, 155],[21, 154],[22, 154],[23, 154],[24, 155],[25, 43],[26, 154],[27, 150]]) as Theme

export const dark_green_alt2_Checkbox = n452 as Theme
export const dark_green_alt2_Switch = n452 as Theme
export const dark_green_alt2_TooltipContent = n452 as Theme
export const dark_green_alt2_SliderTrack = n452 as Theme
const n453 = t([[12, 156],[13, 155],[14, 154],[15, 43],[16, 0],[17, 0],[18, 148],[19, 149],[20, 148],[21, 149],[22, 146],[23, 43],[24, 153],[25, 154],[26, 43],[27, 149]]) as Theme

export const dark_green_alt2_SwitchThumb = n453 as Theme
const n454 = t([[12, 153],[13, 151],[14, 150],[15, 149],[16, 43],[17, 154],[18, 148],[19, 149],[20, 148],[21, 149],[22, 149],[23, 149],[24, 148],[25, 150],[26, 149],[27, 43]]) as Theme

export const dark_green_alt2_SliderTrackActive = n454 as Theme
const n455 = t([[12, 154],[13, 43],[14, 153],[15, 151],[16, 155],[17, 156],[18, 148],[19, 149],[20, 148],[21, 149],[22, 147],[23, 151],[24, 150],[25, 153],[26, 151],[27, 151]]) as Theme

export const dark_green_alt2_SliderThumb = n455 as Theme
export const dark_green_alt2_Tooltip = n455 as Theme
export const dark_green_alt2_ProgressIndicator = n455 as Theme
const n456 = t([[12, 149],[13, 150],[14, 151],[15, 153],[16, 148],[17, 147],[18, 155],[19, 154],[20, 155],[21, 154],[22, 156],[23, 43],[24, 154],[25, 153],[26, 43],[27, 153]]) as Theme

export const dark_green_alt2_Input = n456 as Theme
export const dark_green_alt2_TextArea = n456 as Theme
const n457 = t([[12, 151],[13, 153],[14, 43],[15, 154],[16, 150],[17, 149],[19, 43],[20, 154],[21, 43],[22, 154],[23, 154],[24, 155],[25, 43],[26, 154],[27, 150]]) as Theme

export const dark_green_active_Card = n457 as Theme
export const dark_green_active_DrawerFrame = n457 as Theme
export const dark_green_active_Progress = n457 as Theme
export const dark_green_active_TooltipArrow = n457 as Theme
const n458 = t([[12, 153],[13, 43],[14, 154],[15, 155],[16, 151],[17, 150],[19, 43],[20, 154],[21, 43],[22, 43],[23, 244],[24, 244],[25, 154],[26, 155],[27, 149]]) as Theme

export const dark_green_active_Button = n458 as Theme
const n459 = t([[12, 153],[13, 43],[14, 154],[15, 155],[16, 151],[17, 150],[19, 43],[20, 154],[21, 43],[22, 43],[23, 155],[24, 156],[25, 154],[26, 155],[27, 149]]) as Theme

export const dark_green_active_Checkbox = n459 as Theme
export const dark_green_active_Switch = n459 as Theme
export const dark_green_active_TooltipContent = n459 as Theme
export const dark_green_active_SliderTrack = n459 as Theme
const n460 = t([[12, 155],[13, 154],[14, 43],[15, 153],[16, 156],[17, 0],[19, 150],[20, 149],[21, 150],[22, 146],[23, 153],[24, 151],[25, 43],[26, 153],[27, 150]]) as Theme

export const dark_green_active_SwitchThumb = n460 as Theme
const n461 = t([[12, 151],[13, 150],[14, 149],[15, 148],[16, 153],[17, 43],[19, 150],[20, 149],[21, 150],[22, 150],[23, 148],[24, 147],[25, 149],[26, 148],[27, 154]]) as Theme

export const dark_green_active_SliderTrackActive = n461 as Theme
const n462 = t([[12, 43],[13, 153],[14, 151],[15, 150],[16, 154],[17, 155],[19, 150],[20, 149],[21, 150],[22, 148],[23, 150],[24, 149],[25, 151],[26, 150],[27, 153]]) as Theme

export const dark_green_active_SliderThumb = n462 as Theme
export const dark_green_active_Tooltip = n462 as Theme
export const dark_green_active_ProgressIndicator = n462 as Theme
const n463 = t([[12, 150],[13, 151],[14, 153],[15, 43],[16, 149],[17, 148],[19, 43],[20, 154],[21, 43],[22, 155],[23, 154],[24, 155],[25, 43],[26, 154],[27, 151]]) as Theme

export const dark_green_active_Input = n463 as Theme
export const dark_green_active_TextArea = n463 as Theme
const n464 = t([[12, 127],[13, 128],[14, 129],[15, 131],[16, 126],[17, 125],[18, 134],[19, 133],[20, 134],[21, 133],[22, 134],[23, 131],[24, 23],[25, 129],[26, 131],[27, 131]]) as Theme

export const dark_blue_alt1_Card = n464 as Theme
export const dark_blue_alt1_DrawerFrame = n464 as Theme
export const dark_blue_alt1_Progress = n464 as Theme
export const dark_blue_alt1_TooltipArrow = n464 as Theme
const n465 = t([[12, 128],[13, 129],[14, 131],[15, 23],[16, 127],[17, 126],[18, 134],[19, 133],[20, 134],[21, 133],[22, 133],[23, 244],[24, 244],[25, 131],[26, 23],[27, 129]]) as Theme

export const dark_blue_alt1_Button = n465 as Theme
const n466 = t([[12, 128],[13, 129],[14, 131],[15, 23],[16, 127],[17, 126],[18, 134],[19, 133],[20, 134],[21, 133],[22, 133],[23, 23],[24, 132],[25, 131],[26, 23],[27, 129]]) as Theme

export const dark_blue_alt1_Checkbox = n466 as Theme
export const dark_blue_alt1_Switch = n466 as Theme
export const dark_blue_alt1_TooltipContent = n466 as Theme
export const dark_blue_alt1_SliderTrack = n466 as Theme
const n467 = t([[12, 0],[13, 134],[14, 133],[15, 132],[16, 0],[17, 0],[18, 125],[19, 126],[20, 125],[21, 126],[22, 124],[23, 132],[24, 23],[25, 133],[26, 132],[27, 126]]) as Theme

export const dark_blue_alt1_SwitchThumb = n467 as Theme
const n468 = t([[12, 23],[13, 131],[14, 129],[15, 128],[16, 132],[17, 133],[18, 125],[19, 126],[20, 125],[21, 126],[22, 126],[23, 128],[24, 127],[25, 129],[26, 128],[27, 131]]) as Theme

export const dark_blue_alt1_SliderTrackActive = n468 as Theme
const n469 = t([[12, 133],[13, 132],[14, 23],[15, 131],[16, 134],[17, 0],[18, 125],[19, 126],[20, 125],[21, 126],[22, 124],[23, 131],[24, 129],[25, 23],[26, 131],[27, 128]]) as Theme

export const dark_blue_alt1_SliderThumb = n469 as Theme
export const dark_blue_alt1_Tooltip = n469 as Theme
export const dark_blue_alt1_ProgressIndicator = n469 as Theme
const n470 = t([[12, 126],[13, 127],[14, 128],[15, 129],[16, 125],[17, 124],[18, 134],[19, 133],[20, 134],[21, 133],[22, 0],[23, 131],[24, 23],[25, 129],[26, 131],[27, 23]]) as Theme

export const dark_blue_alt1_Input = n470 as Theme
export const dark_blue_alt1_TextArea = n470 as Theme
const n471 = t([[12, 128],[13, 129],[14, 131],[15, 23],[16, 127],[17, 126],[18, 133],[19, 132],[20, 133],[21, 132],[22, 133],[23, 23],[24, 132],[25, 131],[26, 23],[27, 129]]) as Theme

export const dark_blue_alt2_Card = n471 as Theme
export const dark_blue_alt2_DrawerFrame = n471 as Theme
export const dark_blue_alt2_Progress = n471 as Theme
export const dark_blue_alt2_TooltipArrow = n471 as Theme
const n472 = t([[12, 129],[13, 131],[14, 23],[15, 132],[16, 128],[17, 127],[18, 133],[19, 132],[20, 133],[21, 132],[22, 132],[23, 244],[24, 244],[25, 23],[26, 132],[27, 128]]) as Theme

export const dark_blue_alt2_Button = n472 as Theme
const n473 = t([[12, 129],[13, 131],[14, 23],[15, 132],[16, 128],[17, 127],[18, 133],[19, 132],[20, 133],[21, 132],[22, 132],[23, 132],[24, 133],[25, 23],[26, 132],[27, 128]]) as Theme

export const dark_blue_alt2_Checkbox = n473 as Theme
export const dark_blue_alt2_Switch = n473 as Theme
export const dark_blue_alt2_TooltipContent = n473 as Theme
export const dark_blue_alt2_SliderTrack = n473 as Theme
const n474 = t([[12, 134],[13, 133],[14, 132],[15, 23],[16, 0],[17, 0],[18, 126],[19, 127],[20, 126],[21, 127],[22, 124],[23, 23],[24, 131],[25, 132],[26, 23],[27, 127]]) as Theme

export const dark_blue_alt2_SwitchThumb = n474 as Theme
const n475 = t([[12, 131],[13, 129],[14, 128],[15, 127],[16, 23],[17, 132],[18, 126],[19, 127],[20, 126],[21, 127],[22, 127],[23, 127],[24, 126],[25, 128],[26, 127],[27, 23]]) as Theme

export const dark_blue_alt2_SliderTrackActive = n475 as Theme
const n476 = t([[12, 132],[13, 23],[14, 131],[15, 129],[16, 133],[17, 134],[18, 126],[19, 127],[20, 126],[21, 127],[22, 125],[23, 129],[24, 128],[25, 131],[26, 129],[27, 129]]) as Theme

export const dark_blue_alt2_SliderThumb = n476 as Theme
export const dark_blue_alt2_Tooltip = n476 as Theme
export const dark_blue_alt2_ProgressIndicator = n476 as Theme
const n477 = t([[12, 127],[13, 128],[14, 129],[15, 131],[16, 126],[17, 125],[18, 133],[19, 132],[20, 133],[21, 132],[22, 134],[23, 23],[24, 132],[25, 131],[26, 23],[27, 131]]) as Theme

export const dark_blue_alt2_Input = n477 as Theme
export const dark_blue_alt2_TextArea = n477 as Theme
const n478 = t([[12, 129],[13, 131],[14, 23],[15, 132],[16, 128],[17, 127],[19, 23],[20, 132],[21, 23],[22, 132],[23, 132],[24, 133],[25, 23],[26, 132],[27, 128]]) as Theme

export const dark_blue_active_Card = n478 as Theme
export const dark_blue_active_DrawerFrame = n478 as Theme
export const dark_blue_active_Progress = n478 as Theme
export const dark_blue_active_TooltipArrow = n478 as Theme
const n479 = t([[12, 131],[13, 23],[14, 132],[15, 133],[16, 129],[17, 128],[19, 23],[20, 132],[21, 23],[22, 23],[23, 244],[24, 244],[25, 132],[26, 133],[27, 127]]) as Theme

export const dark_blue_active_Button = n479 as Theme
const n480 = t([[12, 131],[13, 23],[14, 132],[15, 133],[16, 129],[17, 128],[19, 23],[20, 132],[21, 23],[22, 23],[23, 133],[24, 134],[25, 132],[26, 133],[27, 127]]) as Theme

export const dark_blue_active_Checkbox = n480 as Theme
export const dark_blue_active_Switch = n480 as Theme
export const dark_blue_active_TooltipContent = n480 as Theme
export const dark_blue_active_SliderTrack = n480 as Theme
const n481 = t([[12, 133],[13, 132],[14, 23],[15, 131],[16, 134],[17, 0],[19, 128],[20, 127],[21, 128],[22, 124],[23, 131],[24, 129],[25, 23],[26, 131],[27, 128]]) as Theme

export const dark_blue_active_SwitchThumb = n481 as Theme
const n482 = t([[12, 129],[13, 128],[14, 127],[15, 126],[16, 131],[17, 23],[19, 128],[20, 127],[21, 128],[22, 128],[23, 126],[24, 125],[25, 127],[26, 126],[27, 132]]) as Theme

export const dark_blue_active_SliderTrackActive = n482 as Theme
const n483 = t([[12, 23],[13, 131],[14, 129],[15, 128],[16, 132],[17, 133],[19, 128],[20, 127],[21, 128],[22, 126],[23, 128],[24, 127],[25, 129],[26, 128],[27, 131]]) as Theme

export const dark_blue_active_SliderThumb = n483 as Theme
export const dark_blue_active_Tooltip = n483 as Theme
export const dark_blue_active_ProgressIndicator = n483 as Theme
const n484 = t([[12, 128],[13, 129],[14, 131],[15, 23],[16, 127],[17, 126],[19, 23],[20, 132],[21, 23],[22, 133],[23, 132],[24, 133],[25, 23],[26, 132],[27, 129]]) as Theme

export const dark_blue_active_Input = n484 as Theme
export const dark_blue_active_TextArea = n484 as Theme
const n485 = t([[12, 182],[13, 183],[14, 184],[15, 186],[16, 181],[17, 180],[18, 189],[19, 188],[20, 189],[21, 188],[22, 189],[23, 186],[24, 79],[25, 184],[26, 186],[27, 186]]) as Theme

export const dark_purple_alt1_Card = n485 as Theme
export const dark_purple_alt1_DrawerFrame = n485 as Theme
export const dark_purple_alt1_Progress = n485 as Theme
export const dark_purple_alt1_TooltipArrow = n485 as Theme
const n486 = t([[12, 183],[13, 184],[14, 186],[15, 79],[16, 182],[17, 181],[18, 189],[19, 188],[20, 189],[21, 188],[22, 188],[23, 244],[24, 244],[25, 186],[26, 79],[27, 184]]) as Theme

export const dark_purple_alt1_Button = n486 as Theme
const n487 = t([[12, 183],[13, 184],[14, 186],[15, 79],[16, 182],[17, 181],[18, 189],[19, 188],[20, 189],[21, 188],[22, 188],[23, 79],[24, 187],[25, 186],[26, 79],[27, 184]]) as Theme

export const dark_purple_alt1_Checkbox = n487 as Theme
export const dark_purple_alt1_Switch = n487 as Theme
export const dark_purple_alt1_TooltipContent = n487 as Theme
export const dark_purple_alt1_SliderTrack = n487 as Theme
const n488 = t([[12, 0],[13, 189],[14, 188],[15, 187],[16, 0],[17, 0],[18, 180],[19, 181],[20, 180],[21, 181],[22, 179],[23, 187],[24, 79],[25, 188],[26, 187],[27, 181]]) as Theme

export const dark_purple_alt1_SwitchThumb = n488 as Theme
const n489 = t([[12, 79],[13, 186],[14, 184],[15, 183],[16, 187],[17, 188],[18, 180],[19, 181],[20, 180],[21, 181],[22, 181],[23, 183],[24, 182],[25, 184],[26, 183],[27, 186]]) as Theme

export const dark_purple_alt1_SliderTrackActive = n489 as Theme
const n490 = t([[12, 188],[13, 187],[14, 79],[15, 186],[16, 189],[17, 0],[18, 180],[19, 181],[20, 180],[21, 181],[22, 179],[23, 186],[24, 184],[25, 79],[26, 186],[27, 183]]) as Theme

export const dark_purple_alt1_SliderThumb = n490 as Theme
export const dark_purple_alt1_Tooltip = n490 as Theme
export const dark_purple_alt1_ProgressIndicator = n490 as Theme
const n491 = t([[12, 181],[13, 182],[14, 183],[15, 184],[16, 180],[17, 179],[18, 189],[19, 188],[20, 189],[21, 188],[22, 0],[23, 186],[24, 79],[25, 184],[26, 186],[27, 79]]) as Theme

export const dark_purple_alt1_Input = n491 as Theme
export const dark_purple_alt1_TextArea = n491 as Theme
const n492 = t([[12, 183],[13, 184],[14, 186],[15, 79],[16, 182],[17, 181],[18, 188],[19, 187],[20, 188],[21, 187],[22, 188],[23, 79],[24, 187],[25, 186],[26, 79],[27, 184]]) as Theme

export const dark_purple_alt2_Card = n492 as Theme
export const dark_purple_alt2_DrawerFrame = n492 as Theme
export const dark_purple_alt2_Progress = n492 as Theme
export const dark_purple_alt2_TooltipArrow = n492 as Theme
const n493 = t([[12, 184],[13, 186],[14, 79],[15, 187],[16, 183],[17, 182],[18, 188],[19, 187],[20, 188],[21, 187],[22, 187],[23, 244],[24, 244],[25, 79],[26, 187],[27, 183]]) as Theme

export const dark_purple_alt2_Button = n493 as Theme
const n494 = t([[12, 184],[13, 186],[14, 79],[15, 187],[16, 183],[17, 182],[18, 188],[19, 187],[20, 188],[21, 187],[22, 187],[23, 187],[24, 188],[25, 79],[26, 187],[27, 183]]) as Theme

export const dark_purple_alt2_Checkbox = n494 as Theme
export const dark_purple_alt2_Switch = n494 as Theme
export const dark_purple_alt2_TooltipContent = n494 as Theme
export const dark_purple_alt2_SliderTrack = n494 as Theme
const n495 = t([[12, 189],[13, 188],[14, 187],[15, 79],[16, 0],[17, 0],[18, 181],[19, 182],[20, 181],[21, 182],[22, 179],[23, 79],[24, 186],[25, 187],[26, 79],[27, 182]]) as Theme

export const dark_purple_alt2_SwitchThumb = n495 as Theme
const n496 = t([[12, 186],[13, 184],[14, 183],[15, 182],[16, 79],[17, 187],[18, 181],[19, 182],[20, 181],[21, 182],[22, 182],[23, 182],[24, 181],[25, 183],[26, 182],[27, 79]]) as Theme

export const dark_purple_alt2_SliderTrackActive = n496 as Theme
const n497 = t([[12, 187],[13, 79],[14, 186],[15, 184],[16, 188],[17, 189],[18, 181],[19, 182],[20, 181],[21, 182],[22, 180],[23, 184],[24, 183],[25, 186],[26, 184],[27, 184]]) as Theme

export const dark_purple_alt2_SliderThumb = n497 as Theme
export const dark_purple_alt2_Tooltip = n497 as Theme
export const dark_purple_alt2_ProgressIndicator = n497 as Theme
const n498 = t([[12, 182],[13, 183],[14, 184],[15, 186],[16, 181],[17, 180],[18, 188],[19, 187],[20, 188],[21, 187],[22, 189],[23, 79],[24, 187],[25, 186],[26, 79],[27, 186]]) as Theme

export const dark_purple_alt2_Input = n498 as Theme
export const dark_purple_alt2_TextArea = n498 as Theme
const n499 = t([[12, 184],[13, 186],[14, 79],[15, 187],[16, 183],[17, 182],[19, 79],[20, 187],[21, 79],[22, 187],[23, 187],[24, 188],[25, 79],[26, 187],[27, 183]]) as Theme

export const dark_purple_active_Card = n499 as Theme
export const dark_purple_active_DrawerFrame = n499 as Theme
export const dark_purple_active_Progress = n499 as Theme
export const dark_purple_active_TooltipArrow = n499 as Theme
const n500 = t([[12, 186],[13, 79],[14, 187],[15, 188],[16, 184],[17, 183],[19, 79],[20, 187],[21, 79],[22, 79],[23, 244],[24, 244],[25, 187],[26, 188],[27, 182]]) as Theme

export const dark_purple_active_Button = n500 as Theme
const n501 = t([[12, 186],[13, 79],[14, 187],[15, 188],[16, 184],[17, 183],[19, 79],[20, 187],[21, 79],[22, 79],[23, 188],[24, 189],[25, 187],[26, 188],[27, 182]]) as Theme

export const dark_purple_active_Checkbox = n501 as Theme
export const dark_purple_active_Switch = n501 as Theme
export const dark_purple_active_TooltipContent = n501 as Theme
export const dark_purple_active_SliderTrack = n501 as Theme
const n502 = t([[12, 188],[13, 187],[14, 79],[15, 186],[16, 189],[17, 0],[19, 183],[20, 182],[21, 183],[22, 179],[23, 186],[24, 184],[25, 79],[26, 186],[27, 183]]) as Theme

export const dark_purple_active_SwitchThumb = n502 as Theme
const n503 = t([[12, 184],[13, 183],[14, 182],[15, 181],[16, 186],[17, 79],[19, 183],[20, 182],[21, 183],[22, 183],[23, 181],[24, 180],[25, 182],[26, 181],[27, 187]]) as Theme

export const dark_purple_active_SliderTrackActive = n503 as Theme
const n504 = t([[12, 79],[13, 186],[14, 184],[15, 183],[16, 187],[17, 188],[19, 183],[20, 182],[21, 183],[22, 181],[23, 183],[24, 182],[25, 184],[26, 183],[27, 186]]) as Theme

export const dark_purple_active_SliderThumb = n504 as Theme
export const dark_purple_active_Tooltip = n504 as Theme
export const dark_purple_active_ProgressIndicator = n504 as Theme
const n505 = t([[12, 183],[13, 184],[14, 186],[15, 79],[16, 182],[17, 181],[19, 79],[20, 187],[21, 79],[22, 188],[23, 187],[24, 188],[25, 79],[26, 187],[27, 184]]) as Theme

export const dark_purple_active_Input = n505 as Theme
export const dark_purple_active_TextArea = n505 as Theme
const n506 = t([[12, 171],[13, 172],[14, 173],[15, 175],[16, 170],[17, 169],[18, 178],[19, 177],[20, 178],[21, 177],[22, 178],[23, 175],[24, 67],[25, 173],[26, 175],[27, 175]]) as Theme

export const dark_pink_alt1_Card = n506 as Theme
export const dark_pink_alt1_DrawerFrame = n506 as Theme
export const dark_pink_alt1_Progress = n506 as Theme
export const dark_pink_alt1_TooltipArrow = n506 as Theme
const n507 = t([[12, 172],[13, 173],[14, 175],[15, 67],[16, 171],[17, 170],[18, 178],[19, 177],[20, 178],[21, 177],[22, 177],[23, 244],[24, 244],[25, 175],[26, 67],[27, 173]]) as Theme

export const dark_pink_alt1_Button = n507 as Theme
const n508 = t([[12, 172],[13, 173],[14, 175],[15, 67],[16, 171],[17, 170],[18, 178],[19, 177],[20, 178],[21, 177],[22, 177],[23, 67],[24, 176],[25, 175],[26, 67],[27, 173]]) as Theme

export const dark_pink_alt1_Checkbox = n508 as Theme
export const dark_pink_alt1_Switch = n508 as Theme
export const dark_pink_alt1_TooltipContent = n508 as Theme
export const dark_pink_alt1_SliderTrack = n508 as Theme
const n509 = t([[12, 0],[13, 178],[14, 177],[15, 176],[16, 0],[17, 0],[18, 169],[19, 170],[20, 169],[21, 170],[22, 168],[23, 176],[24, 67],[25, 177],[26, 176],[27, 170]]) as Theme

export const dark_pink_alt1_SwitchThumb = n509 as Theme
const n510 = t([[12, 67],[13, 175],[14, 173],[15, 172],[16, 176],[17, 177],[18, 169],[19, 170],[20, 169],[21, 170],[22, 170],[23, 172],[24, 171],[25, 173],[26, 172],[27, 175]]) as Theme

export const dark_pink_alt1_SliderTrackActive = n510 as Theme
const n511 = t([[12, 177],[13, 176],[14, 67],[15, 175],[16, 178],[17, 0],[18, 169],[19, 170],[20, 169],[21, 170],[22, 168],[23, 175],[24, 173],[25, 67],[26, 175],[27, 172]]) as Theme

export const dark_pink_alt1_SliderThumb = n511 as Theme
export const dark_pink_alt1_Tooltip = n511 as Theme
export const dark_pink_alt1_ProgressIndicator = n511 as Theme
const n512 = t([[12, 170],[13, 171],[14, 172],[15, 173],[16, 169],[17, 168],[18, 178],[19, 177],[20, 178],[21, 177],[22, 0],[23, 175],[24, 67],[25, 173],[26, 175],[27, 67]]) as Theme

export const dark_pink_alt1_Input = n512 as Theme
export const dark_pink_alt1_TextArea = n512 as Theme
const n513 = t([[12, 172],[13, 173],[14, 175],[15, 67],[16, 171],[17, 170],[18, 177],[19, 176],[20, 177],[21, 176],[22, 177],[23, 67],[24, 176],[25, 175],[26, 67],[27, 173]]) as Theme

export const dark_pink_alt2_Card = n513 as Theme
export const dark_pink_alt2_DrawerFrame = n513 as Theme
export const dark_pink_alt2_Progress = n513 as Theme
export const dark_pink_alt2_TooltipArrow = n513 as Theme
const n514 = t([[12, 173],[13, 175],[14, 67],[15, 176],[16, 172],[17, 171],[18, 177],[19, 176],[20, 177],[21, 176],[22, 176],[23, 244],[24, 244],[25, 67],[26, 176],[27, 172]]) as Theme

export const dark_pink_alt2_Button = n514 as Theme
const n515 = t([[12, 173],[13, 175],[14, 67],[15, 176],[16, 172],[17, 171],[18, 177],[19, 176],[20, 177],[21, 176],[22, 176],[23, 176],[24, 177],[25, 67],[26, 176],[27, 172]]) as Theme

export const dark_pink_alt2_Checkbox = n515 as Theme
export const dark_pink_alt2_Switch = n515 as Theme
export const dark_pink_alt2_TooltipContent = n515 as Theme
export const dark_pink_alt2_SliderTrack = n515 as Theme
const n516 = t([[12, 178],[13, 177],[14, 176],[15, 67],[16, 0],[17, 0],[18, 170],[19, 171],[20, 170],[21, 171],[22, 168],[23, 67],[24, 175],[25, 176],[26, 67],[27, 171]]) as Theme

export const dark_pink_alt2_SwitchThumb = n516 as Theme
const n517 = t([[12, 175],[13, 173],[14, 172],[15, 171],[16, 67],[17, 176],[18, 170],[19, 171],[20, 170],[21, 171],[22, 171],[23, 171],[24, 170],[25, 172],[26, 171],[27, 67]]) as Theme

export const dark_pink_alt2_SliderTrackActive = n517 as Theme
const n518 = t([[12, 176],[13, 67],[14, 175],[15, 173],[16, 177],[17, 178],[18, 170],[19, 171],[20, 170],[21, 171],[22, 169],[23, 173],[24, 172],[25, 175],[26, 173],[27, 173]]) as Theme

export const dark_pink_alt2_SliderThumb = n518 as Theme
export const dark_pink_alt2_Tooltip = n518 as Theme
export const dark_pink_alt2_ProgressIndicator = n518 as Theme
const n519 = t([[12, 171],[13, 172],[14, 173],[15, 175],[16, 170],[17, 169],[18, 177],[19, 176],[20, 177],[21, 176],[22, 178],[23, 67],[24, 176],[25, 175],[26, 67],[27, 175]]) as Theme

export const dark_pink_alt2_Input = n519 as Theme
export const dark_pink_alt2_TextArea = n519 as Theme
const n520 = t([[12, 173],[13, 175],[14, 67],[15, 176],[16, 172],[17, 171],[19, 67],[20, 176],[21, 67],[22, 176],[23, 176],[24, 177],[25, 67],[26, 176],[27, 172]]) as Theme

export const dark_pink_active_Card = n520 as Theme
export const dark_pink_active_DrawerFrame = n520 as Theme
export const dark_pink_active_Progress = n520 as Theme
export const dark_pink_active_TooltipArrow = n520 as Theme
const n521 = t([[12, 175],[13, 67],[14, 176],[15, 177],[16, 173],[17, 172],[19, 67],[20, 176],[21, 67],[22, 67],[23, 244],[24, 244],[25, 176],[26, 177],[27, 171]]) as Theme

export const dark_pink_active_Button = n521 as Theme
const n522 = t([[12, 175],[13, 67],[14, 176],[15, 177],[16, 173],[17, 172],[19, 67],[20, 176],[21, 67],[22, 67],[23, 177],[24, 178],[25, 176],[26, 177],[27, 171]]) as Theme

export const dark_pink_active_Checkbox = n522 as Theme
export const dark_pink_active_Switch = n522 as Theme
export const dark_pink_active_TooltipContent = n522 as Theme
export const dark_pink_active_SliderTrack = n522 as Theme
const n523 = t([[12, 177],[13, 176],[14, 67],[15, 175],[16, 178],[17, 0],[19, 172],[20, 171],[21, 172],[22, 168],[23, 175],[24, 173],[25, 67],[26, 175],[27, 172]]) as Theme

export const dark_pink_active_SwitchThumb = n523 as Theme
const n524 = t([[12, 173],[13, 172],[14, 171],[15, 170],[16, 175],[17, 67],[19, 172],[20, 171],[21, 172],[22, 172],[23, 170],[24, 169],[25, 171],[26, 170],[27, 176]]) as Theme

export const dark_pink_active_SliderTrackActive = n524 as Theme
const n525 = t([[12, 67],[13, 175],[14, 173],[15, 172],[16, 176],[17, 177],[19, 172],[20, 171],[21, 172],[22, 170],[23, 172],[24, 171],[25, 173],[26, 172],[27, 175]]) as Theme

export const dark_pink_active_SliderThumb = n525 as Theme
export const dark_pink_active_Tooltip = n525 as Theme
export const dark_pink_active_ProgressIndicator = n525 as Theme
const n526 = t([[12, 172],[13, 173],[14, 175],[15, 67],[16, 171],[17, 170],[19, 67],[20, 176],[21, 67],[22, 177],[23, 176],[24, 177],[25, 67],[26, 176],[27, 173]]) as Theme

export const dark_pink_active_Input = n526 as Theme
export const dark_pink_active_TextArea = n526 as Theme
const n527 = t([[12, 193],[13, 194],[14, 195],[15, 197],[16, 192],[17, 191],[18, 200],[19, 199],[20, 200],[21, 199],[22, 200],[23, 197],[24, 91],[25, 195],[26, 197],[27, 197]]) as Theme

export const dark_red_alt1_Card = n527 as Theme
export const dark_red_alt1_DrawerFrame = n527 as Theme
export const dark_red_alt1_Progress = n527 as Theme
export const dark_red_alt1_TooltipArrow = n527 as Theme
const n528 = t([[12, 194],[13, 195],[14, 197],[15, 91],[16, 193],[17, 192],[18, 200],[19, 199],[20, 200],[21, 199],[22, 199],[23, 244],[24, 244],[25, 197],[26, 91],[27, 195]]) as Theme

export const dark_red_alt1_Button = n528 as Theme
const n529 = t([[12, 194],[13, 195],[14, 197],[15, 91],[16, 193],[17, 192],[18, 200],[19, 199],[20, 200],[21, 199],[22, 199],[23, 91],[24, 198],[25, 197],[26, 91],[27, 195]]) as Theme

export const dark_red_alt1_Checkbox = n529 as Theme
export const dark_red_alt1_Switch = n529 as Theme
export const dark_red_alt1_TooltipContent = n529 as Theme
export const dark_red_alt1_SliderTrack = n529 as Theme
const n530 = t([[12, 0],[13, 200],[14, 199],[15, 198],[16, 0],[17, 0],[18, 191],[19, 192],[20, 191],[21, 192],[22, 190],[23, 198],[24, 91],[25, 199],[26, 198],[27, 192]]) as Theme

export const dark_red_alt1_SwitchThumb = n530 as Theme
const n531 = t([[12, 91],[13, 197],[14, 195],[15, 194],[16, 198],[17, 199],[18, 191],[19, 192],[20, 191],[21, 192],[22, 192],[23, 194],[24, 193],[25, 195],[26, 194],[27, 197]]) as Theme

export const dark_red_alt1_SliderTrackActive = n531 as Theme
const n532 = t([[12, 199],[13, 198],[14, 91],[15, 197],[16, 200],[17, 0],[18, 191],[19, 192],[20, 191],[21, 192],[22, 190],[23, 197],[24, 195],[25, 91],[26, 197],[27, 194]]) as Theme

export const dark_red_alt1_SliderThumb = n532 as Theme
export const dark_red_alt1_Tooltip = n532 as Theme
export const dark_red_alt1_ProgressIndicator = n532 as Theme
const n533 = t([[12, 192],[13, 193],[14, 194],[15, 195],[16, 191],[17, 190],[18, 200],[19, 199],[20, 200],[21, 199],[22, 0],[23, 197],[24, 91],[25, 195],[26, 197],[27, 91]]) as Theme

export const dark_red_alt1_Input = n533 as Theme
export const dark_red_alt1_TextArea = n533 as Theme
const n534 = t([[12, 194],[13, 195],[14, 197],[15, 91],[16, 193],[17, 192],[18, 199],[19, 198],[20, 199],[21, 198],[22, 199],[23, 91],[24, 198],[25, 197],[26, 91],[27, 195]]) as Theme

export const dark_red_alt2_Card = n534 as Theme
export const dark_red_alt2_DrawerFrame = n534 as Theme
export const dark_red_alt2_Progress = n534 as Theme
export const dark_red_alt2_TooltipArrow = n534 as Theme
const n535 = t([[12, 195],[13, 197],[14, 91],[15, 198],[16, 194],[17, 193],[18, 199],[19, 198],[20, 199],[21, 198],[22, 198],[23, 244],[24, 244],[25, 91],[26, 198],[27, 194]]) as Theme

export const dark_red_alt2_Button = n535 as Theme
const n536 = t([[12, 195],[13, 197],[14, 91],[15, 198],[16, 194],[17, 193],[18, 199],[19, 198],[20, 199],[21, 198],[22, 198],[23, 198],[24, 199],[25, 91],[26, 198],[27, 194]]) as Theme

export const dark_red_alt2_Checkbox = n536 as Theme
export const dark_red_alt2_Switch = n536 as Theme
export const dark_red_alt2_TooltipContent = n536 as Theme
export const dark_red_alt2_SliderTrack = n536 as Theme
const n537 = t([[12, 200],[13, 199],[14, 198],[15, 91],[16, 0],[17, 0],[18, 192],[19, 193],[20, 192],[21, 193],[22, 190],[23, 91],[24, 197],[25, 198],[26, 91],[27, 193]]) as Theme

export const dark_red_alt2_SwitchThumb = n537 as Theme
const n538 = t([[12, 197],[13, 195],[14, 194],[15, 193],[16, 91],[17, 198],[18, 192],[19, 193],[20, 192],[21, 193],[22, 193],[23, 193],[24, 192],[25, 194],[26, 193],[27, 91]]) as Theme

export const dark_red_alt2_SliderTrackActive = n538 as Theme
const n539 = t([[12, 198],[13, 91],[14, 197],[15, 195],[16, 199],[17, 200],[18, 192],[19, 193],[20, 192],[21, 193],[22, 191],[23, 195],[24, 194],[25, 197],[26, 195],[27, 195]]) as Theme

export const dark_red_alt2_SliderThumb = n539 as Theme
export const dark_red_alt2_Tooltip = n539 as Theme
export const dark_red_alt2_ProgressIndicator = n539 as Theme
const n540 = t([[12, 193],[13, 194],[14, 195],[15, 197],[16, 192],[17, 191],[18, 199],[19, 198],[20, 199],[21, 198],[22, 200],[23, 91],[24, 198],[25, 197],[26, 91],[27, 197]]) as Theme

export const dark_red_alt2_Input = n540 as Theme
export const dark_red_alt2_TextArea = n540 as Theme
const n541 = t([[12, 195],[13, 197],[14, 91],[15, 198],[16, 194],[17, 193],[19, 91],[20, 198],[21, 91],[22, 198],[23, 198],[24, 199],[25, 91],[26, 198],[27, 194]]) as Theme

export const dark_red_active_Card = n541 as Theme
export const dark_red_active_DrawerFrame = n541 as Theme
export const dark_red_active_Progress = n541 as Theme
export const dark_red_active_TooltipArrow = n541 as Theme
const n542 = t([[12, 197],[13, 91],[14, 198],[15, 199],[16, 195],[17, 194],[19, 91],[20, 198],[21, 91],[22, 91],[23, 244],[24, 244],[25, 198],[26, 199],[27, 193]]) as Theme

export const dark_red_active_Button = n542 as Theme
const n543 = t([[12, 197],[13, 91],[14, 198],[15, 199],[16, 195],[17, 194],[19, 91],[20, 198],[21, 91],[22, 91],[23, 199],[24, 200],[25, 198],[26, 199],[27, 193]]) as Theme

export const dark_red_active_Checkbox = n543 as Theme
export const dark_red_active_Switch = n543 as Theme
export const dark_red_active_TooltipContent = n543 as Theme
export const dark_red_active_SliderTrack = n543 as Theme
const n544 = t([[12, 199],[13, 198],[14, 91],[15, 197],[16, 200],[17, 0],[19, 194],[20, 193],[21, 194],[22, 190],[23, 197],[24, 195],[25, 91],[26, 197],[27, 194]]) as Theme

export const dark_red_active_SwitchThumb = n544 as Theme
const n545 = t([[12, 195],[13, 194],[14, 193],[15, 192],[16, 197],[17, 91],[19, 194],[20, 193],[21, 194],[22, 194],[23, 192],[24, 191],[25, 193],[26, 192],[27, 198]]) as Theme

export const dark_red_active_SliderTrackActive = n545 as Theme
const n546 = t([[12, 91],[13, 197],[14, 195],[15, 194],[16, 198],[17, 199],[19, 194],[20, 193],[21, 194],[22, 192],[23, 194],[24, 193],[25, 195],[26, 194],[27, 197]]) as Theme

export const dark_red_active_SliderThumb = n546 as Theme
export const dark_red_active_Tooltip = n546 as Theme
export const dark_red_active_ProgressIndicator = n546 as Theme
const n547 = t([[12, 194],[13, 195],[14, 197],[15, 91],[16, 193],[17, 192],[19, 91],[20, 198],[21, 91],[22, 199],[23, 198],[24, 199],[25, 91],[26, 198],[27, 195]]) as Theme

export const dark_red_active_Input = n547 as Theme
export const dark_red_active_TextArea = n547 as Theme