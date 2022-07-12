package com.musicFM.service.Impl;

import com.musicFM.mapper.UserMapper;
import com.musicFM.pojo.User;
import com.musicFM.service.UserService;
import com.musicFM.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class UserServiceImpl implements UserService {
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    @Override
    public List<User> selectAllUser() {
        //2. 获取SqlSession对象
        SqlSession sqlSession = factory.openSession();
        //3. 获取BrandMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        //4. 调用方法
        List<User> users = mapper.selectAllUser();
        //5. 释放资源
        sqlSession.close();
        return users;
    }

    @Override
    public User getUserByName(String userName) {
        SqlSession sqlSession = factory.openSession();
        User user = new User();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        user = mapper.getUserByName(userName);
        sqlSession.close();
        return user;
    }

    @Override
    public User loginUserByUserNameAndPwd(String userName, String pwd) {
        SqlSession sqlSession = factory.openSession();
        User user = new User();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        user = mapper.loginUserByUserNameAndPwd(userName, pwd);
        sqlSession.close();
        return user;
    }

    @Override
    public Integer regestUser(String userName, String pwd, String nickName) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.regestUser(userName, pwd, nickName);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteSingerFormUserBySingerIdAndUserId(Long singerId, Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.deleteSingerFormUserBySingerIdAndUserId(singerId, userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteFavoriteFromUserByFavoriteIdAndUserId(Long favoriteID, Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.deleteFavoriteFromUserByFavoriteIdAndUserId(favoriteID, userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteUserByUserID(Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.deleteUserByUserID(userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer modifyNickNameByUserIdAndNickName(Long userId, String nickName) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.modifyNickNameByUserIdAndNickName(userId, nickName);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer modifyPwdByUserIdAndAndOldPwdAndNewPwd(Long userId, String oldPwd, String newPwd) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.modifyPwdByUserIdAndAndOldPwdAndNewPwd(userId, oldPwd, newPwd);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer modifyDescriptionByUserIdAndDescription(Long userId, String description) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.modifyDescriptionByUserIdAndDescription(userId, description);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteAllSingerFromUserByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.deleteAllSingerFromUserByUserId(userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteAllFavoriteFromUserByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Integer integer = mapper.deleteAllFavoriteFromUserByUserId(userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public String getNickNameById(Long userId) {
        SqlSession sqlSession = factory.openSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        String nickName = mapper.getNickNameById(userId);
        sqlSession.close();
        return nickName;
    }
}
