using System;
using System.ComponentModel.DataAnnotations;
using AutoMapperFramework;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Dto.Tours
{
    public class TourDto : IMapFrom<Tour>, IMapTo<Tour>
    {
        [Key]
        public Guid IdTour { get; set; }

        public Guid IdOrganization { get; set; }
        public Organization Organization { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string DescriptionShort { get; set; }

     
        public int Availabilities { get; set; }
    }
}
