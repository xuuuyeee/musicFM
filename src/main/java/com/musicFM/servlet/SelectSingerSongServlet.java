package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Singer;
import com.musicFM.pojo.Song;
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

@WebServlet("/selectSingerSongServlet")
public class SelectSingerSongServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long singerId = Long.parseLong(request.getParameter("singerId"));

        Singer singer = singerService.getSingerById(singerId);
        String jsonString = JSON.toJSONString(singer);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
