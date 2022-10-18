import "./styles.css";

const newRecentT1User = [
  {
    date: "November 16",
    checkDate: "16-Nov-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_sk4I5VfkRESJTlfnmoK2SQ"
  },
  {
    date: "December 1",
    checkDate: "01-Dec-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_4hAQk5UMTV63Je5nOor89A"
  },
  {
    date: "January 10 (en français)",
    checkDate: "10-Jan-2023",
    time: "9:30 am - 12:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_DtLQT99PRdOjlml4JcaQsw"
  },
  {
    date: "January 12",
    checkDate: "12-Jan-2023",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_SbEBCemUTR-4YBkImTHHkw"
  }
];

const experiencedT1User = [
  {
    date: "November 23",
    checkDate: "23-Nov-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_imjJGNqCRm-R_kUlm7Ic_A"
  },
  {
    date: "December 8",
    checkDate: "08-Dec-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_wJdtCuQuQ46PuKr7IWBxdw"
  },
  {
    date: "January 18",
    checkDate: "18-Jan-2023",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_qUr_jjk5SrKo2_g4Y59aQQ"
  },
  {
    date: "January 19 (en français)",
    checkDate: "19-Jan-2023",
    time: "9:30 am - 12:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_o5MN1GH9Rui0NPCFhb8J7w"
  }
];

const t2User = [
  {
    date: "November 24",
    checkDate: "24-Nov-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_9fnag6dTR1egrH4-LahmHw"
  },
  {
    date: "December 15",
    checkDate: "15-Dec-2022",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_xKY4eswbRLq0QpGk5hnfyA"
  },
  {
    date: "January 25",
    checkDate: "25-Jan-2023",
    time: "12:30 pm - 3:30 pm EST",
    registerLink:
      "https://intuit.zoom.us/webinar/register/WN_snx9P7kUTi2DuYo7jKJN6w"
  },
  {
    date: "January 26 (en français)",
    checkDate: "26-Jan-2023",
    time: "9:30 am - 12:30 pm EST",
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
  }">Register</a></td>
</tr>`;
}

document.getElementById("newRecentT1User").innerHTML = `${newRecentT1User
  .map(eventList)
  .join("")}`;
document.getElementById(
  "experiencedT1User"
).innerHTML = `${experiencedT1User.map(eventList).join("")}`;
document.getElementById("t2User").innerHTML = `${t2User
  .map(eventList)
  .join("")}`;
