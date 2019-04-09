require('dotenv').config()
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/comparator', async (req, res) => {
  await axios.get(`https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .then(response => res.send(response.data))
    .catch(err => res.send({
      errorMessage: "The API could not be reached.",
    }))
});

app.get('/comparator/posts/api', (req, res) => {
  // Mockup Data
  res.send([
    {
      id: 0,
      title: 'Ullamco excepteur cillum voluptate consequat.',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore ea sunt irure dolor. Velit cillum adipisicing nisi occaecat Lorem aliquip minim sit voluptate ad officia reprehenderit ad anim. Voluptate laboris officia est est proident duis sit aute. Adipisicing enim amet aliqua nulla minim occaecat sit fugiat est. Nostrud aute mollit nisi officia magna proident esse. Pariatur sint laboris aliqua aute sit ipsum proident ex culpa ex et. Cillum proident consectetur reprehenderit cillum dolore magna anim elit cillum ut dolor ipsum.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/2p/2PYLTHDYI2991539097956669.jpg',
      tags: ['Tag', 'WoW', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 1,
      title: 'Qui laborum proident ut esse exercitation mollit fugiat nostrud nisi quis.',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore ea sunt irure dolor. Velit cillum adipisicing nisi occaecat Lorem aliquip minim sit voluptate ad officia reprehenderit ad anim. Voluptate laboris officia est est proident duis sit aute. Adipisicing enim amet aliqua nulla minim occaecat sit fugiat est. Nostrud aute mollit nisi officia magna proident esse. Pariatur sint laboris aliqua aute sit ipsum proident ex culpa ex et. Cillum proident consectetur reprehenderit cillum dolore magna anim elit cillum ut dolor ipsum.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/4c/4C3NB0YHLE7S1553007178194.jpg',
      tags: ['Tag', 'WoW', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 2,
      title: 'Dolor occaecat laborum aute enim cillum cupidatat nulla ipsum eu ullamco.t',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore ea sunt irure dolor. Velit cillum adipisicing nisi occaecat Lorem aliquip minim sit voluptate ad officia reprehenderit ad anim. Voluptate laboris officia est est proident duis sit aute. Adipisicing enim amet aliqua nulla minim occaecat sit fugiat est. Nostrud aute mollit nisi officia magna proident esse. Pariatur sint laboris aliqua aute sit ipsum proident ex culpa ex et. Cillum proident consectetur reprehenderit cillum dolore magna anim elit cillum ut dolor ipsum.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/4z/4ZIXKW7ZPDX51550702370943.jpg',
      tags: ['Tag', 'WoW', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 3,
      title: 'Sint velit laboris id dolore reprehenderit ea magna ea aliquip incididunt.',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore ea sunt irure dolor. Velit cillum adipisicing nisi occaecat Lorem aliquip minim sit voluptate ad officia reprehenderit ad anim. Voluptate laboris officia est est proident duis sit aute. Adipisicing enim amet aliqua nulla minim occaecat sit fugiat est. Nostrud aute mollit nisi officia magna proident esse. Pariatur sint laboris aliqua aute sit ipsum proident ex culpa ex et. Cillum proident consectetur reprehenderit cillum dolore magna anim elit cillum ut dolor ipsum.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/9b/9B5LTURW5VZB1552938986536.jpg',
      tags: ['Tag', 'WoW', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 4,
      title: 'Eu ut incididunt reprehenderit',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore ea sunt irure dolor. Velit cillum adipisicing nisi occaecat Lorem aliquip minim sit voluptate ad officia reprehenderit ad anim. Voluptate laboris officia est est proident duis sit aute. Adipisicing enim amet aliqua nulla minim occaecat sit fugiat est. Nostrud aute mollit nisi officia magna proident esse. Pariatur sint laboris aliqua aute sit ipsum proident ex culpa ex et. Cillum proident consectetur reprehenderit cillum dolore magna anim elit cillum ut dolor ipsum.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/0y/0YW7663W90VZ1548170586181.jpg',
      tags: ['Tag', 'WoW', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 5,
      title: 'Ad quis do velit non irure.',
      description: 'Irure exercitation elit velit in duis non tempor sunt amet Lorem.',
      content: 'Fugiat id velit duis et occaecat tempor aute nulla. In cillum cillum aliqua aliqua. Duis aute proident excepteur adipisicing nostrud officia dolore duis amet ea consequat aliqua Lorem. Dolor nostrud adipisicing non laborum deserunt nostrud eiusmod. Commodo eiusmod laborum magna esse nulla anim ad proident. Esse in sit culpa nostrud proident occaecat Lorem. Qui commodo exercitation proident eu cupidatat aute consectetur. Id fugiat do tempor nulla culpa fugiat aliquip anim proident. Veniam laborum laboris ex laborum ex tempor exercitation nulla elit consectetur sint.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/32/32QKOKL9BDID1516644750285.jpg',
      tags: ['Tag', 'Website'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 6,
      title: 'Velit occaecat consectetur nostrud cillum',
      description: 'Consectetur enim amet mollit sunt tempor anim ex cupidatat ea.',
      content: 'Ad eiusmod ea nostrud exercitation. Sit labore non ut cillum magna. Ipsum nulla ex aliqua et tempor fugiat anim in reprehenderit labore commodo. Nulla ipsum proident proident tempor ipsum nisi incididunt commodo in labore Ullamco ea reprehenderit eu nostrud fugiat magna ad dolore sit veniam in tempor pariatur. Dolor sunt excepteur Lorem mollit id ex quis fugiat fugiat est sit anim cillum pariatur. Cillum ipsum incididunt ullamco minim ad est in. Voluptate voluptate exercitation veniam laboris ad labore consequat do exercitation sit excepteur.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/8l/8L1WUB8U0ZMS1545066762805.jpg',
      tags: ['Reddit', 'Job', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 7,
      title: 'Duis veniam ad sunt Lorem elit ipsum aute in id reprehenderit sunt eu sit.',
      description: 'Irure aliquip cupidatat consequat occaecat enim exercitation eiusmod deserunt.',
      content: 'Pariatur sint sint Lorem magna esse non ex laboris cupidatat minim ipsum aliquip officia deserunt. Nulla laborum veniam minim velit commodo. Do nisi anim nostrud esse fugiat quis quis ad dolor ipsum labore reprehenderit ipsum. Dolor qui veniam quis quis excepteur quis ea irure aliqua. Amet enim nostrud ullamco ex labore tempor Lorem ullamco non. Proident veniam ullamco ad ex irure labore. Esse ea excepteur est aute ex fugiat. Ipsum cillum proident veniam incididunt aliquip ex. Qui id nisi labore voluptate ullamco veniam tempor velit deserunt. Eu duis mollit Lorem cupidatat et id. Lorem aliquip nostrud cupidatat et adipisicing ut elit. Quis mollit eiusmod aliquip anim non minim aliqua ea occaecat magna exercitation veniam. Minim esse consequat non non consequat nisi commodo tempor mollit id labore laborum ad ea. Enim quis minim est exercitation aliquip incididunt non. Esse quis cillum laborum exercitation enim ipsum et nostrud in do ipsum ad aliqua id. Sint nisi velit exercitation consectetur consectetur sint minim deserunt labore.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/9m/9MVBLPSW55TL1547682890881.jpg',
      tags: ['Q&A', 'Game', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    },
    {
      id: 8,
      title: 'Elit proident est ut irure duis aliquip eiusmod.',
      description: 'Incididunt ex Lorem sit id. Eu voluptate duis anim tempor aute exercitation occaecat nisi.',
      content: 'Ad eiusmod ea nostrEu esse non eiusmod amet commodo deserunt. Eu ut consectetur consectetur ut voluptate irure tempor occaecat duis sit. Cillum proident eu sint minim do quis quis sint fugiat. Sunt cupidatat pariatur laborum commodo cupidatat et minim do. Fugiat incididunt eu ex fugiat. Labore nulla ipsum id dolore ut sunt in ad cillum cupidatat Lorem duis. Duis dolore cupidatat reprehenderit et anim non dolore commodo. Non nulla non commodo elit proident sit anim aliquip proident tempor excepteur. Aliqua non deserunt veniam laborum proident Lorem consequat. Pariatur reprehenderit eu labore non irure mollit tempor. Dolore ullamco mollit reprehenderit consequat consequat dolor ex adipisicing quis.',
      date: 1548547146,
      thumbnail: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/k9/K9AWT0Q4ZMQ31543857095630.jpg',
      tags: ['Mage', 'Test', 'Comparator'],
      author: 'Gabriel von Platen',
      views: 0,
    }
  ]);
});

if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle Single Page Application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('App listening on port ' + port);
});
