package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Favorite;
import com.musicFM.pojo.Singer;
import com.musicFM.pojo.Song;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;
import com.musicFM.service.Impl.SingerServiceImpl;
import com.musicFM.service.Impl.SongServiceImpl;
import com.musicFM.service.SingerService;
import com.musicFM.service.SongService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/selectSingerServlet")
public class SelectSingerServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();
    private SongService songService = new SongServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long singerId = Long.parseLong(request.getParameter("singerId"));

        Singer singer = singerService.getSingerById(singerId);
        singer.setFansCount(singerService.getCollectSingerUserBySingerId(singer.getSingerId()));
        int num = (int) ((Math.random() * singer.getSongList().size()));
        Song song = songService.getSongById(singer.getSongList().get(num).getSongId());
        num = (int) ((Math.random() * song.getTagList().size()));
        Long tagId = song.getTagList().get(num).getTagID();
        List<Singer> singerList = singerService.getSameSingerByTagIdAndSingerId(tagId, singerId);
        List<Object> objectList = new ArrayList<>();
        objectList.add(singer);
        objectList.add(singerList);
        String jsonString = JSON.toJSONString(objectList);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
