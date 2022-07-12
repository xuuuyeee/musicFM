package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Singer;
import com.musicFM.service.Impl.SingerServiceImpl;
import com.musicFM.service.SingerService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@WebServlet("/selectMainServlet")
public class SelectMainServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Singer> singerList = singerService.selectAllSinger();
        int size = singerList.size();
        Set<Integer> integerSet = new HashSet<>();
        while (integerSet.size() < 11) {
            // 调用Math.random()方法
            int num = (int) (Math.random() * size);
            integerSet.add(num);// 将不同的数存入HashSet中
        }
        List<Singer> singers = new ArrayList<>();

        Iterator<Integer> iterator = integerSet.iterator();
        while (iterator.hasNext()) {
            singers.add(singerList.get(iterator.next()));
        }
        String jsonString = JSON.toJSONString(singers);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }

}
