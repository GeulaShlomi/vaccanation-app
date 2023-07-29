package covid_system.api.java;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import covid_system.api.java.Services.HumanService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {


    @Autowired
    private HumanService humanService;


    @GetMapping("/Human")
    public List<Human> getAllHuman() {
        return humanService.findAll();
    }

    @Transactional
    @PostMapping("/Human")
    public int saveHuma(@RequestBody Human human) {
        System.out.println(human);
        humanService.save(human);
        return 200;
    }



}