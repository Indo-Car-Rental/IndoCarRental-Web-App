import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

const CalendarRange = ({ handleClick }) => {
  const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
  const styles = { width: 602 };
  return (
    <div>
      <DateRangePicker
        showOneCalendar
        disabledDate={combine(allowedMaxDays(7), beforeToday())}
        placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
        size="md"
        style={styles}
        onChange={handleClick}
      />
    </div>
  );
};

export default CalendarRange;
