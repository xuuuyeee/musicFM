package com.musicFM.servlet;

import com.musicFM.service.Impl.UserServiceImpl;
import com.musicFM.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/modifyNickNameServlet")
public class ModifyNickNameServlet extends HttpServlet {
    private UserService userService = new UserServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));
        String nickName = request.getParameter("nickName");

        Integer integer = userService.modifyNickNameByUserIdAndNickName(userId, nickName);
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
