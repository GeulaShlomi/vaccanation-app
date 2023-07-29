package covid_system.api.java.Repository;

import java.time.LocalDate;
import java.util.List;
import covid_system.api.java.Human;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HumanRepository extends JpaRepository<Human, Long> {

    List<Human> findByDateOfBirthBetween(LocalDate DateOfBirthStart, LocalDate DateOfBirthEnd);

    List<Human> findByCity(String City);




}


