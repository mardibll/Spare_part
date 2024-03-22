import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataTroli = async newValue => {
  console.log(newValue);
  try {
    // Mendapatkan nilai yang sudah ada dari AsyncStorage
    const existingValue = await AsyncStorage.getItem('MyTroli');
    console.log(existingValue);
    // Jika nilai sudah ada, tambahkan newValue ke dalamnya
    let updatedValue = newValue;
    if (existingValue !== null) {
      console.log(existingValue);
      // Melakukan parse nilai yang sudah ada (dalam hal ini, array)
      const existingArrayValue = JSON.parse(existingValue);
      console.log(existingArrayValue, 'EX');
      // Menggabungkan nilai yang sudah ada dengan nilai baru
      updatedValue = {...existingArrayValue, newValue};
    }
    console.log(updatedValue, 'JJK');
    await AsyncStorage.setItem('MyTroli', JSON.stringify(updatedValue));

    // Menyimpan kembali nilai yang sudah diperbarui
  } catch (e) {
    // penanganan kesalahan
  }
};
