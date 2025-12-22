select v.name as vehicle_name, count(*) as total_bookings from bookings b
join vehicles v on b.vehicle_id = v.vehicle_id group by vehicle_name having v.total_bookings > 2