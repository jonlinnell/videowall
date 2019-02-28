// There has to be a better way of doing this...

import './1ab7e009-f493-44fc-8a99-afebf8e24b20.woff2'
import './247437df-66d2-4605-ac03-1be0e07c31a7.ttf'
import './25df6f92-ec41-4f60-91af-bddc19a3adc2.eot'
import './398e3e8c-3bf0-4af1-9791-f426a7992711.woff2'
import './4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff'
import './6ceed230-b2b3-4422-b048-4aa11687430a.woff2'
import './71b25abe-e633-4b0b-b0cf-0875d2ea4c90.ttf'
import './80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff'
import './83ff78fa-6d76-4fb5-8bff-8af8eec8e368.woff'
import './8804ad73-51dd-4dd7-a618-eb80cd20a726.woff'
import './90744ee6-df8b-4daf-924d-e84a33fa139c.eot'
import './9b63158c-0e74-4751-966c-d749c5d31cce.eot'
import './9be9615e-18d6-4bf7-bb05-068341c85df3.ttf'
import './c36d4fee-ad19-437a-ba7f-85eacfad975b.eot'
import './d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf'
import './e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2'

const injectFonts = (path = 'fonts/') => `@font-face{
    font-family:"DIN Light";
    src:url("${path}/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot?#iefix");
    src:url("${path}/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot?#iefix") format("eot"),url("${path}/e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2") format("woff2"),url("${path}/83ff78fa-6d76-4fb5-8bff-8af8eec8e368.woff") format("woff"),url("${path}/9be9615e-18d6-4bf7-bb05-068341c85df3.ttf") format("truetype");
  }
  @font-face{
      font-family:"DIN Regular";
      src:url("${path}/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix");
      src:url("${path}/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix") format("eot"),url("${path}/6ceed230-b2b3-4422-b048-4aa11687430a.woff2") format("woff2"),url("${path}/80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff") format("woff"),url("${path}/247437df-66d2-4605-ac03-1be0e07c31a7.ttf") format("truetype");
  }
  @font-face{
      font-family:"DIN Medium";
      src:url("${path}/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix");
      src:url("${path}/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix") format("eot"),url("${path}/398e3e8c-3bf0-4af1-9791-f426a7992711.woff2") format("woff2"),url("${path}/4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff") format("woff"),url("${path}/d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf") format("truetype");
  }
  @font-face{
      font-family:"DIN Extlight";
      src:url("${path}/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot?#iefix");
      src:url("${path}/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot?#iefix") format("eot"),url("${path}/1ab7e009-f493-44fc-8a99-afebf8e24b20.woff2") format("woff2"),url("${path}/8804ad73-51dd-4dd7-a618-eb80cd20a726.woff") format("woff"),url("${path}/71b25abe-e633-4b0b-b0cf-0875d2ea4c90.ttf") format("truetype");
  `

export default injectFonts
