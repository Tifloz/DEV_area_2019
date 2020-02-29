import React from 'react';
import axios from 'axios';

axios.get('https://api.imgur.com/3/gallery/hot/viral/day/1?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}', {
  headers: {
    Authorization: 'Client-ID 4024d2a2fe8e4ce'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
