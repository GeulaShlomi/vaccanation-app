package covid_system.api.java.Services;

import covid_system.api.java.Human;
import covid_system.api.java.Repository.HumanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HumanService {
    @Autowired
    private HumanRepository repository;

    public List<Human> findAll() {
        return repository.findAll();
    }

    public void save (Human human){
        this.repository.save(human);

    }

    public List<Human> findByCity(String city){
        return repository.findByCity(city);

    }

    public List<Human>findByDateOfBirthBetween( LocalDate first, LocalDate second){
        return repository.findByDateOfBirthBetween(first,second);
    }

}
