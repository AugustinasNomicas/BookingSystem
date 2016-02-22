using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Export
{
    public class ExportTableRequest
    {
        public string TableName { get; set; }
        public List<string> Headers { get; set; }
        public List<List<string>> Values { get; set; }
    }
}
