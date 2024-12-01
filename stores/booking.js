// export const useBookingStore = 
export const useBookingStore = defineStore("booking",()=>{  
  const bookingInfo = ref({});

  const setBookingData = (data) => {
    bookingInfo.value = data;
  }


  return{
    bookingInfo,
    setBookingData,
  }
})