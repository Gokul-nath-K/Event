package limited_edition.Golden_Glitz.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Bookings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Integer head_count;
    private String subscription;
    private String status;
    private Double cost;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Events event;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "venue_id", referencedColumnName = "id")
    private Venue venue;

}
