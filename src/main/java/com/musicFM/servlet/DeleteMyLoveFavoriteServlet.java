package com.musicFM.servlet;

import com.musicFM.service.Impl.UserServiceImpl;
import com.musicFM.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/deleteMyLoveFavoriteServlet")
public class DeleteMyLoveFavoriteServlet extends HttpServlet {

    private UserService userService = new UserServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));
        Long favoriteId = Long.parseLong(request.getParameter("favoriteId"));

        Integer integer = userService.deleteFavoriteFromUserByFavoriteIdAndUserId(favoriteId, userId);
        if (integer != 0)
            response.getWriter().write("success");
        else
            response.getWriter().write("wrong");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
