package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Tag;
import com.musicFM.service.Impl.TagServiceImpl;
import com.musicFM.service.TagService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/selectTagSongServlet")
public class SelectTagSongServlet extends HttpServlet {

    private TagService tagService = new TagServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long tagId = Long.parseLong(request.getParameter("tagId"));

        Tag tag = tagService.getTagAndSongById(tagId);
        String jsonString = JSON.toJSONString(tag);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
