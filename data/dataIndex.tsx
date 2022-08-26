// import { IContactCard } from "../components/modules/cards/ContactCard"
// import { IHeroCard } from "../components/modules/cards/HeroCard"
// import { IImageCard } from "../components/modules/cards/ImageCard"
// import { IAnnouncement } from "../components/modules/announcements/Announcement"
// import { IMiniCard } from "../components/modules/cards/MiniCard"
//
// export const dataSundayMeeting: IHeroCard = {
//   title: "Sunday Meetings",
//   subtitle: "Sycamores 4th Ward",
//   paragraph: "Schedule, Broadcasts & Sign Ups",
//   image: {
//     src: "/images/hero-cards/church-building.webp",
//     alt: "Meetinghouse",
//   },
//   button: {
//     text: "View",
//     link: {
//       url: "/sunday",
//     },
//   },
//   type: "dark",
// }
//
// export const dataAnnouncements: IAnnouncement[] = [
//   // {
//   //   title: "Building Cleaning (A-L)",
//   //   date: new Date("July 23, 2022 9:00:00"),
//   //   description: "Our ward is responsible for cleaning the church building this month. We are asking for families with last names A-L to help with this service opportunity. Bring the whole family and show up ready to help."
//   // },
//   // {
//   //   title: "Pioneer Day Parade",
//   //   date: new Date("July 23, 2022 9:00:00"),
//   //   description: "Saturday marks the 175th anniversary of Pioneer Day. Our Stake has put together a beautiful float for the parade which is set to begin at 9am in downtown Salt Lake City."
//   // },
//   // {
//   //   title: "Stake Temple Preparation Class",
//   //   date: new Date("July 24, 2022"),
//   //   description: "The stake temple preparation class is on the 4th Sunday of each month in our building for any high school seniors up to 24 years of age.",
//   // },
//   // {
//   //   title: "Stake Blood Drive",
//   //   date: new Date("July 28, 2022 15:00:00"),
//   //   description: "Our next Stake Blood Drive is coming up. It will be Thursday July 28th from 3-7pm at the Maples Building 6592 West Haven Maple Drive, in the Cultural Hall. To sign up to donate please go to www.arupbloodservices.org and enter R306 to schedule an appointment.",
//   // },
//   {
//     title: 'Friend to Friend: "Temples Are the House of the Lord"',
//     date: new Date("July 30, 2022 10:00:00"),
//     description:
//       "Children, parents, and Primary teachers are invited to watch a new Friend to Friend episode that will be made available July 30, 2022 at 10:00 a.m.",
//   },
//   // {
//   //   title: "Ward Temple Day",
//   //   date: new Date("August 20, 2022"),
//   //   description:
//   //     "Please join in serving in the temple on the 3rd Saturday of each month for our Maples 3rd Ward temple day. Make an appointment online for a time/ordinance of your choosing. Upcoming dates: September 17, October 15, and November 19.",
//   // },
// ]
//
// export const dataFaceCards: IContactCard[] = [
//   {
//     title: "Bishop\xa0Shepherd",
//     subtitle: "Bishop",
//     images: [
//       {
//         src: "/images/face-cards/bishop.jpg",
//         alt: "Bishop\xa0Shepherd",
//         width: 100,
//         height: 100,
//       },
//     ],
//     button: {
//       text: "Schedule",
//       link: [
//         {
//           url: "https://calendly.com/syc4thbishopric/interview-10",
//           label: { text: "10 Minute Appt" },
//           calendly: true,
//         },
//         {
//           url: "https://calendly.com/syc4thbishopric/interview-30",
//           label: { text: "30 Minute Appt" },
//           calendly: true,
//         },
//         {
//           url: "https://calendly.com/syc4thbishopric/interview-60",
//           label: { text: "60 Minute Appt" },
//           calendly: true,
//         },
//       ],
//     },
//     hidden: false,
//   },
//   {
//     title: "Bro.\xa0Crawford or Bro.\xa0Higley",
//     subtitle: "Counselor",
//     images: [
//       {
//         src: "/images/face-cards/first-counselor.jpg",
//         alt: "Bro.\xa0Crawford",
//         width: 100,
//         height: 100,
//       },
//       {
//         src: "/images/face-cards/second-counselor.jpg",
//         alt: "Bro.\xa0Higley",
//         width: 100,
//         height: 100,
//       },
//     ],
//     button: {
//       text: "Schedule",
//       link: {
//         url: "https://calendly.com/syc4thcounselors/interview-10",
//         calendly: true,
//       },
//     },
//     hidden: false,
//   },
// ]
//
// export const dataMiniCards: IMiniCard[] = [
//   {
//     title: "Temple Recommend",
//     subtitle: "Interview",
//     button: {
//       text: "Schedule",
//       link: [
//         {
//           url: "https://calendly.com/syc4thcounselors/interview-10",
//           label: { text: "Expired less than 6 months" },
//           calendly: true,
//         },
//         {
//           url: "https://calendly.com/syc4thbishopric/temple",
//           label: { text: "Expired 6 months or more" },
//           calendly: true,
//         },
//       ],
//     },
//     hidden: false,
//   },
//   {
//     title: "Youth Interview",
//     subtitle: "Interview",
//     button: {
//       text: "Schedule",
//       link: [
//         {
//           url: "https://calendly.com/syc4thbishopric/youth",
//           label: { text: "Ages 12-15" },
//           calendly: true,
//         },
//         {
//           url: "https://calendly.com/syc4thbishopric/youth",
//           label: { text: "Ages 16-17" },
//           calendly: true,
//         },
//       ],
//     },
//     hidden: false,
//   },
//   {
//     title: "Bishopric Visit",
//     subtitle: "Visit",
//     button: {
//       text: "Schedule",
//       link: {
//         url: "https://calendly.com/syc4thcounselors/bishopric-visit",
//         calendly: true,
//       },
//     },
//     hidden: false,
//   },
// ]
//
// export const dataImageCards: IImageCard[] = [
//   // {
//   //   title: "New Move-in",
//   //   subtitle: "Welcome",
//   //   paragraph: "Welcome! The bishop would like to get to know you better and welcome you to the ward.",
//   //   image: {
//   //     src: "/images/image-cards/new-movein.webp",
//   //     alt: "New Move-in",
//   //   },
//   //   button: {
//   //     text: "Schedule",
//   //     link: {
//   //       url: "https://calendly.com/ssr3-bishop/new-move-in",
//   //       calendly: true,
//   //     },
//   //   },
//   //   hidden: false,
//   // },
//   {
//     title: "Temple & Family History",
//     subtitle: "Activities",
//     paragraph:
//       "Sign up for the opportunity to have the basket in your home. Find resources and activities to help your family get involved with the temple and family history.",
//     image: {
//       src: "/images/image-cards/temple-and-family-history.webp",
//       alt: "New Move-in",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "/temple-family-history",
//         calendly: false,
//       },
//     },
//     hidden: true,
//   },
//   {
//     title: "Welfare & Service",
//     subtitle: "Embark in the Service of God",
//     paragraph: "View information about all of the upcoming service opportunities this year.",
//     image: {
//       src: "/images/image-cards/welfare-and-service.png",
//       alt: "The Lord's Vineyard",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.signupgenius.com/go/10c0c4fabaa2baaffc61-sycamore",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//   {
//     title: "Relief Society",
//     subtitle: "Charity Never Faileth",
//     paragraph: "Find information about what we are doing in the Relief Society.",
//     image: {
//       src: "/images/relief-society/background.png",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.facebook.com/groups/640925966077761",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//     {
//     title: "Elders Quorum",
//     subtitle: "Ministering as the Savior Does",
//     paragraph: "Find information about what we are doing in Elders Quorum.",
//     image: {
//       src: "/images/elders/background.jpg",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.churchofjesuschrist.org/calendar/month?date=2022-7-21&lang=eng",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//   {
//     title: "Young Women",
//     subtitle: "A Great Work",
//     paragraph: "Find information about what we are doing in our Young Women's group.",
//     image: {
//       src: "/images/young-women/background.jpg",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.churchofjesuschrist.org/calendar/month?date=2022-7-21&lang=eng",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//   {
//     title: "Young Men",
//     subtitle: "Trust in the Lord",
//     paragraph: "Find information about what we are doing in our Young Men's group.",
//     image: {
//       src: "/images/young-men/background.jpg",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.facebook.com/groups/1924770184441930",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//   {
//     title: "Primary",
//     subtitle: "Trust in the Lord",
//     paragraph: "Find information about what we are doing in our Primary.",
//     image: {
//       src: "/images/primary/background.jpg",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.youtube.com/watch?v=k5Vmhyu7Dsg",
//         external: true,
//       },
//     },
//     hidden: false,
//   },
//   {
//     title: "Ward Mission",
//     subtitle: "Inspire and Invite Others to Come Unto Christ",
//     paragraph: "Find out how to help members and friends of other faiths embrace the restored gospel.",
//     image: {
//       src: "/images/ward-mission/ward-mission.png",
//       alt: "Come Unto Christ",
//     },
//     button: {
//       text: "Learn More",
//       link: {
//         url: "https://www.churchofjesuschrist.org/calendar/month?date=2022-7-21&lang=eng",
//         calendly: false,
//       },
//     },
//     hidden: true,
//   },
// ]
