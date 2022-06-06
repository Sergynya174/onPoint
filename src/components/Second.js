import React from 'react';

import sperm3 from '../images/sperm1.png';
import sperm4 from '../images/sperm2.png';
import sperm5 from '../images/sperm3.png';
import sperm6 from '../images/sperm4.png';
import sperm7 from '../images/sperm5.png';

function Second ({ currentSlideIndex }) {
  const imgStyle = currentSlideIndex === 1
    ? { WebkitAnimation: `'sperm' 2s 1 normal ease-out` }
    : null;

  return (
    <div className="slide">
    <div className="content">
      <h3 className="content__title">текст<br />сообщения</h3>
      <div className="content__box-second">
        <p className="content__text">
          <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio. Egestas integer eget 
          aliquet nibh praesent tristique. At consectetur lorem donec massa sapien faucibus. Nam libero 
          justo laoreet sit amet cursus. Felis eget velit aliquet sagittis id consectetur purus. Sit amet 
          nisl purus in mollis nunc sed id. Viverra adipiscing at in tellus. Arcu ac tortor dignissim 
          convallis aenean et. Est lorem ipsum dolor sit amet consectetur adipiscing. Urna nunc id 
          cursus metus aliquam eleifend mi in nulla. Lacus suspendisse faucibus interdum posuere lorem 
          ipsum dolor. Libero nunc consequat interdum varius sit amet mattis. Lorem sed risus ultricies 
          tristique. Aliquet porttitor lacus luctus accumsan tortor. A erat nam at lectus urna duis 
          convallis convallis tellus. Augue interdum velit euismod in pellentesque massa placerat. 
          Elementum integer enim neque volutpat. Pulvinar neque laoreet suspendisse interdum. Sed 
          viverra tellus in hac habitasse platea. Tincidunt id aliquet risus feugiat in ante. Nec sagittis 
          aliquam malesuada bibendum arcu. Cursus eget nunc scelerisque viverra mauris in. Fusce ut 
          placerat orci nulla pellentesque dignissim. Auctor neque vitae tempus quam pellentesque nec nam 
          aliquam sem. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Nunc congue nisi 
          vitae suscipit tellus mauris a. Eget magna fermentum iaculis eu non diam. Dictum fusce ut placerat 
          orci nulla pellentesque dignissim enim. Aliquet enim tortor at auctor urna nunc id cursus. Dolor 
          magna eget est lorem. Neque egestas congue quisque egestas diam in arcu cursus. Ut sem viverra 
          aliquet eget sit amet. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. 
          Adipiscing bibendum est ultricies integer quis auctor. Dui nunc mattis enim ut tellus elementum. 
          Pharetra sit amet aliquam id diam maecenas ultricies. Odio ut enim blandit volutpat maecenas 
          volutpat. In cursus turpis massa tincidunt dui ut. Vel pretium lectus quam id leo in. Quam viverra 
          orci sagittis eu. Cursus in hac habitasse platea dictumst quisque sagittis purus. Sem fringilla 
          ut morbi tincidunt. Sodales neque sodales ut etiam sit amet nisl. Augue neque gravida in fermentum. 
          Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Donec pretium vulputate sapien nec 
          sagittis aliquam malesuada bibendum arcu. Sit amet consectetur adipiscing elit ut aliquam purus sit. 
          Integer feugiat scelerisque varius morbi enim nunc faucibus a. Nulla pharetra diam sit amet. Felis 
          imperdiet proin fermentum leo vel orci porta non pulvinar. Odio facilisis mauris sit amet massa vitae 
          tortor condimentum lacinia. Pretium aenean pharetra magna ac. Massa eget egestas purus viverra accumsan 
          in nisl nisi. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Eget aliquet nibh 
          praesent tristique magna sit amet purus gravida. Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
          Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ac placerat vestibulum lectus mauris ultrices 
          eros in cursus turpis. Dui id ornare arcu odio. Suscipit adipiscing bibendum est ultricies integer quis. 
          Nisl pretium fusce id velit ut tortor pretium viverra. Dolor sit amet consectetur adipiscing elit 
          pellentesque habitant morbi tristique. In iaculis nunc sed augue lacus viverra vitae. Ac odio tempor 
          orci dapibus ultrices in iaculis. Tristique senectus et netus et malesuada fames ac turpis egestas. 
          Lacus vestibulum sed arcu non odio euismod lacinia at. Vel facilisis volutpat est velit egestas dui id 
          ornare arcu. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Velit aliquet 
          sagittis id consectetur purus ut faucibus. Ut etiam sit amet nisl purus. Pulvinar mattis nunc sed blandit 
          libero volutpat sed cras ornare. In arcu cursus euismod quis viverra nibh. Dictumst vestibulum rhoncus 
          est pellentesque elit ullamcorper dignissim. Sit amet venenatis urna cursus eget nunc scelerisque 
          viverra. Libero justo laoreet sit amet cursus sit amet dictum sit. Lobortis mattis aliquam faucibus 
          purus in massa. Ullamcorper malesuada proin libero nunc consequat interdum. Tempor id eu nisl nunc 
          mi ipsum faucibus vitae aliquet. Mi quis hendrerit dolor magna eget est lorem ipsum. Purus ut faucibus 
          pulvinar elementum integer enim neque. Non arcu risus quis varius quam quisque id. Metus vulputate 
          eu scelerisque felis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. 
          Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Rhoncus mattis rhoncus urna neque 
          viverra justo nec ultrices dui. Amet purus gravida quis blandit turpis cursus in hac habitasse. Risus 
          nullam eget felis eget. Iaculis urna id volutpat lacus laoreet non. Malesuada nunc vel risus commodo 
          viverra maecenas. Nec tincidunt praesent semper feugiat nibh sed. Massa id neque aliquam vestibulum 
          morbi blandit. Vitae tempus quam pellentesque nec nam. Pretium lectus quam id leo in vitae turpis. Diam 
          quam nulla porttitor massa
        </p>
      </div>
      <div className="content__shadow" />
      <div className="content__background" />
    </div>

    <img src={sperm3} style={imgStyle} className="sperm-3" alt="sprem" />
    <img src={sperm4} style={imgStyle} className="sperm-4" alt="sprem" />
    <img src={sperm5} style={imgStyle} className="sperm-7" alt="sprem" />
    <img src={sperm6} style={imgStyle} className="sperm-5" alt="sprem" />
    <img src={sperm7} style={imgStyle} className="sperm-6" alt="sprem" />
  </div>
  );
};

export default Second;