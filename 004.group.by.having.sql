select v.name as vehicle_name, count(*) as total_bookings from bookings b
join vehicles v on b.vehicle_id = v.vehicle_id group by v.name having count(*) > 2;