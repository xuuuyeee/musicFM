package com.musicFM.servlet;


import com.musicFM.service.Impl.SingerServiceImpl;
import com.musicFM.service.SingerService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/addLoveSingerServlet")
public class AddLoveSingerServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));
        Long singerId = Long.parseLong(request.getParameter("singerId"));

        Integer integer = singerService.insertSingerToUserBySingerIdAndUserId(singerId, userId);
        if (integer == 1)
            response.getWriter().write("success");
        else
            response.getWriter().write("wrong");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
