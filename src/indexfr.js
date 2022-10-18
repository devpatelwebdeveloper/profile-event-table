import "./styles.css";

const newRecentT1UserFr = [
  {
    date: "16 novembre (en anglais)",
    checkDate: "16-Nov-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_sk4I5VfkRESJTlfnmoK2SQ"
  },
  {
    date: "1 décembre (en anglais)",
    checkDate: "01-Dec-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_4hAQk5UMTV63Je5nOor89A"
  },
  {
    date: "10 janvier (en français)",
    checkDate: "10-Jan-2023",
    time: "De 9 h 30 à 12 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_DtLQT99PRdOjlml4JcaQsw"
  },
  {
    date: "12 janvier (en anglais)",
    checkDate: "12-Jan-2023",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_SbEBCemUTR-4YBkImTHHkw"
  }
];

const experiencedT1UserFr = [
  {
    date: "23 novembre (en anglais)",
    checkDate: "23-Nov-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_imjJGNqCRm-R_kUlm7Ic_A"
  },
  {
    date: "8 décembre (en anglais)",
    checkDate: "08-Dec-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_wJdtCuQuQ46PuKr7IWBxdw"
  },
  {
    date: "18 janvier (en anglais)",
    checkDate: "18-Jan-2023",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_qUr_jjk5SrKo2_g4Y59aQQ"
  },
  {
    date: "19 janvier (en français)",
    checkDate: "19-Jan-2023",
    time: "De 9 h 30 à 12 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_o5MN1GH9Rui0NPCFhb8J7w"
  }
];

const t2UserFr = [
  {
    date: "24 novembre (en anglais)",
    checkDate: "24-Nov-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_9fnag6dTR1egrH4-LahmHw"
  },
  {
    date: "15 décembre (en anglais)",
    checkDate: "15-Dec-2022",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_xKY4eswbRLq0QpGk5hnfyA"
  },
  {
    date: "25 janvier (en anglais)",
    checkDate: "25-Jan-2023",
    time: "De 12 h 30 à 15 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_snx9P7kUTi2DuYo7jKJN6w"
  },
  {
    date: "26 janvier (en français)",
    checkDate: "26-Jan-2023",
    time: "De 9 h 30 à 12 h 30 HNE",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_vIsUiLQ8Q7yelchoEcOLvw"
  }
];

function checkDate(eventDate) {
  const registrationDate = new Date(Date.parse(eventDate.replace(/-/g, " ")));
  if (registrationDate <= Date.now()) {
    return true;
  }
  return false;
}

function eventList(event) {
  return `<tr>
  <td class="eventDate">${event.date}</td>
  <td class="eventTime">${event.time}</td>
  <td class="eventRegister"><a class="eventRegisterBtn ${
    checkDate(event.checkDate)
      ? "eventRegisterBtnInActive"
      : "eventRegisterBtnActive"
  }" href="${
    checkDate(event.checkDate) ? "javascript: void(0)" : event.registerLink
  }">S’inscrire</a></td>
</tr>`;
}

document.getElementById("newRecentT1User").innerHTML = `${newRecentT1UserFr
  .map(eventList)
  .join("")}`;

document.getElementById(
  "experiencedT1User"
).innerHTML = `${experiencedT1UserFr.map(eventList).join("")}`;

document.getElementById("t2User").innerHTML = `${t2UserFr
  .map(eventList)
  .join("")}`;
