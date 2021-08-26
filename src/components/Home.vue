<template>
  <div class="container-center-horizontal">
    <div class="home screen">
      <div class="overlap-group-5">
        <div class="scroll-group-3">
          <div class="flex-col">
            <div class="overlap-group2">
              <div class="rectangle-13"></div>
              <div class="icon-feather-menu" :style="{ 'background-image': 'url(' + iconFeatherMenu + ')' }">
                <div class="group-16">
                  <img class="path-4" :src="path4" /><img class="path-3" :src="path3" /><img
                    class="path-5"
                    :src="path5"
                  />
                </div>
                <div class="mask-group-11">
                  <div class="ellipse-1"></div>
                  <div class="ellipse"></div>
                  <div class="ellipse"></div>
                </div>
              </div>
              <div class="rhapsody-go segoeui-semi-bold-white-22px">{{ rhapsodyGo }}</div>
              <img class="rtraver" :src="rtraver" /><img class="icon-awesome-search" :src="iconAwesomeSearch" />
            </div>
            <div class="overlap-group3">
              <h1 class="place">{{ place }}</h1>
              <div class="group-188">
                <div class="latest-articles segoeui-regular-normal-nepal-15px">{{ latestArticles }}</div>
                <line2 />
              </div>
            </div>
            <div class="scroll-group-1">
              <div class="group-4">
                <div class="overlap-group" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
                  <div class="rectangle"></div>
                  <div class="text-1-1 segoeui-semi-bold-white-20px">{{ text1 }}</div>
                  <group10 />
                </div>
              </div>
              <div class="group-5">
                <div class="overlap-group-1">
                  <img class="x148935227003cm20995" :src="x148935227003_Cm2_0995" /><img class="path" :src="path357" />
                  <div class="rectangle-26"></div>
                  <div class="yesterday segoeui-semi-bold-selective-yellow-12px">{{ yesterday }}</div>
                  <div class="living-in-his-rest segoeui-semi-bold-white-20px">{{ livingInHisRest }}</div>
                </div>
              </div>
              <div class="group">
                <div class="overlap-group-1">
                  <img class="x151656765163image10" :src="x151656765163_Image10" /><img class="path" :src="path358" />
                  <div class="rectangle-26-1"></div>
                  <div class="text segoeui-semi-bold-white-20px">{{ text2 }}</div>
                  <div class="thursday segoeui-semi-bold-selective-yellow-12px">{{ thursday }}</div>
                </div>
              </div>
              <div class="group">
                <div class="overlap-group" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
                  <div class="rectangle"></div>
                  <div class="rectangle-26-2"></div>
                  <div class="text-3 segoeui-semi-bold-white-20px">{{ text3 }}</div>
                  <div class="wednesday segoeui-semi-bold-selective-yellow-12px">{{ wednesday }}</div>
                </div>
              </div>
              <div class="group">
                <div class="overlap-group-1">
                  <img class="x380-a3868-min-1024x683" :src="x380A3868Min1024X683" /><img class="path" :src="path75" />
                  <div class="text segoeui-semi-bold-white-20px">{{ text4 }}</div>
                  <div class="rectangle-26-3"></div>
                  <div class="tuesday segoeui-semi-bold-selective-yellow-12px">{{ tuesday }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row">
            <div class="trending-topics segoeui-regular-normal-nepal-15px">{{ trendingTopics }}</div>
            <line2 :className="line2Props.className" />
            <img class="path-374" :src="path374" />
          </div>
          <div class="scroll-group-2">
            <div class="overlap-group17" :style="{ 'background-image': 'url(' + overlapGroup17 + ')' }">
              <div class="prayer segoeui-semi-bold-white-20px">{{ prayer }}</div>
            </div>
            <div class="overlap-group19" :style="{ 'background-image': 'url(' + overlapGroup19 + ')' }">
              <div class="finances segoeui-semi-bold-white-20px">{{ finances }}</div>
            </div>
            <div class="overlap-group20" :style="{ 'background-image': 'url(' + overlapGroup20 + ')' }">
              <div class="link segoeui-semi-bold-white-20px">{{ miracles }}</div>
            </div>
            <div class="overlap-group18" :style="{ 'background-image': 'url(' + overlapGroup18 + ')' }">
              <div class="link segoeui-semi-bold-white-20px">{{ name }}</div>
            </div>
            <div class="overlap-group21" :style="{ 'background-image': 'url(' + overlapGroup21 + ')' }">
              <div class="worship segoeui-semi-bold-white-20px">{{ worship }}</div>
            </div>
            <div class="overlap-group22" :style="{ 'background-image': 'url(' + overlapGroup22 + ')' }">
              <div class="link segoeui-semi-bold-white-20px">{{ rapture }}</div>
            </div>
          </div>
          <div class="overlap-group1">
            <img class="listen-audio" :src="listenAudio" />
            <div class="rectangle-466"></div>
            <div class="recent-favrites-archived">
              <div class="overlap-group4" :style="{ 'background-image': 'url(' + overlapGroup42 + ')' }">
                <div class="group-192">
                  <component335 :children="component335Props.children" />
                  <component314 :children="component314Props.children" />
                  <component314 :children="component3142Props.children" :className="component3142Props.className" />
                </div>
              </div>
              <div class="flex-col-1">
                <div class="a-key">
                  <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
                    <div class="rectangle-3"></div>
                    <div class="x09aug segoeui-semi-bold-white-26px">
                      <span class="segoeui-semi-bold-white-26px-2">{{ spanText }}</span
                      ><span class="segoeui-semi-bold-white-14px">{{ spanText2 }}</span>
                    </div>
                  </div>
                  <div class="overlap-group5">
                    <p class="text-5 segoeui-semi-light-mountain-mist-13px">{{ text5 }}</p>
                    <p class="text-1 segoeui-semi-bold-horizon-15px">{{ text6 }}</p>
                  </div>
                </div>
                <line22 />
                <div class="celebrate">
                  <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup82 + ')' }">
                    <div class="rectangle-3-1"></div>
                    <div class="x08aug segoeui-semi-bold-white-26px">
                      <span class="segoeui-semi-bold-white-26px-2">{{ spanText3 }}</span
                      ><span class="segoeui-semi-bold-white-14px">{{ spanText4 }}</span>
                    </div>
                  </div>
                  <div class="overlap-group-4">
                    <p class="text-7 segoeui-semi-light-mountain-mist-13px">{{ text7 }}</p>
                    <div class="text-8 segoeui-semi-bold-horizon-15px">{{ text8 }}</div>
                  </div>
                </div>
                <line22 :className="line22Props.className" />
                <div class="your-time">
                  <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
                    <div class="rectangle-3-1"></div>
                    <div class="x07aug segoeui-semi-bold-white-26px">
                      <span class="segoeui-semi-bold-white-26px-2">{{ spanText5 }}</span
                      ><span class="segoeui-semi-bold-white-14px">{{ spanText6 }}</span>
                    </div>
                  </div>
                  <div class="overlap-group-4">
                    <p class="name segoeui-semi-light-mountain-mist-13px">{{ name2 }}</p>
                    <div class="text-1 segoeui-semi-bold-horizon-15px">{{ text9 }}</div>
                  </div>
                </div>
                <line22 :className="line222Props.className" />
                <div class="born-with-untold">
                  <div class="overlap-group11" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
                    <div class="rectangle-3"></div>
                    <div class="x06aug segoeui-semi-bold-white-26px">
                      <span class="segoeui-semi-bold-white-26px-2">{{ spanText7 }}</span
                      ><span class="segoeui-semi-bold-white-14px">{{ spanText8 }}</span>
                    </div>
                  </div>
                  <div class="overlap-group12">
                    <p class="text-10 segoeui-semi-light-mountain-mist-13px">{{ text10 }}</p>
                    <p class="text-1 segoeui-semi-bold-horizon-15px">{{ text11 }}</p>
                  </div>
                </div>
                <line22 :className="line223Props.className" />
                <div class="he-give-more">
                  <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup13 + ')' }">
                    <div class="rectangle-3"></div>
                    <div class="x05aug segoeui-semi-bold-white-26px">
                      <span class="segoeui-semi-bold-white-26px-2">{{ spanText9 }}</span
                      ><span class="segoeui-semi-bold-white-14px">{{ spanText10 }}</span>
                    </div>
                  </div>
                  <div class="overlap-group14">
                    <p class="text-12 segoeui-semi-light-mountain-mist-13px">{{ text12 }}</p>
                    <p class="text-1 segoeui-semi-bold-horizon-15px">{{ text13 }}</p>
                  </div>
                </div>
                <div class="article-button">
                  <div class="see-allarticles segoeui-semi-bold-white-15px" v-html="seeAllArticles"></div>
                  <div class="overlap-group15">
                    <img class="path-arrow-top-right-thick" :src="pathArrowTopRightThick" />
                  </div>
                </div>
              </div>
            </div>
            <div class="scroll-group-43">
              <audio-file
                :x015="audioFileProps.x015"
                :temp__Svg__="audioFileProps.temp__Svg__"
                :text14="audioFileProps.text14"
                :yesterday="audioFileProps.yesterday"
                :group163Props="audioFileProps.group163Props"
              />
              <audio-file
                :x015="audioFile2Props.x015"
                :temp__Svg__="audioFile2Props.temp__Svg__"
                :text14="audioFile2Props.text14"
                :yesterday="audioFile2Props.yesterday"
                :className="audioFile2Props.className"
                :group163Props="audioFile2Props.group163Props"
              />
              <div class="group-230">
                <audio-file
                  :x015="audioFile3Props.x015"
                  :temp__Svg__="audioFile3Props.temp__Svg__"
                  :text14="audioFile3Props.text14"
                  :yesterday="audioFile3Props.yesterday"
                  :className="audioFile3Props.className"
                  :group163Props="audioFile3Props.group163Props"
                />
                <audio-file
                  :x015="audioFile4Props.x015"
                  :temp__Svg__="audioFile4Props.temp__Svg__"
                  :text14="audioFile4Props.text14"
                  :yesterday="audioFile4Props.yesterday"
                  :className="audioFile4Props.className"
                  :group163Props="audioFile4Props.group163Props"
                />
              </div>
            </div>
            <div class="audio-card">
              <div class="overlap-group16" :style="{ 'background-image': 'url(' + overlapGroup16 + ')' }">
                <img class="k-oe6647426large" :src="koe6647426_Large" />
                <div class="ellipse-71"></div>
                <div class="mask-group-42">
                  <div class="tempsvg" :style="{ 'background-image': 'url(' + temp__Svg__ + ')' }"></div>
                </div>
                <div class="text-18">{{ text18 }}</div>
                <div class="group-10">
                  <div class="overlap-group4-1">
                    <div class="rectangle-26-4"></div>
                    <div class="today">{{ today }}</div>
                  </div>
                </div>
                <img class="line-25" :src="line25" />
                <div class="group-163">
                  <div class="overlap-group5-1">
                    <div class="name-1">{{ name3 }}</div>
                    <div class="number segoeui-regular-normal-selective-yellow-39px">{{ number }}</div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-19" v-html="text19"></p>
            <div class="group-279">
              <div class="place-1">{{ place2 }}</div>
              <div class="line2"><img class="line-18" :src="line18" /><img class="line-17" :src="line17" /></div>
            </div>
          </div>
        </div>
        <div class="group-191">
          <div class="overlap-group23" :style="{ 'background-image': 'url(' + overlapGroup23 + ')' }">
            <img class="mask-group-35" :src="maskGroup35" />
            <div class="overlap-group1-1">
              <mask-group15 />
              <img class="mask-group-32" :src="maskGroup32" />
            </div>
            <group45 :src="group45Props.src" /> <img class="mask-group-33" :src="maskGroup33" /><img
              class="mask-group-34"
              :src="maskGroup34"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Line2 from "./Line2";
import Group10 from "./Group10";
import Component335 from "./Component335";
import Component314 from "./Component314";
import Line22 from "./Line22";
import AudioFile from "./AudioFile";
import MaskGroup15 from "./MaskGroup15";
import Group45 from "./Group45";
export default {
  name: "Home",
  components: {
    Line2,
    Group10,
    Component335,
    Component314,
    Line22,
    AudioFile,
    MaskGroup15,
    Group45,
  },
  props: [
    "iconFeatherMenu",
    "path4",
    "path3",
    "path5",
    "rhapsodyGo",
    "rtraver",
    "iconAwesomeSearch",
    "place",
    "latestArticles",
    "overlapGroup4",
    "text1",
    "x148935227003_Cm2_0995",
    "path357",
    "yesterday",
    "livingInHisRest",
    "x151656765163_Image10",
    "path358",
    "text2",
    "thursday",
    "overlapGroup8",
    "text3",
    "wednesday",
    "x380A3868Min1024X683",
    "path75",
    "text4",
    "tuesday",
    "trendingTopics",
    "path374",
    "overlapGroup17",
    "prayer",
    "overlapGroup19",
    "finances",
    "overlapGroup20",
    "miracles",
    "overlapGroup18",
    "name",
    "overlapGroup21",
    "worship",
    "overlapGroup22",
    "rapture",
    "listenAudio",
    "overlapGroup42",
    "overlapGroup6",
    "spanText",
    "spanText2",
    "text5",
    "text6",
    "overlapGroup82",
    "spanText3",
    "spanText4",
    "text7",
    "text8",
    "overlapGroup10",
    "spanText5",
    "spanText6",
    "name2",
    "text9",
    "overlapGroup11",
    "spanText7",
    "spanText8",
    "text10",
    "text11",
    "overlapGroup13",
    "spanText9",
    "spanText10",
    "text12",
    "text13",
    "seeAllArticles",
    "pathArrowTopRightThick",
    "overlapGroup16",
    "koe6647426_Large",
    "temp__Svg__",
    "text18",
    "today",
    "line25",
    "name3",
    "number",
    "text19",
    "place2",
    "line18",
    "line17",
    "overlapGroup23",
    "maskGroup35",
    "maskGroup32",
    "maskGroup33",
    "maskGroup34",
    "line2Props",
    "component335Props",
    "component314Props",
    "component3142Props",
    "line22Props",
    "line222Props",
    "line223Props",
    "audioFileProps",
    "audioFile2Props",
    "audioFile3Props",
    "audioFile4Props",
    "group45Props",
  ],
};
</script>

<style>
.home {
  align-items: flex-start;
  background-color: var(--zumthor);
  display: flex;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.overlap-group-5 {
  height: 814px;
  margin-left: -27px;
  position: relative;
  width: 476px;
}

.scroll-group-3::-webkit-scrollbar {
  display: none;
  width: 0;
}

.scroll-group-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  width: 476px;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 47px;
  min-height: 355px;
  width: 375px;
}

.overlap-group2 {
  height: 100px;
  position: relative;
  width: 375px;
}

.rectangle-13 {
  background-color: var(--white);
  border: 1px solid #c4daee8f;
  box-shadow: 0px 3px 6px #00000014;
  height: 81px;
  left: 0;
  position: absolute;
  top: 0;
  width: 375px;
}

.icon-feather-menu {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 100px;
  justify-content: flex-end;
  left: 0;
  min-width: 375px;
  padding: 34.1px 15px;
  position: absolute;
  top: 0;
}

.group-16 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.78px;
  min-height: 15px;
  width: 22px;
}

.path-4 {
  height: 4px;
  margin-left: -2px;
  object-fit: cover;
  width: 26px;
}

.path-3 {
  height: 4px;
  margin-left: -2px;
  margin-top: 3px;
  object-fit: cover;
  width: 22px;
}

.path-5 {
  height: 4px;
  margin-left: -2px;
  margin-top: 3px;
  object-fit: cover;
  width: 26px;
}

.mask-group-11 {
  align-items: flex-end;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 26px;
  margin-left: 290px;
  padding: 0.6px 9.4px;
  width: 26px;
}

.ellipse-1 {
  background-color: var(--white);
  border-radius: 3.31px;
  height: 7px;
  width: 7px;
}

.ellipse {
  background-color: var(--white);
  border-radius: 3.31px;
  height: 7px;
  margin-top: 2px;
  width: 7px;
}

.rhapsody-go {
  left: 130px;
  letter-spacing: 0;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 39px;
  white-space: nowrap;
}

.rtraver {
  border-radius: 17px;
  height: 34px;
  left: 86px;
  object-fit: cover;
  position: absolute;
  top: 35px;
  width: 34px;
}

.icon-awesome-search {
  cursor: pointer;
  height: 22px;
  left: 297px;
  object-fit: cover;
  position: absolute;
  top: 43px;
  width: 22px;
}

.overlap-group3 {
  height: 50px;
  margin-right: 7.32px;
  margin-top: 21px;
  position: relative;
  width: 326px;
}

.place {
  color: #19356d;
  font-family: var(--font-family-segoeui-semibold);
  font-size: var(--font-size-xxxxl);
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.group-188 {
  align-items: center;
  display: flex;
  height: 20px;
  left: 0;
  position: absolute;
  top: 30px;
}

.latest-articles {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 15px;
  margin-bottom: -4.5px;
  min-height: 22px;
  min-width: 115px;
  white-space: nowrap;
}

.scroll-group-1::-webkit-scrollbar {
  display: none;
  width: 0;
}

.scroll-group-1 {
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  min-width: 375px;
  overflow-x: scroll;
}

.group-4 {
  align-items: flex-start;
  display: flex;
  height: 175px;
  justify-content: flex-end;
  min-width: 293px;
}

.overlap-group {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  height: 205px;
  margin-top: -10px;
  position: relative;
  width: 323px;
}

.rectangle {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 33, 59, 0) 32.35%,
    rgba(0, 0, 0, 0.39) 75.3%,
    rgba(0, 0, 0, 0.54) 100%
  );
  border-radius: 14px;
  box-shadow: 0px 3px 10px #00000066;
  height: 175px;
  left: 13px;
  position: absolute;
  top: 10px;
  width: 293px;
}

.text-1-1 {
  cursor: pointer;
  height: 32px;
  left: 38px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-shadow: 0px 3px 3px #0000004d;
  top: 137px;
  width: 243px;
}

.group-5 {
  align-items: flex-start;
  display: flex;
  height: 175px;
  justify-content: flex-end;
  margin-left: 23px;
  min-width: 293px;
}

.overlap-group-1 {
  height: 207px;
  margin-top: -12px;
  position: relative;
  width: 325px;
}

.x148935227003cm20995 {
  border-radius: 14px;
  height: 205px;
  left: 2px;
  object-fit: cover;
  position: absolute;
  top: 2px;
  width: 323px;
}

.path {
  height: 205px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 323px;
}

.rectangle-26 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 23px;
  left: 37px;
  opacity: 0.5;
  position: absolute;
  top: 29px;
  width: 89px;
}

.yesterday {
  height: 18px;
  left: 50px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 29px;
  white-space: nowrap;
  width: 65px;
}

.living-in-his-rest {
  cursor: pointer;
  height: 33px;
  left: 37px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-shadow: 0px 3px 3px #0000004d;
  top: 138px;
  width: 255px;
}

.group {
  align-items: flex-start;
  display: flex;
  height: 175px;
  justify-content: flex-end;
  margin-left: 26px;
  min-width: 293px;
}

.x151656765163image10 {
  border-radius: 14px;
  height: 205px;
  left: 2px;
  object-fit: cover;
  position: absolute;
  top: 2px;
  width: 323px;
}

.rectangle-26-1 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 23px;
  left: 40px;
  opacity: 0.5;
  position: absolute;
  top: 29px;
  width: 89px;
}

.text {
  cursor: pointer;
  height: 34px;
  left: 35px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-shadow: 0px 3px 3px #0000004d;
  top: 137px;
  width: 255px;
}

.thursday {
  height: 18px;
  left: 53px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 29px;
  white-space: nowrap;
  width: 65px;
}

.rectangle-26-2 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 23px;
  left: 35px;
  opacity: 0.5;
  position: absolute;
  top: 27px;
  width: 100px;
}

.text-3 {
  cursor: pointer;
  height: 36px;
  left: 33px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-shadow: 0px 3px 3px #0000004d;
  top: 133px;
  width: 255px;
}

.wednesday {
  height: 18px;
  left: 48px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 27px;
  white-space: nowrap;
  width: 78px;
}

.x380-a3868-min-1024x683 {
  border-radius: 14px;
  height: 205px;
  left: 2px;
  object-fit: cover;
  position: absolute;
  top: 2px;
  width: 323px;
}

.rectangle-26-3 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 23px;
  left: 38px;
  opacity: 0.5;
  position: absolute;
  top: 29px;
  width: 81px;
}

.tuesday {
  height: 18px;
  left: 45px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 29px;
  white-space: nowrap;
  width: 68px;
}

.flex-row {
  align-items: center;
  display: flex;
  height: 22px;
  margin-right: 46.5px;
  margin-top: 36px;
  min-width: 334px;
  position: relative;
}

.trending-topics {
  letter-spacing: 0;
  line-height: 15px;
  min-height: 22px;
  min-width: 126px;
  white-space: nowrap;
}

.path-374 {
  height: 0;
  margin-bottom: 6px;
  object-fit: cover;
  width: 0;
}

.scroll-group-2::-webkit-scrollbar {
  display: none;
  width: 0;
}

.scroll-group-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  margin-right: -645px;
  margin-top: 4px;
  min-width: 1094px;
  overflow-x: scroll;
}

.overlap-group17 {
  align-items: flex-start;
  background-color: #d54700;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  min-width: 167px;
  padding: 33px 12px;
}

.prayer {
  cursor: pointer;
  height: 29px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
  text-shadow: 0px 3px 6px #00000040;
  white-space: nowrap;
  width: 140px;
}

.overlap-group19 {
  align-items: flex-start;
  background-color: #e40098;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 167px;
  padding: 33px 10px;
}

.finances {
  cursor: pointer;
  height: 29px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
  text-shadow: 0px 3px 6px #00000040;
  white-space: nowrap;
  width: 144px;
}

.overlap-group20 {
  align-items: flex-start;
  background-color: #0026f2;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 167px;
  padding: 33px 8px;
}

.link {
  cursor: pointer;
  height: 29px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
  text-shadow: 0px 3px 6px #00000040;
  white-space: nowrap;
  width: 148px;
}

.overlap-group18 {
  align-items: flex-start;
  background-color: #c39700;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  margin-left: 24px;
  min-width: 167px;
  padding: 33px 7px;
}

.overlap-group21 {
  align-items: flex-start;
  background-color: #8e00e0;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  margin-left: 16px;
  min-width: 167px;
  padding: 33px 8px;
}

.worship {
  height: 29px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
  text-shadow: 0px 3px 6px #00000040;
  white-space: nowrap;
  width: 148px;
}

.overlap-group22 {
  align-items: flex-start;
  background-color: #109e00;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 14px;
  box-shadow: 1px 10px 10px #00000033;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 167px;
  padding: 33px 8px;
}

.overlap-group1 {
  height: 1442px;
  margin-top: 47px;
  position: relative;
  width: 476px;
}

.listen-audio {
  height: 272px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 666px;
  width: 407px;
}

.rectangle-466 {
  background: linear-gradient(180deg, rgba(0, 153, 255, 0) 0%, #0099ff 17.01%, #0099ff 50.77%, #007dd0 100%);
  height: 605px;
  left: 0;
  position: absolute;
  top: 837px;
  width: 407px;
}

.recent-favrites-archived {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 52px;
  box-shadow: 0px 0px 20px #0000001f;
  display: flex;
  height: 713px;
  left: 0;
  min-width: 402px;
  padding: 26px 21px;
  position: absolute;
  top: 0;
}

.overlap-group4 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 332px;
  justify-content: flex-end;
  margin-top: 20px;
  min-width: 50px;
  padding: 30px 14px;
}

.group-192 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 271px;
  position: relative;
  width: 20px;
}

.flex-col-1 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 23px;
  min-height: 652px;
  position: relative;
  width: 282px;
}

.a-key {
  align-items: flex-start;
  display: flex;
  height: 77px;
  margin-right: 0.41px;
  min-width: 282px;
}

.overlap-group-2 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  height: 95px;
  margin-left: -9px;
  margin-top: -6px;
  position: relative;
  width: 95px;
}

.rectangle-3 {
  background-color: var(--eerie-black);
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  height: 77px;
  left: 9px;
  opacity: 0.3;
  position: absolute;
  top: 6px;
  width: 77px;
}

.x09aug {
  left: 26px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  text-align: center;
  text-shadow: 0px 3px 6px #00000054;
  top: 15px;
  width: 43px;
}

.overlap-group5 {
  align-self: center;
  height: 69px;
  margin-left: 3px;
  margin-top: 2px;
  position: relative;
  width: 193px;
}

.text-5 {
  height: 53px;
  left: 0;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 16px;
  width: 193px;
}

.text-1 {
  height: 21px;
  left: 0;
  letter-spacing: 0;
  line-height: 15px;
  position: absolute;
  top: 0;
  width: 193px;
}

.celebrate {
  align-items: flex-start;
  display: flex;
  height: 76px;
  margin-right: 0.41px;
  margin-top: 15px;
  min-width: 282px;
}

.overlap-group-3 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  height: 94px;
  margin-left: -9px;
  margin-top: -6px;
  position: relative;
  width: 95px;
}

.rectangle-3-1 {
  background-color: var(--eerie-black);
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  height: 76px;
  left: 9px;
  opacity: 0.3;
  position: absolute;
  top: 6px;
  width: 77px;
}

.x08aug {
  left: 26px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  text-align: center;
  text-shadow: 0px 3px 6px #00000054;
  top: 14px;
  width: 43px;
}

.overlap-group-4 {
  align-self: center;
  height: 69px;
  margin-left: 3px;
  margin-top: 3px;
  position: relative;
  width: 193px;
}

.text-7 {
  height: 53px;
  left: 0;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 16px;
  width: 193px;
}

.text-8 {
  cursor: pointer;
  height: 21px;
  left: 0;
  letter-spacing: 0;
  line-height: 15px;
  position: absolute;
  top: 0;
  width: 193px;
}

.your-time {
  align-items: flex-start;
  display: flex;
  height: 76px;
  margin-right: 0.41px;
  margin-top: 20px;
  min-width: 282px;
}

.x07aug {
  left: 26px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  text-align: center;
  text-shadow: 0px 3px 6px #00000054;
  top: 13px;
  width: 43px;
}

.name {
  height: 53px;
  left: 0;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 16px;
  width: 193px;
}

.born-with-untold {
  align-items: flex-end;
  display: flex;
  height: 77px;
  margin-right: 0.41px;
  margin-top: 17px;
  min-width: 282px;
}

.overlap-group11 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  height: 95px;
  margin-bottom: -12px;
  margin-left: -9px;
  position: relative;
  width: 95px;
}

.x06aug {
  left: 26px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  text-align: center;
  text-shadow: 0px 3px 6px #00000054;
  top: 14px;
  width: 43px;
}

.overlap-group12 {
  height: 69px;
  margin-bottom: 2px;
  margin-left: 3px;
  position: relative;
  width: 193px;
}

.text-10 {
  height: 53px;
  left: 0;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 16px;
  width: 193px;
}

.he-give-more {
  align-items: flex-start;
  display: flex;
  height: 77px;
  margin-right: 0.41px;
  margin-top: 19px;
  min-width: 282px;
}

.x05aug {
  left: 26px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  text-align: center;
  text-shadow: 0px 3px 6px #00000054;
  top: 14px;
  width: 43px;
}

.overlap-group14 {
  align-self: center;
  height: 69px;
  margin-left: 3px;
  margin-top: 4px;
  position: relative;
  width: 193px;
}

.text-12 {
  height: 53px;
  left: 0;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 16px;
  width: 193px;
}

.article-button {
  align-items: center;
  background-color: var(--azure-radiance);
  border-radius: 30px;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  margin-right: 1.41px;
  margin-top: 47px;
  min-width: 160px;
  padding: 0 8px;
}

.see-allarticles {
  -webkit-text-stroke: 1px transparent;
  letter-spacing: 0;
  line-height: 17px;
  margin-top: 4px;
  min-height: 39px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group15 {
  align-items: flex-end;
  background-color: var(--gold);
  border-radius: 24px;
  display: flex;
  height: 48px;
  justify-content: flex-end;
  margin-left: 9px;
  min-width: 48px;
  padding: 17.4px 17.4px;
}

.path-arrow-top-right-thick {
  height: 13px;
  object-fit: cover;
  width: 13px;
}

.scroll-group-43::-webkit-scrollbar {
  display: none;
  width: 0;
}

.scroll-group-43 {
  align-items: flex-start;
  display: flex;
  height: 119px;
  left: 27px;
  overflow-x: scroll;
  position: absolute;
  top: 1190px;
}

.group-230 {
  align-items: flex-start;
  display: flex;
  height: 119px;
  margin-left: 33px;
  min-width: 639px;
  position: relative;
}

.audio-card {
  align-items: flex-start;
  display: flex;
  height: 266px;
  left: 150px;
  position: absolute;
  top: 850px;
}

.overlap-group16 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 32px;
  height: 356px;
  margin-left: -45px;
  margin-top: -35px;
  position: relative;
  width: 321px;
}

.k-oe6647426large {
  height: 266px;
  left: 45px;
  object-fit: cover;
  position: absolute;
  top: 35px;
  width: 232px;
}

.ellipse-71 {
  background-color: var(--black-22);
  border-radius: 45.21px/45.61px;
  height: 91px;
  left: 115px;
  opacity: 0.42;
  position: absolute;
  top: 88px;
  width: 90px;
}

.mask-group-42 {
  align-items: flex-start;
  display: flex;
  height: 35px;
  left: 148px;
  padding: 0.2px 1.8px;
  position: absolute;
  top: 116px;
  width: 33px;
}

.tempsvg {
  background-position: 50% 50%;
  background-size: cover;
  height: 35px;
  width: 29px;
}

.text-18 {
  color: var(--regal-blue);
  font-family: var(--font-family-segoeui-semibold);
  font-size: 18px;
  font-weight: 600;
  left: 65px;
  letter-spacing: 0;
  line-height: 23px;
  position: absolute;
  top: 236px;
  width: 141px;
}

.group-10 {
  align-items: flex-start;
  display: flex;
  height: 28px;
  left: 66px;
  position: absolute;
  top: 55px;
}

.overlap-group4-1 {
  height: 28px;
  position: relative;
  width: 82px;
}

.rectangle-26-4 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 28px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 81px;
}

.today {
  color: var(--selective-yellow-3);
  font-family: var(--font-family-segoeui-semibold);
  font-size: var(--font-size-xl);
  font-weight: 600;
  height: 22px;
  left: 2px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 2px;
  width: 80px;
}

.line-25 {
  height: 54px;
  left: 208px;
  object-fit: cover;
  position: absolute;
  top: 233px;
  width: 1px;
}

.group-163 {
  align-items: flex-end;
  display: flex;
  height: 58px;
  left: 218px;
  position: absolute;
  top: 223px;
}

.overlap-group5-1 {
  height: 54px;
  margin-bottom: -15.57px;
  position: relative;
  width: 44px;
}

.name-1 {
  color: var(--shadow-blue);
  font-family: var(--font-family-segoeui-bold);
  font-size: 9px;
  font-weight: 700;
  left: 2px;
  letter-spacing: 0.04px;
  line-height: 11px;
  position: absolute;
  text-align: right;
  top: 27px;
  white-space: nowrap;
}

.number {
  left: 0;
  letter-spacing: 0.16px;
  line-height: 12px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.text-19 {
  color: #ffe7ae;
  font-family: var(--font-family-segoeui-semibold);
  font-size: var(--font-size-xl);
  font-weight: 600;
  left: 50px;
  letter-spacing: 0;
  line-height: 15px;
  position: absolute;
  text-align: right;
  top: 967px;
  white-space: nowrap;
}

.group-279 {
  align-items: center;
  display: flex;
  height: 20px;
  left: 64px;
  position: absolute;
  top: 1151px;
}

.place-1 {
  align-self: flex-end;
  color: #84ceff;
  font-family: var(--font-family-segoeui-regular);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 15px;
  margin-bottom: -4.5px;
  min-height: 22px;
  min-width: 47px;
  text-shadow: 0px 3px 6px #00000029;
  white-space: nowrap;
}

.line2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6px;
  margin-top: 1px;
  min-height: 2px;
  width: 232px;
}

.line-18 {
  height: 1px;
  object-fit: cover;
  width: 232px;
}

.line-17 {
  height: 1px;
  margin-left: 0.5px;
  margin-top: 1px;
  object-fit: cover;
  width: 232px;
}

.group-191 {
  align-items: flex-start;
  display: flex;
  height: 79px;
  justify-content: center;
  left: 43px;
  position: absolute;
  top: 735px;
}

.overlap-group23 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 192px;
  margin-top: -53px;
  min-width: 466px;
  padding: 53px 82px;
  position: relative;
}

.mask-group-35 {
  cursor: pointer;
  height: 32px;
  margin-top: 0.46px;
  object-fit: cover;
  width: 32px;
}

.overlap-group1-1 {
  height: 43px;
  margin-bottom: 4.54px;
  margin-left: 25px;
  position: relative;
  width: 42px;
}

.mask-group-32 {
  cursor: pointer;
  height: 36px;
  left: 3px;
  object-fit: cover;
  position: absolute;
  top: 7px;
  width: 36px;
}

.mask-group-33 {
  cursor: pointer;
  height: 36px;
  margin-bottom: 5.54px;
  margin-left: 19px;
  object-fit: cover;
  width: 36px;
}

.mask-group-34 {
  cursor: pointer;
  height: 36px;
  margin-bottom: 3.54px;
  margin-left: 27px;
  object-fit: cover;
  width: 36px;
}
</style>
