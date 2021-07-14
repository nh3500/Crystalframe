const NavTop = Vue.createApp({
  template: `<nav class="UP navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="index.html"><img src="logo.png" class="mr-2 logo_rwd"></a>
  <a class="navbar-brand" href="index.html">crystalframe</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="index.html" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          3D
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="crystalframe.html">
            <!--<img src="img/silver_logo.png"style="width: 2rem">--> 水晶裱
          </a>
          <a class="dropdown-item navdrop_center" href="crystalframeGLAZE.html">水晶裱琉璃</a>
          <!-- <a class="dropdown-item navdrop_center" href="crystalframeIntro.html">&nbsp;&nbsp;3D&nbsp;教學</a> -->
        </div>
        <!-- </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="index.html" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          展現
        </div>
        <div class="dropdown-menu" style="min-width: 200px">
          <a class="dropdown-item navdrop_center" href="crystalframeShowcase.html"><img class="img-fluid"
              src="img/silver_logo.png" style="width: 2rem"> 水晶裱展現</a>
          <a class="dropdown-item navdrop_center" href="crystalframeShowcaseLED.html"><img class="img-fluid"
              src="img/gold_logo.png" style="width: 2rem"> LED水晶框展現</a>
          <a class="dropdown-item navdrop_center" href="showcaseVideo.html">&nbsp;&nbsp;參考影片</a>
          <a class="dropdown-item navdrop_center" href="showcasePost.html">&nbsp;&nbsp;參考圖文</a>
          <a class="dropdown-item" href="showcaseBusinessAd.html">&nbsp;&nbsp;商業廣告</a>
        </div>
      </li> -->
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="story.html" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          認識
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="storyVideo.html">影片產品外觀</a>
          <a class="dropdown-item navdrop_center" href="story.html">發明故事</a>
          <!-- <a class="dropdown-item navdrop_center" href="storyAdvantage.html">產品特色</a> -->
          <!-- <a class="dropdown-item navdrop_center" href="storyDifference.html">現代水晶裱與傳統的差異</a> -->
          <a class="dropdown-item navdrop_center" href="storyCertificate.html">產品證書</a>
          <a class="dropdown-item navdrop_center" href="storyPatent.html">專利佈局</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="product.html" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          購買
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="product.html">目錄及價格</a>
          <!-- <a class="dropdown-item navdrop_center" href="productHot.html">特價熱賣區</a> -->
          <a class="dropdown-item navdrop_center" href="productSim.html">模擬服務</a>
          <!-- <a class="dropdown-item navdrop_center" href="productWarranty.html">水晶裱的保固</a> -->
          <a class="dropdown-item navdrop_center" href="productIntro.html">購買&nbsp;教學</a>
          <!-- <a class="dropdown-item" href="productOther.html">其他</a> -->
        </div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="usageOperation.html" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          使用
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="usageOperation.html">影片使用說明</a>
          <a class="dropdown-item navdrop_center" href="usageConstruction.html">結構圖</a>
          <a class="dropdown-item navdrop_center" href="usageNotice.html">注意事項</a>
          <!-- <a class="dropdown-item" href="usageQA.html">客戶問答 Q&A</a> -->
        </div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="pictureExplain.html" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          美圖
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="pictureExplain.html">美圖說明</a>
          <a class="dropdown-item navdrop_center" href="pictureDownload.html">美圖下載</a>
          <a class="dropdown-item navdrop_center" href="photographerMember.html">攝影師專區</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="shopDistribution.html" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          店家
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="shopShowcase.html">台灣展示店</a>
          <a class="dropdown-item navdrop_center" href="shopDistribution.html">美國展示店</a>
          <!-- </div>
          </li>
          <li class="nav-item dropdown">
              <div class="nav-link dropdown-toggle" href="distributionMustKnow.html" role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  經銷
              </div>
              <div class="dropdown-menu">
                  <a class="dropdown-item" href="distributionMustKnow.html">經銷商須知</a>
                  <a class="dropdown-item" href="distributionLearn.html">經銷商學習</a>
              </div> -->
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="contactMainCompany.html" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          聯絡
        </div>
        <div class="dropdown-menu">
          <!-- <a class="dropdown-item" href="contactMainCompany.html">台灣總公司</a> -->
          <a class="dropdown-item navdrop_center" href="contactDistributionTaiwan.html">台灣總經銷</a>
          <a class="dropdown-item navdrop_center" href="contactInternationalPartner.html">日本總經銷</a>
        </div>
      </li>
      <!-- <li class="nav-item dropdown">
              <div class="nav-link dropdown-toggle" href="aboutVideo.html" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  參考
              </div>
              <div class="dropdown-menu">
                  <a class="dropdown-item" href="aboutVideo.html">關於影片</a>
              </div>
          </li>   -->
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle text-center" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-globe"></i>
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item navdrop_center" href="index.html">繁體中文</a>
          <!-- <a class="dropdown-item navdrop_center" href="Ch_index.html">简体中文</a>
          <a class="dropdown-item navdrop_center" href="En_index.html">English</a> -->
          <a class="dropdown-item navdrop_center" href="index.html">简体中文</a>
          <a class="dropdown-item navdrop_center" href="index.html">English</a>
          <a class="dropdown-item navdrop_center" href="#">日本語</a>
        </div>
      </li>
      <div class="nav_icon_item">
        <li class="navbar-brand">
          <a target="_blank" href="https://www.facebook.com/crystalframeyuweihsu/"><img class="navbar_Icon"
              src="img/nav_icon/nav_FB_icon.png"></a>
        </li>
        <li class="navbar-brand">
          <a target="_blank" href="https://line.me/R/ti/p/5RSc-xDAjr"><img class="navbar_Icon"
              src="img/nav_icon/nav_line_icon.png"></a>
        </li>
        <li class="navbar-brand">
          <a target="_blank" href="https://www.youtube.com/playlist?list=PLrRiQ3x2myYa4n6uiQhcri1_R5H2XvMjg">
            <img class="navbar_Icon2" src="img/nav_icon/nav_youtube_icon.png"></a>
        </li>
      </div>
    </ul>
  </div>
</nav>`,

})
NavTop.mount('#NavTop')