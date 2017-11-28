using System.Windows.Controls;

namespace SensorsController
{
    /// <summary>
    /// Interaction logic for UserControlMain.xaml
    /// </summary>
    public partial class UserControlMain : UserControl
    {

        public UserControlMain()
        {
            InitializeComponent();

            SetDotForDecimalSeperator();

            WebSocketClient.Initialize();

            KinectController.Initialize(sensorChooserUi, kinectRegion);

            PhidgetController.Instance().InitializeBoard();

        }

        private void SetDotForDecimalSeperator()
        {
            System.Globalization.CultureInfo customCulture = (System.Globalization.CultureInfo)System.Threading.Thread.CurrentThread.CurrentCulture.Clone();
            customCulture.NumberFormat.NumberDecimalSeparator = ".";

            System.Threading.Thread.CurrentThread.CurrentCulture = customCulture;
        }

        public void Destroy()
        {

        }
    }
}
