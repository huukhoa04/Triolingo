import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage cho React Native
import { jwtDecode } from 'jwt-decode'; // thư viện jwt-decode vẫn có thể dùng bình thường

class AuthService {
  // lấy dữ liệu trong token
  async getProfile() {
    try {
      const token = await this.getToken();
      if (token) {
        const decoded = jwtDecode(token);
        return decoded.data;
      }
      return null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  // kiểm tra xem người dùng đã đăng nhập chưa
  async loggedIn() {
    const token = await this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // kiểm tra xem token có hết hạn không
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  // lấy token từ AsyncStorage
  async getToken() {
    return await AsyncStorage.getItem('id_token');
  }

  // lưu token vào AsyncStorage và điều hướng người dùng
  async login(idToken) {
    await AsyncStorage.setItem('id_token', idToken);
    // điều hướng người dùng (trong React Native dùng react-navigation)
    // Thay vì dùng window.location, bạn sẽ dùng phương thức điều hướng của ứng dụng native
    // Ví dụ cho react-navigation:
    // this.props.navigation.navigate('Lessons');
  }

  // xóa token và điều hướng về trang chủ
  async logout() {
    await AsyncStorage.removeItem('id_token');
    // điều hướng về trang chủ
    // this.props.navigation.navigate('Home');
  }
}

export default new AuthService();
