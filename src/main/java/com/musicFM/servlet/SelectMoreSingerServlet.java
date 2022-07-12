package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Favorite;
import com.musicFM.pojo.Singer;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;
import com.musicFM.service.Impl.SingerServiceImpl;
import com.musicFM.service.SingerService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@WebServlet("/selectMoreSingerServlet")
public class SelectMoreSingerServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Set<Long> longSet = new HashSet<>();
        Set<Long> longSet1 = new HashSet<>();
        longSet.add(Long.parseLong(request.getParameter("singerId1")));
        longSet.add(Long.parseLong(request.getParameter("singerId2")));
        longSet.add(Long.parseLong(request.getParameter("singerId3")));
        longSet.add(Long.parseLong(request.getParameter("singerId4")));
        longSet.add(Long.parseLong(request.getParameter("singerId5")));
        longSet.add(Long.parseLong(request.getParameter("singerId6")));
        longSet.add(Long.parseLong(request.getParameter("singerId7")));
        longSet.add(Long.parseLong(request.getParameter("singerId8")));
        longSet.add(Long.parseLong(request.getParameter("singerId9")));
        longSet.add(Long.parseLong(request.getParameter("singerId10")));
//        Long aLong = singerService.getSingerCount();
        List<Singer> singerList = singerService.selectAllSinger();
        int size = singerList.size();
        int count = 11;
        while (longSet.size() < 20) {
            // 调用Math.random()方法
            long num =  (singerList.get((int)(Math.random() * size)).getSingerId());
            longSet.add(num);// 将不同的数存入HashSet中
            if (longSet.size() == count) {
                longSet1.add(num);
                ++count;
            }
        }

        Iterator<Long> iterator = longSet1.iterator();
        List<Singer> singerList1 = new ArrayList<>();
        while (iterator.hasNext()) {
            singerList1.add(singerService.getSingerById(iterator.next()));
        }
        String jsonString = JSON.toJSONString(singerList1);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
