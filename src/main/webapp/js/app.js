var isclick = false;
window.isclick = isclick;
window.firstLoad = true;
// 加载资源
const homeHandler = () => {
    const template = `
        <div class="specialChannel">
            </div>
            <div class="channels-block artists-block">
                <h3 id="artists-block-title" class="title"><span>从艺术家出发</span></h3>
                <div class="more">
                    <button class="button-more">加载更多兆赫</button>
                </div>
                <div class="clear"></div>
            </div>
            <div></div>
            <div class="channels-block text-channels">  
                <h3>心情 / 场景</h3>
                <ul>
                    <li value="1" class="channel channel-test"><a  title="工作学习" class="title">工作学习<span
                                class="mhz">MHz</span></a></li>
                    <li value="2" class="channel channel-test"><a  title="户外" class="title">户外<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="3" class="channel channel-test"><a  title="休息" class="title">休息<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="5" class="channel channel-test"><a  title="亢奋" class="title">亢奋<span
                            class="mhz">MHz</span></a>
                    </li>
                    <li value="6" class="channel channel-test"><a  title="舒缓" class="title">舒缓<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="7" class="channel channel-test"><a  title="Easy" class="title">Easy<span
                                class="mhz">MHz</span></a></li>
                    <li value="8" class="channel channel-test"><a  title="咖啡" class="title">咖啡<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="9" class="channel channel-test"><a  title="运动" class="title">运动<span
                                class="mhz">MHz</span></a>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="channels-block text-channels">
                <h3>语言 / 年代</h3>
                <ul>
                    <li value="10" class="channel channel-test"><a title="华语" class="title">华语<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="11" class="channel channel-test"><a title="欧美" class="title">欧美<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="12" class="channel channel-test"><a title="七零" class="title">七零<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="13" class="channel channel-test"><a title="八零" class="title">八零<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="14" class="channel channel-test"><a title="九零" class="title">九零<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="15" class="channel channel-test"><a title="粤语" class="title">粤语<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="16" class="channel channel-test"><a title="日语" class="title">日语<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="17" class="channel channel-test"><a title="韩语" class="title">韩语<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="18" class="channel channel-test"><a title="法语" class="title">法语<span
                            class="mhz">MHz</span></a>
                    </li>
                    <li value="19" class="channel channel-test"><a title="新歌" class="title">新歌<span
                            class="mhz">MHz</span></a>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="channels-block text-channels">
                <h3>风格 / 流派</h3>
                <ul>
                    <li value="20" class="channel channel-test"><a title="流行" class="title">流行<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="21" class="channel channel-test"><a title="摇滚" class="title">摇滚<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="22" class="channel channel-test"><a title="民谣" class="title">民谣<span
                                    class="mhz">MHz</span>
                    </a></li>
                    <li value="23" class="channel channel-test"><a title="轻音乐" class="title">轻音乐<span
                                class="mhz">MHz</span></a></li>
                    <li value="24" class="channel channel-test"><a title="电影原声" class="title">电影原声<span
                                class="mhz">MHz</span></a></li>
                    <li value="25" class="channel channel-test"><a title="爵士" class="title">爵士<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="26" class="channel channel-test"><a title="电子" class="title">电子<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="27" class="channel channel-test"><a  title="说唱" class="title">说唱<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="28" class="channel channel-test"><a title="R&B" class="title">R&B<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="29" class="channel channel-test"><a title="古典" class="title">古典<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="30" class="channel channel-test"><a title="动漫" class="title">动漫<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="31" class="channel channel-test"><a  title="金属" class="title">金属<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="32" class="channel channel-test"><a title="布鲁斯" class="title">布鲁斯<span
                                class="mhz">MHz</span></a></li>
                    <li value="33" class="channel channel-test"><a title="拉丁" class="title">拉丁<span
                                class="mhz">MHz</span></a>
                    </li>
                    <li value="34" class="channel channel-test"><a title="朋克" class="title">朋克<span
                                class="mhz">MHz</span></a>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div></div>
        </div>`;
    $(".content").empty();
    $(".content").html(template);
    $.ajax({
        url:"http://localhost:8080/MusicFM/selectMainServlet",
        type: 'post',
        async: true,
        dataType: 'json',
        success: (data) => {
            if(firstLoad){
                let fengmianMain = document.getElementById("cover");
                fengmianMain.style.backgroundImage = `url(${data[0].songList[0].pictureHref})`;
                let songName = document.getElementById("songName");
                songName.appendChild(document.createTextNode(`${data[0].songList[0].songName}`));
                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                    document.getElementsByClassName("singerNameTitle")[i].appendChild(document.createTextNode(`${data[0].singerName}`));
                }
                //将歌曲放入池中
                for(let i=0;i<data[0].songList.length;i++){
                    songList.push(data[0].songList[i].songId);
                }
                songNum = 0 ;
                aud.src =`${data[0].songList[0].locateHref}`;
                lyricsInjection(data[0].songList[0].lrcHref);
                firstLoad = false;
            }
            let artistsBlockTitle = document.getElementById("artists-block-title");
            let unorderList = document.createElement("ul");
            for (let i = 1; i < data.length; i++) {
                let li = document.createElement("li");
                li.className = "channel channel-rounded";
                let pic = document.createElement("div");
                pic.className = "fengmian";
                pic.style.backgroundImage = `url(${data[i].singerPictureHref})`;
                let animateDiv = document.createElement("div");

                animateDiv.className = "playable-overlay";
                // animateDiv.style.display="none";
                let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg1.setAttribute('class',"bofangShow");
                let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-bofang");
                svg1.appendChild(use1);
                animateDiv.appendChild(svg1);

                let boxingtuFamily = document.createElement("div");
                boxingtuFamily.setAttribute('class',"boxingtuBlock");
                for(let i=0;i<4;i++){
                    let div = document.createElement("div");
                    div.className ="boxingtu" + (i+1);
                    boxingtuFamily.appendChild(div);
                }
                animateDiv.appendChild(boxingtuFamily);

                pic.appendChild(animateDiv);
                let wordDiv = document.createElement("div");
                let linkWriter = document.createElement("a");
                linkWriter.href = "/singer/" + `${data[i].singerId}` ;
                linkWriter.className = "link title routerLink";
                let linkWriterWord = document.createTextNode(data[i].singerName + "系");
                linkWriter.appendChild(linkWriterWord);
                let subTitlt = document.createElement("p");
                subTitlt.className = "subtitle";
                let subTitltWord = document.createTextNode(data[i].singerName + "系及相似的艺术家们");
                subTitlt.appendChild(subTitltWord);
                wordDiv.appendChild(linkWriter);
                wordDiv.appendChild(subTitlt);
                li.appendChild(pic);
                li.appendChild(wordDiv);
                unorderList.appendChild(li);
            }

            insertAfter(unorderList, artistsBlockTitle);

            $(".channel-test a").click(function(event){
                console.log(event.currentTarget);
                console.log(event.currentTarget.getAttribute("title"));
                let fatherLiValue = event.currentTarget.parentNode.value;
                // console.log(fatherLiValue);
                $.ajax({
                    url: 'http://localhost:8080/MusicFM/selectTagSongServlet',
                    type: 'post',
                    async: true,
                    data:'tagId='+fatherLiValue,
                    dataType: 'json',
                    success:(data) =>{
                        aud.pause();
                        console.log(data);
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        }
                        console.log(dataLength);
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        }
                        console.log(songList);


                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        $.ajax({
                            url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                            type: 'post',
                            data: 'songId='+data.songList[0].songId,
                            async: true,
                            dataType: 'json',
                            success:(data)=>{
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                console.log(data);
                            }
                        })
                        aud.src = `${data.songList[0].locateHref}`;
                        lyricsInjection(data.songList[0].lrcHref);
                        isPlaying = true;
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                        aud.play();
                        coverAnimation.play();
                        songNum = 0;

                    },
                    error: () =>{
                        console.log("gga");
                    }
                })
            })
            //无法请求到 其他十个
            $(".button-more").click(function(event){
                $(".button-more").hide();
                let str ="";
                for(let j=1;j<data.length;j++){
                    if(j==data.length-1){
                        str += `singerId${j}=${data[j].singerId}`;
                    }
                    else{
                        str += (`singerId${j}=${data[j].singerId}` + `&`) ;
                    }
                }
                console.log(str);
                $.ajax({
                    url: 'http://localhost:8080/MusicFM/selectMoreSingerServlet',
                    type: 'post',
                    async: true,
                    data: str,
                    dataType: 'json',
                    success: (data)=>{
                        console.log(data);
                        let ul = document.getElementsByClassName("artists-block")[0].children[1];
                        for(let i=0;i<data.length;i++){
                            let li = document.createElement("li");
                            li.className = "channel channel-rounded";
                            let pic = document.createElement("div");
                            pic.className = "fengmian";
                            pic.style.backgroundImage = `url(${data[i].singerPictureHref})`;
                            let animateDiv = document.createElement("div");

                            animateDiv.className = "playable-overlay";
                            // animateDiv.style.display="none";
                            let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            svg1.setAttribute('class',"bofangShow");
                            let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                            use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-bofang");
                            svg1.appendChild(use1);
                            animateDiv.appendChild(svg1);

                            let boxingtuFamily = document.createElement("div");
                            boxingtuFamily.setAttribute('class',"boxingtuBlock");
                            for(let i=0;i<4;i++){
                                let div = document.createElement("div");
                                div.className ="boxingtu" + (i+1);
                                boxingtuFamily.appendChild(div);
                            }
                            animateDiv.appendChild(boxingtuFamily);

                            pic.appendChild(animateDiv);
                            let wordDiv = document.createElement("div");
                            let linkWriter = document.createElement("a");
                            linkWriter.href = "/singer/" + `${data[i].singerId}` ;
                            linkWriter.className = "link title routerLink";
                            let linkWriterWord = document.createTextNode(data[i].singerName + "系");
                            linkWriter.appendChild(linkWriterWord);
                            let subTitlt = document.createElement("p");
                            subTitlt.className = "subtitle";
                            let subTitltWord = document.createTextNode(data[i].singerName + "系及相似的艺术家们");
                            subTitlt.appendChild(subTitltWord);
                            wordDiv.appendChild(linkWriter);
                            wordDiv.appendChild(subTitlt);
                            li.appendChild(pic);
                            li.appendChild(wordDiv);
                            ul.appendChild(li);
                        }
                        $(".fengmian").click(function(event){
                            if(isclick){
                                for(let j=0;j<document.getElementsByClassName("fengmian").length;j++){
                                    if(document.getElementsByClassName("fengmian")[j].firstElementChild.getAttribute('class') == "playable-overlayShow") {
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.className = "playable-overlay";
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.lastElementChild.className = "boxingtuBlock";
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.firstElementChild.setAttribute('class','bofangShow')
                                    }
                                }
                            }
                            event.currentTarget.firstElementChild.className = "playable-overlayShow";
                            event.currentTarget.firstElementChild.lastElementChild.className ="boxingtuBlockShow boxingtuBlock";
                            event.currentTarget.firstElementChild.firstElementChild.setAttribute('class',"disNone");
                            isclick = true;
                            console.log(event.currentTarget.nextSibling.firstElementChild.getAttribute("href"));
                            let singerStr = event.currentTarget.nextSibling.firstElementChild.getAttribute("href");
                            let singerId = +(singerStr.replace(/[^0-9]/ig,""))
                            console.log(singerId)
                            $.ajax({
                                url:"http://localhost:8080/MusicFM/selectSingerSongServlet",
                                type: 'post',
                                async: true,
                                data: 'singerId='+singerId,
                                dataType: 'json',
                                success: (data) =>{
                                    aud.pause();
                                    console.log(data);
                                    let dataLength = data.songList.length;
                                    for(let i=0;i<songList.length;i++){
                                        songList[i] = -1;
                                    }
                                    console.log(dataLength);
                                    for(let i=0;i<dataLength;i++){
                                        songList[i] = data.songList[i].songId;
                                        if(i >= songList.length){
                                            songList.push(data.songList[i].songId);
                                        }
                                    }
                                    console.log(songList);
                                    //     更改样式阶段
                                    let playBtn = document.getElementById("play");
                                    playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                                    let progressLine = document.getElementsByClassName("progress-line")[0];
                                    progressLine.style.width = "0%";

                                    let fengmianMain = document.getElementById("cover");
                                    fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                                    let songName = document.getElementById("songName");
                                    // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                                    songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                                    $.ajax({
                                        url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                                        type: 'post',
                                        data: 'songId='+data.songList[0].songId,
                                        async: true,
                                        dataType: 'json',
                                        success:(data)=>{
                                            for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                                document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                            }
                                            console.log(data);
                                        }
                                    })
                                    aud.src = `${data.songList[0].locateHref}`;
                                     lyricsInjection(data.songList[0].lrcHref);
                                    isPlaying = true;
                                    songNum = 0;
                                }
                            })
                        })
                    }
                })
            })

            $(".fengmian").click(function(event){
                if(isclick){
                    for(let j=0;j<document.getElementsByClassName("fengmian").length;j++){
                        if(document.getElementsByClassName("fengmian")[j].firstElementChild.getAttribute('class') == "playable-overlayShow") {
                            document.getElementsByClassName("fengmian")[j].firstElementChild.className = "playable-overlay";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.lastElementChild.className = "boxingtuBlock";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.firstElementChild.setAttribute('class','bofangShow')
                        }
                    }
                }
                event.currentTarget.firstElementChild.className = "playable-overlayShow";
                event.currentTarget.firstElementChild.lastElementChild.className ="boxingtuBlockShow boxingtuBlock";
                event.currentTarget.firstElementChild.firstElementChild.setAttribute('class',"disNone");
                isclick = true;
                console.log(event.currentTarget.nextSibling.firstElementChild.getAttribute("href"));
                let singerStr = event.currentTarget.nextSibling.firstElementChild.getAttribute("href");
                let singerId = +(singerStr.replace(/[^0-9]/ig,""))
                console.log(singerId)
                $.ajax({
                    url:"http://localhost:8080/MusicFM/selectSingerSongServlet",
                    type: 'post',
                    async: true,
                    data: 'singerId='+singerId,
                    dataType: 'json',
                    success: (data) =>{
                        aud.pause();
                        console.log(data);
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        }
                        console.log(dataLength);
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        }
                        console.log(songList);
                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        $.ajax({
                            url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                            type: 'post',
                            data: 'songId='+data.songList[0].songId,
                            async: true,
                            dataType: 'json',
                            success:(data)=>{
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                console.log(data);
                            }
                        })
                        aud.src = `${data.songList[0].locateHref}`;
                        isPlaying = true;
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                        aud.play();
                        coverAnimation.play();
                        songNum = 0;

                    }
                })
            })
        },
        error: () => {
            console.log("gg");
        }
    })
}

const zhaoheHandler = () => {
    const template = `
       <div class="specialChannel">
                    </div>
                        <div class="channels-block artists-block">
                            <h3 id="artists-block-title" class="title"><span>从艺术家出发</span></h3>
                            <div class="more">
                                <button class="button-more">加载更多兆赫</button>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div></div>
                        <div class="channels-block text-channels">  
                            <h3>心情 / 场景</h3>
                            <ul>
                                <li value="1" class="channel channel-test"><a  title="工作学习" class="title">工作学习<span
                                            class="mhz">MHz</span></a></li>
                                <li value="2" class="channel channel-test"><a  title="户外" class="title">户外<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="3" class="channel channel-test"><a  title="休息" class="title">休息<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="5" class="channel channel-test"><a  title="亢奋" class="title">亢奋<span
                                        class="mhz">MHz</span></a>
                                </li>
                                <li value="6" class="channel channel-test"><a  title="舒缓" class="title">舒缓<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="7" class="channel channel-test"><a  title="Easy" class="title">Easy<span
                                            class="mhz">MHz</span></a></li>
                                <li value="8" class="channel channel-test"><a  title="咖啡" class="title">咖啡<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="9" class="channel channel-test"><a  title="运动" class="title">运动<span
                                            class="mhz">MHz</span></a>
                                </li>
                            </ul>
                            <div class="clear"></div>
                        </div>
                        <div class="channels-block text-channels">
                            <h3>语言 / 年代</h3>
                            <ul>
                                <li value="10" class="channel channel-test"><a title="华语" class="title">华语<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="11" class="channel channel-test"><a title="欧美" class="title">欧美<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="12" class="channel channel-test"><a title="七零" class="title">七零<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="13" class="channel channel-test"><a title="八零" class="title">八零<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="14" class="channel channel-test"><a title="九零" class="title">九零<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="15" class="channel channel-test"><a title="粤语" class="title">粤语<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="16" class="channel channel-test"><a title="日语" class="title">日语<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="17" class="channel channel-test"><a title="韩语" class="title">韩语<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="18" class="channel channel-test"><a title="法语" class="title">法语<span
                                        class="mhz">MHz</span></a>
                                </li>
                                <li value="19" class="channel channel-test"><a title="新歌" class="title">新歌<span
                                        class="mhz">MHz</span></a>
                                </li>
                            </ul>
                            <div class="clear"></div>
                        </div>
                        <div class="channels-block text-channels">
                            <h3>风格 / 流派</h3>
                            <ul>
                                <li value="20" class="channel channel-test"><a title="流行" class="title">流行<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="21" class="channel channel-test"><a title="摇滚" class="title">摇滚<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="22" lass="channel channel-test"><a title="民谣" class="title">民谣<span
                                                class="mhz">MHz</span>
                                </a></li>
                                <li value="23" class="channel channel-test"><a title="轻音乐" class="title">轻音乐<span
                                            class="mhz">MHz</span></a></li>
                                <li value="24" class="channel channel-test"><a title="电影原声" class="title">电影原声<span
                                            class="mhz">MHz</span></a></li>
                                <li value="25" class="channel channel-test"><a title="爵士" class="title">爵士<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="26" class="channel channel-test"><a title="电子" class="title">电子<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="27" class="channel channel-test"><a  title="说唱" class="title">说唱<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="28" class="channel channel-test"><a title="R&B" class="title">R&B<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="29" class="channel channel-test"><a title="古典" class="title">古典<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="30" class="channel channel-test"><a title="动漫" class="title">动漫<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="31" class="channel channel-test"><a  title="金属" class="title">金属<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="32" class="channel channel-test"><a title="布鲁斯" class="title">布鲁斯<span
                                            class="mhz">MHz</span></a></li>
                                <li value="33" class="channel channel-test"><a title="拉丁" class="title">拉丁<span
                                            class="mhz">MHz</span></a>
                                </li>
                                <li value="34" class="channel channel-test"><a title="朋克" class="title">朋克<span
                                            class="mhz">MHz</span></a>
                                </li>
                            </ul>
                            <div class="clear"></div>
                        </div>
            <div></div>
        </div>
        `;
    $('.content').empty();
    $('.content').html(template);
    $.ajax({
        url:"http://localhost:8080/MusicFM/selectMainServlet",
        type: 'post',
        async: true,
        dataType: 'json',
        success: (data) => {
            aud.play();
            let artistsBlockTitle = document.getElementById("artists-block-title");
            let unorderList = document.createElement("ul");
            console.log(data.length)
                for (let i = 1; i < data.length; i++) {
                    let li = document.createElement("li");
                    li.className = "channel channel-rounded";
                    let pic = document.createElement("div");
                    pic.className = "fengmian";
                    pic.style.backgroundImage = `url(${data[i].singerPictureHref})`;
                    let animateDiv = document.createElement("div");

                    animateDiv.className = "playable-overlay";
                    // animateDiv.style.display="none";
                    let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg1.setAttribute('class',"bofangShow");
                    let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                    use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-bofang");
                    svg1.appendChild(use1);
                    animateDiv.appendChild(svg1);

                    let boxingtuFamily = document.createElement("div");
                    boxingtuFamily.setAttribute('class',"boxingtuBlock");
                    for(let i=0;i<4;i++){
                        let div = document.createElement("div");
                        div.className ="boxingtu" + (i+1);
                        boxingtuFamily.appendChild(div);
                    }
                    animateDiv.appendChild(boxingtuFamily);

                    pic.appendChild(animateDiv);
                    let wordDiv = document.createElement("div");
                    let linkWriter = document.createElement("a");
                    linkWriter.href = "/singer/" + `${data[i].singerId}` ;
                    linkWriter.className = "link title routerLink";
                    let linkWriterWord = document.createTextNode(data[i].singerName + "系");
                    linkWriter.appendChild(linkWriterWord);
                    let subTitlt = document.createElement("p");
                    subTitlt.className = "subtitle";
                    let subTitltWord = document.createTextNode(data[i].singerName + "系及相似的艺术家们");
                    subTitlt.appendChild(subTitltWord);
                    wordDiv.appendChild(linkWriter);
                    wordDiv.appendChild(subTitlt);
                    li.appendChild(pic);
                    li.appendChild(wordDiv);
                    unorderList.appendChild(li);
                } 
            console.log($(".fengmian").length);
            insertAfter(unorderList, artistsBlockTitle);
            $(".channel-test a").click(function(event){
                console.log(event.currentTarget);
                console.log(event.currentTarget.getAttribute("title"));
                let fatherLiValue = event.currentTarget.parentNode.value;
                // console.log(fatherLiValue);
                $.ajax({
                    url: 'http://localhost:8080/MusicFM/selectTagSongServlet',
                    type: 'post',
                    async: true,
                    data:'tagId='+fatherLiValue,
                    dataType: 'json',
                    success:(data) =>{
                        aud.pause();
                        console.log(data);
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        }
                        console.log(dataLength);
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        }
                        console.log(songList);


                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        $.ajax({
                            url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                            type: 'post',
                            data: 'songId='+data.songList[0].songId,
                            async: true,
                            dataType: 'json',
                            success:(data)=>{
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                console.log(data);
                            }
                        })
                        aud.src = `${data.songList[0].locateHref}`;
                        isPlaying = false;
                        songNum = 0;
                    },
                    error: () =>{
                        console.log("gga");
                    }
                })
            })
            //无法请求到 其他十个
            $(".button-more").click(function(event){
                $(".button-more").hide();
                let str ="";
                for(let j=1;j<data.length;j++){
                    if(j==data.length-1){
                        str += `singerId${j}=${data[j].singerId}`;
                    }
                    else{
                      str += (`singerId${j}=${data[j].singerId}` + `&`) ;
                    }
                }
                console.log(str);
                $.ajax({
                    url: 'http://localhost:8080/MusicFM/selectMoreSingerServlet',
                    type: 'post',
                    async: true,
                    data: str,
                    dataType: 'json',
                    success: (data)=>{
                        console.log(data);
                        let ul = document.getElementsByClassName("artists-block")[0].children[1];
                        for(let i=0;i<data.length;i++){
                            let li = document.createElement("li");
                            li.className = "channel channel-rounded";
                            let pic = document.createElement("div");
                            pic.className = "fengmian";
                            pic.style.backgroundImage = `url(${data[i].singerPictureHref})`;
                            let animateDiv = document.createElement("div");

                            animateDiv.className = "playable-overlay";
                            // animateDiv.style.display="none";
                            let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            svg1.setAttribute('class',"bofangShow");
                            let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                            use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-bofang");
                            svg1.appendChild(use1);
                            animateDiv.appendChild(svg1);

                            let boxingtuFamily = document.createElement("div");
                            boxingtuFamily.setAttribute('class',"boxingtuBlock");
                            for(let i=0;i<4;i++){
                                let div = document.createElement("div");
                                div.className ="boxingtu" + (i+1);
                                boxingtuFamily.appendChild(div);
                            }
                            animateDiv.appendChild(boxingtuFamily);

                            pic.appendChild(animateDiv);
                            let wordDiv = document.createElement("div");
                            let linkWriter = document.createElement("a");
                            linkWriter.href = "/singer/" + `${data[i].singerId}` ;
                            linkWriter.className = "link title routerLink";
                            let linkWriterWord = document.createTextNode(data[i].singerName + "系");
                            linkWriter.appendChild(linkWriterWord);
                            let subTitlt = document.createElement("p");
                            subTitlt.className = "subtitle";
                            let subTitltWord = document.createTextNode(data[i].singerName + "系及相似的艺术家们");
                            subTitlt.appendChild(subTitltWord);
                            wordDiv.appendChild(linkWriter);
                            wordDiv.appendChild(subTitlt);
                            li.appendChild(pic);
                            li.appendChild(wordDiv);
                            ul.appendChild(li);
                        }
                        $(".fengmian").click(function(event){
                            aud.pause();
                            if(isclick){
                                for(let j=0;j<document.getElementsByClassName("fengmian").length;j++){
                                    if(document.getElementsByClassName("fengmian")[j].firstElementChild.getAttribute('class') == "playable-overlayShow") {
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.className = "playable-overlay";
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.lastElementChild.className = "boxingtuBlock";
                                        document.getElementsByClassName("fengmian")[j].firstElementChild.firstElementChild.setAttribute('class','bofangShow')
                                    }
                                }
                            }
                            event.currentTarget.firstElementChild.className = "playable-overlayShow";
                            event.currentTarget.firstElementChild.lastElementChild.className ="boxingtuBlockShow boxingtuBlock";
                            event.currentTarget.firstElementChild.firstElementChild.setAttribute('class',"disNone");
                            isclick = true;
                            console.log(event.currentTarget.nextSibling.firstElementChild.getAttribute("href"));
                            let singerStr = event.currentTarget.nextSibling.firstElementChild.getAttribute("href");
                            let singerId = +(singerStr.replace(/[^0-9]/ig,""))
                            console.log(singerId)
                            $.ajax({
                                url:"http://localhost:8080/MusicFM/selectSingerSongServlet",
                                type: 'post',
                                async: true,
                                data: 'singerId='+singerId,
                                dataType: 'json',
                                success: (data) =>{
                                    console.log(data);
                                    let dataLength = data.songList.length;
                                    for(let i=0;i<songList.length;i++){
                                        songList[i] = -1;
                                    }
                                    console.log(dataLength);
                                    for(let i=0;i<dataLength;i++){
                                        songList[i] = data.songList[i].songId;
                                        if(i >= songList.length){
                                            songList.push(data.songList[i].songId);
                                        }
                                    }
                                    console.log(songList);
                                    //     更改样式阶段
                                    let playBtn = document.getElementById("play");
                                    playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                                    let progressLine = document.getElementsByClassName("progress-line")[0];
                                    progressLine.style.width = "0%";

                                    let fengmianMain = document.getElementById("cover");
                                    fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                                    let songName = document.getElementById("songName");
                                    // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                                    songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                                    $.ajax({
                                        url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                                        type: 'post',
                                        data: 'songId='+data.songList[0].songId,
                                        async: true,
                                        dataType: 'json',
                                        success:(data)=>{
                                            for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                                document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                            }
                                            console.log(data);
                                        }
                                    })
                                    aud.src = `${data.songList[0].locateHref}`;
                                    isPlaying = true;
                                    songNum = 0;
                                    aud.play();
                                    collectOrNoT();
                                }
                            })
                        })
                    }
                })
            })
            $(".fengmian").click(function(event){
                if(isclick){
                    for(let j=0;j<document.getElementsByClassName("fengmian").length;j++){
                        if(document.getElementsByClassName("fengmian")[j].firstElementChild.getAttribute('class') == "playable-overlayShow") {
                            document.getElementsByClassName("fengmian")[j].firstElementChild.className = "playable-overlay";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.lastElementChild.className = "boxingtuBlock";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.firstElementChild.setAttribute('class','bofangShow')
                        }
                    }
                }
                event.currentTarget.firstElementChild.className = "playable-overlayShow";
                event.currentTarget.firstElementChild.lastElementChild.className ="boxingtuBlockShow boxingtuBlock";
                event.currentTarget.firstElementChild.firstElementChild.setAttribute('class',"disNone");
                isclick = true;
                console.log(event.currentTarget.nextSibling.firstElementChild.getAttribute("href"));
                let singerStr = event.currentTarget.nextSibling.firstElementChild.getAttribute("href");
                let singerId = +(singerStr.replace(/[^0-9]/ig,""));
                console.log(singerId)
                $.ajax({
                    url:"http://localhost:8080/MusicFM/selectSingerSongServlet",
                    type: 'post',
                    async: true,
                    data: 'singerId='+singerId,
                    dataType: 'json',
                    success: (data) =>{
                        aud.pause();
                        console.log(data);
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        }
                        console.log(dataLength);
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        }
                        console.log(songList);
                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        $.ajax({
                            url:"http://localhost:8080/MusicFM/selectNextSongServlet",
                            type: 'post',
                            data: 'songId='+data.songList[0].songId,
                            async: true,
                            dataType: 'json',
                            success:(data)=>{
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                console.log(data);
                            }
                        })
                        aud.src = `${data.songList[0].locateHref}`;
                        isPlaying = true;
                        songNum = 0;
                        aud.play();
                        collectOrNoT();
                    }
                })
            })
        },
        error: () => {
            console.log("gg");
        }
    })
};

const gedanHandler = () => {
    const template = `
        <div class="songLists-block" style="padding-top: 0px;">
           <div class="nav-place-holder">
              <ul class="nav-tabs">
                  <li><a></a></li>
              </ul>
           </div>
           <div class="items">
    
           </div>
        </div>`;
    $(".content").empty();
    $(".content").html(template);
    $.ajax({
        url: 'http://localhost:8080/MusicFM/selectRandomFavoriteServlet',
        type: 'post',
        async: true,
        dataType: 'json',
        success: (data) => {
            console.log(data);
            let items = document.getElementsByClassName("items")[0];

                 for (let i = 0; i < data.length; i++) {
                     let exploreSongList = document.createElement("li");
                     exploreSongList.className = "explore-songlist";
                     let cover = document.createElement("div");
                     cover.className = "fengmian";
                     cover.style.height = "144px";
                     cover.style.width = "144px";
                     cover.style.display = "inline-block";
                     cover.style.backgroundImage = "url(" +`${data[i].favoritePictureHref}`+")";
                     let overlay = document.createElement("div");
                     overlay.className = "gedan-playable-overlay";

                     let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                     svg1.setAttribute('class',"bofangShow");
                     let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                     use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-bofang");
                     svg1.appendChild(use1);
                     overlay.appendChild(svg1);

                     let boxingtuFamily = document.createElement("div");
                     boxingtuFamily.setAttribute('class',"boxingtuBlock");
                     for(let i=0;i<4;i++){
                         let div = document.createElement("div");
                         div.className ="boxingtu" + (i+1);
                         boxingtuFamily.appendChild(div);
                     }
                     overlay.appendChild(boxingtuFamily);

                     cover.appendChild(overlay);
                     let h3 = document.createElement("h3");
                     let routerLink = document.createElement("a");
                     routerLink.className = "routerLink";
                     routerLink.href = "/gedan/"+ data[i].favoriteId;
                     console.log(routerLink.href);
                     routerLink.appendChild(document.createTextNode(data[i].favoriteName));
                     h3.appendChild(routerLink);

                     let p = document.createElement("p");
                     let userSpan = document.createElement("span");
                     userSpan.appendChild(document.createTextNode(data[i].userList[data[i].userList.length-1].nickName));
                     p.appendChild(userSpan);
                     p.appendChild(document.createTextNode("  创建"));

                     let unorderList = document.createElement("ul");
                     unorderList.className = "sample-songs";
                     for (let j = 0; j < data[i].songList.length; j++) {
                         let li = document.createElement("li");
                         li.appendChild(document.createTextNode(data[i].songList[j].songName + "-" + data[i].songList[j].singer.singerName));
                         unorderList.appendChild(li);
                         if(j>=3){
                             break;
                         }
                     }

                     let extraInfoP = document.createElement("p");
                     extraInfoP.className = "extra-info";
                     extraInfoP.appendChild(document.createTextNode("曲目" + data[i].songList.length + " " + "收藏" + data[i].userList.length));
                     let discription = document.createElement("div");
                     discription.className = "discription";
                     discription.appendChild(h3);
                     discription.appendChild(p);
                     discription.appendChild(unorderList);
                     discription.appendChild(extraInfoP);
                     exploreSongList.appendChild(cover);
                     exploreSongList.appendChild(discription);
                     items.appendChild(exploreSongList);
                 }
            $(".fengmian").click(function(event){
                if(isclick){
                    for(let j=0;j<document.getElementsByClassName("fengmian").length;j++){
                        if(document.getElementsByClassName("fengmian")[j].firstElementChild.getAttribute('class') == "playable-overlayShow") {
                            document.getElementsByClassName("fengmian")[j].firstElementChild.className = "gedan-playable-overlay";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.lastElementChild.className = "boxingtuBlock";
                            document.getElementsByClassName("fengmian")[j].firstElementChild.firstElementChild.setAttribute('class','bofangShow')
                        }
                    }
                }
                event.currentTarget.firstElementChild.className = "playable-overlayShow";
                event.currentTarget.firstElementChild.lastElementChild.className ="boxingtuBlockShow boxingtuBlock";
                event.currentTarget.firstElementChild.firstElementChild.setAttribute('class',"disNone");
                isclick = true;
                console.log(event.currentTarget.nextSibling.firstElementChild.firstElementChild.getAttribute("href"));
                let gedanStr = event.currentTarget.nextSibling.firstElementChild.firstElementChild.getAttribute("href");
                let gedanId = +(gedanStr.replace(/[^0-9]/ig,""))
                $.ajax({
                    url:"http://localhost:8080/MusicFM/selectFavoriteServlet",
                    type: 'post',
                    async: true,
                    data: 'favoriteId='+gedanId,
                    dataType: 'json',
                    success: (data) =>{
                        aud.pause();
                        console.log(data);
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        }
                        console.log(dataLength);
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        };
                        console.log(songList);
                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                            document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                        }
                        aud.src = `${data.songList[0].locateHref}`;
                        aud.play();
                        isPlaying = true;
                        songNum = 0;
                        collectOrNoT();
                    }
                })
            })
        },
        error: () => {
            console.log("gg");
        }
    })
};

const mineHandler = () =>{
    if(document.getElementById("user-menu").style.display == "block") {
        let userIdNow = document.getElementById("user-menu").getAttribute("userId");
        let iconXin = `
            <svg style="width: 12px; height: 12px; vertical-align: middle;" class="iconXin">
                <use xlink:href="#icon-xin" style="fill: rgba(233, 7, 7, 0.7)"></use>
            </svg>`;
        const template =`
            <div class="main-page">
                <div class="section-switcher section-switcher-mine">
                    <div class="section-header">
                        <ul class="container">
                            <li class="mine-like"><a class = "mine-page-button">我的红心</a></li>
                            <li class="mine-collections"><a class = "mine-page-button">我的收藏</a></li>
                            <li class="mine-songlists"><a class = "mine-page-button">我制作的歌单</a></li>
                            <li class="mine-artists"><a class = "mine-page-button">我喜欢的艺术家</a></li>
                        </ul>
                    </div>
                </div>
                <div class="section-content">
                    <div class="page-heart-songs container" style="width: 600px; padding-bottom: 100px;">
                        <div class="header-cover">
                            <button class="button button-rounded">
                                <svg class="bofangIcon">
                                    <use xlink:href="#icon-bofang"></use>
                                </svg>
                            </button> 
                            <p id='mine-like-number' style='display: inline'>0</p>首红心歌曲
                        </div>
                        <p class="mine-introduce">我的红心歌曲
                        <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                        <div id="mine-songCollectionInnerBox"></div>
                    </div>
                </div>
            </div>`;
        $(".content").empty();
        $(".content").html(template);
        $.ajax({
            url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
            type: 'get',
            async: true,
            data: "userId="+userIdNow,
            dataType: 'json',
            success: (data) => {
                let mineLocation = 0;
                let mineLike = document.getElementsByClassName("mine-like")[0];
                let mineCollections = document.getElementsByClassName("mine-collections")[0];
                let mineSonglists = document.getElementsByClassName("mine-songlists")[0];
                let mineArtists = document.getElementsByClassName("mine-artists")[0];
                var userIdNow = document.getElementById("user-menu").getAttribute("userId");

                // 预设 我的红心
                document.getElementsByClassName("mine-page-button")[mineLocation].style.color = "red";
                let personalSongL = document.getElementsByClassName("personalSongL")[0];
                let unorderList = document.createElement("ul");
                unorderList.className = "songlist-song mineHeart";
                let j = 1;
                let myFavoriteId;
                if(data.songList) {
                    myFavoriteId = data.favoriteId;
                    document.getElementById("mine-like-number").innerHTML = data.songList.length;
                    for(let i=0; i<data.songList.length; i++) {
                        let li = document.createElement("li");
                        let top = document.createElement("div");
                        top.className = "top";
                        let animateSpan = document.createElement("span");

                        animateSpanWord = document.createTextNode(j++);
                        animateSpan.appendChild(animateSpanWord);
                        animateSpan.className ="index";

                        let cover = document.createElement("div");
                        cover.classname = "fengmian";
                        cover.style.height = "36px";
                        cover.style.width = "36px";
                        cover.style.backgroundImage = `url(${data.songList[i].pictureHref})`;
                        cover.style.backgroundSize = "cover";
                        cover.style.display = "inline-block";

                        let title = document.createElement("div");
                        title.className = "titles";
                        let h3 = document.createElement("h3");
                        h3.appendChild(document.createTextNode(data.songList[i].songName));
                        h3.value = `${data.songList[i].songId}`;


                        let p = document.createElement("p");
                        let artistSpan = document.createElement("span");
                        let artistLink = document.createElement("a");
                        artistLink.appendChild(document.createTextNode(data.songList[i].singer.singerName+"  ·  "));
                        artistLink.href = `/singer/${data.songList[i].singer.singerId}`;
                        artistLink.className = "routerLink";
                        artistSpan.appendChild(artistLink);

                        p.appendChild(artistSpan);
                        title.appendChild(h3);
                        title.appendChild(p);

                        let actions = document.createElement("div");
                        actions.className = "actions";

                        let a1 = document.createElement("a");
                        a1.style.marginRight = "10px";
                        a1.innerHTML = iconXin;
                        a1.setAttribute("songId",data.songList[i].songId);

                        let a2 = document.createElement("a");
                        a2.appendChild(document.createTextNode("+"));
                        a2.className = "songCollection";
                        a2.setAttribute("songId",data.songList[i].songId);

                        actions.appendChild(a1);
                        actions.appendChild(a2);

                        top.appendChild(animateSpan);
                        top.appendChild(cover);
                        top.appendChild(title);
                        top.appendChild(actions);
                        li.appendChild(top);
                        unorderList.appendChild(li);
                        personalSongL.appendChild(unorderList);
                    }
                } else {
                    myFavoriteId = data;
                    console.log("LoveSongList is empty."+myFavoriteId);
                    document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                    let emptySongListHint = document.createElement("p");
                    emptySongListHint.className = "emptyHint";
                    emptySongListHint.innerText = "你还未设置红心歌曲，快去收藏几首吧~";
                    personalSongL.appendChild(emptySongListHint);
                }

                // 我的红心
                mineLike.addEventListener("click", function() {
                    let mineHTML = `
                        <div class="page-heart-songs container" style="width: 600px; padding-bottom: 100px;">
                            <div class="header-cover">
                                <button class="button button-rounded">
                                    <svg class="bofangIcon">
                                        <use xlink:href="#icon-bofang"></use>
                                    </svg>
                                </button> 
                                <p id='mine-like-number' style='display: inline'>0</p>首红心歌曲
                            </div>
                            <p class="mine-introduce">我的红心歌曲
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                            <div id="mine-songCollectionInnerBox"></div>
                        </div>`;

                    $(".section-content").empty();
                    $(".section-content").html(mineHTML);
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
                        type: 'get',
                        async: true,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            document.getElementsByClassName("mine-page-button")[mineLocation].style.color = "rgba(17, 17, 17, .7)";
                            document.getElementsByClassName("mine-page-button")[0].style.color = "red";
                            mineLocation = 0;
                            personalSongL = document.getElementsByClassName("personalSongL")[0];
                            let unorderList = document.createElement("ul");
                            unorderList.className = "songlist-song mineHeart";
                            let j = 1;
                            if(data.songList) {
                                document.getElementById("mine-like-number").innerHTML = data.songList.length;
                                for(let i=0; i<data.songList.length; i++) {
                                    let li = document.createElement("li");
                                    let top = document.createElement("div");
                                    top.className = "top";
                                    let animateSpan = document.createElement("span");

                                    animateSpanWord = document.createTextNode(j++);
                                    animateSpan.appendChild(animateSpanWord);
                                    animateSpan.className ="index";

                                    let cover = document.createElement("div");
                                    cover.classname = "fengmian";
                                    cover.style.height = "36px";
                                    cover.style.width = "36px";
                                    cover.style.backgroundImage = `url(${data.songList[i].pictureHref})`;
                                    cover.style.backgroundSize = "cover";
                                    cover.style.display = "inline-block";

                                    let title = document.createElement("div");
                                    title.className = "titles";
                                    let h3 = document.createElement("h3");
                                    h3.appendChild(document.createTextNode(data.songList[i].songName));
                                    h3.value = `${data.songList[i].songId}`;

                                    let p = document.createElement("p");
                                    let artistSpan = document.createElement("span");
                                    let artistLink = document.createElement("a");
                                    artistLink.appendChild(document.createTextNode(data.songList[i].singer.singerName+"  ·  "));
                                    artistLink.href = `/singer/${data.songList[i].singer.singerId}`;
                                    artistLink.className = "routerLink";
                                    artistSpan.appendChild(artistLink);

                                    p.appendChild(artistSpan);
                                    title.appendChild(h3);
                                    title.appendChild(p);

                                    let actions = document.createElement("div");
                                    actions.className = "actions";

                                    let a1 = document.createElement("a");
                                    a1.style.marginRight = "10px";
                                    a1.innerHTML = iconXin;
                                    a1.setAttribute("songId",data.songList[i].songId);

                                    let a2 = document.createElement("a");
                                    a2.appendChild(document.createTextNode("+"));
                                    a2.className = "songCollection";
                                    a2.setAttribute("songId",data.songList[i].songId);

                                    actions.appendChild(a1);
                                    actions.appendChild(a2);

                                    top.appendChild(animateSpan);
                                    top.appendChild(cover);
                                    top.appendChild(title);
                                    top.appendChild(actions);
                                    li.appendChild(top);
                                    unorderList.appendChild(li);
                                    personalSongL.appendChild(unorderList);
                                }
                            } else {
                                myFavoriteId = data;
                                console.log("LoveSongList is empty."+myFavoriteId);
                                document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                let emptySongListHint = document.createElement("p");
                                emptySongListHint.className = "emptyHint";
                                emptySongListHint.innerText = "你还未设置红心歌曲，快去收藏几首吧~";
                                personalSongL.appendChild(emptySongListHint);
                            }

                            $(".iconXin").click(function(e) {
                                if(e.currentTarget.firstElementChild.style.fill == "rgba(233, 7, 7, 0.7)") {
                                    // 取消收藏单曲并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet',
                                        type: 'post',
                                        async: false,
                                        data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                                        dataType: 'json',
                                    })
                                    e.currentTarget.firstElementChild.style.fill = "black";
                                } else {
                                    // 收藏单曲并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                        type: 'post',
                                        async: false,
                                        data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                                        dataType: 'json',
                                    })
                                    e.currentTarget.firstElementChild.style.fill = "rgba(233, 7, 7, 0.7)";
                                }
                                collectOrNoT();
                            })
                            $(".songCollection").click(function(e) {
                                let songCollectionSongId = e.currentTarget.getAttribute("songId");
                                let mineHTML = `
                                    <div class="page-heart-songs container" style="width: 233px;">
                                        <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                                            <ul class="songCollection-songlist-song"></ul>
                                        </div>
                                        <svg id='user-likes-songCollection-close'>
                                            <use xlink:href="#icon-guanbi"></use>
                                        </svg>
                                    </div>`;
                                let createNewFavourite = `
                                    <li id="link-new-songlist" style="margin-top: 42px">制作新歌单</li>
                                    <p class="mine-introduce">我创建的歌单`;

                                document.getElementById("mine-songCollectionInnerBox").style.display = "block";
                                $("#mine-songCollectionInnerBox").html(mineHTML);
                                $.ajax({
                                    url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                    type: 'get',
                                    async: true,
                                    data: "userId="+userIdNow,
                                    dataType: 'json',
                                    success: (data) => {
                                        let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                                        songCollectionBox.innerHTML = createNewFavourite;
                                        let j = 1;
                                        if(data.length == 0) {
                                            console.log("MyCreateSongListList is empty.");
                                            songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                            let emptyMyCreateSongListListHint = document.createElement("p");
                                            emptyMyCreateSongListListHint.className = "emptyHint";
                                            emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                            emptyMyCreateSongListListHint.style.width = "137px";
                                            songCollectionBox.parentNode.appendChild(emptyMyCreateSongListListHint);
                                        } else {
                                            for(let i=0; i<data.length; i++) {
                                                let thisFavoriteId = data[i].favoriteId;
                                                let li = document.createElement("li");
                                                let top = document.createElement("div");
                                                top.className = "top";
                                                let topId = "top"+j;
                                                top.id = topId;
                                                top.setAttribute("favoriteId",thisFavoriteId);
                                                let animateSpan = document.createElement("span");
                                                animateSpan.className = "index";
                                                animateSpan.innerHTML = j++;

                                                let title = document.createElement("div");
                                                title.className = "titles";
                                                let h3 = document.createElement("h3");
                                                h3.appendChild(document.createTextNode(data[i].favoriteName));

                                                let p = document.createElement("p");
                                                p.className = "isCollections";
                                                let messageSpan = document.createElement("span");
                                                messageSpan.className = "messageSpan";
                                                let isCollectionsSpan = document.createElement("span");
                                                isCollectionsSpan.className = "isCollectionsSpan";
                                                isCollectionsSpan.setAttribute("favoriteId",thisFavoriteId);

                                                p.appendChild(messageSpan);
                                                p.appendChild(isCollectionsSpan);
                                                title.appendChild(h3);
                                                title.appendChild(p);

                                                top.appendChild(animateSpan);
                                                top.appendChild(title);
                                                li.appendChild(top);
                                                songCollectionBox.appendChild(li);
                                                $("#"+topId).click(function(e) {
                                                    let updateSongNumber = true;
                                                    $.ajax({
                                                        url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                        type: 'post',
                                                        async: false,
                                                        data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                        dataType: 'json',
                                                        error: (data) => {
                                                            if(data.responseText == "wrong") {
                                                                updateSongNumber = false;
                                                            } else {
                                                                updateSongNumber = true;
                                                            }
                                                        }
                                                    })
                                                    if(updateSongNumber) {
                                                        let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                        $.ajax({
                                                            url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                            type: 'get',
                                                            async: true,
                                                            data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                            dataType: 'json',
                                                            success: (data) => {
                                                                let newSongNumber = data.songList.length;
                                                                songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                            },
                                                            error: () => {
                                                                songNumberSpan.innerText = "歌曲数：1";
                                                            }
                                                        });
                                                    }
                                                })
                                            }
                                            for(let i=0; i<data.length; i++) {
                                                let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                                                let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                                                $.ajax({
                                                    url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                    type: 'get',
                                                    async: true,
                                                    data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                                    dataType: 'json',
                                                    success: (data) => {
                                                        songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                                    },
                                                    error: () => {
                                                        songNumberSpan.innerText = "歌曲数：0";
                                                    }
                                                });
                                            }
                                        }

                                        $("#link-new-songlist").click(function(e) {
                                            let createNewSongListHtml = `
                                                <div class="overlays">
                                                    <div class="createNewSonglist-block">
                                                        <svg class="createNewSonglist-block-close">
                                                            <use xlink:href="#icon-guanbi"></use>
                                                        </svg>
                                                        <form name="form-box" class="login-box">
                                                            <h1 style="text-align: center;">创建歌单</h1>
                                                            <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                                            <p class="hint" name="hint"></p>
                                                            <p id="create" type="button" name="create-submit">Create</p>
                                                        </form>
                                                    </div>
                                                    <div class="white-background"></div>
                                                </div>`;
                                            $("body").append(createNewSongListHtml);
                                            $(".createNewSonglist-block-close").click(function() {
                                                $(".overlays").remove();
                                            })
                                            $("#create").click(function() {
                                                let newSonglistName = document.getElementById("favoriteName").value;
                                                let hint = document.getElementsByName("hint")[0];
                                                if(newSonglistName != "") {
                                                    //创建歌单后刷新页面

                                                    $.ajax({
                                                        url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                                        type: 'post',
                                                        async: false,
                                                        data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                                        dataType: 'json',
                                                        error: (data) => {
                                                            if(data.responseText == "success") {
                                                                $(".overlays").remove();
                                                                if(document.getElementsByClassName("emptyHint")[0]) {
                                                                    songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                                    document.getElementsByClassName("emptyHint")[0].remove();
                                                                }
                                                                let li = document.createElement("li");
                                                                let top = document.createElement("div");
                                                                top.className = "top";
                                                                let topId = "top" + j;
                                                                top.id = topId;
                                                                let animateSpan = document.createElement("span");
                                                                animateSpan.className = "index";
                                                                animateSpan.innerHTML = j++;

                                                                let title = document.createElement("div");
                                                                title.className = "titles";
                                                                let h3 = document.createElement("h3");
                                                                h3.appendChild(document.createTextNode(newSonglistName));

                                                                let p = document.createElement("p");
                                                                p.className = "isCollections";
                                                                let messageSpan = document.createElement("span");
                                                                let songNumber = 0;
                                                                messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                                                messageSpan.className = "messageSpan";
                                                                let isCollectionsSpan = document.createElement("span");
                                                                isCollectionsSpan.className = "isCollectionsSpan";

                                                                p.appendChild(messageSpan);
                                                                p.appendChild(isCollectionsSpan);
                                                                title.appendChild(h3);
                                                                title.appendChild(p);

                                                                top.appendChild(animateSpan);
                                                                top.appendChild(title);
                                                                li.appendChild(top);
                                                                songCollectionBox.appendChild(li);
                                                                $("#"+topId).click(function(e) {
                                                                    let updateSongNumber = true;
                                                                    $.ajax({
                                                                        url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                                        type: 'post',
                                                                        async: false,
                                                                        data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                        dataType: 'json',
                                                                        error: (data) => {
                                                                            if(data.responseText == "wrong") {
                                                                                updateSongNumber = false;
                                                                            } else {
                                                                                updateSongNumber = true;
                                                                            }
                                                                        }
                                                                    })
                                                                    if(updateSongNumber) {
                                                                        let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                                        $.ajax({
                                                                            url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                                            type: 'get',
                                                                            async: true,
                                                                            data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                            dataType: 'json',
                                                                            success: (data) => {
                                                                                let newSongNumber = data.songList.length;
                                                                                songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                                            },
                                                                            error: () => {
                                                                                songNumberSpan.innerText = "歌曲数：1";
                                                                            }
                                                                        });
                                                                    }
                                                                })
                                                            } else {
                                                                console.log("Error in addCreateFavoriteServlet.");
                                                                alert("创建失败，请重试。");
                                                            }
                                                        },
                                                    });
                                                    $.ajax({
                                                        url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                                        type: 'get',
                                                        async: true,
                                                        data: "userId="+userIdNow,
                                                        dataType: 'json',
                                                        success: (data) => {
                                                            let newSonglistNumber = data.length-1;
                                                            let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                                            let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                                            let newFavoriteId = data[newSonglistNumber].favoriteId;
                                                            newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                                            newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                                        },
                                                        error: () => {
                                                            console.log("Error in get newFavoriteId");
                                                        }
                                                    })
                                                } else {
                                                    hint.style.color='red';
                                                    hint.innerText='歌单名不能为空！';
                                                }
                                            })
                                        })
                                        $("#user-likes-songCollection-close").click(function() {
                                            $("#mine-songCollectionInnerBox").empty();
                                            document.getElementById("mine-songCollectionInnerBox").style.display = "none";
                                        })
                                        $(".page-heart-songs .header-cover button svg.bofangIcon").click(()=>{
                                            for(let i=0;i<songList.length;i++){
                                                songList[i] = -1;
                                            }
                                            for(let i=0;i<data.songList.Length;i++){
                                                songList[i] = data.songList[i].songId;
                                                if(i >= songList.length){
                                                    songList.push(data.songList[i].songId);
                                                }
                                            }
                                            aud.pause();
                                            aud.src = `${data.songList[0].locateHref}`;
                                            console.log(songList);
                                            songNum = 0 ;
                                            //     更改样式阶段
                                            let playBtn = document.getElementById("play");
                                            playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                                            let progressLine = document.getElementsByClassName("progress-line")[0];
                                            progressLine.style.width = "0%";
                                            let fengmianMain = document.getElementById("cover");
                                            fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                                            let songName = document.getElementById("songName");
                                            songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                                            for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                                document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                                            }
                                            lyricsInjection(data.songList[0].lrchref);
                                        })
                                    },
                                    error: () => {
                                        console.log("Error in user-songLists");
                                    }
                                })
                            })
                            $(".mineHeart li .top .titles h3").click((event)=>{
                                let id = event.currentTarget.value;
                                id = parseInt(id);
                                if(songList.indexOf(id)!= -1) {
                                    let index = songList.indexOf(id);
                                    if (songNum == index) {
                                        aud.currentTime = 0;
                                    } else {
                                        console.log("good");
                                        if (songNum < index) {
                                            while (songNum + 1 < index) {
                                                let temp = songList[index];
                                                songList[index] = songList[index - 1];
                                                songList[index - 1] = temp;
                                                index--;
                                            }
                                            songNum++;
                                        } else if (songNum > index) {
                                            while (index < songNum) {
                                                let temp = songList[index];
                                                songList[index] = songList[index + 1];
                                                songList[index + 1] = temp;
                                                index++;
                                            }
                                        }
                                        $.ajax({
                                            url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                            type: 'post',
                                            async: true,
                                            data: 'songId=' + `${songList[songNum]}`,
                                            dataType: 'json',
                                            success: (data) => {
                                                aud.src = `${data.locateHref}`;
                                                lyricsInjection(data.lrcHref);
                                                aud.play();
                                                console.log(songList);
                                                //     更改样式阶段
                                                let playBtn = document.getElementById("play");
                                                playBtn.firstElementChild.setAttribute('xlink:href', '#icon-stop');
                                                let progressLine = document.getElementsByClassName("progress-line")[0];
                                                progressLine.style.width = "0%";
                                                let fengmianMain = document.getElementById("cover");
                                                fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                                let songName = document.getElementById("songName");
                                                songName.firstChild.nodeValue = `${data.songName}`;
                                                for (let i = 0; i < document.getElementsByClassName("singerNameTitle").length; i++) {
                                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                                }
                                                collectOrNoT();
                                            }
                                        })
                                    }
                                }
                                else {
                                    songList.splice(++songNum, 0, id);
                                    $.ajax({
                                        url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                        type: 'post',
                                        async: true,
                                        data:'songId='+songList[songNum],
                                        dataType: 'json',
                                        success:(data)=>{
                                            aud.src = `${data.locateHref}`;
                                            lyricsInjection(data.lrcHref);
                                            aud.play();
                                            //     更改样式阶段
                                            let playBtn = document.getElementById("play");
                                            playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                                            let progressLine = document.getElementsByClassName("progress-line")[0];
                                            progressLine.style.width = "0%";
                                            let fengmianMain = document.getElementById("cover");
                                            fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                            let songName = document.getElementById("songName");
                                            songName.firstChild.nodeValue = `${data.songName}`;
                                            for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                                document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                            }
                                            collectOrNoT();
                                        }
                                    })
                                    console.log(songList);
                                }
                            })
                            $(".page-heart-songs .header-cover button svg.bofangIcon").click(()=>{
                                for(let i=0;i<songList.length;i++){
                                    songList[i] = -1;
                                }
                                console.log(data.songList);
                                for(let i=0;i<data.songList.length;i++){
                                    songList[i] = data.songList[i].songId;
                                    if(i >= songList.length){
                                        songList.push(data.songList[i].songId);
                                    }
                                }
                                songNum = 0 ;
                                aud.src = `${data.songList[0].locateHref}`;
                                lyricsInjection(data.songList[0].lrcHref);
                                aud.play();
                                console.log(songList);
                                //     更改样式阶段
                                let playBtn = document.getElementById("play");
                                playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                                let progressLine = document.getElementsByClassName("progress-line")[0];
                                progressLine.style.width = "0%";
                                let fengmianMain = document.getElementById("cover");
                                fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                                let songName = document.getElementById("songName");
                                songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                                }
                                collectOrNoT();
                            })
                        },
                        error: () => {
                            console.log("Error in mineHandler mineLike");
                        }
                    })
                })

                // 我的收藏
                mineCollections.addEventListener("click", function() {
                    let mineHTML = `
                        <div class="page-heart-songs container" style="width: 600px; padding-bottom: 100px;">
                            <p class="mine-introduce">我收藏的歌单
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                        </div>`;
                    $(".section-content").empty();
                    $(".section-content").html(mineHTML);
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyLoveFavoriteServlet",
                        type: 'get',
                        async: true,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            document.getElementsByClassName("mine-page-button")[mineLocation].style.color = "rgba(17, 17, 17, .7)";
                            document.getElementsByClassName("mine-page-button")[1].style.color = "red";
                            mineLocation = 1;
                            personalSongL = document.getElementsByClassName("personalSongL")[0];
                            let unorderList = document.createElement("ul");
                            unorderList.className = "songlist-song";
                            let j = 1;
                            if(data.length == 0) {
                                console.log("LoveSongListList is empty.");
                                document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                let emptySongListListHint = document.createElement("p");
                                emptySongListListHint.className = "emptyHint";
                                emptySongListListHint.innerText = "你还未设置收藏歌单，快去收藏几个吧~";
                                personalSongL.appendChild(emptySongListListHint);
                            } else {
                                for(let i=0; i<data.length; i++) {
                                    let li = document.createElement("li");
                                    let top = document.createElement("div");
                                    top.className = "top";
                                    let animateSpan = document.createElement("span");
                                    top.setAttribute("favoriteId",data[i].favoriteId);

                                    animateSpanWord = document.createTextNode(j++);
                                    animateSpan.appendChild(animateSpanWord);
                                    animateSpan.className ="index";

                                    let cover = document.createElement("div");
                                    cover.classname = "fengmian";
                                    cover.style.height = "36px";
                                    cover.style.width = "36px";
                                    cover.style.backgroundImage = `url("${data[i].favoritePictureHref}")`;
                                    cover.style.backgroundSize = "cover";
                                    cover.style.display = "inline-block";

                                    let title = document.createElement("div");
                                    title.className = "titles";
                                    let h3 = document.createElement("h3");
                                    let a = document.createElement("a");
                                    a.className = "routerLink";
                                    a.appendChild(document.createTextNode(data[i].favoriteName));
                                    h3.appendChild(a);
                                    a.href = `/gedan/${data[i].favoriteId}`;

                                    let p = document.createElement("p");
                                    p.className = "isCollections";
                                    let messageSpan = document.createElement("span");
                                    // messageSpan.appendChild(document.createTextNode("歌曲数："+data[i].songList.length));
                                    messageSpan.className = "messageSpan";
                                    let isCollectionsSpan = document.createElement("span");
                                    isCollectionsSpan.innerText = "取消收藏";
                                    isCollectionsSpan.className = "isCollectionsSpan";
                                    isCollectionsSpan.setAttribute("favoriteId",data[i].favoriteId);

                                    p.appendChild(messageSpan);
                                    p.appendChild(isCollectionsSpan);
                                    title.appendChild(h3);
                                    title.appendChild(p);

                                    top.appendChild(animateSpan);
                                    top.appendChild(cover);
                                    top.appendChild(title);
                                    li.appendChild(top);
                                    unorderList.appendChild(li);
                                    personalSongL.appendChild(unorderList);
                                }
                                for(let i=0; i<data.length; i++) {
                                    let messageSpan = document.getElementsByClassName("messageSpan")[i];
                                    let thisFavoriteId = document.getElementsByClassName("top")[i].getAttribute("favoriteId");
                                    $.ajax({
                                        url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                        type: 'get',
                                        async: true,
                                        data: "favoriteId="+thisFavoriteId,
                                        dataType: 'json',
                                        success: (data) => {
                                            messageSpan.appendChild(document.createTextNode("歌曲数："+data.songList.length));
                                        },
                                        error: () => {
                                            messageSpan.appendChild(document.createTextNode("歌曲数：0"));
                                        }
                                    })
                                }
                            }
                            $(".personalSongL .songlist-song li .top").click((event)=>{
                                let index = [].indexOf.call(event.currentTarget.parentNode.parentNode.querySelectorAll(event.currentTarget.parentNode.tagName),event.currentTarget.parentNode);
                                console.log(index);
                                $.ajax({
                                    url: "http://localhost:8080/MusicFM//selectFavoriteServlet",
                                    type: 'post',
                                    async: true,
                                    data: "favoriteId="+data[index].favoriteId,
                                    dataType: 'json',
                                    success:(data)=>{
                                        for(let i=0;i<songList.length;i++){
                                            songList[i] = -1;
                                        }
                                        for(let i=0;i<data.songList.length;i++){
                                            songList[i] = data.songList[i].songId;
                                            if(i >= songList.length){
                                                songList.push(data.songList[i].songId);
                                            }
                                        }
                                        aud.pause();
                                        aud.src =   `${data.songList[0].locateHref}`;
                                        lyricsInjection(data.songList[0].lrcHref);
                                        let playBtn = document.getElementById("play");
                                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                                        let progressLine = document.getElementsByClassName("progress-line")[0];
                                        progressLine.style.width = "0%";
                                        let fengmianMain = document.getElementById("cover");
                                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                                        let songName = document.getElementById("songName");
                                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                                        for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                            document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                                        }

                                    }
                                })

                            })
                            $(".isCollectionsSpan").click(function(e) {
                                if(e.currentTarget.innerText == "取消收藏") {
                                    // 删除收藏歌单并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/deleteMyLoveFavoriteServlet',
                                        type: 'post',
                                        async: true,
                                        data: "userId="+userIdNow+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                        dataType: 'json',
                                    })
                                    e.currentTarget.innerText = "收藏";
                                } else {
                                    // 收藏歌单并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/addLoveFavoriteServlet',
                                        type: 'post',
                                        async: true,
                                        data: "userId="+userIdNow+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                        dataType: 'json',
                                    })
                                    e.currentTarget.innerText = "取消收藏";
                                }
                            })
                        },
                        error: () => {
                            console.log("Error in mineHandler mineCollections");
                        }
                    })
                })

                // 我的歌单
                mineSonglists.addEventListener("click", function() {
                    let mineHTML = `
                        <div class="page-heart-songs container" style="width: 600px; padding-bottom: 100px;">
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                                <ul class="songCollection-songlist-song"></ul>
                            </div>
                        </div>`;
                    let createNewFavourite = `
                        <li id="link-new-songlist">制作新歌单</li>
                        <p class="mine-introduce">我创建的歌单`;

                    $(".section-content").empty();
                    $(".section-content").html(mineHTML);
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                        type: 'get',
                        async: true,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            document.getElementsByClassName("mine-page-button")[mineLocation].style.color = "rgba(17, 17, 17, .7)";
                            document.getElementsByClassName("mine-page-button")[2].style.color = "red";
                            mineLocation = 2;
                            personalSongL = document.getElementsByClassName("personalSongL")[0];
                            let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                            songCollectionBox.innerHTML = createNewFavourite;
                            let j = 1;
                            if(data.length == 0) {
                                console.log("MyCreateSongListList is empty.");
                                document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                let emptyMyCreateSongListListHint = document.createElement("p");
                                emptyMyCreateSongListListHint.className = "emptyHint";
                                emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                personalSongL.appendChild(emptyMyCreateSongListListHint);
                            } else {
                                for(let i=0; i<data.length; i++) {
                                    let thisFavoriteId = data[i].favoriteId;
                                    let li = document.createElement("li");
                                    let top = document.createElement("div");
                                    top.className = "top";
                                    let topId = "top"+j;
                                    top.id = topId;
                                    top.setAttribute("favoriteId",thisFavoriteId);
                                    let animateSpan = document.createElement("span");
                                    animateSpan.className = "index";
                                    animateSpan.innerHTML = j++;

                                    let cover = document.createElement("div");
                                    cover.classname = "fengmian";
                                    cover.style.height = "36px";
                                    cover.style.width = "36px";
                                    cover.style.backgroundImage = `url("${data[i].favoritePictureHref}")`;
                                    cover.style.backgroundSize = "cover";
                                    cover.style.display = "inline-block";
                                    cover.style.marginTop = "3px";
                                    cover.style.marginLeft = "3px";

                                    let title = document.createElement("div");
                                    title.className = "titles";
                                    title.style.paddingTop = "0";
                                    let h3 = document.createElement("h3");
                                    let a = document.createElement("a");
                                    a.className = "routerLink";
                                    a.href = `/gedan/${data[i].favoriteId}`;
                                    a.appendChild(document.createTextNode(data[i].favoriteName))
                                    h3.appendChild(a);

                                    let p = document.createElement("p");
                                    p.className = "isCollections";
                                    let messageSpan = document.createElement("span");
                                    messageSpan.className = "messageSpan";
                                    let isCollectionsSpan = document.createElement("span");
                                    isCollectionsSpan.innerText = "删除歌单";
                                    isCollectionsSpan.className = "isCollectionsSpan";
                                    isCollectionsSpan.setAttribute("favoriteId",thisFavoriteId);

                                    p.appendChild(messageSpan);
                                    p.appendChild(isCollectionsSpan);
                                    title.appendChild(h3);
                                    title.appendChild(p);

                                    top.appendChild(animateSpan);
                                    top.appendChild(cover);
                                    top.appendChild(title);
                                    li.appendChild(top);
                                    songCollectionBox.appendChild(li);

                                }
                                for(let i=0; i<data.length; i++) {
                                    let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                                    let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                                    $.ajax({
                                        url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                        type: 'get',
                                        async: true,
                                        data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                        dataType: 'json',
                                        success: (data) => {
                                            songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                        },
                                        error: () => {
                                            songNumberSpan.innerText = "歌曲数：0";
                                        }
                                    });
                                }
                            }
                            $("#link-new-songlist").click(function(e) {
                                let createNewSongListHtml = `
                                    <div class="overlays">
                                        <div class="createNewSonglist-block">
                                            <svg class="createNewSonglist-block-close">
                                                <use xlink:href="#icon-guanbi"></use>
                                            </svg>
                                            <form name="form-box" class="login-box">
                                                <h1 style="text-align: center;">创建歌单</h1>
                                                <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                                <p class="hint" name="hint"></p>
                                                <p id="create" type="button" name="create-submit">Create</p>
                                            </form>
                                        </div>
                                        <div class="white-background"></div>
                                    </div>`;
                                $("body").append(createNewSongListHtml);
                                $(".createNewSonglist-block-close").click(function() {
                                    $(".overlays").remove();
                                })
                                $("#create").click(function() {
                                    let newSonglistName = document.getElementById("favoriteName").value;
                                    let hint = document.getElementsByName("hint")[0];
                                    if(newSonglistName != "") {
                                        //创建歌单后刷新页面
                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                            type: 'post',
                                            async: false,
                                            data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                            dataType: 'json',
                                            error: (data) => {
                                                if(data.responseText == "success") {
                                                    $(".overlays").remove();
                                                    if(document.getElementsByClassName("emptyHint")[0]) {
                                                        document.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                        document.getElementsByClassName("emptyHint")[0].remove();
                                                    }
                                                    let li = document.createElement("li");
                                                    let top = document.createElement("div");
                                                    top.className = "top";
                                                    let topId = "top" + j;
                                                    top.id = topId;
                                                    let animateSpan = document.createElement("span");
                                                    animateSpan.className = "index";
                                                    animateSpan.innerHTML = j++;

                                                    let cover = document.createElement("div");
                                                    cover.classname = "fengmian";
                                                    cover.style.height = "36px";
                                                    cover.style.width = "36px";
                                                    cover.style.backgroundImage = `url("/MusicFM/musicFmSrc/songPic/101.png")`;
                                                    cover.style.backgroundSize = "cover";
                                                    cover.style.display = "inline-block";

                                                    let title = document.createElement("div");
                                                    title.className = "titles";
                                                    title.style.paddingTop = "0";
                                                    let h3 = document.createElement("h3");
                                                    h3.appendChild(document.createTextNode(newSonglistName));

                                                    let p = document.createElement("p");
                                                    p.className = "isCollections";
                                                    let messageSpan = document.createElement("span");
                                                    let songNumber = 0;
                                                    messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                                    messageSpan.className = "messageSpan";
                                                    let isCollectionsSpan = document.createElement("span");
                                                    isCollectionsSpan.innerText = "删除歌单";
                                                    isCollectionsSpan.className = "isCollectionsSpan";

                                                    p.appendChild(messageSpan);
                                                    p.appendChild(isCollectionsSpan);
                                                    title.appendChild(h3);
                                                    title.appendChild(p);

                                                    top.appendChild(animateSpan);
                                                    top.appendChild(cover);
                                                    top.appendChild(title);
                                                    li.appendChild(top);
                                                    songCollectionBox.appendChild(li);

                                                    $(".isCollectionsSpan").click(function(e) {
                                                        $.ajax({
                                                            url: 'http://localhost:8080/MusicFM/deleteMyCreateFavoriteServlet',
                                                            type: 'post',
                                                            async: true,
                                                            data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                            dataType: 'json',
                                                            error: (data) => {
                                                                if(data == 'success') {
                                                                    console.log("删除成功");
                                                                } else {
                                                                    console.log("Error in deleteMyCreateFavoriteServlet");
                                                                }
                                                            }
                                                        })
                                                        e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
                                                        let item = 1;
                                                        for(let i=0; i<document.getElementsByClassName("index").length; i++,item++) {
                                                            let songlistIndex = document.getElementsByClassName("index")[i];
                                                            songlistIndex.innerText = item;
                                                        }
                                                        j = item;
                                                        if(j == 1) {
                                                            document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                                            let emptyMyCreateSongListListHint = document.createElement("p");
                                                            emptyMyCreateSongListListHint.className = "emptyHint";
                                                            emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                                            personalSongL.appendChild(emptyMyCreateSongListListHint);
                                                        }
                                                    })
                                                } else {
                                                    console.log("Error in addCreateFavoriteServlet.");
                                                    alert("创建失败，请重试。");
                                                }
                                            },
                                        });
                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                            type: 'get',
                                            async: true,
                                            data: "userId="+userIdNow,
                                            dataType: 'json',
                                            success: (data) => {
                                                let newSonglistNumber = data.length-1;
                                                let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                                let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                                let newFavoriteId = data[newSonglistNumber].favoriteId;
                                                newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                                newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                            },
                                            error: () => {
                                                console.log("Error in get newFavoriteId");
                                            }
                                        })
                                    } else {
                                        hint.style.color='red';
                                        hint.innerText='歌单名不能为空！';
                                    }
                                })
                            })
                            $(".isCollectionsSpan").click(function(e) {
                                $.ajax({
                                    url: 'http://localhost:8080/MusicFM/deleteMyCreateFavoriteServlet',
                                    type: 'post',
                                    async: true,
                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                    dataType: 'json',
                                    error: (data) => {
                                        if(data == 'success') {
                                            console.log("删除成功");
                                        } else {
                                            console.log("Error in deleteMyCreateFavoriteServlet");
                                        }
                                    }
                                })
                                e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
                                let item = 1;
                                for(let i=0; i<document.getElementsByClassName("index").length; i++,item++) {
                                    let songlistIndex = document.getElementsByClassName("index")[i];
                                    songlistIndex.innerText = item;
                                }
                                j = item;
                                if(j == 1) {
                                    document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                    let emptyMyCreateSongListListHint = document.createElement("p");
                                    emptyMyCreateSongListListHint.className = "emptyHint";
                                    emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                    personalSongL.appendChild(emptyMyCreateSongListListHint);
                                }
                            })
                        },
                        error: () => {
                            console.log("Error in selectMyCreateFavoriteServlet");
                        }
                    })
                })

                // 我喜欢的艺术家
                mineArtists.addEventListener("click", function() {
                    let mineHTML = `
                        <div class="page-heart-songs container" style="width: 600px; padding-bottom: 100px;">
                            <p class="mine-introduce">我喜欢的歌手
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                        </div>`;

                    $(".section-content").empty();
                    $(".section-content").html(mineHTML);
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyLoveSingerServlet",
                        type: 'get',
                        async: true,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            document.getElementsByClassName("mine-page-button")[mineLocation].style.color = "rgba(17, 17, 17, .7)";
                            document.getElementsByClassName("mine-page-button")[3].style.color = "red";
                            mineLocation = 3;
                            personalSongL = document.getElementsByClassName("personalSongL")[0];
                            let unorderList = document.createElement("ul");
                            unorderList.className = "songlist-song";
                            let j = 1;
                            if(data.length == 0) {
                                console.log("LoveSingerList is empty.");
                                document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                let emptySingerListHint = document.createElement("p");
                                emptySingerListHint.className = "emptyHint";
                                emptySingerListHint.innerText = "你还未设置喜欢的歌手，快去收藏几个吧~";
                                personalSongL.appendChild(emptySingerListHint);
                            } else {
                                for(let i=0; i<data.length; i++) {
                                    let li = document.createElement("li");
                                    let top = document.createElement("div");
                                    top.className = "top";
                                    let animateSpan = document.createElement("span");

                                    animateSpanWord = document.createTextNode(j++);
                                    animateSpan.appendChild(animateSpanWord);
                                    animateSpan.className ="index";

                                    let cover = document.createElement("div");
                                    cover.classname = "fengmian";
                                    cover.style.height = "36px";
                                    cover.style.width = "36px";
                                    cover.style.backgroundImage = `url("${data[i].singerPictureHref}")`;
                                    cover.style.backgroundSize = "cover";
                                    cover.style.display = "inline-block";

                                    let title = document.createElement("div");
                                    title.className = "titles";
                                    let h3 = document.createElement("h3");
                                    let a = document.createElement("a");
                                    a.href =   `/singer/${data[i].singerId}`;
                                    a.className = "routerLink";
                                    a.appendChild(document.createTextNode(data[i].singerName))
                                    h3.appendChild(a);


                                    let p = document.createElement("p");
                                    let artistSpan = document.createElement("span");
                                    let artistLink = document.createElement("a");
                                    artistLink.appendChild(document.createTextNode("关注数："+data[i].fansCount));
                                    artistSpan.appendChild(artistLink);

                                    p.appendChild(artistSpan);
                                    title.appendChild(h3);
                                    title.appendChild(p);

                                    let actions = document.createElement("div");
                                    actions.className = "actions";

                                    let a1 = document.createElement("a");
                                    a1.style.marginRight = "10px";
                                    a1.innerHTML = iconXin;
                                    a1.setAttribute("singerId",data[i].singerId);
                                    a1.setAttribute("fansCount",data[i].fansCount);
                                    actions.appendChild(a1);

                                    top.appendChild(animateSpan);
                                    top.appendChild(cover);
                                    top.appendChild(title);
                                    top.appendChild(actions);
                                    li.appendChild(top);
                                    unorderList.appendChild(li);
                                    personalSongL.appendChild(unorderList);
                                }
                            }
                            $(".iconXin").click(function(e) {
                                let FansCountNow = e.currentTarget.parentNode.getAttribute("fansCount");
                                let FansCountNext = FansCountNow-1;
                                let thisFansCountNow = "关注数："+ FansCountNow;
                                let thisFansCountNext = "关注数："+ FansCountNext;
                                if(e.currentTarget.firstElementChild.style.fill == "rgba(233, 7, 7, 0.7)") {
                                    // 取消喜欢的歌手并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/deleteLoveSingerServlet',
                                        type: 'post',
                                        async: false,
                                        data: "userId="+userIdNow+"&singerId="+e.currentTarget.parentNode.getAttribute("singerId"),
                                        dataType: 'json',
                                    })
                                    e.currentTarget.firstElementChild.style.fill = "black";
                                    e.currentTarget.parentNode.parentNode.parentNode.getElementsByTagName("span")[1].firstElementChild.innerText = thisFansCountNext;
                                } else {
                                    // 收藏喜欢的歌手并提交数据至数据库
                                    $.ajax({
                                        url: 'http://localhost:8080/MusicFM/addLoveSingerServlet',
                                        type: 'post',
                                        async: false,
                                        data: "userId="+userIdNow+"&singerId="+e.currentTarget.parentNode.getAttribute("singerId"),
                                        dataType: 'json',
                                    })
                                    e.currentTarget.firstElementChild.style.fill = "rgba(233, 7, 7, 0.7)";
                                    e.currentTarget.parentNode.parentNode.parentNode.getElementsByTagName("span")[1].firstElementChild.innerText = thisFansCountNow;
                                }
                            })
                        },
                        error: () => {
                            console.log("Error in mineHandler mineLike");
                        }
                    })
                })

                $(".iconXin").click(function(e) {
                    if(e.currentTarget.firstElementChild.style.fill == "rgba(233, 7, 7, 0.7)") {
                        // 取消收藏单曲并提交数据至数据库
                        $.ajax({
                            url: 'http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet',
                            type: 'post',
                            async: false,
                            data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                            dataType: 'json',
                        })
                        e.currentTarget.firstElementChild.style.fill = "black";
                    } else {
                        // 收藏单曲并提交数据至数据库
                        $.ajax({
                            url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                            type: 'post',
                            async: false,
                            data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                            dataType: 'json',
                        })
                        e.currentTarget.firstElementChild.style.fill = "rgba(233, 7, 7, 0.7)";
                    }
                    collectOrNoT();
                })
                $(".songCollection").click(function(e) {
                    let songCollectionSongId = e.currentTarget.getAttribute("songId");
                    let mineHTML = `
                        <div class="page-heart-songs container" style="width: 233px;">
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                                <ul class="songCollection-songlist-song"></ul>
                            </div>
                            <svg id='user-likes-songCollection-close'>
                                <use xlink:href="#icon-guanbi"></use>
                            </svg>
                        </div>`;
                    let createNewFavourite = `
                        <li id="link-new-songlist" style="margin-top: 42px">制作新歌单</li>
                        <p class="mine-introduce">我创建的歌单`;

                    document.getElementById("mine-songCollectionInnerBox").style.display = "block";
                    $("#mine-songCollectionInnerBox").html(mineHTML);
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                        type: 'get',
                        async: true,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                            songCollectionBox.innerHTML = createNewFavourite;
                            let j = 1;
                            if(data.length == 0) {
                                console.log("MyCreateSongListList is empty.");
                                songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                let emptyMyCreateSongListListHint = document.createElement("p");
                                emptyMyCreateSongListListHint.className = "emptyHint";
                                emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                emptyMyCreateSongListListHint.style.width = "137px";
                                songCollectionBox.parentNode.appendChild(emptyMyCreateSongListListHint);
                            } else {
                                for(let i=0; i<data.length; i++) {
                                    let thisFavoriteId = data[i].favoriteId;
                                    let li = document.createElement("li");
                                    let top = document.createElement("div");
                                    top.className = "top";
                                    let topId = "top"+j;
                                    top.id = topId;
                                    top.setAttribute("favoriteId",thisFavoriteId);
                                    let animateSpan = document.createElement("span");
                                    animateSpan.className = "index";
                                    animateSpan.innerHTML = j++;

                                    let title = document.createElement("div");
                                    title.className = "titles";
                                    let h3 = document.createElement("h3");
                                    h3.appendChild(document.createTextNode(data[i].favoriteName));

                                    let p = document.createElement("p");
                                    p.className = "isCollections";
                                    let messageSpan = document.createElement("span");
                                    messageSpan.className = "messageSpan";
                                    let isCollectionsSpan = document.createElement("span");
                                    isCollectionsSpan.className = "isCollectionsSpan";
                                    isCollectionsSpan.setAttribute("favoriteId",thisFavoriteId);

                                    p.appendChild(messageSpan);
                                    p.appendChild(isCollectionsSpan);
                                    title.appendChild(h3);
                                    title.appendChild(p);

                                    top.appendChild(animateSpan);
                                    top.appendChild(title);
                                    li.appendChild(top);
                                    songCollectionBox.appendChild(li);
                                    $("#"+topId).click(function(e) {
                                        let updateSongNumber = true;
                                        $.ajax({
                                            url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                            type: 'post',
                                            async: false,
                                            data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                            dataType: 'json',
                                            error: (data) => {
                                                if(data.responseText == "wrong") {
                                                    updateSongNumber = false;
                                                } else {
                                                    updateSongNumber = true;
                                                }
                                            }
                                        })
                                        if(updateSongNumber) {
                                            let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                            $.ajax({
                                                url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                type: 'get',
                                                async: true,
                                                data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                dataType: 'json',
                                                success: (data) => {
                                                    let newSongNumber = data.songList.length;
                                                    songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                },
                                                error: () => {
                                                    songNumberSpan.innerText = "歌曲数：1";
                                                }
                                            });
                                        }
                                    })
                                }
                                for(let i=0; i<data.length; i++) {
                                    let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                                    let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                                    $.ajax({
                                        url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                        type: 'get',
                                        async: true,
                                        data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                        dataType: 'json',
                                        success: (data) => {
                                            songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                        },
                                        error: () => {
                                            songNumberSpan.innerText = "歌曲数：0";
                                        }
                                    });
                                }
                            }

                            $("#link-new-songlist").click(function(e) {
                                let createNewSongListHtml = `
                                    <div class="overlays">
                                        <div class="createNewSonglist-block">
                                            <svg class="createNewSonglist-block-close">
                                                <use xlink:href="#icon-guanbi"></use>
                                            </svg>
                                            <form name="form-box" class="login-box">
                                                <h1 style="text-align: center;">创建歌单</h1>
                                                <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                                <p class="hint" name="hint"></p>
                                                <p id="create" type="button" name="create-submit">Create</p>
                                            </form>
                                        </div>
                                        <div class="white-background"></div>
                                    </div>`;
                                $("body").append(createNewSongListHtml);
                                $(".createNewSonglist-block-close").click(function() {
                                    $(".overlays").remove();
                                })
                                $("#create").click(function() {
                                    let newSonglistName = document.getElementById("favoriteName").value;
                                    let hint = document.getElementsByName("hint")[0];
                                    if(newSonglistName != "") {
                                        //创建歌单后刷新页面

                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                            type: 'post',
                                            async: false,
                                            data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                            dataType: 'json',
                                            error: (data) => {
                                                if(data.responseText == "success") {
                                                    $(".overlays").remove();
                                                    if(document.getElementsByClassName("emptyHint")[0]) {
                                                        songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                        document.getElementsByClassName("emptyHint")[0].remove();
                                                    }
                                                    let li = document.createElement("li");
                                                    let top = document.createElement("div");
                                                    top.className = "top";
                                                    let topId = "top" + j;
                                                    top.id = topId;
                                                    let animateSpan = document.createElement("span");
                                                    animateSpan.className = "index";
                                                    animateSpan.innerHTML = j++;

                                                    let title = document.createElement("div");
                                                    title.className = "titles";
                                                    let h3 = document.createElement("h3");
                                                    h3.appendChild(document.createTextNode(newSonglistName));

                                                    let p = document.createElement("p");
                                                    p.className = "isCollections";
                                                    let messageSpan = document.createElement("span");
                                                    let songNumber = 0;
                                                    messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                                    messageSpan.className = "messageSpan";
                                                    let isCollectionsSpan = document.createElement("span");
                                                    isCollectionsSpan.className = "isCollectionsSpan";

                                                    p.appendChild(messageSpan);
                                                    p.appendChild(isCollectionsSpan);
                                                    title.appendChild(h3);
                                                    title.appendChild(p);

                                                    top.appendChild(animateSpan);
                                                    top.appendChild(title);
                                                    li.appendChild(top);
                                                    songCollectionBox.appendChild(li);
                                                    $("#"+topId).click(function(e) {
                                                        let updateSongNumber = true;
                                                        $.ajax({
                                                            url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                            type: 'post',
                                                            async: false,
                                                            data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                            dataType: 'json',
                                                            error: (data) => {
                                                                if(data.responseText == "wrong") {
                                                                    updateSongNumber = false;
                                                                } else {
                                                                    updateSongNumber = true;
                                                                }
                                                            }
                                                        })
                                                        if(updateSongNumber) {
                                                            let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                            $.ajax({
                                                                url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                                type: 'get',
                                                                async: true,
                                                                data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                dataType: 'json',
                                                                success: (data) => {
                                                                    let newSongNumber = data.songList.length;
                                                                    songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                                },
                                                                error: () => {
                                                                    songNumberSpan.innerText = "歌曲数：1";
                                                                }
                                                            });
                                                        }
                                                    })
                                                } else {
                                                    console.log("Error in addCreateFavoriteServlet.");
                                                    alert("创建失败，请重试。");
                                                }
                                            },
                                        });

                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                            type: 'get',
                                            async: true,
                                            data: "userId="+userIdNow,
                                            dataType: 'json',
                                            success: (data) => {
                                                let newSonglistNumber = data.length-1;
                                                let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                                let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                                let newFavoriteId = data[newSonglistNumber].favoriteId;
                                                newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                                newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                            },
                                            error: () => {
                                                console.log("Error in get newFavoriteId");
                                            }
                                        })
                                    } else {
                                        hint.style.color='red';
                                        hint.innerText='歌单名不能为空！';
                                    }
                                })
                            })
                            $("#user-likes-songCollection-close").click(function() {
                                $("#mine-songCollectionInnerBox").empty();
                                document.getElementById("mine-songCollectionInnerBox").style.display = "none";
                            })
                        },
                        error: () => {
                            console.log("Error in user-songLists");
                        }
                    })
                })
                $(".mineHeart li .top .titles h3").click((event)=>{
                    let id = event.currentTarget.value;
                    id = parseInt(id);
                    if(songList.indexOf(id)!= -1) {
                        let index = songList.indexOf(id);
                        if (songNum == index) {
                            aud.currentTime = 0;
                        } else {
                            console.log("good");
                            if (songNum < index) {
                                while (songNum + 1 < index) {
                                    let temp = songList[index];
                                    songList[index] = songList[index - 1];
                                    songList[index - 1] = temp;
                                    index--;
                                }
                                songNum++;
                            } else if (songNum > index) {
                                while (index < songNum) {
                                    let temp = songList[index];
                                    songList[index] = songList[index + 1];
                                    songList[index + 1] = temp;
                                    index++;
                                }
                            }
                            $.ajax({
                                url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                type: 'post',
                                async: true,
                                data: 'songId=' + `${songList[songNum]}`,
                                dataType: 'json',
                                success: (data) => {
                                    aud.src = `${data.locateHref}`;
                                    lyricsInjection(data.lrcHref);
                                    aud.play();
                                    console.log(songList);
                                    //     更改样式阶段
                                    let playBtn = document.getElementById("play");
                                    playBtn.firstElementChild.setAttribute('xlink:href', '#icon-stop');
                                    let progressLine = document.getElementsByClassName("progress-line")[0];
                                    progressLine.style.width = "0%";
                                    let fengmianMain = document.getElementById("cover");
                                    fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                    let songName = document.getElementById("songName");
                                    songName.firstChild.nodeValue = `${data.songName}`;
                                    for (let i = 0; i < document.getElementsByClassName("singerNameTitle").length; i++) {
                                        document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                    }
                                    collectOrNoT();
                                }
                            })
                        }
                    }
                    else {
                        songList.splice(++songNum, 0, id);
                        $.ajax({
                            url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                            type: 'post',
                            async: true,
                            data:'songId='+songList[songNum],
                            dataType: 'json',
                            success:(data)=>{
                                aud.src = `${data.locateHref}`;
                                lyricsInjection(data.lrcHref);
                                aud.play();
                                //     更改样式阶段
                                let playBtn = document.getElementById("play");
                                playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                                let progressLine = document.getElementsByClassName("progress-line")[0];
                                progressLine.style.width = "0%";
                                let fengmianMain = document.getElementById("cover");
                                fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                let songName = document.getElementById("songName");
                                songName.firstChild.nodeValue = `${data.songName}`;
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                collectOrNoT();
                            }
                        })
                        console.log(songList);
                    }
                })
                $(".page-heart-songs .header-cover button ").click(()=>{
                    console.log("hello!");
                    console.log(songList);
                    for(let i=0;i<songList.length;i++){
                        songList[i] = -1;
                    }
                    for(let i=0;i<data.songList.length;i++){
                        songList[i] = data.songList[i].songId;
                        if(i >= songList.length){
                            songList.push(data.songList[i].songId);
                        }
                    }
                    console.log(songList);
                    aud.src = `${data.songList[0].locateHref}`;
                    lyricsInjection(data.songList[0].lrcHref);
                    aud.play();
                    //     更改样式阶段
                    let playBtn = document.getElementById("play");
                    playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                    let progressLine = document.getElementsByClassName("progress-line")[0];
                    progressLine.style.width = "0%";
                    let fengmianMain = document.getElementById("cover");
                    fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                    let songName = document.getElementById("songName");
                    songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                    for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                        document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                    }
                    collectOrNoT();
                })
            },
            error: () => {
                console.log("Error in mineHandler");
            }
        })
    } else {
        const LoginHint = `
            <div style="margin: 52px 420px; width: 420px">登录后才能访问，请<a class="loginHint" href="javascript:;">登录</a>。
            </div>`;
        $(".content").empty();
        $(".content").html(LoginHint);
        $(".loginHint").click(function() {
            let loginHtml = `
                <div class="overlays">
                    <div class="sign-in-block">
                        <svg class="guanbi">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                        <form name="form-box" class="login-box">
                            <h1>Login</h1>
                            <input id="username" type="text" name="loginUsername" placeholder="Username">
                            <p class="hint" name="hint"></p>
                            <input id="password" type="password" name="password" placeholder="Password">
                            <p class="hint" name="hint"></p>
                            <p id="submit" type="button" name="login-submit">Login</p>
                            <p class="message">Not registered? <a name="turn-register" style="cursor:pointer;">Create an account</a></p>
                        </form>
                    </div>
                    <div class="white-background"></div>
                </div>`;
            $("body").append(loginHtml);
            checkUsernameIsExists();
            checkPasswdIsCorrects();
            guanbi();
            myTurn();
            initUser();
            LoginHintClickSubmitBtn();
        })
    }
};

const searchHandler = () =>{
    const searchHtml = `
        <div class="search-result-page" style="padding-top: 0px;min-height: 775px;">
            <div class="hd">
                <div class="search-input-wrapper">
                    <svg class="sousuo">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <input id="searchingValue" type="text" class="searchBlock" placeholder="艺术家 / 单曲 / 风格 / 场景">
                </div>
                <a class="searching">搜索</a>
            </div>
            <div id="searchingResult">
                <p class="searchingResultHind">搜索结果
                <div class="searchingResult-header">
                    <ul class="searchingResult-header-container">
                        <li id="searchingResult-all-button"><a class = "searchingResult-button">全部</a></li>
                        <li id="searchingResult-songList-button"><a class = "searchingResult-button">歌曲</a></li>
                        <li id="searchingResult-favoriteList-button"><a class = "searchingResult-button">歌单</a></li>
                        <li id="searchingResult-singerList-button"><a class = "searchingResult-button">艺术家</a></li>
                    </ul>
                </div>
                <div class="searchingResult-content">
                    <div id="searchingResult-all" class="page-heart-songs searchingResult-container" style="width: 600px; padding-bottom: 100px;">
                        <p class="searchingResult-introduce"> 全部
                        <div id="searchingResult-all-content" class="searchingResult1-container" style="width: 100%; border-collapse: collapse;"></div>
                    </div>
                    <div id="searchingResult-songList" class="page-heart-songs searchingResult-container" style="width: 600px; padding-bottom: 100px;">
                        <p class="searchingResult-introduce"> 歌曲
                        <div id="searchingResult-songList-content" class="container" style="width: 100%; border-collapse: collapse;"></div>
                    </div>
                    <div id="searchingResult-favoriteList" class="page-heart-songs searchingResult-container" style="width: 600px; padding-bottom: 100px;">
                        <p class="searchingResult-introduce"> 歌单
                        <div id="searchingResult-favoriteList-content" class="container" style="width: 100%; border-collapse: collapse;"></div>
                    </div>
                    <div id="searchingResult-singerList" class="page-heart-songs searchingResult-container" style="width: 600px; padding-bottom: 100px;">
                        <p class="searchingResult-introduce"> 艺术家
                        <div id="searchingResult-singerList-content" class="container" style="width: 100%; border-collapse: collapse;"></div>
                    </div>
                </div>
            </div>
        </div>`;

    $(".content").empty();
    $(".content").html(searchHtml);
    // 搜索页面
    $(".searching").click(function() {
        let searchingValue = document.getElementById("searchingValue").value;
        $.ajax({
            url: "http://localhost:8080/MusicFM/selectSearchServlet",
            type: 'get',
            async: true,
            data: "vagueName="+searchingValue,
            dataType: 'json',
            success: (data) => {
                let searchingResult = document.getElementById("searchingResult");
                searchingResult.style.display = "block";
                let searchingResultAllButton = document.getElementById("searchingResult-all-button");
                let searchingResultSongListButton = document.getElementById("searchingResult-songList-button");
                let searchingResultFavoriteListButton = document.getElementById("searchingResult-favoriteList-button");
                let searchingResultSingerListButton = document.getElementById("searchingResult-singerList-button");
                let searchingResultAllBox = document.getElementById("searchingResult-all");
                let searchingResultSongListBox = document.getElementById("searchingResult-songList");
                let searchingResultFavoriteListBox = document.getElementById("searchingResult-favoriteList");
                let searchingResultSingerListBox = document.getElementById("searchingResult-singerList");

                document.getElementsByClassName("searchingResult-button")[3].style.color = "rgba(13, 13, 13, .77)";
                document.getElementsByClassName("searchingResult-button")[2].style.color = "rgba(13, 13, 13, .77)";
                document.getElementsByClassName("searchingResult-button")[1].style.color = "rgba(13, 13, 13, .77)";
                document.getElementsByClassName("searchingResult-button")[0].style.color = "rgba(233, 7, 7, .7)";

                searchingResultAllBox.style.display = "block";
                $("#searchingResult-all-content").empty();
                $("#searchingResult-songList-content").empty();
                $("#searchingResult-favoriteList-content").empty();
                $("#searchingResult-singerList-content").empty();
                searchingResultSongListBox.style.display = "none";
                searchingResultFavoriteListBox.style.display = "none";
                searchingResultSingerListBox.style.display = "none";

                let nowSearchingResultPage = 0;
                searchingResultAllButton.addEventListener("click", function() {
                    document.getElementsByClassName("searchingResult-button")[nowSearchingResultPage].style.color = "rgba(13, 13, 13, .77)";
                    document.getElementsByClassName("searchingResult-button")[0].style.color = "rgba(233, 7, 7, .7)";
                    searchingResultAllBox.style.display = "block";
                    searchingResultSongListBox.style.display = "none";
                    searchingResultFavoriteListBox.style.display = "none";
                    searchingResultSingerListBox.style.display = "none";
                    nowSearchingResultPage = 0;
                })
                searchingResultSongListButton.addEventListener("click", function() {
                    document.getElementsByClassName("searchingResult-button")[nowSearchingResultPage].style.color = "rgba(13, 13, 13, .77)";
                    document.getElementsByClassName("searchingResult-button")[1].style.color = "rgba(233, 7, 7, .7)";
                    searchingResultAllBox.style.display = "none";
                    searchingResultSongListBox.style.display = "block";
                    searchingResultFavoriteListBox.style.display = "none";
                    searchingResultSingerListBox.style.display = "none";
                    nowSearchingResultPage = 1;
                })
                searchingResultFavoriteListButton.addEventListener("click", function() {
                    document.getElementsByClassName("searchingResult-button")[nowSearchingResultPage].style.color = "rgba(13, 13, 13, .77)";
                    document.getElementsByClassName("searchingResult-button")[2].style.color = "rgba(233, 7, 7, .7)";
                    searchingResultAllBox.style.display = "none";
                    searchingResultSongListBox.style.display = "none";
                    searchingResultFavoriteListBox.style.display = "block";
                    searchingResultSingerListBox.style.display = "none";
                    nowSearchingResultPage = 2;
                })
                searchingResultSingerListButton.addEventListener("click", function() {
                    document.getElementsByClassName("searchingResult-button")[nowSearchingResultPage].style.color = "rgba(13, 13, 13, .77)";
                    document.getElementsByClassName("searchingResult-button")[3].style.color = "rgba(233, 7, 7, .7)";
                    searchingResultAllBox.style.display = "none";
                    searchingResultSongListBox.style.display = "none";
                    searchingResultFavoriteListBox.style.display = "none";
                    searchingResultSingerListBox.style.display = "block";
                    nowSearchingResultPage = 3;
                })

                // all
                $(".emptyHint").remove();
                document.getElementsByClassName("searchingResult-header")[0].style.display = "block";
                if(data[0].length == 0 && data[1].length == 0 && data[2].length == 0) {
                    console.log("searchingResult is empty.");
                    document.getElementsByClassName("searchingResult-header")[0].style.display = "none";
                    searchingResultAllBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "none";
                    let emptySearchingResultHint = document.createElement("p");
                    emptySearchingResultHint.className = "emptyHint";
                    emptySearchingResultHint.innerText = "不存在相关条目，请准确搜索。";
                    searchingResultAllBox.appendChild(emptySearchingResultHint);
                } else {
                    searchingResultAllBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "block";
                    let searchingResultAll = document.getElementById("searchingResult-all-content");
                    let unorderAllList = document.createElement("ul");
                    unorderAllList.className = "songlist-song";
                    let j = 1;
                    for(let i=0; i<data[0].length; i++) {

                        let li = document.createElement("li");
                        let top = document.createElement("div");
                        top.className = "top";

                        let animateSpan = document.createElement("span");
                        animateSpanWord = document.createTextNode(j++);
                        animateSpan.appendChild(animateSpanWord);
                        animateSpan.className ="index";

                        let cover = document.createElement("div");
                        cover.classname = "fengmian";
                        cover.style.height = "36px";
                        cover.style.width = "36px";
                        cover.style.backgroundImage = `url("${data[0][i].pictureHref}")`;
                        cover.style.backgroundSize = "cover";
                        cover.style.display = "inline-block";

                        let typeHind = document.createElement("p");
                        typeHind.className = "typeHind";
                        typeHind.innerText = "歌曲";

                        let title = document.createElement("div");
                        title.className = "titles";
                        let h3 = document.createElement("h3");
                        let a = document.createElement("a");
                        a.className = "searchSong";
                        a.value = data[0][i].songId;
                        a.appendChild(document.createTextNode(data[0][i].songName));
                        h3.appendChild(a);

                        let p = document.createElement("p");
                        let artistSpan = document.createElement("span");
                        let artistLink = document.createElement("a");
                        artistLink.appendChild(document.createTextNode(data[0][i].singer.singerName));
                        artistSpan.appendChild(artistLink);
                        artistLink.href = `/singer/${data[0][i].singer.singerId}`;
                        artistLink.className = "routerLink";

                        p.appendChild(artistSpan);
                        title.appendChild(h3);
                        title.appendChild(p);

                        top.appendChild(animateSpan);
                        top.appendChild(cover);
                        top.appendChild(typeHind)
                        top.appendChild(title);
                        li.appendChild(top);
                        unorderAllList.appendChild(li);
                    }
                    for(let i=0; i<data[1].length; i++) {
                        let li = document.createElement("li");
                        let top = document.createElement("div");
                        top.className = "top";
                        let animateSpan = document.createElement("span");

                        animateSpanWord = document.createTextNode(j++);
                        animateSpan.appendChild(animateSpanWord);
                        animateSpan.className ="index";

                        let cover = document.createElement("div");
                        cover.classname = "fengmian";
                        cover.style.height = "36px";
                        cover.style.width = "36px";
                        cover.style.backgroundImage = `url("${data[1][i].favoritePictureHref}")`;
                        cover.style.backgroundSize = "cover";
                        cover.style.display = "inline-block";

                        let typeHind = document.createElement("p");
                        typeHind.className = "typeHind";
                        typeHind.innerText = "歌单";

                        let title = document.createElement("div");
                        title.className = "titles";
                        let h3 = document.createElement("h3");
                        let a = document.createElement("a");
                        a.href = `/gedan/${data[1][i].favoriteId}`;
                        a.className = "routerLink";
                        a.appendChild(document.createTextNode(data[1][i].favoriteName));
                        h3.appendChild(a);

                        let p = document.createElement("p");
                        p.className = "searchingResultFavoriteList-message";
                        let messageSpan = document.createElement("span");
                        messageSpan.appendChild(document.createTextNode("歌曲数："+data[1][i].songList.length));
                        messageSpan.className = "searchingResultFavoriteList-messageSpan";
                        p.appendChild(messageSpan);
                        title.appendChild(h3);
                        title.appendChild(p);

                        top.appendChild(animateSpan);
                        top.appendChild(cover);
                        top.appendChild(typeHind);
                        top.appendChild(title);
                        li.appendChild(top);
                        unorderAllList.appendChild(li);
                    }
                    for(let i=0; i<data[2].length; i++) {
                        let li = document.createElement("li");
                        let top = document.createElement("div");
                        top.className = "top";
                        let animateSpan = document.createElement("span");

                        animateSpanWord = document.createTextNode(j++);
                        animateSpan.appendChild(animateSpanWord);
                        animateSpan.className ="index";

                        let cover = document.createElement("div");
                        cover.classname = "fengmian";
                        cover.style.height = "36px";
                        cover.style.width = "36px";
                        cover.style.backgroundImage = `url("${data[2][i].singerPictureHref}")`;
                        cover.style.backgroundSize = "cover";
                        cover.style.display = "inline-block";

                        let typeHind = document.createElement("p");
                        typeHind.className = "typeHind";
                        typeHind.innerText = "艺术家";

                        let title = document.createElement("div");
                        title.className = "titles";
                        let h3 = document.createElement("h3");
                        let a = document.createElement("a");
                        a.className = "routerLink";
                        a.href = `/singer/${data[2][i].singerId}`;
                        a.appendChild(document.createTextNode(data[2][i].singerName));
                        h3.appendChild(a);


                        let p = document.createElement("p");
                        let artistSpan = document.createElement("span");
                        let artistLink = document.createElement("a");
                        artistLink.appendChild(document.createTextNode("歌曲数："+data[2][i].songList.length));
                        artistSpan.appendChild(artistLink);

                        p.appendChild(artistSpan);
                        title.appendChild(h3);
                        title.appendChild(p);

                        top.appendChild(animateSpan);
                        top.appendChild(cover);
                        top.appendChild(typeHind);
                        top.appendChild(title);
                        li.appendChild(top);
                        unorderAllList.appendChild(li);
                    }
                    searchingResultAll.appendChild(unorderAllList);

                    // songList
                    if(data[0].length == 0) {
                        console.log("searchingResult_songList is empty.");
                        searchingResultSongListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "none";
                        let emptySearchingResultHint = document.createElement("p");
                        emptySearchingResultHint.className = "emptyHint";
                        emptySearchingResultHint.innerText = "不存在相关条目，请准确搜索。";
                        searchingResultSongListBox.appendChild(emptySearchingResultHint);
                    } else {
                        searchingResultSongListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "block";
                        let searchingResultSongList = document.getElementById("searchingResult-songList-content");
                        let unorderSongList = document.createElement("ul");
                        unorderSongList.className = "songlist-song";
                        for(let i=0; i<data[0].length; i++) {

                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";

                            let animateSpan = document.createElement("span");
                            animateSpanWord = document.createTextNode(i+1);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.classname = "fengmian";
                            cover.style.height = "36px";
                            cover.style.width = "36px";
                            cover.style.backgroundImage = `url("${data[0][i].pictureHref}")`;
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            let a = document.createElement("a");
                            a.className = "searchSong";
                            a.value = data[0][i].songId;
                            a.appendChild(document.createTextNode(data[0][i].songName));
                            h3.appendChild(a);

                            let p = document.createElement("p");
                            let artistSpan = document.createElement("span");
                            let artistLink = document.createElement("a");
                            artistLink.appendChild(document.createTextNode(data[0][i].singer.singerName));
                            artistLink.className = "routerLink";
                            artistSpan.appendChild(artistLink);

                            p.appendChild(artistSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            li.appendChild(top);
                            unorderSongList.appendChild(li);
                        }
                        searchingResultSongList.appendChild(unorderSongList);
                    }

                    // favoriteList
                    if(data[1].length == 0) {
                        console.log("searchingResult_favoriteList is empty.");
                        searchingResultFavoriteListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "none";
                        let emptySearchingResultHint = document.createElement("p");
                        emptySearchingResultHint.className = "emptyHint";
                        emptySearchingResultHint.innerText = "不存在相关条目，请准确搜索。";
                        searchingResultFavoriteListBox.appendChild(emptySearchingResultHint);
                    } else {
                        searchingResultFavoriteListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "block";
                        let searchingResultFavoriteList = document.getElementById("searchingResult-favoriteList-content");
                        let unorderFavoriteList = document.createElement("ul");
                        unorderFavoriteList.className = "songlist-song";
                        for(let i=0; i<data[1].length; i++) {
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            let animateSpan = document.createElement("span");

                            animateSpanWord = document.createTextNode(i+1);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.classname = "fengmian";
                            cover.style.height = "36px";
                            cover.style.width = "36px";
                            cover.style.backgroundImage = `url("${data[1][i].favoritePictureHref}")`;
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            let a = document.createElement("a");
                            a.href = `/gedan/${data[1][i].favoriteId}`;
                            a.className = "routerLink";
                            a.appendChild(document.createTextNode(data[1][i].favoriteName));
                            h3.appendChild(a);

                            let p = document.createElement("p");
                            p.className = "searchingResultFavoriteList-message";
                            let messageSpan = document.createElement("span");
                            messageSpan.appendChild(document.createTextNode("歌曲数："+data[1][i].songList.length));
                            messageSpan.className = "searchingResultFavoriteList-messageSpan";
                            p.appendChild(messageSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            li.appendChild(top);
                            unorderFavoriteList.appendChild(li);
                        }
                        searchingResultFavoriteList.appendChild(unorderFavoriteList);
                    }

                    // singerList
                    if(data[2].length == 0) {
                        console.log("searchingResult_singerList is empty.");
                        searchingResultSingerListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "none";
                        let emptySearchingResultHint = document.createElement("p");
                        emptySearchingResultHint.className = "emptyHint";
                        emptySearchingResultHint.innerText = "不存在相关条目，请准确搜索。";
                        searchingResultSingerListBox.appendChild(emptySearchingResultHint);
                    } else {
                        searchingResultSingerListBox.getElementsByClassName("searchingResult-introduce")[0].style.display = "block";
                        let searchingResultSingerList = document.getElementById("searchingResult-singerList-content");
                        let unorderSingerList = document.createElement("ul");
                        unorderSingerList.className = "songlist-song";
                        for(let i=0; i<data[2].length; i++) {
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            let animateSpan = document.createElement("span");

                            animateSpanWord = document.createTextNode(i+1);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.classname = "fengmian";
                            cover.style.height = "36px";
                            cover.style.width = "36px";
                            cover.style.backgroundImage =`url("${data[2][i].singerPictureHref}")` ;
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            let a = document.createElement("a");
                            a.className = "routerLink";
                            a.href = `/singer/${data[2][i].singerId}`;
                            a.appendChild(document.createTextNode(data[2][i].singerName));
                            h3.appendChild(a);


                            let p = document.createElement("p");
                            let artistSpan = document.createElement("span");
                            let artistLink = document.createElement("a");
                            artistLink.appendChild(document.createTextNode("歌曲数："+data[2][i].songList.length));
                            artistSpan.appendChild(artistLink);

                            p.appendChild(artistSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            li.appendChild(top);
                            unorderSingerList.appendChild(li);
                        }
                        searchingResultSingerList.appendChild(unorderSingerList);
                    }
                    $(" ul li .top .titles h3 a.searchSong").click((event)=>{
                        let id = event.currentTarget.value;
                        id = parseInt(id);
                        if(songList.indexOf(id)!= -1) {
                            let index = songList.indexOf(id);
                            if (songNum == index) {
                                aud.currentTime = 0;
                            } else {
                                console.log("good");
                                if (songNum < index) {
                                    while (songNum + 1 < index) {
                                        let temp = songList[index];
                                        songList[index] = songList[index - 1];
                                        songList[index - 1] = temp;
                                        index--;
                                    }
                                    songNum++;
                                } else if (songNum > index) {
                                    while (index < songNum) {
                                        let temp = songList[index];
                                        songList[index] = songList[index + 1];
                                        songList[index + 1] = temp;
                                        index++;
                                    }
                                }
                                $.ajax({
                                    url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                    type: 'post',
                                    async: true,
                                    data: 'songId=' + `${songList[songNum]}`,
                                    dataType: 'json',
                                    success: (data) => {
                                        aud.src = `${data.locateHref}`;
                                        lyricsInjection(data.lrcHref);
                                        aud.play();
                                        console.log(songList);
                                        //     更改样式阶段
                                        let playBtn = document.getElementById("play");
                                        playBtn.firstElementChild.setAttribute('xlink:href', '#icon-stop');
                                        let progressLine = document.getElementsByClassName("progress-line")[0];
                                        progressLine.style.width = "0%";
                                        let fengmianMain = document.getElementById("cover");
                                        fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                        let songName = document.getElementById("songName");
                                        songName.firstChild.nodeValue = `${data.songName}`;
                                        for (let i = 0; i < document.getElementsByClassName("singerNameTitle").length; i++) {
                                            document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                        }
                                        collectOrNoT();
                                    }
                                })
                            }
                        }
                        else {
                            songList.splice(++songNum, 0, id);
                            $.ajax({
                                url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                type: 'post',
                                async: true,
                                data:'songId='+songList[songNum],
                                dataType: 'json',
                                success:(data)=>{
                                    aud.src = `${data.locateHref}`;
                                    lyricsInjection(data.lrcHref);
                                    aud.play();
                                    //     更改样式阶段
                                    let playBtn = document.getElementById("play");
                                    playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                                    let progressLine = document.getElementsByClassName("progress-line")[0];
                                    progressLine.style.width = "0%";
                                    let fengmianMain = document.getElementById("cover");
                                    fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                    let songName = document.getElementById("songName");
                                    songName.firstChild.nodeValue = `${data.songName}`;
                                    for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                        document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                    }
                                    collectOrNoT();
                                }
                            })
                            console.log(songList);
                        }
                    })
                }
            },
            error: () => {
                console.log("Error in searchingResult");
            }
        });

    })
};

const showArtist = (prarm) => {
    const template = `
    <div class="popup">
        <div class="ps-outer">
            <div class="ps-content">
                <div class="popup-wrapper">
                    <div class="artist-page">
                            <div class="banner">
                                <div class="avatar"></div>
                            </div>
                            <div class="inner">
                               <h1 class="artist-name"></h1>
                               <p class="styles"></p>
                               <p></p>
                               <div class="gedan-actions">
                                   <button  class="buttonlike" style="color: rgb(143,142,148); border-color: rgb(244, 244, 244);height: 24px;line-height: 22px;padding: 0px|10px;"></button>
                               </div>
                               <div class="related-block">
                                    <a class="playable-link" style="color: rgb(69, 161, 86);">
                                       <svg>
                                           <use xlink:href="#icon-bofang"></use>
                                       </svg>
                                       <span style="color: rgb(69, 161, 86);">按序精选歌曲</span>
                                    </a>
                                    <ul class="artist-songlist">
                                    </ul>
                                </div>
                                <div class="related-block">
                                    <a class="playable-link playable-button xi-button" style="color: rgb(69, 161, 86);">
                                        <svg><use xlink:href="#icon-bofang"></use></svg>
                                        <span style="color: rgb(69, 161, 86);"></span>
                                    </a>
                                    <p>该兆赫可能包含以下相似艺术家的歌曲</p>
                                    <ul class="similar-artists">
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                <a class="link-prev">&lt; 返回</a>
                <a class="link-close"><svg><use xlink:href="#icon-guanbi"></use></svg></a>
            </div>
        </div>
    `;
    $('.content').empty();
    $('.content').html(template);
    console.log(prarm);
    let thisSingerId = prarm.singerId;
    $.ajax({
        url: 'http://localhost:8080/MusicFM/selectSingerServlet',
        type: 'post',
        async: true,
        data:'singerId='+prarm.singerId,
        dataType: 'json',
        success: (data)=>{
            console.log(data[0]);
            let avatar = document.getElementsByClassName("avatar")[0];
            avatar.style.backgroundImage = `url('${data[0].singerPictureHref}')`;

            let buttonlike = document.getElementsByClassName("buttonlike")[0];
            buttonlike.appendChild(document.createTextNode("喜欢"+data[0].fansCount));
            let fansCountNow = data[0].fansCount;
            if(document.getElementById("user-menu").style.display == "block") {
                let userIdNow = document.getElementById("user-menu").getAttribute("userid");
                // 遍历我喜欢的艺术家
                $.ajax({
                    url: "http://localhost:8080/MusicFM/selectMyLoveSingerServlet",
                    type: 'get',
                    async: true,
                    data: "userId=" + userIdNow,
                    dataType: 'json',
                    success: (data) => {
                        for(let i=0; i<data.length; i++) {
                            if(data[i].singerId == thisSingerId)
                                buttonlike.style.backgroundColor = "rgba(233, 52, 52, 0.52)";
                        }
                    }
                })
            }

            let playableButton = document.getElementsByClassName("playable-button")[0];
            playableButton.appendChild(document.createTextNode(data[0].singerName+"系"));

            let h1Word = document.createTextNode(data[0].singerName);
            let h1 = document.getElementsByClassName("artist-name")[0];
            h1.appendChild(h1Word);

            let songul =  document.getElementsByClassName("artist-songlist")[0];
            for(let j=0;j<data[0].songList.length;j++) {
                let li = document.createElement("li");
                li.className = "current";
                li.value = data[0].songList[j].songId;
                let fengmian = document.createElement("div");
                fengmian.className ="artistSongCover";
                fengmian.style.backgroundImage = `url('${data[0].songList[j].pictureHref}')`;

                let numSpan = document.createElement("span");
                numSpan.appendChild(document.createTextNode((j+1)+"."));

                let liWord = document.createTextNode(" "+data[0].songList[j].songName);
                li.appendChild(fengmian);
                li.appendChild(numSpan);
                li.appendChild(liWord);
                songul.appendChild(li);
            }
            let singerUl = document.getElementsByClassName("similar-artists")[0];
            for(let i=0;i<data[1].length;i++) {
                let singerLi = document.createElement("li");
                singerLi.className = "similar-artist";
                let singerFengmian = document.createElement("div");
                singerFengmian.className = "singerFengmian";
                singerFengmian.style.backgroundImage = `url('${data[1][i].singerPictureHref}')`;
                let h3 = document.createElement("h3");
                let routerLink = document.createElement("a");
                routerLink.appendChild(document.createTextNode(data[1][i].singerName));
                routerLink.href = /singer/ + data[1][i].singerId;
                console.log(data[1][i].singerId);
                routerLink.className = "routerLink";
                h3.appendChild(routerLink)
                singerLi.appendChild(singerFengmian);
                singerLi.appendChild(h3);
                singerUl.appendChild(singerLi);
            }
            $(".buttonlike").click(function (e) {
                if(document.getElementById("user-menu").style.display == "block") {
                    let userIdNow = document.getElementById("user-menu").getAttribute("userid");
                    if(e.currentTarget.style.backgroundColor == "rgba(233, 52, 52, 0.52)") {
                        // 取消喜欢的歌手并提交数据至数据库
                        $.ajax({
                            url: 'http://localhost:8080/MusicFM/deleteLoveSingerServlet',
                            type: 'post',
                            async: true,
                            data: "userId="+userIdNow+"&singerId="+thisSingerId,
                            dataType: 'json',
                            error: (data) => {
                                if(data.responseText == "success") {
                                    e.currentTarget.style.backgroundColor = "rgba(23, 23, 23, .1)";
                                    let fansCountNowSpan = "喜欢"+ --fansCountNow;
                                    e.currentTarget.innerText = fansCountNowSpan;
                                } else {
                                    alert("取消喜欢的歌手失败，请重试。");
                                }
                            }
                        })
                    } else {
                        // 收藏喜欢的歌手并提交数据至数据库
                        $.ajax({
                            url: 'http://localhost:8080/MusicFM/addLoveSingerServlet',
                            type: 'post',
                            async: true,
                            data: "userId="+userIdNow+"&singerId="+thisSingerId,
                            dataType: 'json',
                            error: (data) => {
                                if(data.responseText == "success") {
                                    e.currentTarget.style.backgroundColor = "rgba(233, 52, 52, 0.52)";
                                    let fansCountNowSpan = "喜欢"+ ++fansCountNow;
                                    e.currentTarget.innerText = fansCountNowSpan;
                                } else {
                                    alert("收藏喜欢的歌手失败，请重试。");
                                }
                            }
                        })
                    }
                } else {
                    alert("登录后才能设置喜欢歌手，请登录。");
                }
            })
            $(".playable-link") .click(function (event) {
               console.log(data[0]);
               aud.pause();
               let dataLength = data[0].songList.length;
               for(let i=0;i<songList.length;i++){
                   songList[i] = -1;
               }
               for(let i=0;i<dataLength;i++){
                   songList[i] = data[0].songList[i].songId;
                   if(i >= songList.length){
                       songList.push(data[0].songList[i].songId);
                   }
               }
               songNum = 0;
               aud.pause();
               aud.src = `${data[0].songList[0].locateHref}`;
               lyricsInjection(data[0].songList[0].lrcHref);
               //     更改样式阶段
               let playBtn = document.getElementById("play");
               playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
               let progressLine = document.getElementsByClassName("progress-line")[0];
               progressLine.style.width = "0%";
               let fengmianMain = document.getElementById("cover");
               fengmianMain.style.backgroundImage = `url(${data[0].songList[0].pictureHref})`;
               let songName = document.getElementById("songName");
               songName.firstChild.nodeValue = `${data[0].songList[0].songName}`;
               for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                   document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data[0].singerName}`;
               }
               aud.play();
               collectOrNoT();
            })
            $(".current").click(function (event) {
               let id = event.currentTarget.value ;
               id = parseInt(id);
               if(songList.indexOf(id)!= -1) {
                   let index = songList.indexOf(id);
                   if (songNum == index) {
                       aud.currentTime = 0;
                   } else {
                       console.log("good");
                       if (songNum < index) {
                           while (songNum + 1 < index) {
                               let temp = songList[index];
                               songList[index] = songList[index - 1];
                               songList[index - 1] = temp;
                               index--;
                           }
                           songNum++;
                       } else if (songNum > index) {
                           while (index < songNum) {
                               let temp = songList[index];
                               songList[index] = songList[index + 1];
                               songList[index + 1] = temp;
                               index++;
                           }
                       }
                       $.ajax({
                           url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                           type: 'post',
                           async: true,
                           data: 'songId=' + `${songList[songNum]}`,
                           dataType: 'json',
                           success: (data) => {
                               aud.src = `${data.locateHref}`;
                               lyricsInjection(data.lrcHref);
                               aud.play();
                               console.log(songList);
                               //     更改样式阶段
                               let playBtn = document.getElementById("play");
                               playBtn.firstElementChild.setAttribute('xlink:href', '#icon-stop');
                               let progressLine = document.getElementsByClassName("progress-line")[0];
                               progressLine.style.width = "0%";
                               let fengmianMain = document.getElementById("cover");
                               fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                               let songName = document.getElementById("songName");
                               songName.firstChild.nodeValue = `${data.songName}`;
                               for (let i = 0; i < document.getElementsByClassName("singerNameTitle").length; i++) {
                                   document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                               }
                               collectOrNoT();
                           }
                       })
                   }
               }
               else {
                   songList.splice(++songNum, 0, id);
                   $.ajax({
                       url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                       type: 'post',
                       async: true,
                       data:'songId='+songList[songNum],
                       dataType: 'json',
                       success:(data)=>{
                           aud.src = `${data.locateHref}`;
                           lyricsInjection(data.lrcHref);
                           aud.play();
                           //     更改样式阶段
                           let playBtn = document.getElementById("play");
                           playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                           let progressLine = document.getElementsByClassName("progress-line")[0];
                           progressLine.style.width = "0%";
                           let fengmianMain = document.getElementById("cover");
                           fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                           let songName = document.getElementById("songName");
                           songName.firstChild.nodeValue = `${data.songName}`;
                           for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                               document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                           }
                           collectOrNoT();
                       }
                   })
                   console.log(songList);
               }
            })
            $(".link-prev").click(function (event) {
               window.history.back(-1);
            })
            $(".link-close").click(function (event) {
                window.history.back(-1);
            })
        },
        error: () =>{
            console.log("gg");
        }
    })
};

const showGedan = (data) =>{
    console.log(data);
    $.ajax({
        url:"http://localhost:8080/MusicFM/selectFavoriteServlet",
        type: 'post',
        async: true,
        data: 'favoriteId='+data.gedanId,
        dataType: 'json',
        success:(data)=>{
            const template =`
        <div class="popup">
            <div class="ps-outer">
                <div class="ps-content">
                    <div class="popup-wrapper container">
                       <div style="padding: 40px 30px 35px 50px;">
                             <div class="programme-page container">
                                 <div class="header">
                                     <div class="programme-cover gedanfengmian">
                                         <a class="button-play"><svg class="bofangIcon"><use xlink:href="#icon-bofang"></use></svg></a>
                                     </div>
                                     <div class="programme-content">
                                          <h1></h1>
                                          <p class="meta">
                                            <span>
                                              
                                            </span>
                                          </p>
                                          <p class="intro"></p>
                                          <div class="buttons">
                                              <span><button class="button-secondary"><svg class="collectIcon"><use xlink:href="#icon-shoucang"></use></svg></button><span>1</span></span>
                                          </div>
                                     </div>
                                 </div>
                             </div>
                             <div class="section-switcher-songlist">
                                 <div class="section-header">
                                     <ul class="containter">
                                         <li><a class="songListNum"></a></li>
                                         <li><a class="tableListNum"></a></li>
                                     </ul>
                                 </div>
                                 <div class="section-content">
                                      <div class="container" style="width: 100%; border-collapse: collapse;">
                                        <ul class="songlist showGedanUl">
                                        </ul>
                                     </div>
                                 </div>
                             </div>
                       </div>
                       <div id="mine-songCollectionInnerBox" style="display: none; position: absolute;top: 13%;left: 113%;border: 3px rgba(23,23,23,.3) solid; height: 420px;overflow: auto;"></div>
                    </div>
                    <a class="link-close"><svg><use xlink:href="#icon-guanbi"></use></svg></a>
                </div>
            </div>
        </div>`;
            $(".content").empty();
            $(".content").html(template);
            if(data == null) {
                console.log("null");
                alert("歌单为空，请添加歌曲。");
            } else {
                isclick = false;
                let firstclick = true;
                let programmeCover = document.getElementsByClassName("gedanfengmian")[0];
                let tempId = data.favoriteId;
                programmeCover.style.backgroundImage = `url(${data.favoritePictureHref})`;
                document.getElementsByClassName("programme-content")[0].firstElementChild.appendChild(document.createTextNode(`${data.favoriteName}`));
                console.log(document.getElementsByClassName("programme-content")[0].firstElementChild);
                document.getElementsByClassName("meta")[0].firstElementChild.appendChild(document.createTextNode(`${data.songList.length}首歌曲`));
                document.getElementsByClassName("button-secondary")[0].nextSibling.firstChild.nodeValue = `${data.collectCount}`;
                document.getElementsByClassName("songListNum")[0].appendChild(document.createTextNode(`歌曲列表(${data.songList.length})`));
                document.getElementsByClassName("tableListNum")[0].appendChild(document.createTextNode(`该用户的其他歌单`));
                let showGedanUl = document.getElementsByClassName("showGedanUl")[0];
                let thisSongListNum = data.songList.length;
                for(let i=0;i<data.songList.length;i++) {
                    let li = document.createElement("li");
                    li.className = "songlist-song songInGedan";
                    li.value = data.songList[i].songId;
                    console.log(li.value+"op");
                    let top = document.createElement("div");
                    top.className = "top";

                    let indexSpan = document.createElement("span");
                    indexSpan.className = "index";

                    let  boxingtuBlock = document.createElement("div");
                    boxingtuBlock.className = "boxingtuBlock";
                    for(let j=0;j<4;j++) {
                        let boxingtu = document.createElement("div");
                        boxingtu.className = "boxingtu" + (j+1);
                        boxingtu.style.backgroundColor =  "rgb(92, 188, 125)";
                        boxingtuBlock.appendChild(boxingtu);
                    }
                    indexSpan.appendChild(boxingtuBlock);
                    indexSpan.appendChild(document.createTextNode((i+1)));

                    let songfengmian = document.createElement("div");
                    songfengmian.style.backgroundImage = `url("${data.songList[i].pictureHref}")`;
                    songfengmian.className = "songfengmian";

                    let titlesDiv = document.createElement("div");
                    titlesDiv.className = "titles";
                    let h3 = document.createElement("h3");
                    h3.className = "songTitle";
                    h3.appendChild(document.createTextNode(`${data.songList[i].songName}`));

                    let songP = document.createElement("p");
                    let singerSpan = document.createElement("span");
                    singerSpan.appendChild(document.createTextNode(`${data.songList[i].singer.singerName}`));
                    songP.appendChild(singerSpan);
                    titlesDiv.appendChild(h3);
                    titlesDiv.appendChild(songP);

                    let actions = document.createElement("div");
                    actions.className = "actions";
                    let deleteSongA = document.createElement("a");
                    let svg0 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg0.setAttribute('class',"collectSongDelete");
                    let use0 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                    use0.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-shanchu");
                    svg0.appendChild(use0);
                    svg0.style.display = "none";
                    deleteSongA.appendChild(svg0);
                    let collectSongA = document.createElement("a");
                    let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg1.setAttribute('class',"collectSongLove");
                    let use1 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                    use1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-xin");
                    svg1.appendChild(use1);
                    collectSongA.appendChild(svg1);
                    let addSongTableA = document.createElement("a");
                    let svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg2.setAttribute('class',"collectSongCollect");
                    let use2 = document.createElementNS('http://www.w3.org/2000/svg', 'use')
                    use2.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-tianjia");
                    svg2.appendChild(use2);
                    addSongTableA.appendChild(svg2);
                    actions.appendChild(deleteSongA);
                    actions.appendChild(collectSongA);
                    actions.appendChild(addSongTableA);
                    top.appendChild(indexSpan);
                    top.appendChild(songfengmian);
                    top.appendChild(titlesDiv);
                    top.appendChild(actions);
                    li.appendChild(top);
                    showGedanUl.appendChild(li);
                }

                if(document.getElementById("user-menu").style.display == "block") {
                    let userIdNow = document.getElementById("user-menu").getAttribute("userId");
                    let favoriteIdNow = data.favoriteId;
                    let authorIdNow = data.authorId;
                    let myFavoriteId;

                    let collectCountNow = data.collectCount;
                    let isCollect = false;
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyLoveFavoriteServlet",
                        type: 'get',
                        async: false,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            for(let i=0; i<data.length; i++) {
                                if(favoriteIdNow == data[i].favoriteId)
                                    isCollect = true;
                            }
                        }
                    })
                    if(userIdNow != authorIdNow) {
                        if(isCollect == true) {
                            document.getElementsByClassName("collectIcon")[0].style.fill = "rgba(52, 233, 52, 0.7)";
                        } else {
                            document.getElementsByClassName("collectIcon")[0].style.fill = "rgba(23, 23, 23, 0.7)";
                        }
                        $(".collectIcon").click(function (e) {
                            if(e.currentTarget.style.fill == "rgba(52, 233, 52, 0.7)") {
                                // 删除收藏歌单并提交数据至数据库
                                $.ajax({
                                    url: 'http://localhost:8080/MusicFM/deleteMyLoveFavoriteServlet',
                                    type: 'post',
                                    async: true,
                                    data: "userId="+userIdNow+"&favoriteId="+favoriteIdNow,
                                    dataType: 'json',
                                })
                                e.currentTarget.style.fill = "rgba(23, 23, 23, .7)";
                                collectCountNow--;
                                document.getElementsByClassName("button-secondary")[0].nextSibling.firstChild.nodeValue = collectCountNow;
                            } else {
                                // 收藏歌单并提交数据至数据库
                                $.ajax({
                                    url: 'http://localhost:8080/MusicFM/addLoveFavoriteServlet',
                                    type: 'post',
                                    async: true,
                                    data: "userId="+userIdNow+"&favoriteId="+favoriteIdNow,
                                    dataType: 'json',
                                })
                                e.currentTarget.style.fill = "rgba(52, 233, 52, 0.7)";
                                collectCountNow++;
                                document.getElementsByClassName("button-secondary")[0].nextSibling.firstChild.nodeValue = collectCountNow;
                            }
                        })
                    } else {
                        for (let i=0; i<thisSongListNum; i++) {
                            document.getElementsByClassName("collectSongDelete")[i].style.display = "inline-block";
                        }
                        $(".collectSongDelete").click(function (e) {
                            let songIdNow = e.currentTarget.parentNode.parentNode.parentNode.parentNode.value;
                            $.ajax({
                                url: "http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet",
                                type: 'get',
                                async: false,
                                data: "songId="+songIdNow+"&favoriteId="+favoriteIdNow,
                                dataType: 'json',
                                error: (data) => {
                                    if(data.responseText == "success") {
                                        e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
                                        collectOrNoT();
                                        let favoriteNow = new Object();
                                        favoriteNow.gedanId = favoriteIdNow;
                                        showGedan(favoriteNow);
                                    } else {
                                        alert("删除失败，请重试。")
                                    }
                                }
                            })
                        })
                        $(".collectIcon").click(function() {
                            alert("自己创建的歌单不能取消收藏哦。");
                        })
                    }

                    $.ajax({
                        url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
                        type: 'get',
                        async: false,
                        data: "userId="+userIdNow,
                        dataType: 'json',
                        success: (data) => {
                            console.log("app.js 3596 selectMyLoveSongServlet");
                            if(data != null) {
                                myFavoriteId = data.favoriteId;
                                for(let n=0; n<thisSongListNum; n++) {
                                    let songInSongList = document.getElementsByClassName("songInGedan")[n];
                                    for(let i=0; i<data.songList.length; i++) {
                                        if(songInSongList.value == data.songList[i].songId) {
                                            document.getElementsByClassName("collectSongLove")[n].style.fill = "rgba(233, 52, 52, 0.7)";
                                        }
                                    }
                                }
                            } else {
                                console.log("emptySonglist");
                            }
                        }
                    })
                    $(".collectSongLove").click(function(e) {
                        console.log(".collectSongLove");
                        let songIdNow = e.currentTarget.parentNode.parentNode.parentNode.parentNode.value;
                        if(e.currentTarget.style.fill == "rgba(233, 52, 52, 0.7)") {
                            // 取消收藏单曲并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet',
                                type: 'post',
                                async: false,
                                data: "songId=" + songIdNow + "&favoriteId=" + myFavoriteId,
                                dataType: 'json',
                            })
                            e.currentTarget.style.fill = "rgba(23, 23, 23, 0.3)";
                        } else {
                            // 收藏单曲并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                type: 'post',
                                async: false,
                                data: "songId=" + songIdNow + "&favoriteId=" + myFavoriteId,
                                dataType: 'json',
                            })
                            e.currentTarget.style.fill = "rgba(233, 52, 52, 0.7)";
                        }
                        collectOrNoT();
                    })

                    $(".collectSongCollect").click(function (e) {
                        console.log(".collectSongCollect")
                        document.getElementById("mine-songCollectionInnerBox").style.display = "block";
                        let songCollectionSongId = e.currentTarget.parentNode.parentNode.parentNode.parentNode.value;
                        let collectSongCollectHTML = `
                        <div class="page-heart-songs container" style="width: 233px;">
                            <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                                <ul class="songCollection-songlist-song"></ul>
                            </div>
                            <svg id='user-likes-songCollection-close'>
                                <use xlink:href="#icon-guanbi"></use>
                            </svg>
                        </div>`;
                        let createNewFavourite = `
                        <li id="link-new-songlist" style="margin-top: 42px">制作新歌单</li>
                        <p class="mine-introduce">我创建的歌单`;

                        $("#mine-songCollectionInnerBox").html(collectSongCollectHTML);
                        $.ajax({
                            url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                            type: 'get',
                            async: true,
                            data: "userId="+userIdNow,
                            dataType: 'json',
                            success: (data) => {
                                let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                                songCollectionBox.innerHTML = createNewFavourite;
                                let j = 1;
                                if(data.length == 0) {
                                    console.log("MyCreateSongListList is empty.");
                                    songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                    let emptyMyCreateSongListListHint = document.createElement("p");
                                    emptyMyCreateSongListListHint.className = "emptyHint";
                                    emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                    emptyMyCreateSongListListHint.style.width = "137px";
                                    songCollectionBox.parentNode.appendChild(emptyMyCreateSongListListHint);
                                } else {
                                    for(let i=0; i<data.length; i++) {
                                        let thisFavoriteId = data[i].favoriteId;
                                        let li = document.createElement("li");
                                        let top = document.createElement("div");
                                        top.className = "top";
                                        let topId = "top"+j;
                                        top.id = topId;
                                        top.setAttribute("favoriteId",thisFavoriteId);
                                        let animateSpan = document.createElement("span");
                                        animateSpan.className = "index";
                                        animateSpan.innerHTML = j++;

                                        let title = document.createElement("div");
                                        title.className = "titles";
                                        let h3 = document.createElement("h3");
                                        h3.appendChild(document.createTextNode(data[i].favoriteName));

                                        let p = document.createElement("p");
                                        p.className = "isCollections";
                                        let messageSpan = document.createElement("span");
                                        messageSpan.className = "messageSpan";
                                        let isCollectionsSpan = document.createElement("span");
                                        isCollectionsSpan.className = "isCollectionsSpan";
                                        isCollectionsSpan.setAttribute("favoriteId",thisFavoriteId);

                                        p.appendChild(messageSpan);
                                        p.appendChild(isCollectionsSpan);
                                        title.appendChild(h3);
                                        title.appendChild(p);

                                        top.appendChild(animateSpan);
                                        top.appendChild(title);
                                        li.appendChild(top);
                                        songCollectionBox.appendChild(li);
                                        $("#"+topId).click(function(e) {
                                            let updateSongNumber = true;
                                            $.ajax({
                                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                type: 'post',
                                                async: false,
                                                data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                dataType: 'json',
                                                error: (data) => {
                                                    if(data.responseText == "wrong") {
                                                        updateSongNumber = false;
                                                    } else {
                                                        updateSongNumber = true;
                                                    }
                                                }
                                            })
                                            if(updateSongNumber) {
                                                let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                $.ajax({
                                                    url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                    type: 'get',
                                                    async: true,
                                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                    dataType: 'json',
                                                    success: (data) => {
                                                        let newSongNumber = data.songList.length;
                                                        songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                    },
                                                    error: () => {
                                                        songNumberSpan.innerText = "歌曲数：1";
                                                    }
                                                });
                                            }
                                        })
                                    }
                                    for(let i=0; i<data.length; i++) {
                                        let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                                        let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                            type: 'get',
                                            async: true,
                                            data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                            dataType: 'json',
                                            success: (data) => {
                                                songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                            },
                                            error: () => {
                                                songNumberSpan.innerText = "歌曲数：0";
                                            }
                                        });
                                    }
                                }

                                $("#link-new-songlist").click(function(e) {
                                    let createNewSongListHtml = `
                                    <div class="overlays">
                                        <div class="createNewSonglist-block">
                                            <svg class="createNewSonglist-block-close">
                                                <use xlink:href="#icon-guanbi"></use>
                                            </svg>
                                            <form name="form-box" class="login-box">
                                                <h1 style="text-align: center;">创建歌单</h1>
                                                <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                                <p class="hint" name="hint"></p>
                                                <p id="create" type="button" name="create-submit">Create</p>
                                            </form>
                                        </div>
                                        <div class="white-background"></div>
                                    </div>`;
                                    $("body").append(createNewSongListHtml);
                                    $(".createNewSonglist-block-close").click(function() {
                                        $(".overlays").remove();
                                    })
                                    $("#create").click(function() {
                                        let newSonglistName = document.getElementById("favoriteName").value;
                                        let hint = document.getElementsByName("hint")[0];
                                        if(newSonglistName != "") {
                                            //创建歌单后刷新页面

                                            $.ajax({
                                                url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                                type: 'post',
                                                async: false,
                                                data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                                dataType: 'json',
                                                error: (data) => {
                                                    if(data.responseText == "success") {
                                                        $(".overlays").remove();
                                                        if(document.getElementsByClassName("emptyHint")[0]) {
                                                            songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                            document.getElementsByClassName("emptyHint")[0].remove();
                                                        }
                                                        let li = document.createElement("li");
                                                        let top = document.createElement("div");
                                                        top.className = "top";
                                                        let topId = "top" + j;
                                                        top.id = topId;
                                                        let animateSpan = document.createElement("span");
                                                        animateSpan.className = "index";
                                                        animateSpan.innerHTML = j++;

                                                        let title = document.createElement("div");
                                                        title.className = "titles";
                                                        let h3 = document.createElement("h3");
                                                        h3.appendChild(document.createTextNode(newSonglistName));

                                                        let p = document.createElement("p");
                                                        p.className = "isCollections";
                                                        let messageSpan = document.createElement("span");
                                                        let songNumber = 0;
                                                        messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                                        messageSpan.className = "messageSpan";
                                                        let isCollectionsSpan = document.createElement("span");
                                                        isCollectionsSpan.className = "isCollectionsSpan";

                                                        p.appendChild(messageSpan);
                                                        p.appendChild(isCollectionsSpan);
                                                        title.appendChild(h3);
                                                        title.appendChild(p);

                                                        top.appendChild(animateSpan);
                                                        top.appendChild(title);
                                                        li.appendChild(top);
                                                        songCollectionBox.appendChild(li);
                                                        $("#"+topId).click(function(e) {
                                                            let updateSongNumber = true;
                                                            $.ajax({
                                                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                                type: 'post',
                                                                async: false,
                                                                data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                dataType: 'json',
                                                                error: (data) => {
                                                                    if(data.responseText == "wrong") {
                                                                        updateSongNumber = false;
                                                                    } else {
                                                                        updateSongNumber = true;
                                                                    }
                                                                }
                                                            })
                                                            if(updateSongNumber) {
                                                                let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                                $.ajax({
                                                                    url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                                    type: 'get',
                                                                    async: true,
                                                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                    dataType: 'json',
                                                                    success: (data) => {
                                                                        let newSongNumber = data.songList.length;
                                                                        songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                                    },
                                                                    error: () => {
                                                                        songNumberSpan.innerText = "歌曲数：1";
                                                                    }
                                                                });
                                                            }
                                                        })
                                                    } else {
                                                        console.log("Error in addCreateFavoriteServlet.");
                                                        alert("创建失败，请重试。");
                                                    }
                                                },
                                            });

                                            $.ajax({
                                                url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                                type: 'get',
                                                async: true,
                                                data: "userId="+userIdNow,
                                                dataType: 'json',
                                                success: (data) => {
                                                    let newSonglistNumber = data.length-1;
                                                    let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                                    let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                                    let newFavoriteId = data[newSonglistNumber].favoriteId;
                                                    newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                                    newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                                },
                                                error: () => {
                                                    console.log("Error in get newFavoriteId");
                                                }
                                            })
                                        } else {
                                            hint.style.color='red';
                                            hint.innerText='歌单名不能为空！';
                                        }
                                    })
                                })
                                $("#user-likes-songCollection-close").click(function() {
                                    $("#mine-songCollectionInnerBox").empty();
                                    document.getElementById("mine-songCollectionInnerBox").style.display = "none";
                                })
                            },
                            error: () => {
                                console.log("Error in user-songLists");
                            }
                        })
                    })
                } else {
                    document.getElementsByClassName("collectIcon")[0].style.fill = "rgba(23, 23, 23, .7)";
                    $(".collectIcon").click(function() {
                        alert("登录后才能收藏歌单，请登录。");
                    })
                    $(".collectSongLove").click(function() {
                        alert("登录后才能设置红心歌曲，请登录。");
                    })
                    $(".collectSongCollect").click(function() {
                        alert("登录后才能收藏歌曲，请登录。");
                    })
                }

                $(".section-content .top .titles .songTitle").click(function(event){
                    if(isclick) {
                        for(let j=0;j<document.getElementsByClassName("songInGedan").length;j++){
                            if(document.getElementsByClassName("songInGedan")[j].firstElementChild.firstElementChild.firstElementChild.getAttribute("class") == "boxingtuBlockShow boxingtuBlock") {
                                document.getElementsByClassName("songInGedan")[j].firstElementChild.firstElementChild.firstElementChild.className = "boxingtuBlock";
                                document.getElementsByClassName("songTitle")[j].style.color = "#000";
                                document.getElementsByClassName("songTitle")[j].style.fontWeight ="400";
                            }
                        }
                    }
                    event.currentTarget.parentNode.parentNode.firstElementChild.firstElementChild.className ="boxingtuBlockShow boxingtuBlock";
                    event.currentTarget.style.color ="rgba(52, 233, 52, 0.7)";
                    event.currentTarget.fontWeight ="600";
                    document.getElementsByClassName("programme-cover")[0].firstElementChild.firstElementChild.firstElementChild.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href','#icon-stop');
                    console.log(document.getElementsByClassName("programme-cover")[0].firstElementChild.firstElementChild);
                    isclick = true;
                    let id = event.currentTarget.parentNode.parentNode.parentNode.value ;
                    id = parseInt(id);
                    if(songList.indexOf(id)!= -1) {
                        let index = songList.indexOf(id);
                        if (songNum == index) {
                            aud.currentTime = 0;
                        } else {
                            console.log("good");
                            if (songNum < index) {
                                while (songNum + 1 < index) {
                                    let temp = songList[index];
                                    songList[index] = songList[index - 1];
                                    songList[index - 1] = temp;
                                    index--;
                                }
                                songNum++;
                            } else if (songNum > index) {
                                while (index < songNum) {
                                    let temp = songList[index];
                                    songList[index] = songList[index + 1];
                                    songList[index + 1] = temp;
                                    index++;
                                }
                            }
                            $.ajax({
                                url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                                type: 'post',
                                async: true,
                                data: 'songId=' + `${songList[songNum]}`,
                                dataType: 'json',
                                success: (data) => {
                                    aud.src = `${data.locateHref}`;
                                    lyricsInjection(data.lrcHref);
                                    aud.play();
                                    console.log(songList);
                                    //     更改样式阶段
                                    let playBtn = document.getElementById("play");
                                    playBtn.firstElementChild.setAttribute('xlink:href', '#icon-stop');
                                    let progressLine = document.getElementsByClassName("progress-line")[0];
                                    progressLine.style.width = "0%";
                                    let fengmianMain = document.getElementById("cover");
                                    fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                    let songName = document.getElementById("songName");
                                    songName.firstChild.nodeValue = `${data.songName}`;
                                    for (let i = 0; i < document.getElementsByClassName("singerNameTitle").length; i++) {
                                        document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                    }
                                    collectOrNoT();
                                }
                            })
                        }
                    }
                    else {
                        songList.splice(++songNum, 0, id);
                        $.ajax({
                            url: ' http://localhost:8080/MusicFM/selectNextSongServlet',
                            type: 'post',
                            async: true,
                            data:'songId='+songList[songNum],
                            dataType: 'json',
                            success:(data)=>{
                                aud.src = `${data.locateHref}`;
                                lyricsInjection(data.lrcHref);
                                aud.play();
                                //     更改样式阶段
                                let playBtn = document.getElementById("play");
                                playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
                                let progressLine = document.getElementsByClassName("progress-line")[0];
                                progressLine.style.width = "0%";
                                let fengmianMain = document.getElementById("cover");
                                fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
                                let songName = document.getElementById("songName");
                                songName.firstChild.nodeValue = `${data.songName}`;
                                for(let i = 0;i<document.getElementsByClassName("singerNameTitle").length;i++){
                                    document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue = `${data.singer.singerName}`;
                                }
                                collectOrNoT();
                            }
                        })
                        console.log(songList);
                    }
                })
                $(".button-play").click(function (event) {
                    console.log(data);
                    if(firstclick){
                        let dataLength = data.songList.length;
                        for(let i=0;i<songList.length;i++){
                            songList[i] = -1;
                        };
                        songNum=0;
                        console.log(dataLength)
                        for(let i=0;i<dataLength;i++){
                            songList[i] = data.songList[i].songId;
                            if(i >= songList.length){
                                songList.push(data.songList[i].songId);
                            }
                        }

                        console.log(songList);
                        //     更改样式阶段
                        let playBtn = document.getElementById("play");
                        playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang');
                        let progressLine = document.getElementsByClassName("progress-line")[0];
                        progressLine.style.width = "0%";

                        let fengmianMain = document.getElementById("cover");
                        fengmianMain.style.backgroundImage = `url(${data.songList[0].pictureHref})`;
                        let songName = document.getElementById("songName");
                        // songName.appendChild(document.createTextNode(`${data.songList[0].songName}`));
                        songName.firstChild.nodeValue = `${data.songList[0].songName}`;
                        for(let j=0;j<document.getElementsByClassName("singerNameTitle").length;j++){
                            document.getElementsByClassName("singerNameTitle")[j].firstChild.nodeValue = `${data.songList[0].singer.singerName}`;
                        }
                        aud.src = `${data.songList[0].locateHref}`;
                        firstclick = false;
                        document.getElementsByClassName("programme-cover")[0].firstElementChild.firstElementChild.firstElementChild.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href','#icon-stop');
                        isclick = false;
                        aud.play();
                        document.getElementById("play").firstElementChild.setAttribute('xlink:href','#icon-stop');
                    }
                    else if(isclick){
                        document.getElementsByClassName("programme-cover")[0].firstElementChild.firstElementChild.firstElementChild.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href','#icon-stop');
                        aud.pause();
                        isclick = false;
                        document.getElementById("play").firstElementChild.setAttribute('xlink:href','#icon-bofang');
                    }
                    else if(!isclick){
                        document.getElementsByClassName("programme-cover")[0].firstElementChild.firstElementChild.firstElementChild.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href','#icon-bofang');
                        aud.play();
                        isclick = true;
                        document.getElementById("play").firstElementChild.setAttribute('xlink:href','#icon-stop');
                    }
                    collectOrNoT();
                })
                $(".tableListNum").click(function(event) {
                    document.getElementsByClassName("songListNum")[0].style.color = "#9B9B9B";
                    document.getElementsByClassName("songListNum")[0].style.fonWeight ="400";
                    event.currentTarget.style.color="#4a4a4a";
                    event.currentTarget.style.fontWeight="500";
                    $(".showGedanUl").hide();
                    $.ajax({
                        url:"http://localhost:8080/MusicFM/selectEachUserCreateFavoriteServlet",
                        type: 'post',
                        data: "userId="+`${data.authorId}`,
                        async: true,
                        dataType: 'json',
                        success:(data)=>{
                            console.log(data);
                            let container = document.getElementsByClassName("section-content")[0].firstElementChild;
                            let gedanUl = document.createElement("ul");
                            gedanUl.className = "user-songlists pl-list";
                            for(let i=0;i<data.length;i++){
                                if(data[i].favoriteId == tempId){
                                    continue;
                                }
                                else{
                                    let li = document.createElement("li");
                                    li.className = "user-songlist";

                                    let coverDiv = document.createElement("div");
                                    coverDiv.className = "user-songlistCover";
                                    coverDiv.style.backgroundImage =  `url("${data[i].favoritePictureHref}")`;
                                    let contentDiv = document.createElement("div");
                                    contentDiv.className = "user-songlistContent";
                                    let routerLink = document.createElement("a");
                                    routerLink.className = "routerLink";
                                    routerLink.href = "/gedan/" + `${data[i].favoriteId}`;
                                    routerLink.appendChild(document.createTextNode(`${data[i].favoriteName}`));
                                    let dataDiv = document.createElement("p");
                                    dataDiv.appendChild(document.createTextNode(`${data[i].songList.length}首歌   ${data[i].collectCount}收藏`));
                                    li.appendChild(coverDiv);
                                    li.appendChild(contentDiv);
                                    contentDiv.appendChild(routerLink);
                                    contentDiv.appendChild(dataDiv);
                                    gedanUl.appendChild(li);
                                }

                            }
                            container.append(gedanUl);
                        }
                    })
                })
                $(".songListNum").click(function(event) {
                    document.getElementsByClassName("tableListNum")[0].style.color = "#9B9B9B";
                    document.getElementsByClassName("tableListNum")[0].style.fonWeight ="400";
                    event.currentTarget.style.color="#4a4a4a";
                    event.currentTarget.style.fontWeight="500";
                    $(".user-songlists").remove();
                    $(".showGedanUl").show();
                })
                $(".link-close").click(function (event) {
                    window.history.back(-1);
                })
            }
        },
        error: () => {
            console.log("Error in showGedan selectFavoriteServlet");
            if(document.getElementsByClassName("popup")[0])
                document.getElementsByClassName("popup")[0].remove();
            window.history.back(-1);
            alert("歌单为空，请添加歌曲。");
        }
    })
};

const routeSets = [
    {
        pathname: '/zhaohe',
        callback: zhaoheHandler,
    }, {
        pathname: '/gedanShow',
        callback: gedanHandler,
    }, {
        pathname: '/singer/:singerId',
        callback: showArtist,
    }, {
        pathname: '/search',
        callback: searchHandler,
    }, {
        pathname:'/mine',
        callback: mineHandler,
    },{
        pathname:'/gedan/:gedanId',
        callback: showGedan,
    },{
        pathname: '/MusicFM/',
        callback: homeHandler
    }
];

new SimpleRoute(routeSets, 'a[href].routerLink');