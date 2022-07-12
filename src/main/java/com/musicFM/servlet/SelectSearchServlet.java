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

@WebServlet("/selectSearchServlet")
public class SelectSearchServlet extends HttpServlet {

    private SongService songService = new SongServiceImpl();
    private FavoriteService favoriteService = new FavoriteServiceImpl();
    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String vagueName = request.getParameter("vagueName");
//        System.out.println(vagueName);

        List<Song> songList = songService.getSongByName(vagueName);
        List<Favorite> favoriteList = favoriteService.getFavoriteByName(vagueName);
        List<Singer> singerList = singerService.getSingerByName(vagueName);
        List<Object> objectList = new ArrayList<>();
        objectList.add(songList);
        objectList.add(favoriteList);
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
